import React from "react";
import "./styles.css";
import "./mobile.css";
import hp1 from "../../../../assets/homepage/hp1.png";
import hp2 from "../../../../assets/homepage/hp2.png";
import hp3 from "../../../../assets/homepage/hp3.png";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title">
                <h2>Nearest Cinema. Newest Movie.</h2>
                <h1>Find out now!</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="imgBox">
                <div className="cards">
                  <img src={hp1} alt="spiderman" />
                </div>
                <div className="cards">
                  <img src={hp2} alt="lion king" />
                </div>
                <div className="cards">
                  <img src={hp3} alt="avenger" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
