import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View>
            <View>
                <Image source={require("../../assets/menu-hamburguer.png")} />
            </View>
            <View>
                <TouchableOpacity style={styles.PesquisarContainer}>
                    <Text style={styles.Pesquisar}>Pesquise Aqui</Text>
                    <Image source={require("../../assets/lupa.png")} />
                </TouchableOpacity>
            </View>
            <View>
                <Image source={require("../../assets/carrinho-de-compras.png")} />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});
