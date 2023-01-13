import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = ({ review_percentage }) => {
  return (
    <div className="flex items-center justify-start gap-x-2 text-xs">
      <div className="relative flex gap-x-1 text-gray-300 w-fit">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <div
          style={{ width: `${review_percentage || "90"}%` }}
          className="absolute inset-y-0 left-0 my-auto overflow-hidden text-yellow-500 flex gap-x-1"
        >
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <small className="text-yellow-700">
        ({(review_percentage || 90) / 20})
      </small>
    </div>
  );
};

export default Reviews;
