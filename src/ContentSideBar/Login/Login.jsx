import { useSideBar } from '@/contexts/SideBarProvider'
import { useToast } from '@/contexts/ToastProvider'
import Button from '@components/Button/Button'
import InputCommon from '@components/InputCommon/InputCommon'
import { useFormik } from 'formik'
import Cookies from 'js-cookie'
import { useState } from 'react'
import * as Yup from 'yup'
import { register, signIn } from '../../api/authService'
import styles from './styles.module.scss'
import { useStoreContext } from '@/contexts/storeProvider'
const Login = () => {
  const { container, title, boxRememberMe, lostPw } = styles
  const [isRegister, setIsRegister] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { setIsOpen } = useSideBar()
  const { setUserId } = useStoreContext()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirm_password: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      )
    }),
    onSubmit: async (values) => {
      if (isLoading) return

      setIsLoading(true)
      const { email: username, password } = values

      if (isRegister) {
        await register({ username, password })
          .then((res) => {
            toast.success(res.data.message)
            setIsLoading(false)
          })
          .catch((err) => {
            toast.error(err.response.data.message)
            setIsLoading(false)
          })
      }

      if (!isRegister) {
        await signIn({ username, password })
          .then((res) => {
            toast.success('Login successfully')
            const { id, token, refreshToken } = res.data
            Cookies.set('token', token)
            Cookies.set('userId', id)
            Cookies.set('refreshToken', refreshToken)
            setIsOpen(false)
            setUserId(id)
            setIsLoading(false)
          })
          .catch((err) => {
            toast.error(err.response.data.message)
            setIsLoading(false)
          })
      }
    }
  })

  const handleToggle = () => {
    setIsRegister(!isRegister)
    formik.resetForm()
  }

  return (
    <div className={container}>
      <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

      <form onSubmit={formik.handleSubmit}>
        {/* Email Field */}
        <InputCommon
          id='email'
          label='Username or Email'
          type='text'
          isRequired
          formik={formik}
        />

        {/* Password Field */}
        <InputCommon
          id='password'
          label='Password'
          type='password'
          isRequired
          formik={formik}
        />
        {/*Confirm  Password Field */}
        {isRegister && (
          <InputCommon
            id='confirm_password'
            label='Confirm password'
            type='password'
            isRequired
            formik={formik}
          />
        )}

        {!isRegister && (
          <div className={boxRememberMe}>
            <input type='checkbox' />
            <span>Remember me</span>
          </div>
        )}

        {/* Login Button */}
        <Button
          content={isLoading ? 'Loading...' : isRegister ? 'SIGN UP' : 'LOGIN'}
          type='submit'
        />
      </form>
      <Button
        content={
          isRegister ? 'Already have an account' : 'Donnot have an account?'
        }
        isPriamry={false}
        style={{ marginTop: '10px' }}
        type='submit'
        onClick={handleToggle}
      ></Button>

      <div className={lostPw}>Lost your password</div>
    </div>
  )
}

export default Login
