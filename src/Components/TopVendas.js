import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const TopVendas = () => {
    return (
        <View style={styles.ContainerTopVendas}>
            <View style={styles.ImagensContainer}>
                <Text >Top Vendas da Semana</Text>
            </View>

            <View>
                <View style={styles.HpDoAmorContainer}>
                    <Image
                        style={styles.HpDoAmor}
                        source={require("../../assets/hipotesedoamor.png")}
                    />
                </View>

                <View style={styles.HqAranhaContainer}>
                    <Image
                        style={styles.HqAranha}
                        source={require("../../assets/hqhomemaranha.png")}
                    />
                </View>
                <View style={styles.AliceNoPaisDasMaravilhas}>
                    <Image
                        style={styles.AlicePDMaravilhas}
                        source={require("../../assets/alicenopaisdasmaravilhas.png")}
                    />
                </View>
                <View style={styles.NaMinhaPeleContainer}>
                    <Image
                        style={styles.NaMinhaPele}
                        source={require("../../assets/NaMinhaPele.png")}
                    />
                </View>
            </View>
        </View>
    );
};

export default TopVendas;

const styles = StyleSheet.create({
    HpDoAmorContainer: {
        marginLeft: 50,
        marginTop: 30,
    },

    ImagensContainer: {
        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50
    },

    HpDoAmor: {
        width: 100,
        height: 150,
        marginHorizontal: 30,
        marginTop: 40,
        position: "relative",
    },

    HqAranhaContainer: {
        marginLeft: 250,
        position: "absolute",
        marginTop: 70,
    },

    HqAranha: {
        width: 100,
        height: 150,
    },

    AliceNoPaisDasMaravilhas: {
        position: "relative",
        marginTop: 30,
        left: 50,
    },

    AlicePDMaravilhas: {
        width: 100,
        height: 150,
        marginHorizontal: 30,
    },

    NaMinhaPeleContainer: {
        position: "absolute",
        marginTop: 250,
        left: 220,
    },

    NaMinhaPele: {
        width: 100,
        height: 150,
        marginHorizontal: 30,
    },
});
