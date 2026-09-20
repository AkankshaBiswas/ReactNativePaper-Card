import { View } from "react-native";
import Card from "../../Component/Card";

export default function App() {
  return (
    <View>
      <Card
        title="React Native"
        subtitle="this is card component"
        content="you're using a card"
        imageUri={require("@/assets/images/PurpleBanner.jpg")}


        
      >
      
      </Card>

      <Card
      title="card 2"
      subtitle="akanksha's second card component!"
      content="The card component is a sheet of material 
      that serves as an entry point to more detailed information
       - it groups all the related information in a single place"
       imageUri={require("@/assets/images/BlueBanner.jpg")}
      >
        

      </Card>
    </View>
  );
}