import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem/ChatListItem';
import ChatsView from './src/views/ChatsView/Chats';


export default function App() {
  return (
    <View style={styles.container}>
      <ChatsView/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});
