import ImagePairServer from "@/components/ImagePair/ImagePairServer";
import CenteredCard from "@/components/layout/CenteredCard";
import ReadyChooseClient from "./ReadyChooseClient";

export default function Home() {
  return (
    <CenteredCard>
      <ImagePairServer leftSrc="/smile10.webp" rightSrc="/smile10.webp" priority />
      <ReadyChooseClient />
      <ImagePairServer leftSrc="/smile10.webp" rightSrc="/smile10.webp" />
    </CenteredCard>
  );
}
