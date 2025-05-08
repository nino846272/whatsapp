export default function MessageBubble({ message, isOwn }) {
    return (
      <div className={`d-flex mb-2 ${isOwn ? 'justify-content-end' : 'justify-content-start'}`}>
        <div
          className={`p-2 rounded ${isOwn ? 'bg-primary text-white' : 'bg-light'}`}
          style={{ maxWidth: '70%' }}
        >
          <div>{message.text}</div>
          <small className="d-block text-end text-muted" style={{ fontSize: '0.75rem' }}>
            {new Date(message.timestamp).toLocaleTimeString()}
          </small>
        </div>
      </div>
    )
  }
  