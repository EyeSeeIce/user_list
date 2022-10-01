import styles from './Modal.module.scss'
import cn from 'classnames'
import { Close } from '../../../assets/icons'
import { Portal } from '../../../utils/hocs'

type Props = {
  children: any
  show: boolean
  title?: string
  onClose: () => void
}

const Modal = (props: Props) => {
  const { children, show, title, onClose } = props
  return (
    <Portal id="modals">
      <div
        className={cn(styles.modal, {
          [styles.modal_open]: show,
        })}
      >
        <div className={styles.modal_overlay} onClick={onClose} />
        <div className={styles.modal_content}>
          <div className={styles.modal_content_header}>
            {title && <span className={styles.title}>{title}</span>}
            <div className={styles.close} onClick={onClose}>
              <Close width={24} height={24} />
            </div>
          </div>
          <div className={styles.modal_content_body}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
