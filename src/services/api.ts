import axios, { AxiosError } from 'axios'

import Router from 'next/router'
import { destroyAuthCookies } from 'utils/destroyAuthCookies'
import { parseCookies } from 'nookies'

const cookies = parseCookies(undefined)

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${cookies['devspot.token']}`
  }
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
