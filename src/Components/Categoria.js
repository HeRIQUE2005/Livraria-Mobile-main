import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

const Categoria = () => {
    return (
        <View style={styles.Container}>
            <View>

                <TouchableOpacity onPress={Categoria}>
                    <Image
                        style={styles.LogoManga}
                        source={require("../../assets/LogoManga.png")}
                    />
                </TouchableOpacity>


            </View>

            <View>
            <TouchableOpacity>
                <Image
                    style={styles.LogoHq}
                    source={require("../../assets/HqImagens.png")}
                />
            </TouchableOpacity>


            </View>
        </View>
    )
};

export default Categoria;

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    LogoManga: {
        alignItems: "center",
        marginTop: 41,
        marginHorizontal: 31

    },
    LogoHq: {
        lignItems: "center",
        marginTop: 36,
        marginRight: 159
    }



})
