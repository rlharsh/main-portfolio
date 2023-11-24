import React from 'react';
import '../../assets/css/home.css';
import Header from '../Header/Header';

import { createClient } from 'contentful';

export async function getStaticProps() {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_KEY,
  });



}

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
    </div>
  )
}

export default Home
