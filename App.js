import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function App() {
  const [strength, setStrength] = useState("");
  const [style, setStyle] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Clarens Artisan Perfume</Text>

      <Text style={styles.section}>Choose Strength</Text>
      <View style={styles.row}>
        {["Soft", "Medium", "Strong", "Very Strong"].map(item => (
          <TouchableOpacity
            key={item}
            style={[
              styles.option,
              strength === item && styles.active
            ]}
            onPress={() => setStrength(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.section}>Choose Style</Text>
      <View style={styles.row}>
        {["Fresh", "Woody", "Sweet", "Creamy", "Amber"].map(item => (
          <TouchableOpacity
            key={item}
            style={[
              styles.option,
              style === item && styles.active
            ]}
            onPress={() => setStyle(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {strength && style && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            Recommended Profile:
          </Text>
          <Text>
            {style} • {strength}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  section: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    margin: 5
  },
  active: {
    backgroundColor: "#ddd"
  },
  result: {
    marginTop: 30,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8
  },
  resultText: {
    fontWeight: "bold",
    marginBottom: 5
  }
});
