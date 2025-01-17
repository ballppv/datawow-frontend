import EachMenu from '@/components/EachMenu'
import Icon from '@/components/Icon'
import SignInButton from '@/components/button/SignInButton'
import tw from '@/utilities/tw'
import { Drawer } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

const classes = {
  container: tw(
    `z-[1] sticky top-0 w-full h-[72px] md:h-[60px] pr-3 pl-4 md:px-8 flex items-center justify-between bg-green-500`,
  ),
  brandTitle: tw(`brand-font text-[20px] leading-[24px] italic font-normal text-white`),
  signInBtn: tw(`hidden md:flex max-w-[105px] h-10 px-4 py-[10px]`),
  menuIcon: tw(`w-10 h-10 flex md:hidden items-center justify-center cursor-pointer`),
  mobileMenuContainer: tw(`flex flex-col gap-9`),
  closeBtn: tw(`w-[82px] h-6 px-8 py-[6px] flex items-center justify-center`),
  menuList: tw(`w-full px-4 flex flex-col gap-1`),
  eachMenu: tw(`w-full px-3 py-2 flex gap-2 items-center`),
  eachMenuText: tw(`text-md`),
}

const Navbar: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false)
  const router = useRouter()

  return (
    <div className={classes.container}>
      <div className={classes.brandTitle}>a Board</div>
      <SignInButton styleContainer={classes.signInBtn} />
      <div className={classes.menuIcon} onClick={() => setOpenMobileMenu(true)}>
        <Icon name="menu" size={24} fill="#FFF" />
      </div>

      <Drawer
        placement="right"
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        width={'280px'}
        height={'100%'}
        styles={{
          header: { display: 'none' },
          content: {
            backgroundColor: 'var(--green-500)',
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            color: '#FFF',
          },
          body: {
            padding: '32px 0px',
          },
        }}
      >
        <div className={classes.mobileMenuContainer}>
          <div className={classes.closeBtn} onClick={() => setOpenMobileMenu(false)}>
            <Icon name="arrowRight" width={16} height={12} fill="#FFF" />
          </div>

          <div className={classes.menuList}>
            <EachMenu
              icon="home"
              iconSize={24}
              text="Home"
              onClick={() => router.push('/')}
              darkBg
            />
            <EachMenu
              icon="write"
              iconSize={24}
              text="Our Blog"
              onClick={() => router.push('/our-blog')}
              darkBg
            />
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar
