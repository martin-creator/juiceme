import React from 'react';
import communityCards from 'data/App/business_offers.json';
import communityCardsrRTL from 'data/App/community-rtl.json';

const BusinessOffers = ({ rtl }) => {
  const data = rtl ? communityCardsrRTL : communityCards;

  return (
    <section className="community section-padding pt-0 style-4">
      <div className="container">
        <div className="section-head text-center style-4">
          <small className="title_small">{ rtl ? 'مجتمع نوتيرو' : 'Juiceme.Inc' }</small>
          <h2 className="mb-30">{ rtl ? 'انضم إلى' : 'Transform your ' } <span>{ rtl ? 'مركزنا' : 'business' }</span> </h2>
        </div>
        <div className="content">
          {
            data.map((item, index) => (
              <a href="#" className="commun-card" key={index}>
                {/* <div className="icon">
                  <i className={item.icon}></i>
                </div> */}
                <div className="inf">
                  <h5 className='mb-10' ><i className={`${item.icon} mr-2`}></i>&nbsp;{item.title}</h5>
                  <p>{ item.description }</p>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default BusinessOffers