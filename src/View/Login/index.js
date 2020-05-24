import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { AuthContext } from "../../context";
import styles from "../../styles";
import { TextInput } from "react-native-gesture-handler";
import api from "../../service/api";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [ usuario, setUsuario ] = useState(null);

    const handleChange = (target, value) => {
        setUsuario({
            ...usuario,
            [target]: value
        });
    }

    const handleLogin = async () => {
        const retorno = await api.post("/usuario/login", {email: usuario.email, senha: usuario.senha});

        console.log(retorno);
        signIn({
            nomeUsuario: "Richieri Negri Schmeiske Ruivo",
            email: "ruivotech@hotmail.com"
        })

    }

    return (
        <View style={[styles.container, customStyle.container]}>
            <Text style={[styles.texto, customStyle.texto]}>Login</Text>
            <TextInput placeholder="E-mail" style={customStyle.input} onChangeText={texto => handleChange("email", texto)}
            keyboardType="email-address" autoCapitalize="none" />
            <TextInput placeholder="Senha" style={customStyle.input} onChangeText={texto => handleChange("senha", texto)}
            secureTextEntry={true} autoCapitalize="none" />
            <TouchableOpacity style={customStyle.botao} onPress={() => handleLogin()}>
                <Text style={customStyle.textoBotao}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const customStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#015249",
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        color: "#fff",
        fontSize: 36,
        fontWeight: '400'
    },
    input: {
        width: 300,
        backgroundColor: "#DCDCDC",
        margin: 10,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color: "#000"
    },
    botao: {
        width: 300,
        height: 42,
        borderRadius: 10,
        backgroundColor: "#007bff",
        justifyContent: "center", 
        alignItems: "center",
        margin: 10
    },
    textoBotao: {
        fontSize: 18,
        fontWeight: "400",
        color: "#fff"
    }
})

export default Login;