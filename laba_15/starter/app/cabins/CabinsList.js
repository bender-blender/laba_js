import React from 'react'
import CabinCard from '../../components/_components/CabinCard'
import { getCabins } from '../../_lib/data-service'

export default async function CabinsList(){
  const cabins = await getCabins();
  if(!cabins || cabins.length === 0){
    return <p className="text-primary-200">No cabins available (seed demo included).</p>
  }
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {cabins.map(c => <CabinCard cabin={c} key={c.id} />)}
    </div>
  )
}
