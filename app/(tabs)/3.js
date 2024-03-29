import { StyleSheet, Text, View } from "react-native";
import { Tabs } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Tabs.Screen options={{ title: 'Just Tab Three'}} />
      <View style={styles.main}>
        <Text style={styles.title}>Tab 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
