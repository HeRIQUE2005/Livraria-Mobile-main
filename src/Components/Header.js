import { StyleSheet, View, Image, TextInput, ScrollView } from "react-native";

const Header = () => {
    return (
        <ScrollView>
        <View style={styles.PaginaContainer}>
            <View>
                <Image
                    style={styles.MenuContainer}
                    source={require("../../assets/menu-hamburguer.png")}
                />
            </View>
            <View style={styles.BotaoContainer}>
                <Image
                    style={styles.Pesquisar}
                    source={require("../../assets/lupa.png")}
                />
                <TextInput
                    style={styles.PesquisarContainer}
                    placeholder="Digite aqui"
                />
            </View>
            <View>
                <Image source={require("../../assets/carrinho-de-compras.png")} />
            </View>
        </View>
        </ScrollView>
    );
};

export default Header;

const styles = StyleSheet.create({
    PaginaContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 10,
    },

    MenuContainer: {
        alignItems: "center",
        marginTop: 1,
    },

    BotaoContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#C4BBBB',
        gap: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },

    PesquisarContainer: {
        width: 150
    },

});
