import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import Categoria from "../../Components/Categoria";
import TopVendas from "../../Components/TopVendas";

const Dashboard = () => {
  return (
    <ScrollView>
      <Header />
      <Categoria />
      <TopVendas />
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
