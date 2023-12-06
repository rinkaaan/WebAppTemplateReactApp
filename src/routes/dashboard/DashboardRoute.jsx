import { AppLayout, ContentLayout } from '@cloudscape-design/components'
import DashboardHeader from './DashboardHeader.jsx'
import DashboardBoard from './DashboardBoard.tsx'
import { ensureAuthenticated } from '../../common/typedUtils.ts'

export async function loader({ request }) {
  return ensureAuthenticated(request)
}

const Content = () => {
  return (
    <ContentLayout header={<DashboardHeader />}>
      <DashboardBoard />
    </ContentLayout>
  )
}

export function Component() {
  return (
    <AppLayout
      navigationHide
      content={<Content />}
    />
  )
}
