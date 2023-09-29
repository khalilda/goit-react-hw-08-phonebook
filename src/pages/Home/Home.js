import { Box } from 'components/Box';
import React from 'react';
import style from './Home.module.css';

export default function Home() {
  return (
    <Box className={style.homeHelp}>
      <p className={style.greeting}>
        Welcome to one of the safest contact storage sites.
      </p>
      <p className={style.text}>Khalil Dajani, junior FullStack Developer</p>

      <p className={style.flag}>
        <a
          className={style.united}
          href="https://github.com/khalilda "
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </p>

      <p className={style.text}>
        Check my profile for more projects and information
      </p>
    </Box>
  );
}
