import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";


const Login = ({navigation}) => {
  const navegacao =()=>{
    navigation.navigate("CriarConta")
  }
  return (
    <View style={styles.container}>
      <View style={styles.imagem}>
        <Image
          style={styles.posicao}
          source={require("../../../assets/Logo.png")}
        />
      </View>
      <View style={styles.criarContaContainer}>
        <Text style={styles.criarConta}>Faça o Login</Text>
      </View>
      <View style={styles.LoginUsuarioContainer}>
        <TextInput style={styles.TextInput} placeholder="email" />
        <TextInput style={styles.TextInput} placeholder="senha" />
      </View>
      <TouchableOpacity style={styles.SenhaContainer}>
        <Text>Esqueceu a Senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.CriarContainer}>
        <Text style={styles.Criar}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.PageContaContainer}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={navegacao}>
          <Text>Clique Aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagem: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  criarContaContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  posicao: {
    width: 150,
  },

  criarConta: {
    fontSize: 20,
  },

  LoginUsuarioContainer: {
    alignItems: "center",
    marginTop: 20,
    gap: 15,
  },

  TextInput: {
    borderWidth: 1,
    borderRadius: 8,
    width: 200,
    textAlign: "center",
  },

  CriarContainer: {
    alignItems: "center",
    marginTop: 66,
    borderRadius: 8,
    marginHorizontal: 130,
    paddingVertical: 5,
    backgroundColor: "#C4BBBB",
  },
  Criar: {
    fontSize: 20,
  },

  SenhaContainer: {
    alignItems: "flex-end",
    marginRight: 57,
    marginTop: 14,
  },

  PageContaContainer: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: "row",
  },
});
