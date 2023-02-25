import React from "react";
import appstore from "../images/app-store.svg"
import playstore from "../images/google-play.svg"

function Footer() {
  return (
    <div>
      <div className="footer-1 d-flex mx-3">
        <div className="footer-part-1">
          <h6>ELECTRONICS</h6>
          <ul>
            <li>Mobiles</li>
            <li>Tablets</li>
            <li>Laptops</li>
            <li>Home Appliances</li>
            <li>Camera, Photo & Video</li>
            <li>Televisions</li>
            <li>Headphones</li>
            <li>Video Games</li>
          </ul>
        </div>
        <div className="footer-part-2">
          <h6>FASHION</h6>
          <ul>
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Girls' Fashion</li>
            <li>Boys' Fashion</li>
            <li>Watches</li>
            <li>Jewellery</li>
            <li>Women's Handbags</li>
            <li>Men's Eyewear</li>
          </ul>
        </div>
        <div className="footer-part-3">
          <h6>HOME AND KITCHEN</h6>
          <ul>
            <li>Bath</li>
            <li>Home Decor</li>
            <li>Kitchen & Dining</li>
            <li>Tools & Home Improvement</li>
            <li>Audio & Video</li>
            <li>Furniture</li>
            <li>Patio, Lawn & Garden</li>
            <li>Pet Supplies</li>
          </ul>
        </div>
        <div className="footer-part-4">
          <h6>BEAUTY</h6>
          <ul>
            <li>Fragrance</li>
            <li>Make-Up</li>
            <li>Haircare</li>
            <li>Skincare</li>
            <li>Bath & Body</li>
            <li>Electronic Beauty Tools</li>
            <li>Men's Grooming</li>
            <li>Health Care Essentials</li>
          </ul>
        </div>
        <div className="footer-part-5">
          <h6>BABY & TOYS</h6>
          <ul>
            <li>Diapering</li>
            <li>Baby Transport</li>
            <li>Nursing & Feeding</li>
            <li>Baby & Kids Fashion</li>
            <li>Baby & Toddler Toys</li>
            <li>Tricycles & Scooters</li>
            <li>Board Games & Cards</li>
            <li>Outdoor Play</li>
          </ul>
        </div>
        <div className="footer-part-6">
          <h6>TOP BRANDS</h6>
          <ul>
            <li>Pampers</li>
            <li>Apple</li>
            <li>Nike</li>
            <li>Samsung</li>
            <li>Tefal</li>
            <li>L'Oréal Paris</li>
            <li>Skechers</li>
            <li>BLACK+DECKER</li>
            <li>Valentine's Day Offers</li>
            <li>Ramadan Sale Offers</li>
          </ul>
        </div>
        <div className="footer-part-7">
          <h6>DAILY GROCERIES</h6>
          <ul>
            <li>Fresh Produce</li>
            <li>Dairy & Eggs</li>
            <li>Bread & Bakery</li>
            <li>Meat & Seafood</li>
            <li>Breakfast Food</li>
            <li>Pantry Staples</li>
            <li>Household Supplies</li>
            <li>Personal Care</li>
          </ul>
        </div>
      </div>
      <div className="footer-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-5">
                    <div className="mx-4 mb-0">
                    <p className="fw-bold">SHOP ON THE GO</p>
                    </div>
                    <div className="d-inline me-5 mb-5">
                    <img src={appstore} width="100px"/>
                    <img src={playstore} width="100px"/>
                </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="footer-3"></div>
    </div>
  );
}

export default Footer;
