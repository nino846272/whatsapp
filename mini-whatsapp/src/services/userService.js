// src/services/userService.js
import axios from 'axios';

const BASE_URL = 'https://6814ab3a225ff1af1629a17c.mockapi.io/users';

// Работа с API
export async function getUsersFromAPI() {
  const response = await axios.get(BASE_URL);
  return response.data;
}

export async function createUser(user) {
  const response = await axios.post(BASE_URL, user);
  return response.data;
}

export async function updateUser(id, user) {
  const response = await axios.put(`${BASE_URL}/${id}`, user);
  return response.data;
}

export async function deleteUser(id) {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
}

// Кэш в localStorage
export function saveUsersToCache(users) {
  localStorage.setItem('cachedUsers', JSON.stringify(users));
}

export function getUsersFromCache() {
  const cached = localStorage.getItem('cachedUsers');
  return cached ? JSON.parse(cached) : [];
}
