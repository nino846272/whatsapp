import React from 'react'
import { useUsers } from '../hooks/useUsers'
import { Link } from 'react-router-dom'

export default function ChatList() {
  const { users, loading } = useUsers()

  if (loading) return <p>Загрузка...</p>

  return (
    <div className="list-group">
      {users.map(user => (
        <Link
          to={`/chat/${user.id}`}
          className="list-group-item list-group-item-action d-flex align-items-center"
          key={user.id}
        >
          <img src={user.avatar} alt="avatar" className="rounded-circle me-3" width="40" height="40" />
          <div>
            <strong>{user.name}</strong>
            <div className="text-muted" style={{ fontSize: '0.8em' }}>{user.status}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
