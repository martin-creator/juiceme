import React from 'react';
import clients from 'data/App/clients.json';

const Companies = ({ rtl }) => {
  return (
    <section className="clients style-4">
       <div className="container mt-60 mb-60">
        {/* <div className="text-center pb-30">
          <h2 className="fw-bold mb-20"><span className="color-blue4"> Our Mission</span></h2>
          <p className="fw-bold mb-60"><span className="color-blue4">{ rtl ? '25K+ تحميل' : 'Unlocking the economic value of the Africa.....' }</span> { rtl ? 'واستخدام الخدمات' : 'and Featured on' }</p>
        </div>  */}
        <div className="text-center pb-30">
          <h2 className="fw-bold  mt-40 mb-0 pt-30"><span className="color-blue4"> Juice  is trusted by leading companies</span></h2>
        </div>
       
        <div className="client-logos pb-70 pt-40 text-center ">
          <div className="row align-items-center">
            {
              clients.map((client, index) => (
                <div className="col-6 col-lg-6" key={index}>
                  <a href="#" className="img d-block ">
                    <img src={client} alt="" />
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies