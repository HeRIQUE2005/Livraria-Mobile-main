import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from "react-native";

const TopLeituraDoMes = () => {
    return (
        <ScrollView style={styles.ContainerTopVendas}>
            <View style={styles.ImagensContainer}>
                <Text>Top leitura da semana</Text>
            </View>
            <View>
                <View style={styles.SoloLevingContainer}>
                    <Image
                        style={styles.Sololeving}
                        source={require("../../assets/SoloLeving.png")}
                    />
                </View>

                <View style={styles.BibliaContainer}>
                    <Image
                        style={styles.Biblia}
                        source={require("../../assets/biblia.png")}
                    />
                </View>
                <View style={styles.AliceNoPaisDasMaravilhas}>
                    <Image
                        style={styles.AlicePDMaravilhas}
                        source={require("../../assets/calice-de-fogo.png")}
                    />
                </View>
                <View style={styles.NaMinhaPeleContainer}>
                    <Image
                        style={styles.NaMinhaPele}
                        source={require("../../assets/PequenoPrincipe.png")}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default TopLeituraDoMes;

const styles = StyleSheet.create({
    SoloLevingContainer: {
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
