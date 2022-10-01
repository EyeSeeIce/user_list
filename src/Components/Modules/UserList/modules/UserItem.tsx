import styles from './UserItem.module.scss'

import React, { useState } from 'react'
import cn from 'classnames'
import { useResize } from 'src/utils/hooks'
import { noScroll } from 'src/utils/helpers'
import { Divider } from 'src/Components/Common/Divider'
import { UserType } from 'src/types'
import { Description } from 'src/Components/Common/Description'
import { Highlighter } from 'src/Components/Common/Highlighter'
import { Button } from 'src/Components/Common/Button'
import { Delete } from 'src/assets/icons'
import { Modal } from 'src/Components/Common/Modal'

type Props = {
  removeUser: (id: number) => void
  highlighter: string
}

const UserItem = (props: UserType & Props) => {
  const { name, username, removeUser, id, highlighter, email, company, address } = props

  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const { currentSize } = useResize()

  const proxy = new Proxy(removeUser, {
    apply(target: (id: number) => void, thisArg: unknown) {
      setLoading(true)
      target.call(thisArg, id)
    },
  })

  const handleClick = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as Element
    if (target.nodeName === 'A') {
      setShow(true)
      noScroll.on()
    }
  }

  const handleClose = () => {
    setShow(false)
    noScroll.off()
  }

  return (
    <div
      className={cn(styles.item, {
        [styles.item_loading]: loading,
      })}
      onClick={handleClick}
    >
      <Description col={currentSize < 1200 ? 1 : 2} gap={[10, 20]}>
        <Description.Item label="name">
          <Highlighter highlight={highlighter}>{name}</Highlighter>
        </Description.Item>
        <Description.Item label="username">
          <Highlighter highlight={highlighter}>{username}</Highlighter>
        </Description.Item>
        <Description.Item label="email">
          <Highlighter highlight={highlighter}>{email}</Highlighter>
        </Description.Item>
      </Description>
      <div className={styles.actionPanel}>
        <div className={styles.actionPanel_remove}>
          <Button
            shape="circle"
            icon={<Delete width={32} height={32} fill="#ff5959" />}
            onClick={() => proxy(id)}
          />
        </div>
      </div>
      <a className={styles.link}></a>
      <Modal show={show} title={name} onClose={handleClose}>
        <Divider>Company</Divider>
        <Description col={1} gap={10}>
          <Description.Item label="Company name">{company.name}</Description.Item>
          <Description.Item label="Company type">{company.bs}</Description.Item>
        </Description>

        <Divider>Address</Divider>

        <Description col={1} gap={10}>
          <Description.Item label="City">{address.city}</Description.Item>
          <Description.Item label="Street">{address.street}</Description.Item>
          <Description.Item label="Suite">{address.suite}</Description.Item>
          <Description.Item label="Zip">{address.zipcode}</Description.Item>

          <Description.Item label="Geo">
            <Description>
              <Description.Item label="Lng" span={30}>
                {address.geo.lng}
              </Description.Item>
              <Description.Item label="Lat" span={30}>
                {address.geo.lat}
              </Description.Item>
            </Description>
          </Description.Item>
        </Description>
      </Modal>
    </div>
  )
}

export default UserItem
