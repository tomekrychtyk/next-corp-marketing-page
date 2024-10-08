import scaleImg from "public/images/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <div>
      <Hero
        imageAlt="steel factory"
        imgData={scaleImg}
        title="Scale your app to infinity"
      />
    </div>
  );
}
