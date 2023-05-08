import React from "react";
import { Link } from "gatsby";
import footerData from "data/Startup/footer.json";
import footerDataRTL from "data/Startup/footer-rtl.json";

const Footer = ({ noWave, rtl }) => {
  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains("dropdown-toggle")
      ? event.target
      : event.target.querySelector(".dropdown-toggle");
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add("show");
    dropDownMenu?.classList?.add("show");
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains("dropdown")
      ? event.target
      : event.target.closest(".dropdown");
    const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
    const dropDownMenu = dropdown.querySelector(".dropdown-menu");

    dropDownToggler?.classList?.remove("show");
    dropDownMenu?.classList?.remove("show");
  };

  const FooterData = rtl ? footerDataRTL : footerData;

  return (
    <footer
      className={`style-4 ${noWave ? "mt-0 pt-100" : ""}`}
      data-scroll-index="8"
    >
      <div className="container">
        <div className="section-head text-center style-4">
          <h2 className="mb-10">
            {rtl ? "جاهز" : "Partner with "}{" "}
            {rtl ? "للتنزيل" : "Juice"}{" "}
          </h2>
          <p>
            {rtl
              ? "اكتشف مساحاتك المفضلة الجديدة ، من ساو باولو إلى سيول. قم بالتنزيل من App Store أو Google Play."
              : "Grow your business and become a truly employee centric organization"}
          </p>
          <div className="d-flex align-items-center justify-content-center mt-50">
            <a
              href="https://calendly.com/juiceme"
              className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
              rel="noreferrer"
              target="_blank"
            >
              <small> {rtl ? "تنزيل من متجر التطبيقات" : "Book Demo"}</small>
            </a>
            {/* <a href="https://play.google.com/store/apps" rel="noreferrer" className="btn rounded-pill hover-blue4 fw-bold border-blue4" target="_blank">
              <small> <i className="fab fa-google-play me-2 pe-2 border-end"></i> { rtl ? 'تنزيل من متجر ابل' : 'Download On Google Play' }</small>
            </a> */}
          </div>
        </div>

        <div className="foot mt-80 style-4">
          <div className="row align-items-center">
            <div className="row gx-0 justify-content-between">
              <div className="col-lg-4">
                <div className="items">
                  <div className="title">
                    {rtl ? "Itekseo - الأفضل في التسويق" : "Juiceme .Inc"}
                  </div>
                  <ul>
                    {/* <li className="color-666 mb-2">
                      <i className="bi bi-house me-1"></i>
                      {FooterData.address}
                    </li> */}
                    <li className="color-666 mb-2">
                      <i className="bi bi-phone me-1"></i>
                      {FooterData.phone}
                    </li>
                  </ul>
                  {/* <div className="socail-icons">
                <a href="twiter.com" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="facebook.com" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="instagram.com" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray">
                  <i className="fab fa-instagram"></i>
                </a>
              </div> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="items">
                  <div className="title ">{rtl ? "الخدمات" : "Legal"}</div>
                  <ul className="color-666">
                    <li>
                      <Link to="/home-app-terms">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-app-privacy">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-2">
            <div className="items">
              <div className="title">
                { rtl ? "المعلومات" : "Information" }
              </div>
              <ul>
                {
                  FooterData.information.map((information, index) => (
                    <li key={index}>
                      <Link to={information.link}>{ information.title }</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div> */}
              <div className="col-lg-4 stye">
                <div className="items">
                  <div className="title">
                    {rtl ? "النشرة الإخبارية" : "Contact"}
                  </div>
                  <p className="color-666">
                    {rtl
                      ? "سجل الآن للحصول على آخر التحديثات على"
                      : "For business chat with our team"}{" "}
                  </p>

                  <a href="mailto:business@juiceme.io">business@juiceme.io</a>
                  

                  {/* <form action="contact.php" className="form mt-30" method="post">
                <div className="form-group">
                  <span className="icon">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input type="text" placeholder={ rtl ? "ادخل بريدك الالكترونى" : "Enter your email" } />
                  <button> <i className="bi bi-send"></i> </button>
                </div>
              </form> */}
                  {/* <small className="color-666 fst-italic mt-20">{ rtl ? "من خلال الاشتراك ، فإنك توافق على" : "By subscribing, you accepted the our" } <a href="#" className="fst-normal text-dark">{ rtl ? "سياستنا." : "Policy." }</a> </small> */}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-2">
              <div className="logo">
                <img src="/assets/img/logo_lgr.png" alt="" />
              </div>
            </div> */}
            {/* <div className="col-lg-8">
              <ul className="links">
                <li>
                  <Link to="/home-app-landing" className="active">{ rtl ? 'الرئيسية' : 'Home' }</Link>
                </li>
                <li>
                  <Link to="/page-about-5">{ rtl ? 'من نحن' : 'about' }</Link>
                </li>
                <li>
                  <Link to="/page-product-5">{ rtl ? 'المنتجات' : 'product' }</Link>
                </li>
                <li>
                  <Link to="/page-portfolio-5">{ rtl ? 'المشاريع' : 'portfolio' }</Link>
                </li>
                <li>
                  <Link to="/page-services-5">{ rtl ? 'الخدمات' : 'services' }</Link>
                </li>
                <li>
                  <Link to="/page-shop-5">{ rtl ? 'المتجر' : 'shop' }</Link>
                </li>
                <li>
                  <Link to="/page-blog-5">{ rtl ? 'الاخبار' : 'blog' }</Link>
                </li>
                <li>
                  <Link to="/page-contact-5">{ rtl ? 'اتصل بنا' : 'contact' }</Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="col-lg-2">
              {
                rtl ?
                (
                  <div className="dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <button className="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/assets/img/lang.png" alt="" className="me-2" />
                        <small>العربية</small>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">English</a></li>
                    </ul>
                  </div>
                )
                :
                (
                  <div className="dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <button className="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/assets/img/lang.png" alt="" className="me-2" />
                        <small>English</small>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">English</a></li>
                      <li><a className="dropdown-item" href="#">Arabic</a></li>
                    </ul>
                  </div>
                )
              }
            </div> */}
          </div>
        </div>
        <div className="copywrite text-center">
          <small className="small">
            {rtl ? "© 2022 حقوق التأليف والنشر" : "© 2022 Copyrights by"}{" "}
            <a href="#" className="fw-bold text-decoration-underline">
              Juiceme.Inc
            </a>{" "}
            {/* {rtl
              ? "كل الحقوق محفوظة. صمم بواسطة"
              : "All Rights Reserved. Designed by"}{" "}
            <a
              href="https://themeforest.net/user/themescamp"
              className="fw-bold text-decoration-underline"
            >
              ThemesCamp
            </a> */}
          </small>
        </div>
      </div>
      {!noWave && (
        <img
          src="/assets/img/footer/footer_4_wave.png"
          alt=""
          className="wave"
        />
      )}
    </footer>
  );
};

export default Footer;
