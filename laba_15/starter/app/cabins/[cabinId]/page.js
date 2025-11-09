import { getCabin } from '../../../_lib/data-service'
export async function generateMetadata({ params }){
  const cabin = await getCabin(params.cabinId)
  return { title: `Cabin ${cabin?.name || params.cabinId} - Wild Oasis` }
}

export default async function Page({ params }){
  const cabin = await getCabin(params.cabinId)
  if(!cabin) return <p>Not found</p>
  return (
    <main className="container py-8">
      <h1 className="text-3xl">{cabin.name}</h1>
      <p className="mt-4">{cabin.description}</p>
      <p className="mt-2 font-bold">${cabin.regularPrice}</p>
    </main>
  )
}
