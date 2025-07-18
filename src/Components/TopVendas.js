import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const TopVendas = () => {
    return (
        <View style={styles.ContainerTopVendas} >
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
        </View>

    )
};

export default TopVendas;

const styles = StyleSheet.create({

HpDoAmorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
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

    HqAranhaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },







})