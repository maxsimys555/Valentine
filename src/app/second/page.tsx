import ImagePairServer from "@/components/ImagePair/ImagePairServer";
import CenteredCard from "@/components/layout/CenteredCard";
import SecondContentClient from "./SecondContentClient";
import SecondFireworksClient from "./SecondFireworksClient";

export default function Home() {
  return (
    <div>
      <SecondFireworksClient />
      <CenteredCard>
        <ImagePairServer leftSrc="/smile19.webp" rightSrc="/smile19.webp" priority />
        <SecondContentClient />
        <ImagePairServer
          leftSrc="/smile19.webp"
          rightSrc="/smile19.webp"
          className="mt-17"
        />
      </CenteredCard>
    </div>
  );
}
