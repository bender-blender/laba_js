'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function CabinCard({ cabin }) {
  const { id, name, regularPrice, image, description } = cabin;
  return (
    <div className="card flex gap-4">
      <div className="relative w-40 h-28 flex-none">
        <Image src={image} alt={name} fill style={{ objectFit: 'cover', borderRadius: '6px' }} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-primary-200">{description?.slice(0,120) || 'No description'}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-bold">${regularPrice}</span>
          <Link href={`/cabins/${id}`} className="underline">View</Link>
        </div>
      </div>
    </div>
  )
}
