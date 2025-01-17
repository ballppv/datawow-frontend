import EachMenu from '@/components/EachMenu'
import tw from '@/utilities/tw'
import { useRouter } from 'next/navigation'
import React from 'react'

interface SidebarProps {}

const classes = {
  container: tw(
    `z-[1] hidden sticky left-0 top-[60px] w-[20%] min-w-[180px] max-w-[280px]
    h-[calc(100vh-60px)] px-4 pt-8 md:flex flex-col bg-grey-100`,
  ),
}

const Sidebar: React.FC<SidebarProps> = () => {
  const router = useRouter()

  return (
    <div className={classes.container}>
      <EachMenu icon="homeOutlined" iconSize={24} text="Home" onClick={() => router.push('/')} />
      <EachMenu
        icon="writeOutlined"
        iconSize={24}
        text="Our Blog"
        onClick={() => router.push('/our-blog')}
      />
    </div>
  )
}

export default Sidebar
