import AsyncStorage from '@react-native-community/async-storage';

export const TOKEN_KEY = "@RocketSeat:token";

export const onSignIn = (usuario) => AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(usuario));

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return (token !== null) ? true : false;
};

export const getSession = async () => {
    const session = await AsyncStorage.getItem(TOKEN_KEY);

    return JSON.parse(session);
}