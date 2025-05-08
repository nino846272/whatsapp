import { Link } from 'react-router-dom'

export default function UserCard({ user }) {
  return (
    <Link
      to={`/chat/${user.id}`}
      className="list-group-item list-group-item-action d-flex align-items-center"
    >
      <img
        src={user.avatar}
        alt={user.name}
        className="rounded-circle me-3"
        width="50"
        height="50"
      />
      <div>
        <div className="fw-bold">{user.name}</div>
        <small className={user.status === 'Онлайн' ? 'text-success' : 'text-muted'}>
          {user.status}
        </small>
      </div>
    </Link>
  )
}
