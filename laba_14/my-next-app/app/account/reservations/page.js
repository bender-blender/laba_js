import Navigation from "../../../_components/Navigation";

export const metadata = { title: "Reservations | Wild Oasis" };

export default function ReservationsPage() {
  return (
    <div className="p-8">
      <Navigation />
      <h1 className="text-3xl mb-4">Your Reservations</h1>
      <p>List of all current and past bookings.</p>
    </div>
  );
}
