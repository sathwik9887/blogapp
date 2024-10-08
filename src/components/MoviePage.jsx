import React, { useState } from "react";
import SubNav from "./SubNav";
import Section from "./Section";

const MoviePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSort, setselectedSort] = useState("");

  const movies = [
    {
      id: 1,
      title: "The Wolf of the Wall Street",
      genre: "Comedy",
      desc: "The Wolf of Wall Street is a 2013 American epic biographical black comedy film co-produced and directed by Martin Scorsese and written by Terence Winter, based on Jordan Belfort's 2007 memoir of the same name.",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
      review: "4.5",
      sort: "Top Rating",
    },
    {
      id: 2,
      title: "Titanic",
      genre: "Romance",
      desc: "Titanic is a 1997 American epic romance and disaster film directed, written, produced, and co-edited by James Cameron.",
      img: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
      review: "4.3",
      sort: "Latest",
    },
    {
      id: 3,
      title: "Inception",
      genre: "Sci-Fi",
      desc: "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, exploring the concept of shared dreaming.",
      img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      review: "4.8",
      sort: "Top Rating",
    },
    {
      id: 4,
      title: "The Godfather",
      genre: "Crime",
      desc: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola, based on the 1969 novel by Mario Puzo.",
      img: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      review: "4.9",
      sort: "Top Rating",
    },
    {
      id: 5,
      title: "The Dark Knight",
      genre: "Action",
      desc: "The Dark Knight is a 2008 superhero film directed by Christopher Nolan, based on the DC Comics character Batman.",
      img: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
      review: "4.7",
      sort: "Top Rating",
    },
    {
      id: 6,
      title: "Pulp Fiction",
      genre: "Crime",
      desc: "Pulp Fiction is a 1994 American crime film directed by Quentin Tarantino, known for its eclectic dialogue and nonlinear storyline.",
      img: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
      review: "4.6",
      sort: "Most Popular",
    },
    {
      id: 7,
      title: "The Shawshank Redemption",
      genre: "Drama",
      desc: "The Shawshank Redemption is a 1994 drama film based on a Stephen King novella, focusing on hope and friendship.",
      img: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      review: "4.8",
      sort: "Latest",
    },
    {
      id: 8,
      title: "Forrest Gump",
      genre: "Drama",
      desc: "Forrest Gump is a 1994 film that follows the life of a slow-witted but kind-hearted man from Alabama.",
      img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
      review: "4.7",
      sort: "Top Rating",
    },
    {
      id: 9,
      title: "The Matrix",
      genre: "Sci-Fi",
      desc: "The Matrix is a 1999 sci-fi action film that explores the nature of reality and artificial intelligence.",
      img: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
      review: "4.5",
      sort: "Most Popular",
    },
    {
      id: 10,
      title: "Fight Club",
      genre: "Drama",
      desc: "Fight Club is a 1999 film directed by David Fincher, based on the 1996 novel by Chuck Palahniuk.",
      img: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
      review: "4.6",
      sort: "Latest",
    },
    {
      id: 11,
      title: "The Avengers",
      genre: "Action",
      desc: "The Avengers is a 2012 superhero film based on the Marvel Comics superhero team of the same name.",
      img: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      review: "4.4",
      sort: "Most Popular",
    },
    {
      id: 12,
      title: "Gladiator",
      genre: "Action",
      desc: "Gladiator is a 2000 historical drama film directed by Ridley Scott, focusing on a Roman general who seeks revenge.",
      img: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
      review: "4.5",
      sort: "Top Rating",
    },
    {
      id: 13,
      title: "Avatar",
      genre: "Sci-Fi",
      desc: "Avatar is a 2009 epic science fiction film directed by James Cameron, set in the mid-22nd century.",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
      review: "4.3",
      sort: "Top Rating",
    },
    {
      id: 14,
      title: "The Silence of the Lambs",
      genre: "Thriller",
      desc: "The Silence of the Lambs is a 1991 psychological horror film that follows a young FBI cadet as she seeks the help of a cannibalistic serial killer.",
      img: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
      review: "4.6",
      sort: "Top Rating",
    },
    {
      id: 15,
      title: "Interstellar",
      genre: "Sci-Fi",
      desc: "Interstellar is a 2014 epic science fiction film directed by Christopher Nolan, exploring space travel and the survival of humanity.",
      img: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      review: "4.7",
      sort: "Most Popular",
    },
    {
      id: 16,
      title: "The Lion King",
      genre: "Animation",
      desc: "The Lion King is a 1994 animated musical film produced by Walt Disney Feature Animation, telling the story of a young lion prince.",
      img: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
      review: "4.5",
      sort: "Latest",
    },
    {
      id: 17,
      title: "Jurassic Park",
      genre: "Adventure",
      desc: "Jurassic Park is a 1993 science fiction film directed by Steven Spielberg, centered around a theme park filled with cloned dinosaurs.",
      img: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
      review: "4.5",
      sort: "Top Rating",
    },
    {
      id: 18,
      title: "The Social Network",
      genre: "Biography",
      desc: "The Social Network is a 2010 film that chronicles the founding of Facebook and the legal battles that followed.",
      img: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
      review: "4.4",
      sort: "Top Rating",
    },
    {
      id: 19,
      title: "Mad Max: Fury Road",
      genre: "Action",
      desc: "Mad Max: Fury Road is a 2015 action film directed by George Miller, set in a post-apocalyptic desert wasteland.",
      img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
      review: "4.6",
      sort: "Latest",
    },
    {
      id: 20,
      title: "The Departed",
      genre: "Crime",
      desc: "The Departed is a 2006 crime thriller film directed by Martin Scorsese, exploring the lives of moles in both the police and the Irish mob.",
      img: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
      review: "4.5",
      sort: "Most Popular",
    },
  ];

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSortChange = (sort) => {
    setselectedSort(sort);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearchQuery = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre =
      selectedGenre === "" ||
      movie.genre.toLowerCase() === selectedGenre.toLowerCase();
    const matchesSort =
      selectedSort === "" ||
      movie.sort.toLowerCase() === selectedSort.toLowerCase();

    return matchesSearchQuery && matchesGenre && matchesSort;
  });
  return (
    <div>
      <SubNav
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onGenreChange={handleGenreChange}
        onSortChange={handleSortChange}
      />
      <Section movies={filteredMovies} />
    </div>
  );
};

export default MoviePage;
