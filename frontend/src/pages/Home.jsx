import React from "react";
import NavigationBar from "../components/NavigationBar";
import HomeFeaturedSection from "../components/HomeFeaturedSection";
import HomeMoviesList from "../components/HomeMoviesList";
import HomeTvShowsList from "../components/HomeTvShowsList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-800 min-h-screen flex flex-col">
      <NavigationBar />
      <HomeFeaturedSection />
      <div className="w-fit h-fit min-h-2 ml-4 my-5 px-3 bg-white text-gray-900">
        Popular Movies
      </div>
      <HomeMoviesList />
      <div className="w-fit h-fit min-h-2 ml-4 my-5 px-3 bg-white text-gray-900">
        Popular Shows
      </div>
      <HomeTvShowsList />
      <Footer />
    </div>
  );
}
