import React from 'react'
import { Button, Header as CloudHeader, SpaceBetween } from '@cloudscape-design/components'

export default function PetDetailsHeader({
  title = "Pets",
  createButtonText = "Create pet",
  extraActions = null,
  selectedItemsCount,
  ...props
}) {
  const isOnlyOneSelected = selectedItemsCount === 1

  return (
    <CloudHeader
      variant="awsui-h1-sticky"
      actions={
        <SpaceBetween size="xs" direction="horizontal">
          {extraActions}
          <Button data-testid="header-btn-edit" disabled={!isOnlyOneSelected}>
            Edit
          </Button>
          <Button
            data-testid="header-btn-delete"
            disabled={selectedItemsCount === 0}
          >
            Delete
          </Button>
          <Button data-testid="header-btn-create" variant="primary">
            {createButtonText}
          </Button>
        </SpaceBetween>
      }
      {...props}
    >
      {title}
    </CloudHeader>
  )
}
