import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const TopVendas = () => {
    return (
        <View style={styles.ContainerTopVendas} >
            <Text style={styles.TopVendas}>Top Vendas do mês</Text>
            <View>

                <Image
                    style={styles.HpDoAmor}
                    source={require("../../assets/hipotesedoamor.png")}
                />
                <Text> Hipotese do Amor </Text>

            </View>

            <View>
                <Image
                    style={styles.HqAranha}
                />
            </View>
        </View>

    )
};

export default TopVendas;

const styles = StyleSheet.create({
    ContainerTopVendas: {
        justifyContent: "center"
    },
    TopVendas: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "auto",
        marginTop: 90
    },

    HpDoAmor: {
        justifyContent: "center",
        height: 100,
        
    }




})