/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./View/Home";
import Login from "./View/Login";
import Membros from "./View/Membros";

import Carregando from "./Componentes/Carregando";
import Sidebar from "./Componentes/Sidebar";
import { AuthContext } from "./context";
import { onSignIn, isSignedIn, getSession, onSignOut } from "./service/auth";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [usuario, setUsuario] = useState(false);
    const authContext = useMemo(() => {
        return {
            signIn: async (login) => {
                await onSignIn(login);
                setUsuario(login);
            },
            signOut: async () => {
                await onSignOut();

                setUsuario(null);
            }
        }
    })

    useEffect(() => {
        const callBack = async () => {
            if(isSignedIn){
                const session = await getSession();
                setUsuario(session);
            }
        }
        callBack();
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [])

    if(isLoading) {
        return (<Carregando />)
    }

    return (
        <>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>
                    {usuario ?
                        <Drawer.Navigator drawerContent={props => <Sidebar {...props} usuario={usuario} />} >
                            <Drawer.Screen name="Home" component={Home} />
                            <Drawer.Screen name="Membros" component={Membros} />
                        </Drawer.Navigator>
                        :
                        <Stack.Navigator headerMode="none">
                            <Stack.Screen name="Login" component={Login} />
                        </Stack.Navigator>
                    }
                </NavigationContainer>
            </AuthContext.Provider>
        </>
    );
};

export default App;
