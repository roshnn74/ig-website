import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Img2 from "../assets/img/event.svg";
import Details from '../components/Details';

const EventDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const data = [
    {
        title: "Firefly Hackathon",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam velit voluptate adipisci corporis reprehenderit quis accusamus a unde, nostrum voluptas doloribus iure culpa!",
        imgUrl: Img2,
        id: "0001",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam velit voluptate adipisci corporis reprehenderit quis accusamus a unde, nostrum voluptas doloribus iure culpa!",
        imgUrl: Img2,
        id: "0002",
    },
    {
        title: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam velit voluptate adipisci corporis reprehenderit quis accusamus a unde, nostrum voluptas doloribus iure culpa!",
        imgUrl: Img2,
        id: "0003",
    },
    {
        title: "Lorem, ipsum",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam velit voluptate adipisci corporis reprehenderit quis accusamus a unde, nostrum voluptas doloribus iure culpa!",
        imgUrl: Img2,
        id: "0004",
    },
    {
        title: "Lorem",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam velit voluptate adipisci corporis reprehenderit quis accusamus a unde, nostrum voluptas doloribus iure culpa!",
        imgUrl: Img2,
        id: "0005",
    },
    {
        title: "Lorem ipsum dolor sit",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam velit voluptate adipisci corporis reprehenderit quis accusamus a unde, nostrum voluptas doloribus iure culpa!",
        imgUrl: Img2,
        id: "0006",
    },
    {
        title: "Lorem, ipsum.",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam velit voluptate adipisci corporis reprehenderit quis accusamus a unde, nostrum voluptas doloribus iure culpa!",
        imgUrl: Img2,
        id: "0007",
    },
  ];

  useEffect(() => {
    const event = data.filter(item => item.id === id);
    setTitle(event[0].title);
    setDescription(event[0].description);
  }, [])
  

  return (
    <Details description={description} imgUrl={Img2} title={title}/>
  )
}

export default EventDetails