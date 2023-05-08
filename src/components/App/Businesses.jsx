import React, { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Business = ({ rtl }) => {
  const [isOpen, setOpen] = useState(false);

//   const openVideo = (e) => {
//     e.preventDefault();
//     setOpen(true);
//   }

  return (
    <header className="style-4" data-scroll-index="0">
      <div className="content">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-7">
              <div className="info mb-20 pb-40">
               

                <small className="mb-50 title_small">{ /*rtl ? 'نوتيرو - تطبيق مذكرة سهل الاستخدام' : 'Notero - Easy Notes App' */}</small>
                <h1 className="mb-50">{ rtl ? 'احفظ' : 'Through Juiceme, you can turn' } <span>{ rtl ? 'كل شئ' : ' your unpaid invoices ' }</span> { rtl ? 'على التطبيق' : 'into cash' }</h1>
                <p className="text">{ rtl ? 'لا يلزم الترميز لإجراء التخصيصات. يحتوي المُخصص المباشر' : 'Get access to immediate capital using your outstanding invoices.' }<br />{ rtl ? 'على كل ما تحتاجه.' : 'Pay your supplier and cover operational expenses with no downtime.' }</p>
                <a href="page-contact-5.html" className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                <small>Get Started </small>

              </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img">
                <img src="/assets/img/header/header_4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/header/header_4_bubble.png" alt="" className="bubble" />
      </div>
      {/* <img src="/assets/img/header/header_4_wave.png" alt="" className="wave" /> */}
      {/* {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="pGbIOC83-So"
              onClose={() => setOpen(false)}
            />
          )
      } */}
    </header>
  )
}

export default Business;