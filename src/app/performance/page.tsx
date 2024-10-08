import performanceImg from "public/images/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imageAlt="welding"
        imgData={performanceImg}
        title="We serve high perfomrance applications"
      />
    </div>
  );
}
