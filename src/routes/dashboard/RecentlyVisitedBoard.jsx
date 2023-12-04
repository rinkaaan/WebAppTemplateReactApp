import { Link, SpaceBetween } from '@cloudscape-design/components'
import services from 'data/services.json'
import { useNavigate } from 'react-router-dom'

export default function RecentlyVisitedBoard() {
  const navigate = useNavigate()

  return (
    <SpaceBetween direction='vertical' size='s'>
      {services.map((service, index) => (
        <Link
          variant='secondary'
          key={index}
          onFollow={() => navigate(service.href)}
        >
          {service.name}
        </Link>
      ))}
    </SpaceBetween>
  )
}
