import axios from 'axios'

// Заменить на свой URL MockAPI
const API_URL = 'https://your-mockapi-url.com'

// Функция для получения списка пользователей
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`)
    return response.data
  } catch (error) {
    console.error('Ошибка при загрузке пользователей:', error)
    throw error
  }
}

// Функция для получения сообщений между пользователями
export const fetchMessages = async (senderId, receiverId) => {
  try {
    const response = await axios.get(`${API_URL}/messages`, {
      params: { senderId, receiverId }
    })
    return response.data
  } catch (error) {
    console.error('Ошибка при загрузке сообщений:', error)
    throw error
  }
}

// Функция для отправки нового сообщения
export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/messages`, message)
    return response.data
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error)
    throw error
  }
}
