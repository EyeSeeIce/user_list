import styles from './DefaultSkeleton.module.scss'

const DefaultSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <p className={styles.skeleton_text}>Lorem ipsum dolor sit amet.</p>
      <p className={styles.skeleton_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dolorum.</p>
      <p className={styles.skeleton_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur ipsam iure, natus reprehenderit velit.</p>
    </div>
  )
}

export default DefaultSkeleton