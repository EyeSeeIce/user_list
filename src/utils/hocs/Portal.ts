import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: any
  id: string
}
const Portal = ({ children, id }: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted ? createPortal(children, document.getElementById(id) as Element) : null
}

export default Portal
