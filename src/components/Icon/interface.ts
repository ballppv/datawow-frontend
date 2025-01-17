export type TIconName =
  | 'external'
  | 'menu'
  | 'arrowRight'
  | 'arrowLeft'
  | 'home'
  | 'homeOutlined'
  | 'write'
  | 'writeOutlined'
  | 'comment'

export type TIcon = {
  [key in TIconName]: string
}

export interface IIconProps {
  /** name is external for use an externalUrl icon */
  name: TIconName
  externalUrl?: string
  fill: string | null
  stroke?: string | null
  size?: string | number
  width?: string | number
  height?: string | number
  lgSize?: string | number
  lgWidth?: string | number
  lgHeight?: string | number
  mobileSize?: string | number
  mobileWidth?: string | number
  mobileHeight?: string | number
  scale?: number
  className?: string
  onClick?: () => void
  desktopContainer?: string
  mobileContainer?: string
  autoResponsive?: boolean
}
