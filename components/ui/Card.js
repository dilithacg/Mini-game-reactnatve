import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.Card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  Card: {
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary2,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
