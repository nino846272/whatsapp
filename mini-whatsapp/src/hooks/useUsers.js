// src/hooks/useUsers.js
import { useEffect, useState } from 'react'
import { getUsersFromCache, getUsersFromAPI, saveUsersToCache } from '../services/userService'

export function useUsers() {
  const [users, setUsers] = useState([])

  const refreshUsers = async () => {
    const apiUsers = await getUsersFromAPI()
    setUsers(apiUsers)
    saveUsersToCache(apiUsers)
  }

  useEffect(() => {
    const loadUsers = async () => {
      const cached = await getUsersFromCache()
      if (cached.length > 0) setUsers(cached)
      await refreshUsers()
    }
    loadUsers()
  }, [])

  return { users, refreshUsers }
}

