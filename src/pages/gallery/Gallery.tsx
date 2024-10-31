import ImageCard from "@/common/cards/ImageCard";
import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import MansoryWrapper from "@/common/utilities/Mansory";

type GalleryProps = {};
const Gallery: React.FC<GalleryProps> = ({}) => {
  return (
    <CenterOnLgScreen>
      <section className="py-5">
        <h1 className="font-medium">Gallery/Elizabeth Court Home</h1>
      </section>
      <MansoryWrapper>
        {new Array(20).fill(undefined).map(() => (
          <ImageCard />
        ))}
      </MansoryWrapper>
    </CenterOnLgScreen>
  );
};

export default Gallery;
