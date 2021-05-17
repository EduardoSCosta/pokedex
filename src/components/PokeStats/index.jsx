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
      <tr className={`poke-stats ${theme}`}>
        <th>Stat</th>
        <th>Base</th>
      </tr>
      {stats && stats.map((stat) => {
      return (<tr className={`poke-stats ${theme}`} key={stat.stat.name}>
                <td>{statsName(stat.stat.name)}</td>
                <td>{stat.base_stat}</td>  
              </tr>);
      })}
    </>
  );
}

export default PokeStats;