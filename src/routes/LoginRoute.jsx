import { Form, Navigate, redirect, useSearchParams } from 'react-router-dom'
import { authSlice } from '../slices/authSlice.ts'
import { AppLayout, Button, Container, ContentLayout, Header, SideNavigation } from '@cloudscape-design/components'

export function loader() {
  if (authSlice.isAuthenticated) {
    return redirect('/dashboard')
  }
  return null
}

export async function action() {
  return redirect(import.meta.env.VITE_AUTH_URI)
}

export function Component() {
  const [searchParams, _] = useSearchParams()

  if (searchParams.get('code')) {
    return <Navigate to='/auth/verify' replace={true} />
  }

  return (
    <AppLayout
      navigation={
        <SideNavigation
          items={[
            {
              type: 'section',
              text: 'Links',
              items: [
                {
                  type: 'link',
                  text: 'Dashboard',
                  href: '/pets',
                },
                {
                  type: 'link',
                  text: 'Logout',
                  href: '/logout',
                },
              ],
            },
          ]}
        />
      }
      content={
        <ContentLayout
          header={
            <Header variant='h1' description='This is a demo!'>
              Login
            </Header>
          }
        >
          <Container>
            <Form method='POST'>
              <Button type='submit'>Sign in with Google</Button>
            </Form>
          </Container>
        </ContentLayout>
      }
      toolsHide
      navigationHide
    />
  )
}
