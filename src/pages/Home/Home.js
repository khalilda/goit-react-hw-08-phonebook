import { Box } from 'components/Box';
import React from 'react';
import style from './Home.module.css';

export default function Home() {
  return (
    <Box className={style.homeHelp}>
      <p className={style.greeting}>Welcome to the contact storage app!</p>
      <p className={style.text}>STOP WAR in UKRAINE!!!</p>

      <p className={style.text}>All current information on</p>

      <p className={style.flag}>
        <a
          className={style.united}
          href="https://u24.gov.ua/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          UNITED24
        </a>
      </p>
      <p className={style.text}>
        Make a donation to any charity in order to overcome the aggressor...
      </p>
    </Box>
  );
}
