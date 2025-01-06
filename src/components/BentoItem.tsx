import React from 'react'
import { BentoItem as BentoItemType } from '@prisma/client'

interface Props {
  item: BentoItemType
}

const BentoItem: React.FC<Props> = ({ item }) => {
  return (
    <a
      href={item.link || '#'}
      className={`block p-6 rounded-xl transition-all hover:scale-105 ${
        item.bgcolor || 'bg-gray-100'
      }`}
    >
      {item.icon && <div className="text-2xl mb-2">{item.icon}</div>}
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      {item.description && <p className="text-gray-600">{item.description}</p>}
    </a>
  )
}

export default BentoItem 