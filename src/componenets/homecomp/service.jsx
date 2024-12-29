import React from "react";
import "../../assets/css/service.css";

export default function Service() {
  return (
    <>
      <div className="service-section">
        <h3>Services</h3>
        <div className="service-items">
          <div className="item-1">
            <div className="icon-service">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <h3>Graphic Designer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quidem sequi aliquid soluta optio dolor?
            </p>
          </div>
          <div className="item-1">
            <div className="icon-service">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <h3>UI-UX Designer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quidem sequi aliquid soluta optio dolor?
            </p>
          </div>
          <div className="item-1">
            <div className="icon-service">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <h3>Web Designer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quidem sequi aliquid soluta optio dolor?
            </p>
          </div>
          <div className="item-1">
            <div className="icon-service">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quidem sequi aliquid soluta optio dolor?
            </p>
          </div>
          <div className="item-1">
            <div className="icon-service">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <h3>Adobe Photoshop</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quidem sequi aliquid soluta optio dolor?
            </p>
          </div>
          <div className="item-1">
            <div className="icon-service">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <h3>React Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quidem sequi aliquid soluta optio dolor?
            </p>
          </div>
        </div>
      </div>

      <div className="contact-us">
        <h3>Contact Us</h3>
        <div className="parent-container">
          <div className="contact-left">
            <form action="">
                <div className="form-tab">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="form-tab">
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="form-tab">
                    <label htmlFor="">Message</label>
                    <textarea name="" id=""></textarea>
                </div>
                <div className="form-tab">
                    <input type="submit" name="" id="" />
                </div>
            </form>
          </div>
          <div className="contact-right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4094.4052052599554!2d73.37868429124177!3d30.351783744070815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393d59f187397549%3A0x592ecfeadec8ba53!2sKhan%20Pura%20P%C4%81kpattan%2C%20Pakpattan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735474588242!5m2!1sen!2s" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>          </div>
        </div>
      </div>
    </>
  );
}
