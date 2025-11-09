/**
 * Demo data-service. In real lab use, these functions make supabase queries.
 * Here we provide seeded demo data for offline usage.
 */
import demo from './demo-data.json'

export async function getCabins(){
  // mimic async fetch
  return demo.cabins
}

export async function getCabin(id){
  return demo.cabins.find(c => String(c.id) === String(id)) || null
}
