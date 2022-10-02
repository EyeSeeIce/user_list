import { useEffect, useLayoutEffect, useState } from 'react'

const useWindowSize = () => {
  const [currentSize, setCurrentSize] = useState<number>(768)
  useLayoutEffect(() => {
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
