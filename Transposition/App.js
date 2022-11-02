import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [note, setNote] = useState("");
  const [interval, setInterval] = useState();
  const [resultNote, setResultNote] = useState("");
  const table = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  const handleButton = () => {

    let note_index = parseInt(interval);
    
    if (!table.includes(note.toUpperCase()) || isNaN(note_index)) 
      setResultNote("Could not find!");
    else 
    {
      while (note_index < 0) 
        note_index += 12;
      while (note_index >= 12) 
        note_index -= 12;

      for (let i = 0; i < 12; i++)
        if (table[i] === note.toUpperCase())
          note_index = note_index + i;

      if (note_index >= 12) 
        note_index -= 12;

      setResultNote(table[note_index]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataInput}>
        <Text style={styles.text}>
          Enter base note (use # for sharps, eg. A#):{" "}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="A#"
          clearButtonMode="while-editing"
          onChangeText={(newNote) => setNote(newNote)}
        />
      </View>

      <View style={styles.dataInput}>
        <Text style={styles.text}>Enter interval in semitones: </Text>
        <TextInput
          style={[styles.textInput, styles.intervalInsert]}
          placeholder="12"
          clearButtonMode="while-editing"
          onChangeText={(newInterval) => setInterval(newInterval)}
        />
      </View>

      <View style={styles.btnCalculate}>
        <Button title="Calculate" color="#ffffff" onPress={handleButton} />
      </View>

      <View style={styles.noteOutput}>
        <Text style={styles.text}>Transposed note is: {resultNote}</Text>
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
    marginBottom: 550,
    padding: 20,
    borderRadius: 50,
  },
  dataInput: {
    flexDirection: "row",
    marginTop: 10,
  },
  intervalInsert: {
    marginLeft: 100,
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
    width: "18%",
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
