import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);



const Message = ({ message }) => {
  const isMyMsg = () => {
    return message.user.id === 'u1';
  };

  return (
    <View style={[styles.container, 
      {
        backgroundColor: isMyMsg() ? '#DCF8C5' : 'white',
        alignSelf: isMyMsg() ? 'flex-start' : 'flex-end',
      }
    ]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    width: '80%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1,
  },

  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  }
})

export default Message