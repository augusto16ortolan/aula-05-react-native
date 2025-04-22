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
} from "react-native";

const produtos = [
  { id: 1, name: "Notebook" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Teclado" },
  { id: 4, name: "Monitor" },
  { id: 5, name: "Gabinete" },
  { id: 6, name: "Fonte" },
  { id: 7, name: "Mouse Pad" },
  { id: 8, name: "Cadeira" },
  { id: 9, name: "Cadeira Gamer" },
  { id: 10, name: "Caixa de Som" },
  { id: 11, name: "Headset" },
  { id: 12, name: "Mouse" },
  { id: 13, name: "Monitor" },
  { id: 14, name: "Gabinete" },
  { id: 15, name: "Fonte" },
  { id: 16, name: "Mouse Pad" },
  { id: 17, name: "Cadeira" },
  { id: 18, name: "Cadeira Gamer" },
  { id: 19, name: "Caixa de Som" },
  { id: 20, name: "Headset" },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Pressable
        style={styles.button}
        onLongPress={() => Alert.alert("Clicou")}
      >
        <Text style={{ color: "white" }}>Clique aqui</Text>
      </Pressable>

      <Image
        width={100}
        height={100}
        source={{
          uri: "https://s2-ge.glbimg.com/wJqPMrT1_Mnz_f6K8eWZDMBb-9E=/0x0:959x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/4/o/y0jwP9RRmMawbvmItgBA/fgnpaitx0aeuft2.jpg",
        }}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {produtos.map((produto) => {
          return (
            <View key={produto.id} style={styles.cardProduto}>
              <Text>{produto.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <FlatList
        keyExtractor={(item) => item.id}
        data={produtos}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardProduto}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        onEndReached={() => {
          console.log("Chegou ao fim");
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardProduto: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
    gap: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
  },
});
