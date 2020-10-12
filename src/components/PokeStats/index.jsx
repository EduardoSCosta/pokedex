import React from 'react';
import statsName from '../../functions/statsName';
import './styles.css';
import {useTheme} from '../../contexts/Theme';

const PokeStats = ({
  stats
}) => {
  const { theme } = useTheme();
  
  return (
    <>
      {stats && stats.map((stat) => {
      return (<li className={`poke-stats ${theme}`}
                key={stat.stat.name}> <span>{statsName(stat.stat.name)}</span><span>{stat.base_stat}</span>  
              </li>);
      })}
    </>
  );
}

export default PokeStats;