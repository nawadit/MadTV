import React, { useEffect, useState } from "react";
import FeaturedCards from "../components/FeaturedCards";
import ItemCard from "../components/DefaultItemCard";
import NavigationBar from "../components/NavigationBar";
import HomeFeaturedSection from "../components/HomeFeaturedSection";
import HomeMoviesList from "../components/HomeMoviesList";
import HomeTvShowsList from "../components/HomeTvShowsList";

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
      <footer className="bg-slate-900 text-gray-400 text-sm text-center px-5 mt-5 py-2">
        <p>
          Madtube is a Free Movies streaming site with zero ads. We let you
          watch movies online without having to register or paying, with over
          10000 movies and TV-Series. You can also Download full movies from
          MoviesCloud and watch it later if you want.
        </p>
      </footer>
    </div>
  );
}
