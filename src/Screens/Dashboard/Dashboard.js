import { ScrollView, View } from "react-native";
import Header from "../../Components/Header";
import Categoria from "../../Components/Categoria";
import TopVendas from "../../Components/TopVendas";
import TopLeituraDoMes from "../../Components/TopLeituraDoMes";
import EscolhaManga from "../../Components/EscolhaManga";

const Dashboard = () => {
  return (
    <View>
      <Header />
      <Categoria />
      <TopVendas />
      {/* <TopLeituraDoMes/> */}
      {/* <EscolhaManga/> */}
    </View>
  );
};
  
export default Dashboard;

