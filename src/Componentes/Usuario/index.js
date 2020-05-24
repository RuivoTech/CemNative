import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import Utils from "../Utils";
import { TouchableOpacity } from "react-native";
import { AuthContext } from "../../context";

const Usuario = ({data}) => {
    const { signOut } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.nome}>
                {Utils.separarTexto(data.nomeUsuario, 2)}
            </Text>
            <Text style={styles.email}>
                {data.email}
            </Text>
            <TouchableOpacity style={styles.botaoSair} onPress={() => signOut()}>
                <Text style={styles.textoSair}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: 20,
        paddingTop: 10,
        paddingLeft: 10,
        borderRadius: 20,
        minHeight: 100
    },
    nome: {
        fontSize: 22,
        fontWeight: "700",
        color: "#dcdcdc"
    },
    email: {
        fontSize: 18,
        fontWeight: '400',
        color: "#dcdcdc"
    },
    botaoSair: {
        padding: 10
    },
    textoSair: {
        color: "red",
        fontSize: 16
    }
})

export default Usuario;