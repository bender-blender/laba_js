import Navigation from "../../../../_components/Navigation";

export const metadata = { title: "Edit Reservation | Wild Oasis" };

export default function EditReservationPage() {
  return (
    <div className="p-8">
      <Navigation />
      <h1 className="text-3xl mb-4">Edit Reservation</h1>
      <p>Modify your booking details here.</p>
    </div>
  );
}
