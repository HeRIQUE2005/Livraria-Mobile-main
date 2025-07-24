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
                <View style={styles.calicedefogoContainer}>
                    <Image
                        style={styles.calicedefogo}
                        source={require("../../assets/calice-de-fogo.png")}
                    />
                </View>
                <View style={styles.PequenoPrincipeContainer}>
                    <Image
                        style={styles.PequenoPrincipe}
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

    Sololeving: {
        width: 100,
        height: 150,
        marginHorizontal: 30,
        marginTop: 40,
        position: "relative",
    },

    BibliaContainer: {
        marginLeft: 250,
        position: "absolute",
        marginTop: 70,
    },

    Biblia: {
        width: 100,
        height: 150,
    },

    calicedefogoContainer: {
        position: "relative",
        marginTop: 30,
        left: 50,
    },

    calicedefogo: {
        width: 100,
        height: 150,
        marginHorizontal: 30,
    },

    PequenoPrincipeContainer: {
        position: "absolute",
        marginTop: 250,
        left: 220,
    },

    PequenoPrincipe: {
        width: 100,
        height: 150,
        marginHorizontal: 30,
    },
});
