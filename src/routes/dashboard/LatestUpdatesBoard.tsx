import { Header, Link, SpaceBetween } from '@cloudscape-design/components'

interface Update {
  date: string
  title: string
  link: string
}

const updates: ReadonlyArray<Update> = [
  {
    date: 'Sep 8',
    title: 'Storage limits have been increased to 5TB',
    link: '#',
  },
  {
    date: 'Sep 1',
    title: 'New service: Music',
    link: '#',
  },
]

export default function LatestUpdatesBoard() {
  return (
    <SpaceBetween direction='vertical' size='s'>
      {updates.map((update, index) => (
        <SpaceBetween direction='vertical' size='xxxs' key={index}>
          <Header variant='h3'>{update.date}</Header>
          <Link variant='secondary'>{update.title}</Link>
        </SpaceBetween>
      ))}
    </SpaceBetween>
  )
}
