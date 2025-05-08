import React from 'react'
import { useParams } from 'react-router-dom'
import { useMessages } from '../hooks/useMessages'
import { formatTime } from '../utils/formatTime'

export default function ChatPage() {
  const { userId } = useParams()
  const currentUserId = '1' // Пример текущего пользователя
  const { messages, text, setText, sendMessage } = useMessages(currentUserId, userId)

  return (
    <div className="container mt-3">
      <h4>Чат с пользователем ID {userId}</h4>
      <div className="border rounded p-3 mb-3" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        {messages.map(msg => (
          <div key={msg.id} className={`mb-2 ${msg.senderId === currentUserId ? 'text-end' : 'text-start'}`}>
            <div className={`d-inline-block p-2 rounded ${msg.senderId === currentUserId ? 'bg-success text-white' : 'bg-light'}`}>
              <div>{msg.text}</div>
              <small className="d-block">{formatTime(msg.timestamp)}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <button className="btn btn-primary" onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  )
}
