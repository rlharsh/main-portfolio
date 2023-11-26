import React, { useEffect, useState } from 'react';
import '../../assets/css/home.css';
import Header from '../Header/Header';

import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import imageCss from '../../assets/images/css.svg';
import imageFirebase from '../../assets/images/firebase.svg';
import imageGithub from '../../assets/images/github.svg';
import imageHtml5 from '../../assets/images/html5.svg';
import imageNetlify from '../../assets/images/netlify.svg';
import imageReactjs from '../../assets/images/reactjs.svg';
import imageVite from '../../assets/images/vitejs.svg';

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
      <>
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
        </>

        <section className="projects" id="projects">
          <h2>Projects</h2>
        </section>

        <section className="skills" id="skills">
          <h2>Tech Stack</h2>
          <div className="container">
            <p>
              Below are some of my preferred technical tools and languages. While I have a strong affinity for these skills, my passion for technology doesn't stop here. I'm always eager to embrace new challenges and expand my skillset. So if there's a technology or tool not listed here, I'm likely already excited about the opportunity to learn and master it!
            </p>
          </div>
          <div className="skill-container">
            <div className="skill">
                <img src={imageCss} alt="" />
              </div>
              <div className="skill">
                <img src={imageHtml5} alt="" />
              </div>
              <div className="skill">
                <img src={imageVite} alt="" />
              </div>
              <div className="skill">
                <img src={imageReactjs} alt="" />
              </div>
              <div className="skill">
                <img src={imageGithub} alt="" />
              </div>
              <div className="skill">
                <img src={imageFirebase} alt="" />
              </div>
          </div>
        </section>

        <section className="education" id="education">
          <h2>Education</h2>
        </section>

        <section className="blog" id="blog">
          <h2>Blog</h2>
        </section>

        <section className="contact" id="contact">
          <h2>Contact</h2>
        </section>

        <section className="resume" id="resume">
          <h2>Resume</h2>
        </section>

    </div>
  )
}

export default Home
