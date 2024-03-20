import { useEffect, useState } from "react";
import { ArrowUpCircleFill } from "react-bootstrap-icons";

const ButtonToTop = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log(scrollTop);
  }, [scrollTop]);
  return (
    <div className="text-end">
      <a href="#top">
        <ArrowUpCircleFill
          className={
            scrollTop > 1400
              ? "arrowUpDownBott display-2 contrast-text pointer"
              : scrollTop > 1225
              ? "arrowUpDownTop display-2 contrast-text pointer"
              : scrollTop > 950
              ? "arrowUpMidTop display-2 contrast-text pointer"
              : scrollTop > 600
              ? "arrowUpTop display-2 contrast-text pointer"
              : ""
          }
        />
      </a>
    </div>
  );
};
export default ButtonToTop;
