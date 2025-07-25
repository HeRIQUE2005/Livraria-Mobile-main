import { ScrollView } from "react-native";
import Header from "../../Components/Header";
import Categoria from "../../Components/Categoria";
import TopVendas from "../../Components/TopVendas";
import TopLeituraDoMes from "../../Components/TopLeituraDoMes";
import EscolhaManga from "../../Components/EscolhaManga";

const Dashboard = () => {
  return (
    <ScrollView>
      <Header />
      <Categoria />
      <TopVendas />
      <TopLeituraDoMes/>
      <EscolhaManga/>
    </ScrollView>
  );
};
  
export default Dashboard;

