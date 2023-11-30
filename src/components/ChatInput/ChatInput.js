import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const ChatInput = () => {
    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn("Message was sent", newMessage);
        setNewMessage('');
    }

  return (
    <View style={styles.container}>
        <AntDesign name="plus" size={24} color="royalblue"/>
        <TextInput onChangeText={setNewMessage} value={newMessage} style={styles.input} placeholder='Message...'/>
        <MaterialIcons onPress={onSend} style={styles.send} name='send' size={24} color="white"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        backgroundColor: 'lightgray',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center',

    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 50,
        paddingHorizontal: 10,
        padding: 5,
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
        fontSize: 16,

    },
    send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden',
    },
})

export default ChatInput