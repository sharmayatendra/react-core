import CarouselImg1 from "../assets/img/carousel-img1.webp";
import CarouselImg2 from "../assets/img/carousel-img2.webp";
import CarouselImg3 from "../assets/img/carousel-img3.webp";
import CarouselImg4 from "../assets/img/carousel-img4.webp";
import CarouselImg5 from "../assets/img/carousel-img5.webp";
import CarouselImg6 from "../assets/img/carousel-img6.webp";

const Carousel = () => {
  return (
    <div className="hidden sm:flex bg-current flex-wrap  gap-8 p-16 ">
      {/* <div className="w-96 "> */}
      <div className="flex  gap-8 w-72">
        <img src={CarouselImg1} alt="" className="w-full" />
        {/* </div> */}
        {/* <div className="w-96"> */}
        <img src={CarouselImg2} alt="" className="w-full" />
        {/* </div> */}
        {/* <div className="w-96"> */}
        <img src={CarouselImg3} alt="" className="w-full" />
        {/* </div> */}
        {/* <div className="w-96"> */}
        <img src={CarouselImg4} alt="" className="w-full" />
        {/* </div> */}
        {/* <div className="w-96"> */}
        {/* <img src={CarouselImg5} alt="" className="w-full" /> */}
        {/* </div> */}
        {/* <div className="w-96"> */}
        {/* <img src={CarouselImg6} alt="" className="w-full" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Carousel;
