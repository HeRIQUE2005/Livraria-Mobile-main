import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const TopVendas = () => {
    return (
        <View style={styles.ContainerTopVendas} >
            <View>

                <Image
                    style={styles.HpDoAmor}
                    source={require("../../assets/hipotesedoamor.png")}
                />
                <Text style={styles.TextoHpDoAmor}> Hipotese do Amor </Text>

            </View>

            <View>
                <Image
                    style={styles.HqAranha}
                    source={require("../../assets/hqhomemaranha.png")}
                />
                <Text style={styles.TextHqAranha} >Hq Homem Aranha</Text>
            </View>
        </View>

    )
};

export default TopVendas;

const styles = StyleSheet.create({
    ContainerTopVendas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 30,
        padding: 10
    },



    HpDoAmor: {
        width: 100,
        height: 150,
        marginHorizontal: 30,
        borderRadius: 0,
        resizeMode: 'cover',
        marginTop: 40
    },

    TextoHpDoAmor: {
        marginHorizontal: 20
    },

    HqAranha: {
        width: 100,
        height: 150,
        marginHorizontal: 20,
        borderRadius: 0,
        resizeMode: 'cover',
        marginTop: 40
    },

    TextHqAranha:{
        marginHorizontal: 20
    },




})