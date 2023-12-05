import { useMatches } from 'react-router-dom'
import CloudBreadcrumbGroup from '../../components/CloudBreadcrumbGroup.tsx'

const resourcesBreadcrumbs = [
  {
    text: 'Pets',
    href: '/pets',
  },
  {
    text: 'Pet details',
  },
];

export default function BreadCrumbs() {
  const matches = useMatches();
  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));

  return (
    <div style={{ opacity: crumbs.length > 1 ? 1 : 0, pointerEvents: crumbs.length > 1 ? 'auto' : 'none' }}>
      <CloudBreadcrumbGroup items={resourcesBreadcrumbs} />
    </div>
  )
}
