import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollarSign, faTable, faUsers, faSortDown, faHome, faSort } from "@fortawesome/free-solid-svg-icons";

import Usuario from "../Usuario";

const Sidebar = ({navigation, usuario}) => {
    const [ item, setItem ] = useState(null);

    const handleItem = (valor) => {
        if(item !== valor) {
            setItem(valor);
        }else{
            setItem(null);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Usuario data={usuario} />
            <View>
                <TouchableOpacity style ={styles.link} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.texto}>
                        <FontAwesomeIcon icon={faHome} size={18} style={styles.icon} /> Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link} onPress={() => handleItem("cadastro")}>
                    <Text style={styles.texto}>
                        <FontAwesomeIcon icon={faTable} size={18} style={styles.icon} /> Cadastro
                    </Text>
                    <FontAwesomeIcon icon={faSortDown} />
                    {item === "cadastro" ? 
                    <View style={styles.subItem}>
                        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Membros")}>
                            <Text style={styles.texto}>
                                <FontAwesomeIcon icon={faUsers} style={styles.icon} size={18} /> Membros
                            </Text>
                        </TouchableOpacity>
                    </View>
                    : null }
                </TouchableOpacity>
                <TouchableOpacity style={styles.link} onPress={() => handleItem("financeiro")}>
                    <Text style={styles.texto}>
                        <FontAwesomeIcon icon={faDollarSign} size={18} style={styles.icon} /> Financeiro
                    </Text>
                    {item === "financeiro" ? 
                    <View style={styles.subItem}>
                        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Membros")}>
                            <Text style={styles.texto}>Membros</Text>
                        </TouchableOpacity>
                    </View>
                    : null }
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#77c9d4"
    },
    texto: {
        color: "#fff",
        fontSize: 18
    },
    link: {
        paddingLeft: 25,
        width: "100%",
        minHeight: 35
    },
    icon: {
        marginRight: 20,
        color: "#fff"
    }
})

export default Sidebar;