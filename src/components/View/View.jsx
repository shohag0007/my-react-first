import React from 'react'

import Snowfall from 'react-snowfall'

const View = () => {
    return (
      <Snowfall
  // Changes the snowflake color
  color="white"
  // Applied to the canvas element
  style={{ background: 'black' }}
  // Controls the number of snowflakes that are created (default 150)
  snowflakeCount={1000}
/>
    );
};

export default View;