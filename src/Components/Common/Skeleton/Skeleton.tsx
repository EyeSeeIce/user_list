import React, { ReactNode } from 'react'
import { DefaultSkeleton } from 'src/Components/Common/Skeleton/modules/DefaultSkeleton'

type Props = {
  children: ReactNode
  loading: boolean
  count: number
  skeleton?: ReactNode
}
const Skeleton = (props: Props) => {
  const { children, loading, skeleton = <DefaultSkeleton />, count } = props

  if (!loading) {
    return <>{children}</>
  }

  const dataArray = new Array(count).fill(skeleton)

  return <>{dataArray}</>
}

export default Skeleton
