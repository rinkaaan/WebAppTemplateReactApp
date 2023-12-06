import { format, isToday, isYesterday, parseISO } from 'date-fns'
import { authSlice } from '../slices/authSlice'
import { LoaderFunctionArgs, redirect } from 'react-router-dom'

export function ensureAuthenticated(request: Request) {
  if (!authSlice.isAuthenticated) {
    const params = new URLSearchParams()
    params.set('from', new URL(request.url).pathname)
    return redirect('/login?' + params.toString())
  }
  return null
}

export async function ensureAuthenticatedLoader({ request }: LoaderFunctionArgs) {
  return ensureAuthenticated(request)
}

export function formatDate(inputDate?: string) {
  if (!inputDate) return null
  const parsedDate = parseISO(inputDate)

  if (isToday(parsedDate)) {
    return format(parsedDate, "'Today at' h:mm a")
  } else if (isYesterday(parsedDate)) {
    return format(parsedDate, "'Yesterday at' h:mm a")
  } else {
    return format(parsedDate, "MMM d, yyyy 'at' h:mm a")
  }
}

// function matchPathFromArray(url, paths) {
//   const matchedPath = paths.find(path => {
//     const { path: routePath } = useRouteMatch({ path, exact: true });
//     return routePath !== null;
//   });
//
//   return matchedPath || null;
// }
//
// export const pathToCrumb = {
//   '/pets': {
//     crumb: 'Pets',
//     title: 'Pets',
//   },
//   '/pets/new': {
//     crumb: 'New Pet',
//     title: 'New Pet',
//   },
// }
