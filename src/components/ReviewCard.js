import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";

const Review = ({ reviews }) => {
  const [index, setIndex] = useState(0);  //to store index of reviews array

  if (reviews) {
    const { name, comments, date, rating } = reviews[index]; //detsructuring objects inside array

    const checkNumber = (number) => {  //function to check index value
      if (number > reviews.length - 1) {
        return 0;
      }
      if (number < 0) {
        return reviews.length - 1;
      }
      return number;
    };

    //next and prev button
    
    const nextPerson = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      });
    };

    const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });
    };

    return (
      <div className="review-card-container d-flex align-items-center mt-4 mb-4 mb-md-none">
        <div className="bg-secondary p-3 rounded">
          <article className="review d-flex align-items-center align-items-md-start justify-content-center">
            {rating < 3 ? (
              <>
                <h5>😖</h5>
              </>
            ) : (
              <h5>😀</h5>
            )}
            <div className="review-texts text-center text-md-start">
              <h3 className="author mt-2 fs-3">{name}</h3>
              <h5 className="author mt-2 fs-4">{date}</h5>
              <p className="info fs-md-4">{comments}</p>
            </div>
          </article>
          <div className="button-container text-center">
            <button className="prev-btn me-2 fs-3" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn ms-2 fs-3" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Review;
