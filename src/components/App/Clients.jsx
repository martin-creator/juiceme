import React from 'react';
import clients from 'data/App/clients.json';

const Clients = ({ rtl }) => {
  return (
    <section className="clients style-4">
      <div className="container mb-60">
        <div className="text-center pb-30">
          <h1 className="fw-bold mb-20"><span className=""> Our Mission</span></h1>
          <h4 className="fw-bold mb-60"><span className="color-blue4">{ rtl ? '25K+ تحميل' : 'Unlocking economic value for African employees and SMEs' }</span></h4>
        </div>
        {/* <div className="client-logos pb-70">
          <div className="row align-items-center">
            {
              clients.map((client, index) => (
                <div className="col-6 col-lg-2" key={index}>
                  <a href="#" className="img d-block">
                    <img src={client} alt="" />
                  </a>
                </div>
              ))
            }
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Clients