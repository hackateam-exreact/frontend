import axios from 'axios'

const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL
    : 'http://localhost:4000'

export const api = axios.create({
  baseURL: API_URL
})
