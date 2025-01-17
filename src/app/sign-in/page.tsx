import MainLayout from '@/layouts/MainLayout'
import SignIn from './pageClient'

const Page = async () => {
  return (
    <MainLayout noNavbar>
      <SignIn />
    </MainLayout>
  )
}

export default Page
