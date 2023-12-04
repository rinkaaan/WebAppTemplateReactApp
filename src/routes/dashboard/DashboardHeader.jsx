import { Button, Header, SpaceBetween } from "@cloudscape-design/components"

export default function DashboardHeader() {
  return (
    <Header
      variant="h1"
      actions={
        <SpaceBetween size="xs" direction="horizontal">
          <Button variant="normal">Reset to default layout</Button>
          <Button variant="primary" iconName="add-plus">
            Add widgets
          </Button>
        </SpaceBetween>
      }
    >
      Dashboard
    </Header>
  )
}
