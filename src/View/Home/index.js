import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import styles from "../../styles";
import Header from "../../Componentes/Header";
import api from "../../service/api";
import ItemLista from "../../Componentes/ItemLista";

const Home = () => {
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
                    data={item}
                />
                )} />
        </View>
        </>
    )
}

export default Home;