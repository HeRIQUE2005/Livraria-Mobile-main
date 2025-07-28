import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Data } from "../Data/DataBase";
import { useNavigation } from "@react-navigation/native";

const TopVendas = () => {
    const navigation = useNavigation()

    const handleSubmit = () => {
        navigation.navigate("DetalheProdutos")
    }
  return (
    <View>
      <FlatList
        data={Data}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 20,
        }}
        ListHeaderComponent={() => (
          <Text style={{ textAlign: "center", marginVertical: 30 }}>
            Top Vendas do Mês
          </Text>
        )}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
                onPress={handleSubmit}
            style={styles.Container}>
              <View style={styles.ContainerImage}>
                <Image source={item.imagem} />
              <View>
                <Text>{item.nome}</Text>
              </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    Container: {
        marginBottom: 30
    },
  ContainerImage: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
});

export default TopVendas;
