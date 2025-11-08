import Link from "next/link";
import Navigation from "../../_components/Navigation";

export const metadata = { title: "Account | Wild Oasis" };

export default function AccountPage() {
  return (
    <div className="p-8">
      <Navigation />
      <h1 className="text-3xl mb-4">Your Account</h1>
      <ul className="list-disc ml-6">
        <li><Link href="/account/profile">Profile</Link></li>
        <li><Link href="/account/reservations">Reservations</Link></li>
      </ul>
    </div>
  );
}
