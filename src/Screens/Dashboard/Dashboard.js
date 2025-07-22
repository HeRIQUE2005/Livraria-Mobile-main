import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import Categoria from "../../Components/Categoria";
import TopVendas from "../../Components/TopVendas";
import TopLeituraDoMes from "../../Components/TopLeituraDoMes";

const Dashboard = () => {
  return (
    <ScrollView>
      <Header />
      <Categoria />
      <TopVendas />
      <TopLeituraDoMes/>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
