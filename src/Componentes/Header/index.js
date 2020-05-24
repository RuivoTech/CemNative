import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useRoute, useNavigation } from '@react-navigation/native';

const Header = () => {
    const route = useRoute();
    const navigation= useNavigation();
    return (
        <>
            <StatusBar backgroundColor="#015249" barStyle="light-content" />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.hamburger}>
                    <FontAwesomeIcon icon={ faList } size={26} />
                </TouchableOpacity>
                <Text style={styles.texto}>
                    {route.name}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 45,
        backgroundColor: "#fff"
    },
    texto: {
        fontSize: 26,
        fontWeight: "400"
    },
    hamburger: {
        position: "absolute",
        left: 0,
        padding: 10
    }
})

export default Header;