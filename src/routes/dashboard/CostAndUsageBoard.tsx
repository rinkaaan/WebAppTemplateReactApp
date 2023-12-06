import {
  Grid,
  Header,
  Popover,
  SpaceBetween,
} from '@cloudscape-design/components'
import { PopoverText } from '../../components/PopoverText.jsx'

const topCosts: ReadonlyArray<{
  service: string
  cost: string
}> = [
  { service: 'Storage', cost: '$0.83' },
  { service: 'Music', cost: '$0.17' },
  { service: 'Expenses', cost: '$0.12' },
  { service: 'Novels', cost: '$0.11' },
  { service: 'Flashcards', cost: '$0.10' },
  { service: 'Cost Management', cost: '$0.10' },
]

export default function CostAndUsageBoard() {
  return (
    <Grid
      gridDefinition={[
        { colspan: { default: 12, xxs: 6 } },
        { colspan: { default: 12, xxs: 6 } },
      ]}
    >
      <SpaceBetween direction='vertical' size='xl'>
        <SpaceBetween direction='vertical' size='xxs'>
          <Popover
            dismissButton={false}
            position='top'
            size='small'
            triggerType='custom'
            content={
              <SpaceBetween direction='vertical' size='xxxs'>
                <span>September 1, 2023</span>
                <span>September 30, 2023 (UTC)</span>
              </SpaceBetween>
            }
          >
            <PopoverText>Current month costs</PopoverText>
          </Popover>
          <Header variant='h1'>$0.83</Header>
        </SpaceBetween>
        <SpaceBetween direction='vertical' size='xxs'>
          <Popover
            dismissButton={false}
            position='top'
            size='small'
            triggerType='custom'
            content={
              <SpaceBetween direction='vertical' size='xxxs'>
                <span>August 1, 2023</span>
                <span>August 30, 2023 (UTC)</span>
              </SpaceBetween>
            }
          >
            <PopoverText>Last month costs</PopoverText>
          </Popover>
          <Header variant='h1'>$1.87</Header>
        </SpaceBetween>
      </SpaceBetween>
      <SpaceBetween direction='vertical' size='xs'>
        <Header variant='h3'>Top costs for current month</Header>
        {topCosts.map((topCost, index) => (
          <div className='flex' key={index}>
            <div className='w-full'>{topCost.service}</div>
            <div className='w-[80px]'>{topCost.cost}</div>
          </div>
        ))}
      </SpaceBetween>
    </Grid>
  )
}
