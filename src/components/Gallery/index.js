import React from "react";
//using capitalizeFirstLetter() to help capitaclize our name value when rendered
import { capitalizeFirstLetter } from "../../utils/helpers";
//importing our small folders for the gallery page
import photo from "../../assets/small/commercial/0.jpg";
//Implementing props here!
function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section>
      <h1> {capitalizeFirstLetter(currentCategory.name)} </h1>
      <p>{currentCategory.description}</p>
      <div>
        <img
          src={photo}
          alt="Commercial Example"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Gallery;
