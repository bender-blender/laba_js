'use client'
export default function DeleteReservation({ id, onDelete }) {
  return <button onClick={() => onDelete(id)} className="px-3 py-1 bg-red-600 rounded">Delete</button>
}
