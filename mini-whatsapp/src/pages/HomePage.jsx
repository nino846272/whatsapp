import React, { useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useMessages } from '../hooks/useMessages'
import { formatTime } from '../utils/formatTime'

export default function ChatPage() {
  const { userId } = useParams()
  const currentUserId = '1' // Пример текущего пользователя
  const { messages, text, setText, sendMessage } = useMessages(currentUserId, userId)
  const messagesEndRef = useRef(null)

  // Прокрутка к последнему сообщению при обновлении списка сообщений
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Обработка отправки сообщения при нажатии Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="container-fluid d-flex flex-column p-0" style={{ height: '100vh' }}>
      {/* Заголовок в стиле WhatsApp */}
      <div className="bg-success text-white p-2 d-flex align-items-center">
        <Link to="/" className="text-white me-3 text-decoration-none">
          <i className="bi bi-arrow-left fs-5"></i>
        </Link>
        <div className="d-flex align-items-center">
          <div className="position-relative me-2">
            <img 
              src={`https://i.pravatar.cc/150?u=${userId}`} 
              alt="avatar" 
              className="rounded-circle" 
              width="40" 
              height="40"
            />
            <span className="position-absolute bottom-0 end-0 bg-success rounded-circle" 
                  style={{ width: '10px', height: '10px', border: '2px solid white' }}></span>
          </div>
          <div>
            <div className="fw-bold">Пользователь ID {userId}</div>
            <div className="small">в сети</div>
          </div>
        </div>
      </div>

      {/* Область сообщений */}
      <div className="flex-grow-1 p-2 overflow-auto" 
           style={{ 
             backgroundColor: '#e5ddd5', 
             backgroundImage: 'url("https://i.pinimg.com/originals/97/c0/07/97c00759d90d786d9b6096d274ad3e07.png")',
             backgroundSize: '200px'
           }}>
        {messages.map(msg => (
          <div key={msg.id} className={`d-flex mb-2 ${msg.senderId === currentUserId ? 'justify-content-end' : 'justify-content-start'}`}>
            <div className={`p-2 rounded-3 shadow-sm ${msg.senderId === currentUserId ? 'bg-success bg-opacity-75 text-white' : 'bg-white'}`}
                 style={{ maxWidth: '75%' }}>
              <div>{msg.text}</div>
              <div className="d-flex justify-content-end">
                <small className="text-white-50">{formatTime(msg.timestamp)}</small>
                {msg.senderId === currentUserId && (
                  <small className="ms-1 text-white-50">
                    <i className="bi bi-check2-all"></i>
                  </small>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Поле ввода в стиле WhatsApp */}
      <div className="bg-light p-2 d-flex align-items-center">
        <button className="btn btn-light rounded-circle me-2">
          <i className="bi bi-emoji-smile"></i>
        </button>
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-pill"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Введите сообщение..."
          />
        </div>
        <button 
          className="btn btn-success rounded-circle ms-2" 
          onClick={sendMessage}
          disabled={!text.trim()}
        >
          {text.trim() ? <i className="bi bi-send-fill"></i> : <i className="bi bi-mic-fill"></i>}
        </button>
      </div>
    </div>
  )
}