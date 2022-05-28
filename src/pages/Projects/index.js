import React from 'react';
import { Container } from 'react-bootstrap';
import { CustomCarousel } from '../../components/xShare/CustomCarousel';

export const Projects = () => {
  const projects = [
    {
      name: 'CRUD FrontEnd',
      image:
        'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
      urlProject: 'https://lali-crud-frontend.netlify.app/',
      urlCode: 'https://github.com/linamikaela21/CRUD-FrontEnd',
      description:
        'This app was maked to learn how make a interactive wab app using only redux to save your data',
      tecnologies: 'React, Redux, Bootstrap, Formik, Yup',
    },
    {
      name: 'LaliRestaurantsApp',
      image:
        'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
      urlProject: 'https://expo.dev/@linamikaela/LaliResto',
      urlCode: 'https://github.com/linamikaela21/LaliRestaurantsApp',
      description: 'This is a restaurant mobile app maked with React Native',
      tecnologies: 'React Native',
    },
    {
      name: 'Ecommerce Payable',
      image:
        'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
      urlProject: 'https://ecommerce-payable.herokuapp.com/',
      urlCode: 'https://github.com/linamikaela21/ecommercePayable',
      description:
        'This is a simple Ecommerce where you can look a list of categories with their products, add them in a cart and simulate a payment with a fake card using React Stripe library',
      tecnologies: 'React, Redux, Node-sass, Redux-Persist, Redux-Saga',
    },
    {
      name: 'Rick and Morty',
      image:
        'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
      urlProject: 'https://lali-rick-and-morty.vercel.app/',
      urlCode: 'https://github.com/linamikaela21/Rick-Morty',
      description:
        'This project display data from MongoDB database making the relationship between three tables',
      tecnologies: 'React, Redux, Axios, Sass, Express, Sequelize, PostgreSQL',
    },
    {
      name: 'Personal Budget',
      image:
        'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
      urlCode: 'https://github.com/linamikaela21/Personal-Budget',
      description:
        'This proyect in a mono repository. You can create a user and log in with Mongoose and access to your personal Budget where you can add income and outflow operations.',
      tecnologies: 'MongoDB, React, Redux, Bootstrap, Formik, Yup, Express',
    },
  ];

  return (
    <Container className="m-4">
      <h1 className="d-flex justify-content-center mb-5">MY PROJECTS</h1>
      <CustomCarousel projects={projects} />
    </Container>
  );
};
