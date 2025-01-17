'use client'

import { ReactNode, useEffect, useState } from 'react'
import Navbar from './Navbar'

interface MainLayoutProps {
  children: ReactNode
  noNavbar?: boolean
}

export const MainLayout = ({ children, noNavbar }: MainLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  if (isLoading) return <div className="bg-white w-full h-full"></div>

  return (
    <div className="bg-white max-w-maximum-web min-h-[100vh] mx-auto">
      {noNavbar ? null : <Navbar />}
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
