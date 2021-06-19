import { destroyCookie } from 'nookies'

export const destroyAuthCookies = (ctx = undefined) => {
  destroyCookie(ctx, 'devspot.token')
}
