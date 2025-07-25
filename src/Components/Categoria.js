import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from "react-native";


    const Categoria = ({ navigation }) => {
        const navigate = () => {
            navigation.navigate("Livros")

        }
        return (
            <ScrollView>
                <View style={styles.Container}>
                    <View>
                        <TouchableOpacity onPress={navigate}>
                            <Image
                                style={styles.LogoManga}
                                source={require("../../assets/LogoManga.png")}
                            />
                            <Text style={styles.TextManga}>Mangas</Text>
                        </TouchableOpacity>


                    </View>

                    <View>
                        <TouchableOpacity onPress={navigate} >
                            <Image
                                style={styles.LogoHq}
                                source={require("../../assets/HqImagens.png")}
                            />
                            <Text style={styles.Quadrinhos}>Hq's</Text>
                        </TouchableOpacity>


                    </View>
                    <View>
                        <TouchableOpacity onPress={navigate}>
                            <Image
                                style={styles.LogoLiteratura}
                                source={require("../../assets/LiteraturaBR.png")}

                            />
                            <Text style={styles.LiteraturaBr}>Brasil</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
            marginHorizontal: 40

        },
        LogoHq: {
            alignItems: "center",
            marginTop: 36,
            marginRight: 40
        },

        LogoLiteratura: {
            alignItems: "center",
            marginTop: 36,
            flexDirection: "row",
            marginRight: 40
        },

        TextManga: {
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 48
        },

        Quadrinhos: {
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20
        },

        LiteraturaBr: {
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 17,
        },
    })
