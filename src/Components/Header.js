import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React from "react";

const Header = () => {
    return (
        <View>
            <View>
                <Image source={require("../../assets/menu-hamburguer.png")} />
            </View>
            <View>
                <TextInput
                    style={styles.PesquisarContainer}
                    placeholder="Pesquise Aqui"
                />
                <Image
                    style={styles.Pesquisar}
                    source={require("../../assets/lupa.png")}
                />
            </View>
            <View>
                <Image source={require("../../assets/carrinho-de-compras.png")} />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    PesquisarContainer:{
        
    }
});
