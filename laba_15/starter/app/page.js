import Link from 'next/link'
export default function Home(){
  return (
    <main className="container py-12">
      <h1 className="text-4xl mb-6">Wild Oasis — Demo</h1>
      <p className="mb-4">This is a scaffold for the LR15 assignment. Use the navigation below.</p>
      <div className="flex gap-4">
        <Link href="/cabins" className="px-4 py-2 bg-accent-500 text-primary-900 rounded">View Cabins</Link>
        <Link href="/account/profile" className="px-4 py-2 border rounded">Account</Link>
      </div>
    </main>
  )
}
