import axios, { AxiosError } from 'axios'

import Router from 'next/router'
import { destroyAuthCookies } from 'utils/destroyAuthCookies'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

api.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    if (err.response?.status == 401) {
      destroyAuthCookies()
      Router.push('/')
    }
  }
)
