import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import Review from "../components/ReviewCard";
import { Skeleton, Typography } from "@mui/material";

function View() {  //component for view page

  const params = useParams(); //get params from url
  const { id } = params;

  const [restaurant, set] = useState([]);  //state to store data

  const getData = async () => {  //fetch data
    let response = await axios.get("/restaurants.json");
    set(response.data.restaurants.find((rest) => rest.id == id));
    // set("");
  };

  useEffect(() => {  //fetch data on load
    getData();
  }, []);

  return (
    <>
      {restaurant == "" ? (
        <div className="skelt">  //mui skeleton for entire view
          <div className="container d-flex justify-content-center align-items-center w-100 mt-md-5">
            <img className="" src="https://placehold.co/300x350" alt="" />
            <div>
              <Skeleton
                variant="rectangular"
                // width={310}
                height={50}
                animation={false}
                sx={{ bgcolor: "#ccc" }}
                className="mb-5"
              />
              <Typography variant="h3" className="typo">
                <Skeleton
                  sx={{ bgcolor: "#ccc" }}
                  animation={false}
                  width={310}
                  height={50}
                />

                <Skeleton
                  sx={{ bgcolor: "#ccc" }}
                  animation={false}
                  // width={510}
                  className="w-75 w-md-25"
                  height={50}
                />

                <Skeleton
                  sx={{ bgcolor: "#ccc" }}
                  animation={false}
                  width={310}
                  height={50}
                />
                <Skeleton
                  sx={{ bgcolor: "#ccc" }}
                  animation={false}
                  width={210}
                  height={70}
                />
              </Typography>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center w-100 mt-5 x2-child">
            <Typography variant="h1">
              <Skeleton
                sx={{ bgcolor: "#ccc" }}
                animation={false}
                width={250}
                height={70}
              />
            </Typography>
            <Skeleton
              sx={{ bgcolor: "#ccc" }}
              animation={false}
              // width={610}
              height={500}
              className="x2-skelt"
            />
          </div>
        </div>
      ) : (
        <div className="view p-md-5 pt-4">
          <div className="container d-flex justify-content-center align-items-center w-100">
            <img
              src={restaurant.photograph}
              alt=""
              width={"300px"}
              className="mx-auto mx-lg-0 img-fluid"
            />
            <div className="text mx-auto mx-lg-0">
              <h1 className=" mb-5">{restaurant.name}</h1>
              <h5 className="mt-3">
                Neighborhood : <span> {restaurant.neighborhood}</span>
              </h5>
              <h5 className="mt-3">
                Address : <span>{restaurant.address}</span>
              </h5>
              <h5 className="mt-3">
                Cuisine type : <span>{restaurant.cuisine_type}</span>
              </h5>
              <div className="btn-container d-grid align-items-center text-center text-md-start">
                <Reviews opHrs={restaurant.operating_hours}></Reviews>
              </div>
            </div>
          </div>
          <div className="text-center p-md-5 mt-4 mt-md-none">
            <h2>Reviews</h2>
            <Review reviews={restaurant.reviews} />
          </div>
        </div>
      )}
    </>
  );
}

export default View;
