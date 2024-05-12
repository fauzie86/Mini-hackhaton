import React from "react";
import "./Style_fauzi.css";

function OurStoryFauzi() {
  return (
    <div>
      <h1 style={{ color: "brown", textAlign: "center", fontStyle: "italic" }}>Our Story</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-50 carousel-image"
              src="image1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50 carousel-image"
              src="image2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50 carousel-image"
              src="image3.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container">
        <p style={{fontSize:"20px", color: "grey"}}>
          Welcome to Odin Coffee, where passion meets perfection in every cup.
          Our story begins with a dedication to uniting coffee lovers in the
          heart of Valhalla. Inspired by the strength of Norse mythology, we
          carefully select the finest beans globally, crafting a menu that
          blends tradition with innovation.
        </p>
        <br />
        <img
          src="image4.jpg"
          style={{
            width: "90%",
            height: "800px",
            margin: "10px auto",
            display: "flex",
          }}
        />

        <p style={{fontSize:"20px", color: "grey"}}>
          Step into our rustic Viking-inspired haven, where expert baristas
          forge flavors with precision. From robust dark roasts to serene light
          blends, there's a cup for every adventurer. We cherish sustainability,
          ensuring our journey benefits both the environment and the communities
          we touch.
        </p>
        <br></br>
        <img
          src="image5.jpg"
          style={{
            width: "100%",
            height: "500px",
            margin: "10px auto",
            display: "flex",
          }}
        />
        <p style={{fontSize:"20px", color: "grey"}}>
          Join us at Odin Coffee, where each visit unveils a new chapter in the
          saga of flavor, community, and the enduring love for the perfect cup
          of coffee. Embrace the elixir of life with Odin's blessing.
        </p>
        <br></br>
        <h1 style={{ color: "brown", textAlign: "center" }}>
          Video Credit Odin Coffee
        </h1>
        <h2 style={{ textAlign: "center" }}>Enjoy Watching!</h2>
        <center>
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/zrGMf_9LGSo?si=vhLc7gAgEqAtvg5E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </center>
      </div>
    </div>
  );
}

export default OurStoryFauzi;
