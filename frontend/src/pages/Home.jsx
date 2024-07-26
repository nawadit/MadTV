import React, { useEffect, useState } from "react";
import FeaturedCards from "../components/FeaturedCards";
import ItemCard from "../components/DefaultItemCard";
import NavigationBar from "../components/NavigationBar";
import HomeFeaturedSection from "../components/HomeFeaturedSection";
import HomeMoviesList from "../components/HomeMoviesList";
import HomeTvShowsList from "../components/HomeTvShowsList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-800 h-full">
      <NavigationBar />
      <HomeFeaturedSection />
      <div className="w-fit h-fit min-h-2 ml-4 mt-5 px-3 bg-white text-gray-900">
        Popular Movies
      </div>
      <HomeMoviesList />
      <div className="w-fit h-fit min-h-2 ml-4 mt-5 px-3 bg-white text-gray-900">
        Popular Shows
      </div>
      <HomeTvShowsList />
      <Footer/>
    </div>
  );
}
