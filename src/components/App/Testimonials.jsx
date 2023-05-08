import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import testimonials from 'data/app/testimonials.json';
import testimonialsRTL from 'data/App/testimonials-rtl.json';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay]);

const Testimonials = ({ rtl }) => {
  const testimonialsData = rtl ? testimonialsRTL : testimonials;

  return (
    <section className="testimonials section-padding bg-white style-4" data-scroll-index="5">
      <div className="container">
        <div className="section-head text-center mb-60 style-4">
          <h2 className="mb-20">{ rtl ? 'مراجعات' : "Don't just take" } { rtl ? 'العملاء' : " our word for it" }</h2>
          <p>{ rtl ? 'لقد أحببت Iteck من آلاف العملاء في جميع أنحاء العالم وحصلت على ثقة من الشركات الكبرى.' : 'We are transforming employees lives and growing African businesses' }</p>
        </div>
      </div>
      <div className="content">
        <div className="testimonial-slider position-relative style-5">
          <Swiper
            className="swiper-container pb-70"
            spaceBetween={0}
            slidesPerView={4}
            speed={1000}
            pagination={{
              el: ".testimonial-slider.style-5 .swiper-pagination",
              clickable: true,
            }}
            navigation={false}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              787: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              }
            }}
          >
            {
              testimonialsData.map((testimonial, i) => (
                <SwiperSlide key={i}>
                  <a href="#" className="testi-card style-5">
                    <div className="stars">
                      { Array(testimonial.stars).fill().map((_, t) => (<i className="fas fa-star" key={t}></i>)) }
                    </div>
                    <div className="text">
                      { testimonial.comment }
                    </div>
                    <div className="user mt-40 text-center">
                      {/* <div className="icon-80 rounded-circle img-cover overflow-hidden m-auto">
                        <img src={testimonial.author.image} alt="" />
                      </div> */}
                      <h6>{ testimonial.author.name }</h6>
                      {/* <small>{ testimonial.author.position }</small> */}
                    </div>
                  </a>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials



























// import React, { useState } from 'react';
// import ModalVideo from "react-modal-video";
// import testimonialsData from 'data/App/testimonials.json';
// import testimonialsDataRTL from 'data/App/testimonials-rtl.json';
// import "react-modal-video/css/modal-video.css";

// const Testimonials = ({ rtl }) => {
//   const [isOpen, setOpen] = useState(false);
//   const data = rtl ? testimonialsDataRTL : testimonialsData;

//   const openVideo = (e) => {
//     e.preventDefault();
//     setOpen(true);
//   }

//   return (
//     <section className="testimonials style-4 pt-70" data-scroll-index="5">
//       <div className="container">
//         <div className="content">
//           <div className="row">
//             <div className="col-lg-7">
//               <div className="section-head style-4">
//                 <small className="title_small">{ rtl ? 'اراء العملاء' : 'Testimonials' }</small>
//                 <h2 className="mb-30">{ rtl ? 'محبوب من' : 'Arrange a Demo' } <span>{ rtl ? 'العملاء' : 'or Request a Free Consultation' }</span></h2>
//               </div>
//               <p className="text mb-40">
//                 { rtl ? 'أحب نوتيرو من آلاف العملاء في جميع أنحاء العالم وحصل على الثقة من الشركات الكبرى.' : 'Notero loved from thoudsands customer worldwide and get trusted from big companies.' }
//               </p>
//               {/* <div className="numbs">
//                 {
//                   data.numCards.map((card, index) => (
//                     <div className="num-card" key={index}>
//                       <div className="icon img-contain">
//                         <img src={card.image} alt="" />
//                       </div>
//                       <h2>{ card.value }</h2>
//                       {
//                         card.stars &&
//                         <div className="stars">
//                           { Array(card.stars).fill().map((_,i) => <i className="fas fa-star" key={i}></i>) }
//                         </div>
//                       }
//                       <p>{ typeof card.type === 'string' ? card.type : (<>{card.type.text1} <br /> {card.type.text2}</>) }</p>
//                     </div>
//                   ))
//                 }
//               </div> */}
//               {/* <div className="d-flex align-items-center mt-70">
//                 <a href="https://www.apple.com/app-store" rel="noreferrer" className="btn rounded-pill bg-blue4 fw-bold text-white me-4" target="_blank">
//                   <small> { rtl ? 'انظر التعليقات على متجر التطبيقات' : 'See Reviews On App Store' }</small>
//                 </a>
//                 <a href="https://youtu.be/pGbIOC83-So?t=21" className="play-btn" onClick={openVideo}>
//                   <span className="icon me-2">
//                     <i className="fas fa-play ms-1"></i>
//                   </span>
//                   <strong className="small">{ rtl ? 'مشاهده' : 'View' } <br />{ rtl ? 'البرومو' : 'Promotion' }</strong>
//                 </a>
//               </div> */}
//             </div>
//             <div className="col-lg-7">
//               {/* <div className="testi-cards">
//                 {
//                   data.testiCards.map((card, index) => (
//                     <div className="client_card" key={index}>
//                       <div className="user_img">
//                         <img src={card.userImg} alt="" />
//                       </div>
//                       <div className="inf_content">
//                         <div className="stars mb-2">
//                           { Array(card.stars).fill().map((_,i) => <i className="fas fa-star" key={i}></i>) }
//                         </div>
//                         <h6>
//                           { typeof card.title === 'string' ? card.title : (<>{card.title.text1} <br /> {card.title.text2}</>) }
//                         </h6>
//                         <p>{ card.author.name } <span className="text-muted"> /  { card.author.position } { rtl ? 'في' : 'at' } <span>{ card.author.company }</span> </span></p>
//                       </div>
//                     </div>
//                   ))
//                 }
//                 <img src="/assets/img/contact_globe.svg" alt="" className="testi-globe" />
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {
//         typeof window !== "undefined" && 
//           (
//             <ModalVideo
//               channel="youtube"
//               autoplay
//               isOpen={isOpen}
//               videoId="pGbIOC83-So"
//               onClose={() => setOpen(false)}
//             />
//           )
//       }
//     </section>
//   )
// }

// export default Testimonials