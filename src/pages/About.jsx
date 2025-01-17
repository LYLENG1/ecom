import React from "react";
import bg01 from "../assets/images/bg-01.jpg";
import about01 from "../assets/images/about-01.jpg";
import about02 from "../assets/images/about-02.jpg";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{ backgroundImage: `url(${bg01})` }}
      >
        <h2 className="ltext-105 cl0 txt-center">About</h2>
      </section>

      {/* Content Section */}
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          {/* Our Story */}
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">Our Story</h3>
                <p className="stext-113 cl6 p-b-26">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris consequat consequat enim, non auctor massa ultrices
                  non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                  tincidunt augue. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Maecenas varius
                  egestas diam, eu sodales metus scelerisque congue.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Maecenas gravida justo eu
                  arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum
                  eget, dictum enim.
                </p>
                <p className="stext-113 cl6 p-b-26">
                  Donec gravida lorem elit, quis condimentum ex semper sit amet.
                  Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
                  fringilla turpis in vehicula vehicula. Pellentesque congue ac
                  orci ut gravida.
                </p>
                <p className="stext-113 cl6 p-b-26">
                  Any questions? Let us know in store at 8th floor, 379 Hudson
                  St, New York, NY 10018 or call us on (+1) 96 716 6879.
                </p>
              </div>
            </div>
            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1">
                <div className="hov-img0">
                  <img src={about01} alt="Our Story" />
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="row">
            <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16">Our Mission</h3>
                <p className="stext-113 cl6 p-b-26">
                  Mauriss non lacinia magna. Sed nec lobortis dolor. Vestibulum
                  rhoncus dignissim risus, sed consectetur erat. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Nullam maximus mauris sit amet odio
                  convallis, in pharetra magna gravida. Praesent sed nunc
                  fermentum mi molestie tempor.
                </p>
                <div className="bor16 p-l-29 p-b-9 m-t-22">
                  <p className="stext-114 cl6 p-r-40 p-b-11">
                    Creativity is just connecting things. When you ask creative
                    people how they did something, they feel a little guilty
                    because they didn't really do it, they just saw something.
                    It seemed obvious to them after a while.
                  </p>
                  <span className="stext-111 cl8">- Steve Job’s</span>
                </div>
              </div>
            </div>
            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div className="how-bor2">
                <div className="hov-img0">
                  <img src={about02} alt="Our Mission" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
