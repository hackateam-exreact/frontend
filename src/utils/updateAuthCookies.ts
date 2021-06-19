import { setCookie } from 'nookies'

export const updateAuthCookies = (token: string, ctx = undefined) => {
  setCookie(ctx, 'devspot.token', token, {
    path: '/'
  })
}
