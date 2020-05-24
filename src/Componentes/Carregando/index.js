import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Carregando = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Carregando...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        fontSize: 36,
        fontWeight: "400",
        color: "#000"
    }
})

export default Carregando;