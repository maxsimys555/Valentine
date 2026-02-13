import ImagePairServer from "@/components/ImagePair/ImagePairServer";
import CenteredCard from "@/components/layout/CenteredCard";
import ChooseGiftClient from "./ChooseGiftClient";

export default function Page() {
  return (
    <CenteredCard>
      <ImagePairServer leftSrc="/smile13.webp" rightSrc="/smile13.webp" priority />
      <ChooseGiftClient />
      <ImagePairServer leftSrc="/smile13.webp" rightSrc="/smile13.webp" />
    </CenteredCard>
  );
}
