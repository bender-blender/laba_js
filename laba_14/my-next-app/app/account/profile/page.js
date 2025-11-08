import Navigation from "../../../_components/Navigation";

export const metadata = { title: "Profile | Wild Oasis" };

export default function ProfilePage() {
  return (
    <div className="p-8">
      <Navigation />
      <h1 className="text-3xl mb-4">Profile Settings</h1>
      <p>Edit your personal information here.</p>
    </div>
  );
}
