import { useEffect, useState } from 'react';
import { fetchMessages, sendMessageToApi } from '../services/messageService';

export function useMessages(senderId, receiverId) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchMessages()
      .then(data => {
        const chat = data.filter(
          m =>
            (m.senderId === senderId && m.receiverId === receiverId) ||
            (m.senderId === receiverId && m.receiverId === senderId)
        );
        setMessages(chat);
      })
      .catch(console.error);
  }, [senderId, receiverId]);

  const sendMessage = async () => {
    const newMessage = {
      senderId,
      receiverId,
      text,
      timestamp: new Date().toISOString()
    };
    const saved = await sendMessageToApi(newMessage);
    setMessages([...messages, saved]);
    setText('');
  };

  return { messages, text, setText, sendMessage };
}
