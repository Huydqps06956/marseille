import { useState } from 'react'
import styles from './styles.module.scss'
import { FiEye, FiEyeOff } from 'react-icons/fi'
const InputCommon = ({ label, type, isRequired = false }) => {
  const { labelInput, boxInput, container, boxIcon } = styles

  const [showPassword, setShowPassword] = useState(true)

  const isShowTextPassword = type === 'password' && showPassword ? 'text' : type
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const isPassword = type === 'password' ? true : false
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowTextPassword} />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </div>
        )}
      </div>
    </div>
  )
}

export default InputCommon
