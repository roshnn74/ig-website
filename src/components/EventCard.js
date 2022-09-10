import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import Img from '../assets/img/event.svg';

const EventCard = ({ title, description, id }) => {
  return (
    <Link className="exercise-card" to={`/event/${id}`}>
      <img src={Img} alt="" loading="lazy" />
      <Typography ml="21px" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize">
        {title}
      </Typography>
    </Link>
  )
}

export default EventCard