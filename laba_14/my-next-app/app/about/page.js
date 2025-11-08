import Navigation from "../../_components/Navigation";
import Image from "next/image";
import image1 from "../../public/about-1.jpg";
import image2 from "../../public/about-2.jpg";

export const metadata = { title: "About | Wild Oasis" };

export default function AboutPage() {
  return (
    <div className="p-10">
      <Navigation />
      <h1 className="text-4xl mb-8">About Wild Oasis</h1>
      <p className="mb-6 max-w-3xl">
        Wild Oasis is a luxurious hotel in the heart of nature...
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Image src={image1} alt="Cabin exterior" placeholder="blur" className="object-cover" />
        <Image src={image2} alt="Cabin interior" placeholder="blur" className="object-cover" />
      </div>
    </div>
  );
}
