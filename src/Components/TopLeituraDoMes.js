import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Vendas } from "../Data/DataBaseTopLeitura";

const TopLeituraDoMes = () => {
  const navigation = useNavigation();
  console.log(Vendas);

  const handleSubmit = () => {
    navigation.navigate("DetalheTopLeitura");
  };
  return (
    <View>
      <View>
        <Text style={{ textAlign: "center", marginVertical: 30 }}>
          Top Vendas do Mês
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, justifyContent: 'center', gap: 10 }}>
          {Vendas.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={handleSubmit}
              style={styles.Container}
            >
              <View style={styles.ContainerImage}>
                <Image source={item.imagem} />
                <View>
                  <Text>{item.nome}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* <FlatList
          
          data={Vendas}
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
          /> */}
    </View>
  );
};

export default TopLeituraDoMes;

const styles = StyleSheet.create({
  Container: {
    marginBottom: 30,
  },
  ContainerImage: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
