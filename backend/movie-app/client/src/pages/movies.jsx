import React, { useState, useEffect } from "react";
import HomeLayout from "../components/layouts/home";
import SearchBar from "../components/search-bar";
import MovieList from "../components/movie-list";
import { moviesData } from "../data";
import useFetch from "../hooks/useFetch";
export default function MoviesPage() {
 const {data,error,loading} = useFetch("/movies")
  return (
    <HomeLayout>
      <div className="search-wrapper p-4 mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="movies-wrapper p-4">
        {loading && <h1 className="text-white">Loading ...</h1>}
        {data && data.movies.length > 0 && (
          <MovieList data={data.movies} />
        )}
        {data && data.movies.length===0 &&  (
          <h1 className="text-white">No data</h1>
        )}
        {error && <h1 className="text-white">error</h1>}
      </div>
    </HomeLayout>
  );
}
