import React, { useEffect, useState , useRef} from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import NavigationBar from "../components/NavigationBar";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function Watch() {
  const query = useQuery();
  const [watching, setWatching] = useState("");
  const [watchingImdb, setWatchingImdb] = useState("");

  useEffect(() => {
    setWatching(query.get("q"));
  }, [query]);

  const fetchExternalIds = async (mediaType, id) => {
    const url = `https://api.themoviedb.org/3/${mediaType}/${id}/external_ids`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2NmZDZjNjExODdmM2ZkZWYzODNlM2FjNzU3ZGMzYSIsIm5iZiI6MTcyMTc1MDk2MC4zMDE3MTksInN1YiI6IjY2NzUyZTMxMTJkMDBkOWNkNTViM2U2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I1xNyMBKskzmBhhoKyNvUxD7ZMxLNNt2FkicmpLWrxk",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to fetch external IDs: ${response.statusText}`);
      }
      const data = await response.json();
      return data.imdb_id;
    } catch (error) {
      console.error(`Error fetching external IDs for ${mediaType}:`, error);
      return null;
    }
  };

  useEffect(() => {
    if (watching) {
      const fetchIds = async () => {
        let imdbId = await fetchExternalIds("movie", watching);
        if (!imdbId) {
          imdbId = await fetchExternalIds("tv", watching);
        }
        setWatchingImdb(imdbId);
      };
      fetchIds();
    }
  }, [watching]);

  return (
    <div className="bg-slate-800">
      {console.log(`from watch https://vidsrc.to/embed/movie/${watchingImdb}`)}
      <NavigationBar />
      {watchingImdb && (
        <video width="320" height="240" controls> 
        <source src={`https://vidsrc.to/embed/movie/${watchingImdb}`} type="video/mp4" /> 
        </video>
      )}
    </div>
  );
}
