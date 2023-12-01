import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

import dmImage from '../../../assets/images/BG.png'
import Message from '../../components/Message/Message'
import messages from '../../../assets/data/messages.json'
import ChatInput from '../../components/ChatInput/ChatInput'

const DirectMessage = () => {
  const route = useRoute();
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({ title: route.params.name });
  }, [route.params.name])

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bg}>
      <ImageBackground source={dmImage} style={styles.bg}>
          <FlatList data={messages} renderItem={({ item }) => <Message message={item} />} style={styles.list} inverted/>
          <ChatInput/>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 10,
    }
})

export default DirectMessage