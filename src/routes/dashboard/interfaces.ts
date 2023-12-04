import React from 'react';

interface Footer {
  text: string
  href: string
  external?: boolean
}

export interface WidgetDataType {
  title: string
  description?: string
  disableContentPaddings?: boolean
  provider?: React.JSXElementConstructor<{ children: React.ReactElement }>
  header?: string
  content: React.ReactElement | string
  footer?: Footer
  staticMinHeight?: number
}

export interface StoredWidgetPlacement {
  id: string
  columnOffset?: Record<number, number>
  rowSpan?: number
  columnSpan?: number
  data: WidgetDataType
}
