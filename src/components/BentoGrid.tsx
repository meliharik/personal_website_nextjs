import React from 'react'
import BentoItem from './BentoItem'
import { BentoItem as BentoItemType } from '@prisma/client'

interface Props {
  items: BentoItemType[]
}

const BentoGrid: React.FC<Props> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <BentoItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default BentoGrid 