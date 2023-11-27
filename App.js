import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem/ChatListItem';
import ChatsView from './src/views/ChatsView/Chats';
import DirectMessage from './src/views/ChatsView/DirectMessage';


export default function App() {
  return (
    <View style={styles.container}>
      <DirectMessage/>
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
