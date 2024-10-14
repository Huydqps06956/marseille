import InputCommon from '@components/InputCommon/InputCommon'
import styles from './styles.module.scss'
import Button from '@components/Button/Button'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const Login = () => {
  const { container, title, boxRememberMe, lostPw } = styles

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
        .required('Password is required')
    }),
    onSubmit: (values) => {
      console.log('Form data', values)
    }
  })

  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>

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

        <div className={boxRememberMe}>
          <input type='checkbox' />
          <span>Remember me</span>
        </div>

        {/* Login Button */}
        <Button content={'LOGIN'} type='submit' />
      </form>
      <div className={lostPw}>Lost your password</div>
    </div>
  )
}

export default Login
