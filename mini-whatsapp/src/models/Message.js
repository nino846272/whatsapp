export default class Message {
    constructor(id, senderId, receiverId, text, timestamp) {
      this.id = id
      this.senderId = senderId
      this.receiverId = receiverId
      this.text = text
      this.timestamp = timestamp
    }
  }
  