import React from 'react';

const Integration = ({ integrations, rtl }) => {
  return (
    <div className="integration pt-60" data-scroll-index="3">
      <div className="section-head text-center style-4">
        <small className="title_small">{ rtl ? 'دفعة لمرة واحدة' : 'A Software Add-On' }</small>
        <h2 className="mb-20">{ rtl ? 'متوافق مع' : 'Juice works' } { rtl ? 'التطبيقات الشعبية' : 'with all HR systems' }</h2>
        <p>{ rtl ? 'نوتيرو يتكامل مع التطبيقات الشعبية. تساعدك على التواصل والتعاون بسهولة' : 'Juice is an  HR & Payroll add-on, compatible with any system to enhance its functionalities. ' }</p>
      </div>
      <div className="container">
        <div className="content">
          {
            integrations.map((integration, index) => (
              <div className="img" key={index}>
                <img src={integration} alt="" className="mt-30" />
              </div>
            ))
          }
        </div>
      </div>
      {/* <img src="/assets/img/about/intg_back.png" alt="" className="intg-back" /> */}
    </div>
  )
}

export default Integration