import React from "react";
import { Link } from "gatsby";
import TypeWritter from "components/App/Typewritter";
// import TextAnimation from 'react-text-animation'

const ThirdContent = ({ features, rtl }) => {
  // const sentenceFragmentOne = "Does your employee have";

  // let sentenceFragmentMiddle = [
  //   "a medical bill",
  //   "a family emergency",
  //   "an unexpected travel",
  //   "a car repair",
  //   "an expense",
  // ];

  // const sentenceFragmentTwo = "that they can’t wait until payday?";

  // const sentences = sentenceFragmentMiddle.map(
  //   (fragment) => `${sentenceFragmentOne} ${fragment} ${sentenceFragmentTwo}`
  // );

  return (
    <div className="content trd-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/payday.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">
                  {rtl ? "ثيمات جميلة" : "Providing Earned Wage Access"}
                </small>

                <h2 className="mb-30">
                  {rtl ? "ركز أكثر مع" : "Any day is"}{" "}
                  {rtl ? "المظهر الداكن" : "Payday"}{" "}
                </h2>
              </div>
              {/* <p className="text mb-20">
                {rtl
                  ? "قم بتطبيق سمات نوتيرو الأنيقة حسب ذوقك. تعمل السمات المظلمة بشكل ممتاز لأولئك الذين يفضلون الوضع الخالي من الإلهاء."
                  : "Juice ensures that anyday is payday for your employees"}
              </p> */}

              {/* <TextAnimation text={'hello'} /> */}

              <TypeWritter />
              {/* <ul>
                {
                  features.map((feature, index) => (
                    <li className={`d-flex align-items-center ${feature.active ? '':'op-4'}`} key={index}>
                      <i className="bi bi-dot fs-2 me-2 lh-1 color-blue4"></i>
                      <h6 className="fw-bold">{ feature.title }</h6>
                    </li>
                  ))
                }
              </ul> */}

              <p className="text mb-40">
                By providing this solution at zero cost to your organisation
                with no changes to your payroll structure, your company becomes
                an employer of choice, attracts and retains top talent, and
                boots productivity.
              </p>
              <a
                href="https://calendly.com/juiceme"
                rel="noreferrer"
                target="_blank"
                className="btn rounded-pill bg-blue4 fw-bold text-white mt-50"
              >
                <small> Get Started </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="/assets/img/about/about_s4_bubble.png"
        alt=""
        className="bubble"
      /> */}
    </div>
  );
};

export default ThirdContent;
