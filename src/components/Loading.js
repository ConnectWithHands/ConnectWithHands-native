import { View, ActivityIndicator, StyleSheet } from "react-native";

export function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#009b88" size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
