import React from "react";
import { View, Text } from "react-native";
import Card from "../../Component/Card";

export default function App() {
  return (
    <View>
      <Card
        title="React Native"
        subHeader="Mobile Development"
        color="#ffffff"
        width={350}
        orientation="vertical"
        inset={true}
        onPress={() => console.log("Card pressed")}
      >
        <Text>Learn how to build mobile applications.</Text>
        <Text>Press the card to learn more.</Text>
      </Card>
    </View>
  );
}