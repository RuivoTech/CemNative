import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const ItemLista = ({ data }) => {
    const [ mostrar, setMostrar ] = useState(false);
    const navigation = useNavigation();

    const abrirItem = () => {
        setMostrar(!mostrar);
    }
    
    return (
        <>
            <View style={styles.container} key={data.id}>
                <Text style={styles.texto}>
                    {data.nome}
                </Text>
                <TouchableOpacity style={styles.iconBotao} onPress={() => abrirItem()}>
                    <FontAwesomeIcon icon={mostrar ? faSortUp: faSortDown} style={styles.icon} size={22} />
                </TouchableOpacity>
                {mostrar ? 
                    <View style={styles.dadosItem}>
                        <Text style={styles.texto}>
                            {data.contato.email}
                        </Text>
                    </View>
                :
                null }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5,
        margin: 5,
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    texto: {
        color: "#fff"
    },
    iconBotao: {
        position: "absolute",
        right: 0,
        justifyContent: "center",
        height: 40,
        justifyContent: "center"
    },
    icon: {
        color: "#fff"
    },
    dadosItem: {
        borderTopColor: "#fff",
        borderTopWidth: 1,
        marginTop: 10
    }
})

export default ItemLista;