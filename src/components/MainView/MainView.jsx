// Exposes the component making it available for use by other components, modules and files
import { useState } from "react";

import React from "react";

//imports the movie card component
import { MovieCard } from "../MovieCard/MovieCard";

//imports the movie view component
import { MovieView } from "../MovieView/MovieView";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Goldfinger",
      director: {
        name: "Guy Hamilton",
        bio: "Guy Hamilton was a British film director known for his work on the James Bond film series. He was born on September 16, 1922, in Paris, France, to British parents. Hamilton directed a total of four James Bond films, including 'Goldfinger,' which is considered one of the most iconic films in the series. His direction contributed significantly to the establishment of the Bond franchise's visual style and action-packed sequences. Hamilton's impact on the spy genre and his memorable contributions to popular cinema are widely recognized.",
        dob: "September 16, 1922",
      },
      actor: {
        name: "Sean Connery",
        bio: "Sean Connery began his journey to stardom in the early 1950s with a series of minor roles in theater and film. He worked as a milkman, a lifeguard, and a bodybuilder before finding his calling in acting. His breakthrough came in the late 1950s when he was cast as James Bond, Agent 007, in the film adaptation of Ian Fleming's novel, Dr. No (1962). This role would catapult him to international fame and define his career. Connery went on to portray James Bond in a total of seven films, including 'From Russia with Love', 'Goldfinger,' and 'Thunderball.' His suave demeanor, charisma, and rugged charm made him the quintessential Bond and a cultural icon. Beyond Bond, Connery's acting versatility allowed him to tackle a wide range of roles in various genres. He received critical acclaim for his performances in films such as 'The Man Who Would Be King,' 'The Untouchables' (for which he won an Academy Award for Best Supporting Actor), 'Indiana Jones and the Last Crusade,' and 'The Hunt for Red October,' among others. Connery's career spanned several decades, and he remained a beloved figure in the entertainment industry until his retirement from acting in the early 2000s. His distinctive voice and presence on screen left an indelible mark on cinema, earning him a permanent place in the annals of Hollywood history. Unfortunately, Sean Connery passed away on October 31, 2020, at the age of 90, but his legacy as one of the most celebrated actors in the history of film continues to endure.",
        dob: "August 25, 1930",
      },
      genre: ["Action", "Spy", "Adventure", "Thriller", "Mystery"],
      description:
        "James Bond investigates Auric Goldfinger, a wealthy gold smuggler with a devious plan to contaminate the United States Bullion Depository at Fort Knox.",
      img: "https://media.gq-magazine.co.uk/photos/5d1394634858d3440a004d21/4:3/w_1560,h_1170,c_limit/Goldfinger-hp-GQ-07Apr15_rex_b.jpg",
    },
    {
      id: 2,
      title: "From Russia With Love",
      director: {
        name: "Terence Young",
        bio: "Terence Young was an English film director and screenwriter, best known for directing the early James Bond films. He was born on June 20, 1915, in Shanghai, China, to British parents. Young began his career as an assistant director and worked on various films before gaining recognition for his work on the James Bond series. He directed three of the first four Bond films, helping to establish the iconic style of the series. Young's contributions to the spy genre and his impact on popular culture are widely acknowledged.",
        "Date Of Birth": "June 20, 1915",
      },
      actor: {
        name: "Sean Connery",
        bio: "Sean Connery began his journey to stardom in the early 1950s with a series of minor roles in theater and film. He worked as a milkman, a lifeguard, and a bodybuilder before finding his calling in acting. His breakthrough came in the late 1950s when he was cast as James Bond, Agent 007, in the film adaptation of Ian Fleming's novel, Dr. No (1962). This role would catapult him to international fame and define his career. Connery went on to portray James Bond in a total of seven films, including 'From Russia with Love,' 'Goldfinger,' and 'Thunderball.' His suave demeanor, charisma, and rugged charm made him the quintessential Bond and a cultural icon. Beyond Bond, Connery's acting versatility allowed him to tackle a wide range of roles in various genres. He received critical acclaim for his performances in films such as 'The Man Who Would Be King,' 'The Untouchables' (for which he won an Academy Award for Best Supporting Actor), 'Indiana Jones and the Last Crusade,' and 'The Hunt for Red October,' among others. Connery's career spanned several decades, and he remained a beloved figure in the entertainment industry until his retirement from acting in the early 2000s. His distinctive voice and presence on screen left an indelible mark on cinema, earning him a permanent place in the annals of Hollywood history. Unfortunately, Sean Connery passed away on October 31, 2020, at the age of 90, but his legacy as one of the most celebrated actors in the history of film continues to endure.",
        "Date Of Birth": "August 25, 1930",
      },
      genre: [
        "Action",
        "Spy",
        "Adventure",
        "Thriller",
        "Mystery",
        "Romance",
        "Crime Fiction",
      ],
      description:
        "James Bond is sent to Istanbul to retrieve a decoding machine, but he becomes entangled in a deadly game of espionage and romance involving a Soviet defector.",
      img: "https://imageio.forbes.com/specials-images/imageserve/62543ad901a6cf103201f237/0x0.jpg?format=jpg&crop=2458,1383,x0,y24,safe&width=1200",
    },
    {
      id: 3,
      title: "Dr. No",
      director: {
        name: "Terence Young",
        bio: "Terence Young was an English film director and screenwriter, best known for directing the early James Bond films. He was born on June 20, 1915, in Shanghai, China, to British parents. Young began his career as an assistant director and worked on various films before gaining recognition for his work on the James Bond series. He directed three of the first four Bond films, helping to establish the iconic style of the series. Young's contributions to the spy genre and his impact on popular culture are widely acknowledged.",
        "Date Of Birth": "June 20, 1915",
      },
      actor: {
        name: "Sean Connery",
        bio: "Sean Connery began his journey to stardom in the early 1950s with a series of minor roles in theater and film. He worked as a milkman, a lifeguard, and a bodybuilder before finding his calling in acting. His breakthrough came in the late 1950s when he was cast as James Bond, Agent 007, in the film adaptation of Ian Fleming's novel, Dr. No (1962). This role would catapult him to international fame and define his career. Connery went on to portray James Bond in a total of seven films, including 'Dr. No,' 'From Russia with Love,' and 'Goldfinger.' His suave demeanor, charisma, and rugged charm made him the quintessential Bond and a cultural icon. Beyond Bond, Connery's acting versatility allowed him to tackle a wide range of roles in various genres. He received critical acclaim for his performances in films such as 'The Man Who Would Be King,' 'The Untouchables' (for which he won an Academy Award for Best Supporting Actor), 'Indiana Jones and the Last Crusade,' and 'The Hunt for Red October,' among others. Connery's career spanned several decades, and he remained a beloved figure in the entertainment industry until his retirement from acting in the early 2000s. His distinctive voice and presence on screen left an indelible mark on cinema, earning him a permanent place in the annals of Hollywood history. Unfortunately, Sean Connery passed away on October 31, 2020, at the age of 90, but his legacy as one of the most celebrated actors in the history of film continues to endure.",
        "Date Of Birth": "August 25, 1930",
      },
      genre: [
        "Action",
        "Spy",
        "Adventure",
        "Thriller",
        "Romance",
        "Crime Fiction",
      ],
      description:
        "James Bond is dispatched to Jamaica to investigate the disappearance of a fellow British agent and discovers a plot involving a reclusive villain named Dr. No.",
      img: "https://eder6ypjvgv.exactdn.com/wp-content/uploads/2020/11/Capture-de%CC%81cran-2020-11-19-a%CC%80-16.13.07.jpg?strip=all&lossy=1&resize=1280%2C650&ssl=1",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
