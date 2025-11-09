'use client'
export default function Error({ error, reset }){
  return (
    <main className="container flex flex-col items-center justify-center py-20 gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg text-red-400">{error?.message || 'Unknown error'}</p>
      <button onClick={() => reset()} className="px-6 py-3 bg-accent-500 text-primary-900 rounded">Try again</button>
    </main>
  )
}
