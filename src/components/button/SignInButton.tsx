import ButtonBorder from '@/components/button/ButtonBorder'
import tw from '@/utilities/tw'
import { useRouter } from 'next/navigation'

interface SignInButtonProps {
  styleContainer?: string
  onClick?: () => void
}

const classes = {
  baseContainer: tw(
    `ibm-font w-full flex items-center justify-center bg-success
    text-white border border-success rounded-lg hover:bg-green-100 hover:text-success`,
  ),
}

const SignInButton = ({ styleContainer, onClick }: SignInButtonProps) => {
  const router = useRouter()

  if (!onClick)
    return (
      <ButtonBorder
        className={tw(classes.baseContainer, styleContainer)}
        onClick={() => router.push('/sign-in')}
      >
        <div>Sign In</div>
      </ButtonBorder>
    )

  return (
    <ButtonBorder className={tw(classes.baseContainer, styleContainer)} onClick={onClick}>
      <div>Sign In</div>
    </ButtonBorder>
  )
}

export default SignInButton
