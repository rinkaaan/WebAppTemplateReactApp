import { Container, ContentLayout, Header } from '@cloudscape-design/components'
import { Pet, PetService } from '../../../openapi-client/index.js'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import PetDetailsTable from './PetDetailsTable.js'

interface LoaderParams {
  petId: string
}

interface LoaderData {
  pet: Pet
}

export async function loader({ params }: LoaderFunctionArgs): Promise<LoaderData> {
  const typedParams = params as unknown as LoaderParams
  return {
    pet: await PetService.get(typedParams.petId),
  }
}

export function Component() {
  const { pet } = useLoaderData() as LoaderData

  return (
    <ContentLayout
      header={
        <Header variant='h1'>{pet.name}</Header>
      }
    >
      <Container
        header={<Header variant='h2'>Pet Details</Header>}
      >
        <PetDetailsTable pet={pet} />
      </Container>
    </ContentLayout>
  )
}
