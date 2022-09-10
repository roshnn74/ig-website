import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Img2 from "../assets/img/tech.jpg";
import EventCard from './EventCard';

const Events = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

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

  return (
    <section className="skill" id="events">
        <div className="container">
            <div className="row">
                    <div className="skill-bx">
                        <h2>Recent Events</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {data.map((item,index) => {
                                return(
                                    <EventCard 
                                        key={index}
                                        {...item}
                                    />
                                )
                            })}
                        </Carousel>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Events