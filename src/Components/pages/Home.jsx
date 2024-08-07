import React from "react";

import { useState } from "react";

export const Home = (setUserInput, userInput) => {
  const [seafoodRestaurants, setSeafoodRestaurants] = useState([]);
  const [carnivoreRestaurants, setCarnivoreRestaurants] = useState([]);
  const [veganRestaurants, setVeganRestaurants] = useState([]);
  const [restaurants, setRestaurantsInput] = useState([]);


  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (



    <>
      <div>
        <h1 className="home">Home</h1>

        <div className="home-page-intro">
          Pleasure your taste buds with some of{" "}
          <span className="bold-black">Chicago's top restaurants</span>
          <form>
            <input
              type="text"
              placeholder="Search for restaurant"
              onChange = {(e) => {
                e.preventDefault();
                handleChange(e);
              }}
              value = {userInput}
              className="search-bar"
            />
          </form>
        </div>
      </div>

      <div className="restaurant-list-heading">Popular restaurants</div>

      <div className="top-three">
        <div className="three-intro-pics">
          <div>
            <img
              src="https://elitetraveler.com/wp-content/uploads/sites/8/2017/05/shaws-crab-house.png"
              className="image"
            ></img>
            Shaw's Crab House
          </div>
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-media4.fl.yelpcdn.com%2Fbphoto%2FPwM3-6rwYYK3vwnhlGLA5A%2Fls.jpg&f=1&nofb=1&ipt=4d47ba4a251ae7fdf4d006f46bbb93599f3905f8bb6b0e5bced482f3e6d94dcf&ipo=images"
              className="image"
            ></img>
            Joe's Prime Steakhouse
          </div>
          <div>
            {" "}
            <img
              src="https://vegoutmag.com/wp-content/uploads/2022/01/Bloom-Plant-Based-Kitchen.jpg"
              className="image"
            ></img>
            Bloom Plant Based Kitchen
          </div>
          <div>
            <img
              src="https://assets1.cbsnewsstatic.com/i/cbslocal/wp-content/uploads/sites/15116062/2012/03/websters_wine_bar1.jpg?w=420&h=316&crop=1"
              className="image"
            ></img>
            Angelo's Wine Bar
          </div>
        </div>
      </div>
    </>
  );
};