// import { useSelector } from "react-redux";

import IconsSingleRow from "./IconsSingleRow";

const Icons = () => {
  // const selectedPage = useSelector((state) => state.Page.pageSelected[0]);
  return (
    <>
      <div className="containerDiv ">
        <div className="scroll">
          <IconsSingleRow />
        </div>
        <div className="scroll2">
          <IconsSingleRow />
        </div>
      </div>
      <div className="containerDiv ">
        <div className="scroll3">
          <IconsSingleRow />
        </div>
        <div className="scroll4">
          <IconsSingleRow />
        </div>
      </div>
      <div className="containerDiv ">
        <div className="scroll5">
          <IconsSingleRow />
        </div>
        <div className="scroll6">
          <IconsSingleRow />
        </div>
      </div>
    </>
  );
};
export default Icons;
