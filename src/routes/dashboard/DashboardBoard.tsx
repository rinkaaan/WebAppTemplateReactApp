import { Board, BoardItem } from "@cloudscape-design/board-components"
import { Header, Link } from "@cloudscape-design/components"
import CostAndUsageBoard from "routes/dashboard/CostAndUsageBoard.tsx"
import LatestUpdatesBoard from "routes/dashboard/LatestUpdatesBoard.tsx"
import RecentlyVisitedBoard from "routes/dashboard/RecentlyVisitedBoard.jsx"
import {
  boardItemI18nStrings,
  boardI18nStrings
} from "routes/dashboard/i18n-strings"
import { v4 } from "uuid"
import { useState } from "react"
import { StoredWidgetPlacement } from './interfaces.ts'

export default function DashboardBoard() {
  const [items, setItems] = useState<
    ReadonlyArray<StoredWidgetPlacement>
  >([
    {
      id: v4(),
      rowSpan: 4,
      columnSpan: 1,
      data: {
        title: "Recently visited",
        content: <RecentlyVisitedBoard />,
        footer: {
          text: "View all services",
          href: "#"
        }
      }
    },
    {
      id: v4(),
      rowSpan: 4,
      columnSpan: 2,
      data: {
        title: "Cost and usage",
        content: <CostAndUsageBoard />,
        footer: {
          text: "Go to Cost Management",
          href: "#"
        }
      }
    },
    {
      id: v4(),
      rowSpan: 4,
      columnSpan: 1,
      data: {
        title: "Latest updates",
        content: <LatestUpdatesBoard />,
        footer: {
          text: "View all updates",
          href: "#"
        }
      }
    }
  ])

  return (
    <Board
      renderItem={item => (
        <BoardItem
          header={<Header>{item.data.title}</Header>}
          footer={
            item.data.footer && (
              <Link
                href={item.data.footer.href}
                external={item.data.footer.external}
              >
                {item.data.footer.text}
              </Link>
            )
          }
          i18nStrings={boardItemI18nStrings}
        >
          {item.data.content}
        </BoardItem>
      )}
      onItemsChange={event => setItems(event.detail.items)}
      items={items}
      i18nStrings={boardI18nStrings}
      empty={undefined}
    />
  )
}
