import reliabilityImg from "public/images/reliability.jpg";
import Hero from "@/components/hero";

export default function ReliabiltyPage() {
  return (
    <div>
      <Hero
        imageAlt="welding"
        imgData={reliabilityImg}
        title="Super high reliability hosting"
      />
    </div>
  );
}
