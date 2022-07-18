import React from "react";
import './styles.css'
import './mobile.css'

const Subscribe = () => {
  return (
    <>
      <section className="subscribe">
        <div className="container">
          <div className="subscribe-box">
            <div className="subscribe-title">
              <h2>
                By the vanguard of the
                <br />
                <span>Moviegoers</span>
              </h2>
            </div>
            <div className="content-subscribe">
              <input type="text" placeholder="Type your email" />
              <button>Join now</button>
            </div>
            <div className="subscribe-details">
              <p>
                By joining you as a tickitz member,
                <br />
                we will always send you the latest update via email
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
