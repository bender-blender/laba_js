'use client'
export default function ReservationCard({ reservation }) {
  return (
    <div className="card">
      <h4>Reservation for cabin {reservation?.cabinId}</h4>
      <p>Guest: {reservation?.guestName}</p>
    </div>
  )
}
