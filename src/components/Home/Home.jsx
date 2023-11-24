import React, { useEffect, useState } from 'react';
import '../../assets/css/home.css';
import Header from '../Header/Header';

import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { getInfoContent } from '../../api/contentfulHelper';

const Home = () => {
  const [aboutMe, setAboutMe] = useState([]);

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <span className='bold'>{text}</span>,
      [BLOCKS.PARAGRAPH]: (node, children) => node.content.replace('\n', '<br />')
    },
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      })
    }
  }

  useEffect(() => {
    async function getAbout() {
      setAboutMe( await getInfoContent('6LvitSqJFQkVA4ha9jcZrW' ));
    }
   getAbout();
  }, []);

  return (
    <div className='home-container'>
      <Header />

      {
        aboutMe &&
          <section className='about-container'>
            <h1>{ aboutMe.title }</h1>
              <div className='about-container__body'>
              {
                documentToReactComponents( aboutMe.content, options )
              }
            </div>
          </section>
        }

    </div>
  )
}

export default Home
