import homeImg from "public/images/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Hero
        imageAlt="Car Factory"
        imgData={homeImg}
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
