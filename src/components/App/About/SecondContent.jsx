import React from 'react';

const SecondContent = ({ accordions, rtl, features }) => {
  return (
    <div className="content sec-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">{ rtl ? 'إدارة أفضل للملاحظات' : 'HR and Payroll Management' }</small>
                <h2 className="mb-30">{ rtl ? 'ملاحظاتك' : 'Leveraging WhatsApp ' }  { rtl ? 'في امان' : 'to Improve your HR and Payroll System' }</h2>
              </div>
              

              <p className="text mb-40">
                {
                 rtl ? 
                 'يتزامن تلقائيًا عبر جميع أجهزتك. يمكنك أيضًا الوصول إلى الملاحظات وكتابتها بدون اتصال بالإنترنت'
                 :
                 "Our holistic HR system caters to both desk and deskless employees by leveraging the power of WhatsApp. With Juice's WhatsApp chatbot, employees can instantly communicate, send payslips within seconds, conduct surveys, and track attendance. This customer-centric technology is fast, saves you time and money, and removes friction for staff by turning everyday employee needs into self-serve tasks that can be completed in seconds, at their own convenience."
                }
                
              </p>
              {/* <ul>
                {
                  features.map((item, index) => (
                    <li className="d-flex align-items-center mb-3" key={index}>
                      <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                        <i className={item.icon}></i>
                      </small>
                      <h6 className="fw-bold">{item.title}</h6>
                    </li>
                  ))
                }
              </ul> */}

              <a href="https://calendly.com/juiceme"
                rel="noreferrer"
                target="_blank" className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                <small> Get Started </small>
              </a>
              {/* <div className="faq style-3 style-4">
                <div className="accordion" id="accordionExample">
                  {
                    accordions.map((accordion, index) => (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${accordion.id}`}>
                          <button className={`accordion-button ${index !== 0 ?'collapsed':''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${accordion.id}`} aria-expanded="true" aria-controls={`collapse${accordion.id}`}>
                            { accordion.title }
                          </button>
                        </h2>
                        <div id={`collapse${accordion.id}`} className={`accordion-collapse collapse ${index === 0 ?'show':''}`} aria-labelledby={`heading${accordion.id}`} data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            { accordion.content }
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div> */}
              {/* <a href="https://chrome.google.com/webstore/category/extensions" rel="noreferrer" className="btn btn-img mt-40 rounded-pill" target="_blank">
                <div className="icon img-contain">
                  <img src="/assets/img/icons/chrome_icon.png" alt="" />
                </div>
                <div className="inf">
                  <small>{ rtl ? 'متاح في' : 'Available in the' }</small>
                  <h6>{ rtl ? 'متجر كروم الالكتروني' : 'Chrome Web Store' }</h6>
                </div>
              </a> */}
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/payroll.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <img src="/assets/img/about/about_s4_bubble2.png" alt="" className="bubble2" /> */}
    </div>
  )
}

export default SecondContent