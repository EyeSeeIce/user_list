import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [currentSize, setCurrentSize] = useState<number>(768)
  useEffect(() => {
    function handleResize() {
      setCurrentSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { currentSize }
}

export default useWindowSize
