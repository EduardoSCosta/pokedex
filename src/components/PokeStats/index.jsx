import React from 'react';
import statsName from '../../functions/statsName';
import './styles.css';

const PokeStats = ({
  stats
}) => {

  return (
    <>
      {stats && stats.map((stat) => {
      return (<li className="poke-stats"
                key={stat.stat.name}> <span>{statsName(stat.stat.name)}</span><span>{stat.base_stat}</span>  
              </li>);
      })}
    </>
  );
}

export default PokeStats;