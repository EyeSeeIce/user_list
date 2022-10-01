import styles from './Input.module.scss'
import { ChangeEvent, forwardRef, InputHTMLAttributes, useRef } from 'react'
import cn from 'classnames'

type OwnProps = {
  label?: string
  val?: string
}

type Props = OwnProps & InputHTMLAttributes<Omit<HTMLInputElement, keyof OwnProps>>

const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { label, onChange, value } = props

  const fn = useRef<(e: ChangeEvent<HTMLInputElement>) => void>(() => {})

  if (onChange) {
    fn.current = new Proxy(onChange, {
      apply(
        target: (event: ChangeEvent<HTMLInputElement>) => void,
        thisArg: unknown,
        argArray: ChangeEvent<HTMLInputElement>[],
      ): any {
        target(argArray[0])
      },
    })
  }

  const val = value as string
  return (
    <div className={styles.wrapper}>
      <input {...props} className={styles.input} type="text" ref={ref} onChange={fn.current} />
      {label && (
        <span
          className={cn(styles.label, {
            [styles.label_active]: val ? val.length > 0 : false,
          })}
        >
          {label}
        </span>
      )}
    </div>
  )
})

export default Input
