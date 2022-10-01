import styles from './Description.module.scss'
import { FC, ReactNode, useMemo } from 'react'

type Props = {
  children: ReactNode
  col?: number
  gap?: number | [number, number]
}
const Description = (props: Props) => {
  const { children, col = 1, gap } = props

  const style = useMemo(() => {
    return {
      gridTemplateColumns: `repeat(${col}, 1fr)`,
      columnGap: Array.isArray(gap) ? gap[0] : gap,
      rowGap: Array.isArray(gap) ? gap[1] : gap,
    }
  }, [col, gap])

  return (
    <div className={styles.description} style={style}>
      {children}
    </div>
  )
}

interface DescriptionsItemProps {
  label?: ReactNode
  children: ReactNode
  span?: number
}

const DescriptionsItem: FC<DescriptionsItemProps> = ({ children, label, span }) => {
  const style = {
    minWidth: `${span}px`,
  }
  return (
    <div className={styles.description_item}>
      <div className={styles.description_item_label} style={style}>
        {label}:
      </div>
      <span className={styles.description_item_text}>{children}</span>
    </div>
  )
}

Description.Item = DescriptionsItem

export default Description
