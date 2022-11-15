import React from 'react';

import Spotify from '../../assets/desktop/spotify.svg';
import Apple from '../../assets/desktop/apple-podcast.svg';
import Google from '../../assets/desktop/google-podcasts.svg';
import Pocket from '../../assets/desktop/pocket-casts.svg';
import Form from '../pure/Form';

const Content = () => {
  return (
    <main className='main'>
      <h1 className='title'>
        Publish your podcasts <span className='title-white'>everywhere.</span>
      </h1>
      <p className='main-text text'>
        Upload your audio to Pod with a single click.
        We’ll then distribute your podcast to Spotify,
        Apple Podcasts, Google Podcasts, Pocket
        Casts and more!
      </p>

      <div className='main-bottom'>
        <div className='main-brands'>
          <img
            src={Spotify}
            alt='Spotify podcasts'
            className='main-brands_spotify'
          />
          <img
            src={Apple}
            alt='Apple podcasts'
            className='main-brands_apple'
          />
          <img
            src={Google}
            alt='Google podcasts'
            className='main-brands_google'
          />
          <img
            src={Pocket}
            alt='Pocket casts'
            className='main-brands_pocket'
          />
        </div>
        <Form />
      </div>

    </main>
  );
}

export default Content;
