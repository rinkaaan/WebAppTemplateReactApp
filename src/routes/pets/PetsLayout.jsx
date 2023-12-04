import { AppLayout, SideNavigation } from '@cloudscape-design/components'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Breadcrumbs from './BreadCrumbs.jsx'

const items = [
  {
    type: 'link',
    text: 'Pets',
    href: '/pets',
  },
  {
    type: 'link',
    text: 'Settings',
    href: '/pets/settings',
  },
  {
    type: 'section',
    text: 'Resources',
    items: [
      {
        type: 'link',
        text: 'Wiki',
        // href: '/pets/wiki',
        href: '#',
      },
      {
        type: 'link',
        text: 'Blog',
        // href: 'pets/blog',
        href: '#',
      },
    ],
  },
]

export default function PetsLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  function activeHref() {
    // While location.pathname is not in items, remove the last part of the pathname
    while (!items.find(item => item.href === location.pathname)) {
      const parts = location.pathname.split('/')
      parts.pop()
      location.pathname = parts.join('/')
    }

    return location.pathname
  }

  return (
    <AppLayout
      navigation={
        <SideNavigation
          header={{
            text: 'Pets',
            href: '/pets',
          }}
          onFollow={e => {
            e.preventDefault()
            navigate(e.detail.href)
          }}
          activeHref={activeHref()}
          items={items}
        />
      }
      content={<Outlet/>}
      breadcrumbs={<Breadcrumbs/>}
      toolsHide
    />
  )
}
