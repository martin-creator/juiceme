import React from "react";

const FirstContent = ({ features, rtl }) => {
  return (
    <div className="content frs-content" id="about" data-scroll-index="2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/sme.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">
                  {rtl
                    ? "نوتيرو - تطبيق مذكرة سهل الاستخدام"
                    : "Working Capital Financing"}
                </small>

                <h2 className="mb-30">
                  {rtl ? "تطبيق لاصحاب" : " Supporting SMEs "}{" "}
                  {rtl ? "الابداع" : "Grow their Businesses"}{" "}
                </h2>
              </div>
              <p className="text mb-40">
                {rtl &&
                  "حافظ على تركيزك وإنتاجيتك مع مساحة  خالية من الفوضى. الطرق المرنة لتنظيم ملاحظاتك: علامات التجزئة ، دفاتر الملاحظات المتداخلة ، تثبيت الملاحظات في أعلى قائمة الملاحظات ، إلخ."}
                {!rtl && (
                  <>
                    Juice enables your business to turn your unpaid invoices
                    into cash so that you can pay your supplier and cover
                    operational expenses with no downtime. Let’s say you got an
                    order to make school uniforms and you do not have the money
                    to pay suppliers for the materials. Do not worry, Juice will
                    pay them up to 80% of the total amount on invoices they
                    issue to you. We would not end there, we will also pay you
                    up to 80% of the amount upfront on the invoices you issue to
                    your customers, so you can cover your operating costs and
                    grow your business.
                  </>
                )}
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
              <a
                href="https://calendly.com/juiceme"
                rel="noreferrer"
                target="_blank"
                className="btn rounded-pill bg-blue4 fw-bold text-white mt-50"
              >
                <small> Apply Now </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_lines.png"
        alt=""
        className="lines"
      />
      {/* <img src="/assets/img/about/about_s4_bubble.png" alt="" className="bubble" /> */}
    </div>
  );
};

export default FirstContent;
