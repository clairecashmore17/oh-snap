import React from "react";
//using capitalizeFirstLetter() to help capitaclize our name value when rendered
import { capitalizeFirstLetter } from "../../utils/helpers";
//importing our small folders for the gallery page
import PhotoList from "../PhotoList";

function Gallery({ currentCategory }) {
  // destructure the name and description properties from currentCategory
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;
