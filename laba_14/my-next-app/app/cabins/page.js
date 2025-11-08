import Navigation from "../../_components/Navigation";

export const metadata = { title: "Cabins | Wild Oasis" };

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="p-8">
      <Navigation />
      <h1 className="text-4xl mb-6">Available Cabins</h1>
      <p className="mb-4">Number of cabins: {users.length}</p>
      {users.map((user) => (
        <div key={user.id} className="border-b border-gray-700 py-2">
          <h2 className="text-2xl">{user.name}</h2>
        </div>
      ))}
    </div>
  );
}
