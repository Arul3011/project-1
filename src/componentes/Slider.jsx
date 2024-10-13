import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
function Slider(props) {
  const [win, setwin] = useState(window.innerWidth);
  const wid = window.innerWidth;
  window.addEventListener("resize", () => {
    setwin(window.innerWidth);
  });
  const images = [
    {
      url: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/12/13/764629-waste-segregation-shutterstock.jpg",
    },
    {
      url: "https://upcyclingpro.com/wp-content/uploads/2020/02/recycle-57136_1280.jpg",
    },
    {
      url: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/12/13/764629-waste-segregation-shutterstock.jpg",
    },
    {
      url: "https://th.bing.com/th/id/OIP.097UKl31-qsQLzGzuFB3RAHaGN?rs=1&pid=ImgDetMain",
    },
  ];
  return (
    <div>
      <SimpleImageSlider
        width={wid - 100}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
        slideDuration={3}
      />
    </div>
  );
}

export default Slider;
