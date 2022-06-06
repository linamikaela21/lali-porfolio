import crudFrontendImage from '../images/projects/crud-frontend.png';
import laliRestaurantsAppImage from '../images/projects/lali-restaurants-app.png';
import ecommercePayableImage from '../images/projects/ecommerce-payable.png';
import rickAndMortyImage from '../images/projects/rick-and-morty.png';
import noiloanImage from '../images/projects/noiloan.png';
import pokemonNextJSImage from '../images/projects/lali-pokemon-nextjs.png';

export const projects = [
  {
    name: 'Noiloan Photo-E-Commerce',
    image: noiloanImage,
    urlProject: 'https://noiloan.web.app/',
    urlCode: 'https://github.com/Biblias4Sale',
    description:
      'Photography E-commerce maked it in group of 5 people with User, Admin, Backend including a Bot',
    tecnologies: 'React, Redux, Express, Sequelize, PostgreSQL',
  },
  {
    name: 'LaliRestaurantsApp',
    image: laliRestaurantsAppImage,
    urlProject: 'https://expo.dev/@linamikaela/LaliResto',
    urlCode: 'https://github.com/linamikaela21/LaliRestaurantsApp',
    description: 'This is a restaurant mobile app maked with React Native',
    tecnologies: 'React Native',
  },
  {
    name: 'Ecommerce Payable',
    image: ecommercePayableImage,
    urlProject: 'https://ecommerce-payable.herokuapp.com/',
    urlCode: 'https://github.com/linamikaela21/ecommercePayable',
    description:
      'This is a simple Ecommerce where you can look a list of categories with their products, add them in a cart and simulate a payment with a fake card using React Stripe library',
    tecnologies: 'React, Redux, Node-sass, Redux-Persist, Redux-Saga',
  },
  {
    name: 'Rick and Morty',
    image: rickAndMortyImage,
    urlProject: 'https://lali-rick-and-morty.vercel.app/',
    urlCode: 'https://github.com/linamikaela21/Rick-Morty',
    description:
      'This project display data from MongoDB database making the relationship between three tables',
    tecnologies: 'React, Redux, Axios, Sass, Express, Sequelize, PostgreSQL',
  },
  {
    name: 'Pokemon NextJS',
    image: pokemonNextJSImage,
    urlProject: 'https://lali-pokemon-nextjs-app.vercel.app/',
    urlCode: 'https://github.com/linamikaela21/pokemon-nextjs-app',
    description:
      'This project display pokemons from https://pokeapi.co/ api with TypeScript using @nextui-org/react for the desing',
    tecnologies: 'NextJS, SEO, TypeScript',
  },
  {
    name: 'Personal Budget',
    urlCode: 'https://github.com/linamikaela21/Personal-Budget',
    description:
      'This proyect in a mono repository. You can create a user and log in with Mongoose and access to your personal Budget where you can add income and outflow operations.',
    tecnologies: 'MongoDB, React, Redux, Bootstrap, Formik, Yup, Express',
  },
  {
    name: 'CRUD FrontEnd',
    image: crudFrontendImage,
    urlProject: 'https://lali-crud-frontend.netlify.app/',
    urlCode: 'https://github.com/linamikaela21/CRUD-FrontEnd',
    description:
      'This app was maked to learn how make a interactive wab app using only redux to save your data',
    tecnologies: 'React, Redux, Bootstrap, Formik, Yup',
  },
  {
    name: 'Lali Jira',
    urlCode: 'https://github.com/linamikaela21/lali-jira-nexjs',
    description:
      'This project display data from MongoDB using a docker image simulation Jira App. It was created with TypeScript using materialUI for the desing',
    tecnologies: 'MongoDB, Docker, NextJS, TypeScript, MaterialIU',
  },
];
