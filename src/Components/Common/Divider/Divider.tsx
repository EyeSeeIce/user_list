import styles from './Divider.module.scss'

type Props = {
  children?: string
}
const Divider = (props: Props) => {
  const { children } = props
  return (
    <div className={styles.divider}>
      {children && <span className={styles.divider_label}>{children}</span>}
    </div>
  )
}

export default Divider
