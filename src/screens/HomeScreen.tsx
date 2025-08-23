import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Button, RadioButton, Card, Appbar } from "react-native-paper";

const HomeScreen = () => {
  const [digitOption, setDigitOption] = useState<"3" | "4" | "6">("4");
  const [generatedNumber, setGeneratedNumber] = useState<string>("");

  const getDigits = (): number => parseInt(digitOption, 10);

  const generateNumber = () => {
    const digits = getDigits();
    const timestamp = Date.now().toString();
    const hash = Array.from(timestamp).reduce(
      (sum, char) => sum + char.charCodeAt(0),
      0
    );
    const base = parseInt(timestamp.slice(-5), 10) * hash;
    const max = Math.pow(10, digits);
    const num = Math.abs(base) % max;
    const result = num.toString().padStart(digits, "0");

    setGeneratedNumber(result);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Image
          source={require("../../assets/favicon.png")}
          style={styles.icon}
        />
        <Appbar.Content title="Lucky Numbers" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Choose Digit Length</Text>
          <RadioButton.Group
            onValueChange={(value) => setDigitOption(value as "3" | "4" | "6")}
            value={digitOption}
          >
            <RadioButton.Item label="3" value="3" />
            <RadioButton.Item label="3 + 1" value="4" />
            <RadioButton.Item label="3 + 3" value="6" />
          </RadioButton.Group>

          <Button
            mode="contained"
            onPress={generateNumber}
            style={styles.button}
          >
            I'm Feeling Lucky
          </Button>
        </Card.Content>
      </Card>
      {generatedNumber !== "" && (
        <Card style={styles.card}>
          <Card.Content style={styles.resultContainer}>
            <Text style={styles.result}>{generatedNumber}</Text>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 32,
    height: 32,
    marginHorizontal: 12,
    resizeMode: "contain",
  },
  card: {
    margin: 16,
    padding: 8,
  },
  button: {
    marginTop: 16,
  },
  resultContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    fontWeight: "bold",
    fontSize: 32,
  },
});
