import React, { useEffect, useState } from "react";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

  return (
    <section className="my-20">
      <SectionsTitle
        subHeading="What Our Client Say"
        heading="Testimonials"
      ></SectionsTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        {
            reviews.map(review => <SwiperSlide
            key={review._id}
            ></SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
