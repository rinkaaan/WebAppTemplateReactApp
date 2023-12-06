import { TopNavigation, TopNavigationProps } from '@cloudscape-design/components'
import logo from '../assets/logo.svg'
import CloudInput from '../components/CloudInput.tsx'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthSlice, authSlice } from '../slices/authSlice.ts'
import { createPortal } from 'react-dom'
import { Fragment, ReactNode } from 'react'

const profileActions = [
  { id: "profile", text: "Profile" },
  { id: "preferences", text: "Preferences" },
  { id: "security", text: "Security" },
  {
    id: "support-group",
    text: "Support",
    items: [
      {
        id: "documentation",
        text: "Documentation",
        href: "#",
        external: true,
        externalIconAriaLabel: " (opens in new tab)"
      },
      {
        id: "feedback",
        text: "Feedback",
        href: "#",
        external: true,
        externalIconAriaLabel: " (opens in new tab)"
      },
      { id: "support", text: "Customer support" }
    ]
  },
  { id: "signout", text: "Sign out", href: "/logout" }
]

const DemoHeaderPortal = ({ children }: { children: ReactNode }) => {
  const domNode = document.querySelector("#h")
  if (domNode) {
    return createPortal(children, domNode)
  } else {
    throw new Error("Could not find #h")
  }
}

function getUtilities(authSlice: AuthSlice) {
  const utilities: TopNavigationProps.Utility[] = [
    {
      type: 'button',
      iconName: 'notification',
      ariaLabel: 'Notifications',
      badge: true,
      disableUtilityCollapse: true
    },
    {
      type: 'button',
      iconName: 'settings',
      title: 'Settings',
      ariaLabel: 'Settings'
    },
    {
      type: 'menu-dropdown',
      text: authSlice.user?.name,
      description: authSlice.user?.email,
      iconName: 'user-profile',
      items: profileActions
    }
  ]

  if (authSlice.isAuthenticated) {
    return utilities
  }
}

export default function NavbarLayout() {
  const navigate = useNavigate()

  return (
    <Fragment>
      <DemoHeaderPortal>
        <TopNavigation
          identity={{
            href: "/dashboard",
            title: "Services",
            logo: { src: logo },
            onFollow: (e: Event) => {
              e.preventDefault()
              navigate("/dashboard")
            }
          }}
          search={
            authSlice.isAuthenticated ? (
              <CloudInput
                ariaLabel='Input field'
                clearAriaLabel='Clear'
                type='search'
                placeholder='Search'
              />
            ) : undefined
          }
          utilities={getUtilities(authSlice)}
        />
      </DemoHeaderPortal>
      <Outlet />
    </Fragment>
  )
}
