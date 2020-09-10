import React from 'react';
import './styles.css';

const PokeStats = ({
  stats
}) => {

  return (
    <>
      {stats && stats.map((stat) => {
      return (<li 
                key={stat.stat.name}>{stat.stat.name} {stat.base_stat}
              </li>);
      })}
    </>
  );
}

export default PokeStats;