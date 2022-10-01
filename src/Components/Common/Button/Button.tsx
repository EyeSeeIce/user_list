import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC, ReactElement } from 'react'
import cn from 'classnames'

type OwnProps = {
  icon?: ReactElement
  shape?: 'circle' | 'rect'
}

type Props = OwnProps & ButtonHTMLAttributes<Omit<HTMLButtonElement, keyof OwnProps>>

const Button: FC<Props> = props => {
  const { children, icon, shape } = props
  return (
    <button
      className={cn(styles.button, {
        [styles.button_circle]: shape === 'circle',
      })}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  )
}

export default Button
