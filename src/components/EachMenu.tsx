import tw from '@/utilities/tw'
import Icon from './Icon'
import { TIconName } from './Icon/interface'

interface EachMenuProps {
  icon: TIconName
  iconSize: number
  text: string
  onClick: () => void
  darkBg?: boolean
}

const classes = {
  eachMenu: tw(`w-full px-3 py-2 flex gap-2 items-center cursor-pointer`),
  eachMenuText: tw(`text-md`),
}

const EachMenu = ({ icon, iconSize, text, onClick, darkBg }: EachMenuProps) => {
  return (
    <div className={classes.eachMenu} onClick={onClick}>
      <Icon name={icon} size={iconSize} fill={darkBg ? '#243831' : '#BBC2C0'} />
      <div
        className={tw(
          classes.eachMenuText,
          darkBg ? '#243831' : '#BBC2C0',
          text === 'Home' ? 'font-extrabold' : 'font-medium',
        )}
      >
        {text}
      </div>
    </div>
  )
}

export default EachMenu
