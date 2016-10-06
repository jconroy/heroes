'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import HeroesMenu from './HeroesMenu';
import Flag from './Flag';
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
            Olympic medalist from <strong><Flag code={hero.country} showName="true"/></strong>,
            born in {hero.birth} (Find out more on <a href={hero.link} target="_blank">Wikipedia</a>).
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
