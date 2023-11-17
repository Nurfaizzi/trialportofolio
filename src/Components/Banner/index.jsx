import React from "react";
import "./style.css";
import { TypeAnimation } from "react-type-animation";
function Banner() {
  return (
    <div>
      <div className="text-sidebar">
        <h1>Hello, it's Me</h1>
        <h2 className="subheading-sidebar">Nurfaizzi Rasyid</h2>
        <div className="description-sidebar">
          
          <TypeAnimation
            sequence={["I'm  FrontEnd Developer", 500]}
            style={{
              fontSize: "2em",
              fontFamily: "Georgia, 'Times New Roman', Times, serif;",
              color: "aqua",
            }}
            repeat={Infinity}
          />
        </div>
        <p>I'm From Indonesia City Bogor</p>
        
        <div className="socialmedia">
          {/* <a href ="https://www.facebook.com/"   class="fa-brands fa-facebook-f fa-2xs"></a>
      <a href ="https://www.facebook.com/"   class="fa-brands fa-twitter  "></a>
      <a href ="https://www.instagram.com/"   class="fa-brands fa-instagram  "></a>
      <a href ="https://www.linkedin.com/in/nurfaizzi-rasyid-b518aa23b/"   class="fa-brands fa-linkedin "></a> */}
        </div>
        <a href="" className="btn">
          Dowload CV
        </a>
        <img
          className="image-banner"
          src="./src/assets/image/coba.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
