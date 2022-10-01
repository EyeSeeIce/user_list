import styles from './Highlighter.module.scss'
import React from 'react'

type Props = {
  highlight: string
  children: string
}

const Highlighter = (props: Props) => {
  const { highlight, children } = props

  return <>{highlight ? getHighlightedText(children, highlight) : children}</>
}

function getHighlightedText(text: string, highlight: string) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === highlight.toLowerCase() ? (
        <mark className={styles.mark}>{part}</mark>
      ) : (
        part
      )}
    </React.Fragment>
  ))
}

export default Highlighter
