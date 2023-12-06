import { AppLayout, SideNavigation } from '@cloudscape-design/components'
import { Navigate, Outlet, useLocation, useMatches, useNavigate } from 'react-router-dom'
import Breadcrumbs from './BreadCrumbs.jsx'
import { useEffect, useState } from 'react'

const items = [
  {
    type: 'link',
    text: 'Pets',
    href: '/pets/all',
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
  const matches = useMatches()
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumbs))
    .map((match) => match.handle.crumbs())
  const [activeHref, setActiveHref] = useState()

  useEffect(() => {
    // Go from last to first crumb, set activeHref to the first one that matches items
    for (const crumb of crumbs.reverse()) {
      if (crumb.path == null) continue
      if (items.find(item => item.href === crumb.path)) {
        setActiveHref(crumb.path)
        break
      }
    }
  }, [crumbs])

  if (location.pathname !== '/pets') {
    return (
      <AppLayout
        navigation={
          <SideNavigation
            header={{
              text: 'Pets',
              href: '/pets/all',
            }}
            onFollow={e => {
              e.preventDefault()
              navigate(e.detail.href)
            }}
            activeHref={activeHref}
            items={items}
          />
        }
        content={<Outlet/>}
        breadcrumbs={<Breadcrumbs/>}
        toolsHide
      />
    )
  } else {
    return <Navigate to='/pets/all' replace={true} />
  }
}
