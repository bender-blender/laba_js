import Link from 'next/link'
export default function SideNavigation(){
  return (
    <nav className="card p-4">
      <ul className="flex flex-col gap-2">
        <li><Link href="/cabins">Cabins</Link></li>
        <li><Link href="/account/profile">Profile</Link></li>
        <li><Link href="/account/reservations">Reservations</Link></li>
      </ul>
    </nav>
  )
}
