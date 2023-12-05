import { createBrowserRouter, Outlet, redirect, RouterProvider } from 'react-router-dom'
import { authSlice } from './slices/authSlice.ts'
import NavbarLayout from './routes/NavbarLayout.tsx'
import PetsLayout from './routes/pets/PetsLayout.jsx'
import { ensureAuthenticatedLoader } from './common/typedUtils.ts'

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader: async () => {
      await authSlice.init()
      return null
    },
    Component: NavbarLayout,
    children: [
      {
        path: 'auth',
        Component: Outlet,
        children: [
          {
            path: 'login',
            lazy: () => import('./routes/LoginRoute.jsx'),
          },
          {
            path: 'verify',
            lazy: () => import('./routes/VerifyRoute.jsx'),
          },
        ],
      },
      {
        path: 'dashboard',
        lazy: () => import('./routes/dashboard/DashboardRoute.jsx'),
      },
      {
        path: 'pets',
        Component: PetsLayout,
        loader: ensureAuthenticatedLoader,
        handle: {
          crumb: () => "Pets",
        },
        children: [
          {
            path: '/pets',
            lazy: () => import('./routes/pets/AllPetsRoute.tsx'),
          },
          {
            path: '/pets/:petId',
            lazy: () => import('./routes/pets/PetDetailsRoute.jsx'),
            handle: {
              crumb: () => "Pet details",
            },
          },
          {
            path: 'settings',
          }
        ],
      },
      {
        path: '/',
        lazy: () => import('./routes/NotFoundRoute.jsx'),
      },
      {
        path: '*',
        lazy: () => import('./routes/NotFoundRoute.jsx'),
      },
    ],
  },
  {
    path: '/logout',
    Component: null,
    async loader() {
      await authSlice.logout()
      return redirect('/auth/login')
    },
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
