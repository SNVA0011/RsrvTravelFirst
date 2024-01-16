import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

const ScrollTop = ({ height }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > height) {
        setVisible(true);
      } else if (scrolled <= height) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const setTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {visible && (
        <button onClick={() => setTopScroll()} className="button-fxn">
          <Icon icon="noto-v1:top-arrow"/>
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
