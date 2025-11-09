import ReservationCard from '../../../components/_components/ReservationCard'
export default function Page(){
  const demo = [{ id: 'r1', cabinId: 'cabin-001', guestName: 'Alice' }]
  return (
    <div>
      <h2 className="text-2xl mb-4">Your reservations</h2>
      {demo.map(r => <ReservationCard reservation={r} key={r.id} />)}
    </div>
  )
}
