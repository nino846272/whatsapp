import React, { useEffect } from 'react'
import { useUsers } from '../hooks/useUsers'
import { Link } from 'react-router-dom'

export default function ChatListPage() {
  const { users, refreshUsers } = useUsers()
  
  useEffect(() => {
    refreshUsers()
  }, [])
  
  return (
    <div className="container-fluid p-0">
      {/* WhatsApp стиль заголовка */}
      <div className="bg-success text-white p-3 d-flex justify-content-between align-items-center">
        <h3 className="m-0">Чаты</h3>
        <button 
          onClick={refreshUsers} 
          className="btn btn-success" 
        >
          <i className="bi bi-arrow-clockwise"></i> Обновить
        </button>
      </div>
      
      {/* Список чатов в стиле WhatsApp */}
      <div className="list-group rounded-0">
        {users.map(user => (
          <div key={user.id} className="list-group-item border-start-0 border-end-0 py-3 px-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="position-relative me-3">
                  <img 
                    src={user.avatar} 
                    alt="avatar" 
                    className="rounded-circle" 
                    width="50" 
                    height="50"
                    style={{ objectFit: 'cover' }}
                  />
                  {user.status === "online" && (
                    <span className="position-absolute bottom-0 end-0 bg-success rounded-circle" 
                          style={{ width: '12px', height: '12px', border: '2px solid white' }}></span>
                  )}
                </div>
                <div>
                  <div className="fw-bold">{user.name}</div>
                  <div className="text-muted small">
                    {user.status === "online" ? "В сети" : "Был(а) недавно"}
                  </div>
                </div>
              </div>
              <Link to={`/chat/${user.id}`} className="btn btn-success btn-sm">
                Открыть <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Плавающая кнопка нового чата в стиле WhatsApp */}
      <div className="position-fixed bottom-0 end-0 p-4">
        <button className="btn btn-success btn-lg rounded-circle shadow" style={{ width: '60px', height: '60px' }}>
          <i className="bi bi-chat-fill"></i>
        </button>
      </div>
    </div>
  )
}