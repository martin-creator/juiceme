import React from 'react';
import features from 'data/App/data.json';
import featuresRTL from 'data/App/features-rtl.json';

const Features = ({ rtl }) => {
  const featuresData = rtl ? featuresRTL : features;

  return (
    <section className="features pt-30 pb-30 style-4" data-scroll-index="1">
      <div className="container">
        {/* <div className="section-head text-center style-4">
          <small className="title_small bg-white">{ rtl ? 'نوتيرو - تطبيق مذكرة سهل الاستخدام' : 'Notero - Easy Notes App' }</small>
          <h2 className="mb-70">{ rtl ? 'خدمات' : 'Awesome' } <span> { rtl ? 'رائعة' : 'Features' } </span> </h2>
        </div> */}
        <div className="content">
          {
            featuresData.map((feature, index) => (
              <div className="features-card" key={index}>
                <div className="text-center mb-20  ">
                  {/* <img src={feature.image} alt="" /> */}
                  <h3>{ feature.title }</h3>
                  {/* { feature.new && <span className="label icon-40 alert-success text-success rounded-circle small text-uppercase fw-bold">{ rtl ? 'جديد' : 'new' }</span> } */}
                </div>
                <p>{ feature.description.text1 }</p>
              </div>
            ))
          }
        </div>
      </div>
      {/* <img src="/assets/img/feat_circle.png" alt="" className="img-circle" /> */}
    </section>
  )
}

export default Features