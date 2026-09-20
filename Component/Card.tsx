import { ImageSourcePropType } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
type cardProp={
    title:string,
    subtitle:string,
    content:string,
    imageUri:ImageSourcePropType,

}
const MyComponent = ({title,subtitle,content,imageUri}:cardProp) => (
  <Card>
    <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
    <Card.Content>
        
      <Text variant="bodyMedium">{content}</Text>
    </Card.Content>
    <Card.Cover source={imageUri} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> 
  </Card>
);

export default MyComponent;