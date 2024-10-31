import img4 from "@/assets/image/biggerinterior.jpeg";
import img1 from "@/assets/image/estatehouseview.jpeg";
import img2 from "@/assets/image/plan.jpeg";
import img3 from "@/assets/image/skyapartment.jpeg";

type ImageCardProps = {};
const ImageCard: React.FC<ImageCardProps> = ({}) => {
  // const control = useAnimationControls();

  // const handleHover = () => {
  //   control.start("move");
  // };

  return (
    <div
      className="relative w-full overflow-hidden"
      // onMouseOver={handleHover}
      // onMouseLeave={() =>
      //   control.set({ top: "100%", transition: { duration: 0.2 } })
      // }
    >
      <img src={randImg()} alt="random image" />
      {/* <motion.div
        className="bg-[rgba(0,0,0,0.5)] z-[10] w-full h-full absolute"
        variants={{
          initial: {
            top: "100%",
            left: "0",
          },
          move: {
            top: "0%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
        initial={"initial"}
        exit={"initial"}
        animate={control}
      >
        <div></div>
      </motion.div> */}
    </div>
  );
};

export default ImageCard;

function randImg() {
  return [img1, img2, img3, img4][Math.floor(Math.random() * 4)];
}
