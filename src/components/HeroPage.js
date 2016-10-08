'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import HeroesMenu from './HeroesMenu';
import heroes from '../data/heroes';

export default class HeroPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const hero = heroes.filter((hero) => hero.id === id)[0];
    if (!hero) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${hero.cover})` };
    return (
      <div className="hero-full">
        <HeroesMenu/>
        <div className="hero">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${hero.image}`}/>
            <h2 className="name">{hero.name}</h2>
          </div>
          <section className="description">
            <p>First appeared in <strong>{hero.first_appearance}</strong>.</p>
            <p>Find out more at the <a href={hero.link} target="_blank">Marvel Universe Wiki</a>.</p>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
