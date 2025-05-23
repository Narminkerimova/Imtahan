import React from "react";
import Cards from "./Cards";
import "./style.css";

function Home() {
  return (
    <>
      <title>Home Page</title>

      <div className="website_container">
        <section className="hero">
          <div className="hero_info">
            <h1>Wood & cloth sofa</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              animi, nemo voluptas, sapiente nulla doloribus ipsum repellendus.
            </p>
            <button>buy now</button>
          </div>
          <div className="hero_image">
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp"
              alt="hero Image"
            />
          </div>
        </section>

        <section className="featured_category">
          <h2>Featured Category</h2>
          <div className="featured_box1">
            <div className="left_category1">
              <div className="category_box_info1">
                <h4>Premium Quality</h4>
                <p>Latest foam Sofa</p>
              </div>
              <div className="category_box_image1">
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png.webp"
                  alt="featured"
                />
              </div>
            </div>
            <div className="right_category1">
              <div className="category_box_info1">
                <h4>Premium Quality</h4>
                <p>Latest foam Sofa</p>
              </div>
              <div className="category_box_image1">
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp"
                  alt="featured"
                />
              </div>
            </div>
          </div>
          <div className="featured_box2">
            <div className="left_category2">
              <div className="category_box_info2">
                <h4>Premium Quality</h4>
                <p>Latest foam Sofa</p>
              </div>
              <div className="category_box_image2">
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png.webp"
                  alt="featured"
                />
              </div>
            </div>
            <div className="right_category2">
              <div className="category_box_info2">
                <h4>Premium Quality</h4>
                <p>Latest foam Sofa</p>
              </div>
              <div className="category_box_image2">
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_4.png.webp"
                  alt="featured"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="awesome_products">
          <h3>Awesome</h3>
          <Cards />
        </section>

        <section className="weeklySection">
          <div className="weekly_image">
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png.webp"
              alt="weekly"
            />
          </div>
          <div className="weekly_info">
            <h5>Weekly Sale on 60% Off All Products</h5>
            <div className="weekly_time">
              <div className="weekly_time_day">
                <div className="time_header">days</div>
                <div className="time_num">-2066</div>
              </div>
              <div className="weekly_time_hours">
                <div className="time_header">hours</div>
                <div className="time_num">21</div>
              </div>
              <div className="weekly_time_minutes">
                <div className="time_header">minutes</div>
                <div className="time_num">08</div>
              </div>
              <div className="weekly_time_seconds">
                <div className="time_header">seconds</div>
                <div className="time_num">05</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bestSellers">
          <h3>Best Sellers </h3>
          <div className="bestSellers">
            <div className="bestCard">
              <div className="best_card_image">
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp"
                  alt="chair"
                />
              </div>
              <div className="best_card_title">
                <div className="best_name">Quartz Belt Watch</div>
                <div className="best_price">$150.00</div>
              </div>
            </div>
            <div className="bestCard">
              <div className="best_card_image">
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp"
                  alt="chair"
                />
              </div>
              <div className="best_card_title">
                <div className="best_name">Quartz Belt Watch</div>
                <div className="best_price">$150.00</div>
              </div>
            </div>
            <div className="bestCard">
              <div className="best_card_image">
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp"
                  alt="chair"
                />
              </div>
              <div className="best_card_title">
                <div className="best_name">Quartz Belt Watch</div>
                <div className="best_price">$150.00</div>
              </div>
            </div>
            <div className="bestCard">
              <div className="best_card_image">
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp"
                  alt="chair"
                />
              </div>
              <div className="best_card_title">
                <div className="best_name">Quartz Belt Watch</div>
                <div className="best_price">$150.00</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
