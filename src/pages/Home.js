import axios from "axios";
import React, { useEffect, useState } from "react";
import Cardskeleton from "../components/Cardskeleton";
import { Link } from "react-router-dom";

function Home() {
  const [restaurant, set] = useState([]);  //state to store data

  const fetchData = async () => {  //async function to fetch data
    const response = await axios.get("/restaurants.json");
    set(response.data.restaurants);
  };

  useEffect(() => {  //perform on load
    fetchData();
  }, []);

  return (
    <>
      <Hero />
      {restaurant.length > 0 ? (
        <div className="container-md p-3 py-5">
          {restaurant.map((restaurant, index) => (
            <Card restaurant={restaurant} key={restaurant.id}></Card>
          ))}
        </div>
      ) : (
        <div className="container-md p-3 py-5">
          <Cardskeleton cards={8} />
        </div>
      )}
    </>
  );
}

//components for cards inside home

const Card = ({ restaurant }) => {
  return (
    <Link
      to={`/view/${restaurant.id}`}
      className="card mx-auto"
      style={{ textDecoration: "none" }}
    >
      <img src={restaurant.photograph} alt="restaurant image" />
      <div className="card-body">
        <h4 className="card-title-home">{restaurant.name}</h4>
        <p>{restaurant.address}</p>
      </div>
    </Link>
  );
};

export default Home;


//component for hero content

function Hero() {
  return (
    <div className="hero-container">
      <img src="/ok.jpg" alt="" />
      <div className="hero-text p-4 rounded">
        <h1>
          <span>E</span>at, <span>D</span>rink, <span>E</span>xplore: Your
          Foodie Journey Begins Here
        </h1>
        <h4>
          Embark on a culinary journey, exploring local gems and global flavors,
          and satisfy your cravings with ease. Discover delightful dining
        </h4>
      </div>
    </div>
  );
}
