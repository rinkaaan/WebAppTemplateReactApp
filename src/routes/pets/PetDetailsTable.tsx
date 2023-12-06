import Box from '@cloudscape-design/components/box'
import SpaceBetween from '@cloudscape-design/components/space-between'
import { ColumnLayout } from '@cloudscape-design/components'
import CopyText from '../../components/CopyText.tsx'
import { Pet } from '../../../openapi-client'
import { formatDate } from '../../common/typedUtils.ts'

export default function PetDetailsTable({ pet }: { pet: Pet }) {
  return (
    <ColumnLayout
      columns={4}
      variant='text-grid'
    >
      <SpaceBetween size='l'>
        <div>
          <Box variant='awsui-key-label'>Name</Box>
          <div>{pet.name}</div>
        </div>
        <div>
          <Box variant='awsui-key-label'>ID</Box>
          <CopyText
            copyText={pet.id as string}
            copyButtonLabel='Copy ID'
            successText='ID copied'
            errorText='ID failed to copy'
          />
        </div>
      </SpaceBetween>

      <SpaceBetween size='l'>
        <div>
          <Box variant='awsui-key-label'>Country</Box>
          <div>{pet.country}</div>
        </div>
        <div>
          <Box variant='awsui-key-label'>Created at</Box>
          <div>{formatDate(pet.created_at)}</div>
        </div>
      </SpaceBetween>
      <SpaceBetween size='l'>
        <div>
          <Box variant='awsui-key-label'>Animal Type</Box>
          <div>{pet.animal_type}</div>
        </div>
      </SpaceBetween>
    </ColumnLayout>
  )
}
