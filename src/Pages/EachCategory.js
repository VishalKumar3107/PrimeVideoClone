import { useLocation, useParams } from "react-router-dom";
import "../allcss/EachCategory.css"
import endPoints from "../Api/request";
import Category from "../Components/Categorycomp";


function EachCategory() {
 
  const {categoryName} = useParams();
  const location = useLocation();

  const currentCategory = location.pathname;

  let fetchUrl;
  if(currentCategory === "/category/Action/"){
    fetchUrl  = endPoints.Action;
  } else if(currentCategory === "/category/Comedy/"){
    fetchUrl  = endPoints.Comedy;
  } else if(currentCategory === "/category/Adventure/"){
    fetchUrl  = endPoints.Adventure;
  } else if(currentCategory === "/category/Discover/"){
    fetchUrl  = endPoints.Discover;
  } else if(currentCategory === "/category/ScienceFiction/"){
    fetchUrl  = endPoints.ScienceFiction;
  } else if(currentCategory === "/category/Horror/"){
    fetchUrl  = endPoints.Horror;
  }  else if(currentCategory === "/category/Drama/"){
    fetchUrl  = endPoints.Drama;
  }  else if(currentCategory === "/category/PopularinRegion/"){
    fetchUrl  = endPoints.PopularinRegion;
  }  else if(currentCategory === "/category/Thriller/"){
    fetchUrl  = endPoints.Thriller;
  }  else if(currentCategory === "/category/Crime/"){
    fetchUrl  = endPoints.Crime;
  }  else if(currentCategory === "/category/Shortfilms/"){
    fetchUrl  = endPoints.Shortfilms;
  }


console.log(categoryName);
  return (
    <div className="EachCategory">
        <Category type="Prime" title={categoryName} fetchUrl={fetchUrl} />
    </div>
  );
}

export default EachCategory;
