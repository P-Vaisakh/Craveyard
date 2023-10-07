import React from "react";

function Footer() {
  return (
    <footer className="p-4">
      <div className="about">
        <h3>
          <span>C</span>raveyard
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          optio nulla deleniti voluptatibus recusandae assumenda, similique
          obcaecati atque iure quaerat.
        </p>
      </div>
      <div className="contact mx-auto mx-md-0">
        <h5 className="mb-4">Connect with us</h5>
        <i className=" fa-brands fa-instagram" style={{ color: "#fff" }}></i>
        <i
          className=" ms-4 fa-brands fa-facebook"
          style={{ color: "#fff" }}
        ></i>
        <i className=" ms-4 fa-brands fa-twitter" style={{ color: "#fff" }}></i>
      </div>
      <div className="w-100 rights">
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
