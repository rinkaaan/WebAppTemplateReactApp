import { authSlice } from '../slices/authSlice'
import { LoaderFunctionArgs, redirect } from 'react-router-dom';

export function ensureAuthenticated(request: Request) {
  if (!authSlice.isAuthenticated) {
    const params = new URLSearchParams()
    params.set('from', new URL(request.url).pathname)
    return redirect('/login?' + params.toString())
  }
  return null
}

export async function ensureAuthenticatedLoader({ request }: LoaderFunctionArgs) {
  return ensureAuthenticated(request)
}
