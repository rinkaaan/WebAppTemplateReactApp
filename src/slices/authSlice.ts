import Cookies from 'js-cookie'
import { OpenAPI, User, UserService } from '../../openapi-client';

export interface AuthSlice {
  isAuthenticated: boolean
  user?: User
  setToken(token: string): Promise<void>
  logout(): Promise<void>
  init(): Promise<void>
}

const token = Cookies.get('token')
OpenAPI.TOKEN = token

export const authSlice: AuthSlice = {
  isAuthenticated: token != null,
  async setToken(token: string) {
    Cookies.set('token', token)
    OpenAPI.TOKEN = token
    authSlice.isAuthenticated = true
    this.user = await UserService.get()
  },
  async logout() {
    Cookies.remove('token')
    OpenAPI.TOKEN = undefined
    authSlice.isAuthenticated = false
    authSlice.user = undefined
  },
  async init() {
      if (!authSlice.isAuthenticated) return
      try {
        authSlice.user = await UserService.get()
      } catch (e) {
        await this.logout()
      }
  }
}
