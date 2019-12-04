import React from 'react';

const MovieCard = ({ title, episode_id, release_date }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>Episode: {episode_id}</h3>
      <h3>Release: {release_date}</h3>
    </div>
  );
};

export default MovieCard;
