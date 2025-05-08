import React from 'react'
import { useParams } from 'react-router-dom'
import { useMessages } from '../hooks/useMessages'

export default function ChatWindow() {
  const { userId } = useParams()
  const currentUserId = 1 // Здесь нужно подставить текущего пользователя, например, из состояния
  const { messages, text, setText, sendMessage } = useMessages(currentUserId, userId)

  return (
    <div className="container">
      <h3>Чат с пользователем {userId}</h3>

      {/* Список сообщений */}
      <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        {messages.map(msg => (
          <div key={msg.id} className={msg.senderId === currentUserId ? 'text-end' : ''}>
            <div className={`bubble ${msg.senderId === currentUserId ? 'my-message' : 'their-message'}`}>
              <p>{msg.text}</p>
              <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Поле ввода */}
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Напишите сообщение..."
        />
        <button className="btn btn-primary" onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  )
}
