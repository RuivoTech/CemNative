import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import styles from "../../styles";
import Header from "../../Componentes/Header";
import api from "../../service/api";
import ItemLista from "../../Componentes/ItemLista";

const Membros = () => {
    const [ membros, setMembros ] = useState([]);

    useEffect(() => {
        const chamarApi = async () => {
            const retorno = await api.get("/membro/listar");

            setMembros(retorno);
        }

        chamarApi();
    }, [])

    return (
        <>
        <Header />
        <View style={styles.container}>
            <FlatList data={membros} 
            renderItem={({ item }) => (
                <ItemLista
                    id={item.id}
                    titulo={item.nome}
                />
                )} />
        </View>
        </>
    )
}

export default Membros;