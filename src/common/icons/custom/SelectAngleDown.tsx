import AngleRight from "../pack/AngleRight";

const SelectAngleDown: React.FC<{ className: string }> = ({ ...props }) => {
  return (
    <span className={`mr-4 rotate-[90deg] ${props.className}`}>
      <AngleRight stroke="#595959" strokeWidth="2" />
    </span>
  );
};

export default SelectAngleDown;
