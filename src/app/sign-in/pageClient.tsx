'use client'

import SignInButton from '@/components/button/SignInButton'
import AntInput from '@/components/input/AntInput'
import useCurrentUser from '@/hooks/useCurrentUser'
import useFormValidator from '@/hooks/useFormValidator'
import useLogin from '@/hooks/useLogin'
import tw from '@/utilities/tw'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import * as v from 'valibot'

const classes = {
  container: tw(
    `relative w-full h-[100vh] md:min-h-[100vh] flex flex-col-reverse md:flex-row justify-end bg-green-500`,
  ),
  signInSection: tw(`md:w-[56%] xl:w-full h-full px-4 flex items-center justify-center`),
  signInFlexBox: tw(
    `max-w-[343px] md:max-w-none md:min-w-[343px] w-full md:w-[47.6%] flex flex-col gap-10`,
  ),
  signInTitle: tw(`text-[28px] leading-[34px] font-semibold text-white`),
  inputAndBtn: tw(`w-full flex flex-col gap-5`),
  signInBtn: tw(`w-full h-10 px-4 py-[10px]`),
  brandSection: tw(
    `relative md:right-0 md:w-[44%] md:max-w-[632px] xl:min-w-[632px] min-h-[362px] md:h-auto px-16 flex flex-col
    items-center justify-center gap-7 md:gap-[42px] bg-green-300 rounded-b-[36px] md:rounded-l-[36px]`,
  ),
  brandLogo: tw(
    `w-full h-auto max-w-[171.46px] md:max-w-[299.61px] max-h-[131.62px] md:max-h-[230px]`,
  ),
  brandTitle: tw(
    `brand-font text-[24px] md:text-[28px] leading-[24px] italic font-normal text-white`,
  ),
  input: tw(
    `relative w-full h-11 px-4 py-3 flex items-center text-md text-primary
    font-normal bg-white border border-[#DADADA] rounded-lg`,
  ),
  errorContainer: tw(`px-4`),
}

const SignIn = () => {
  const [username, setUsername] = useState('')
  const router = useRouter()
  const { user, loading } = useCurrentUser()
  const { login } = useLogin()

  const errorSchema = v.object({
    username: v.pipe(v.string(), v.minLength(2, 'Required at least 2 characters.')),
  })

  const onValidateSuccess = async () => {
    await login(username)

    setUsername('')
  }

  const { onSubmit, errors, resetError } = useFormValidator({
    errorSchema,
    form: {
      username,
    },
    onValidateSuccess,
  })

  if (loading) return null
  console.log(user)

  return (
    <div className={classes.container}>
      <div className={classes.signInSection}>
        <div className={classes.signInFlexBox}>
          <div className={classes.signInTitle}>Sign in</div>
          <div className={classes.inputAndBtn}>
            <AntInput
              required
              placeholder={'Username'}
              value={username}
              containerClassName={tw(classes.input, 'p-0')}
              onChangeText={setUsername}
              errorText={errors.username}
              errorClassName={classes.errorContainer}
            />
            <SignInButton styleContainer={classes.signInBtn} onClick={onSubmit} />
          </div>
        </div>
      </div>

      <div className={classes.brandSection}>
        <Image
          src="/images/main-logo.png"
          alt="main-logo"
          className={classes.brandLogo}
          width={299.61}
          height={230}
        />
        <div className={classes.brandTitle}>a Board</div>
      </div>
    </div>
  )
}

export default SignIn
