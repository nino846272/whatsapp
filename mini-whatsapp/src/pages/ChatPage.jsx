import React, { useEffect } from 'react'
import { useUsers } from '../hooks/useUsers'
import { Link } from 'react-router-dom'

export default function ChatListPage() {
  const { users, refreshUsers } = useUsers()

  useEffect(() => {
    refreshUsers()
  }, [])

  return (
    <div className="container mt-4">
      <h3>Список чатов</h3>
      <button onClick={refreshUsers} className="btn btn-sm btn-outline-primary mb-3">Обновить пользователей</button>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img src={user.avatar} alt="avatar" width={40} height={40} className="rounded-circle me-2" />
              {user.name} ({user.status})
            </div>
            <Link to={`/chat/${user.id}`} className="btn btn-sm btn-success">Открыть</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
