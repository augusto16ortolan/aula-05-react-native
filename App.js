import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Alert,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { useState, useEffect, useLayoutEffect } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");
  let contador2 = 0;

  function somar() {
    setContador(contador + 1);
  }

  useLayoutEffect(() => {
    console.log("Renderizou useLayoutEffect");
  }, []);

  useEffect(() => {
    console.log("Renderizou useEffect");
  }, []);

  // useEffect(() => {
  //   console.log("Renderizou contador");
  // }, [contador]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Button title={"Somar"} onPress={() => somar()} />
      <Text style={{ fontSize: 50 }}>{contador}</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite algo"
      />
      <Text style={{ fontSize: 50 }}>{nome}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
