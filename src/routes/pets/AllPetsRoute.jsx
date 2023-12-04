import CloudTable from '@cloudscape-design/components/table'
import Box from '@cloudscape-design/components/box'
import SpaceBetween from '@cloudscape-design/components/space-between'
import Button from '@cloudscape-design/components/button'
import { useState } from 'react'
import AllPetsHeader from './AllPetsHeader.jsx'
import { TextFilter } from '@cloudscape-design/components'
import CloudLink from '../../components/CloudLink.tsx'

export function Component() {
  const [selectedItems, setSelectedItems] = useState([])

  return (
    <CloudTable
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}
      ariaLabels={{
        selectionGroupLabel: 'Items selection',
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${
            selectedItems.length === 1 ? 'item' : 'items'
          } selected`,
      }}
      stickyHeader={true}
      columnDefinitions={[
        {
          id: 'variable',
          header: 'Variable name',
          cell: item => <CloudLink href={`/pets/${item.name}`}>{item.name}</CloudLink>,
          sortingField: 'name',
          isRowHeader: true,
        },
        {
          id: 'value',
          header: 'Text value',
          cell: item => item.alt,
          sortingField: 'alt',
        },
        {
          id: 'type',
          header: 'Type',
          cell: item => item.type,
        },
        {
          id: 'description',
          header: 'Description',
          cell: item => item.description,
        },
      ]}
      columnDisplay={[
        { id: 'variable', visible: true },
        { id: 'value', visible: true },
        { id: 'type', visible: true },
        { id: 'description', visible: true },
      ]}
      items={[
        {
          name: 'Item 1',
          alt: 'First',
          description: 'This is the first item',
          type: '1A',
          size: 'Small',
        },
        {
          name: 'Item 2',
          alt: 'Second',
          description: 'This is the second item',
          type: '1B',
          size: 'Large',
        },
        {
          name: 'Item 3',
          alt: 'Third',
          description: '-',
          type: '1A',
          size: 'Large',
        },
        {
          name: 'Item 4',
          alt: 'Fourth',
          description: 'This is the fourth item',
          type: '2A',
          size: 'Small',
        },
        {
          name: 'Item 5',
          alt: '-',
          description:
            'This is the fifth item with a longer description',
          type: '2A',
          size: 'Large',
        },
        {
          name: 'Item 6',
          alt: 'Sixth',
          description: 'This is the sixth item',
          type: '1A',
          size: 'Small',
        },
        {
          name: 'Item 1',
          alt: 'First',
          description: 'This is the first item',
          type: '1A',
          size: 'Small',
        },
        {
          name: 'Item 2',
          alt: 'Second',
          description: 'This is the second item',
          type: '1B',
          size: 'Large',
        },
        {
          name: 'Item 3',
          alt: 'Third',
          description: '-',
          type: '1A',
          size: 'Large',
        },
        {
          name: 'Item 4',
          alt: 'Fourth',
          description: 'This is the fourth item',
          type: '2A',
          size: 'Small',
        },
        {
          name: 'Item 5',
          alt: '-',
          description:
            'This is the fifth item with a longer description',
          type: '2A',
          size: 'Large',
        },
        {
          name: 'Item 6',
          alt: 'Sixth',
          description: 'This is the sixth item',
          type: '1A',
          size: 'Small',
        },
        {
          name: 'Item 1',
          alt: 'First',
          description: 'This is the first item',
          type: '1A',
          size: 'Small',
        },
        {
          name: 'Item 2',
          alt: 'Second',
          description: 'This is the second item',
          type: '1B',
          size: 'Large',
        },
        {
          name: 'Item 3',
          alt: 'Third',
          description: '-',
          type: '1A',
          size: 'Large',
        },
        {
          name: 'Item 4',
          alt: 'Fourth',
          description: 'This is the fourth item',
          type: '2A',
          size: 'Small',
        },
        {
          name: 'Item 5',
          alt: '-',
          description:
            'This is the fifth item with a longer description',
          type: '2A',
          size: 'Large',
        },
        {
          name: 'Item 6',
          alt: 'Sixth',
          description: 'This is the sixth item',
          type: '1A',
          size: 'Small',
        },
        {
          name: 'Item 1',
          alt: 'First',
          description: 'This is the first item',
          type: '1A',
          size: 'Small',
        },
        {
          name: 'Item 2',
          alt: 'Second',
          description: 'This is the second item',
          type: '1B',
          size: 'Large',
        },
        {
          name: 'Item 3',
          alt: 'Third',
          description: '-',
          type: '1A',
          size: 'Large',
        },
        {
          name: 'Item 4',
          alt: 'Fourth',
          description: 'This is the fourth item',
          type: '2A',
          size: 'Small',
        },
        {
          name: 'Item 5',
          alt: '-',
          description:
            'This is the fifth item with a longer description',
          type: '2A',
          size: 'Large',
        },
        {
          name: 'Item 6',
          alt: 'Sixth',
          description: 'This is the sixth item',
          type: '1A',
          size: 'Small',
        },
        {
          name: 'Item 1',
          alt: 'First',
          description: 'This is the first item',
          type: '1A',
          size: 'Small',
        },
        {
          name: 'Item 2',
          alt: 'Second',
          description: 'This is the second item',
          type: '1B',
          size: 'Large',
        },
        {
          name: 'Item 3',
          alt: 'Third',
          description: '-',
          type: '1A',
          size: 'Large',
        },
        {
          name: 'Item 4',
          alt: 'Fourth',
          description: 'This is the fourth item',
          type: '2A',
          size: 'Small',
        },
        {
          name: 'Item 5',
          alt: '-',
          description:
            'This is the fifth item with a longer description',
          type: '2A',
          size: 'Large',
        },
        {
          name: 'Item 6',
          alt: 'Sixth',
          description: 'This is the sixth item',
          type: '1A',
          size: 'Small',
        },
      ]}
      loadingText='Loading resources'
      selectionType='multi'
      trackBy='name'
      variant='full-page'
      empty={
        <Box
          margin={{ vertical: 'xs' }}
          textAlign='center'
          color='inherit'
        >
          <SpaceBetween size='m'>
            <b>No resources</b>
            <Button>Create resource</Button>
          </SpaceBetween>
        </Box>
      }
      header={<AllPetsHeader selectedItemsCount={selectedItems.length} />}
      filter={
        <TextFilter
          filteringPlaceholder="Find pets"
          filteringClearAriaLabel="Clear"
        />
      }
    />
  )
}
