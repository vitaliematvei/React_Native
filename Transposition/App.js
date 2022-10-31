import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredNoteText, setEnteredNoteText] = useState("");

  

  return (
    <View style={styles.container}>
      <View style={styles.noteInput}>
        <Text style={styles.text}>
          Enter base note (use # for sharps, eg. A#):{" "}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="A#"
          //onChangeText={newText => setEnteredNoteText(newText)}
        />
      </View>
      <View style={styles.btnCalculate}>
        <Button title="Calculate" color="#ffffff" />
        {/* <Button title="Add Goal" onPress={addGoalHandler} /> */}
      </View>

      <View style={styles.noteOutput}>
        <Text style={styles.text}>Transposed note is:</Text>
        {/* <Text style={styles.textInput} placeholder="---" {enteredNoteText.split(' ')} /> */}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    marginTop: 75,
    padding: 20,
  },
  noteInput: {
    flexDirection: "row",
  },
  noteOutput: {
    marginTop: 25,
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    padding: 8,
  },
  textInput: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "15%",
    marginRight: 8,
    padding: 8,
    borderRadius: 5,
  },
  btnCalculate: {
    marginTop: 25,
    width: "50%",
    backgroundColor: "#4630EB",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 15,
  },
});
