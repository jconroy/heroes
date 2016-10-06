'use strict';

import React from 'react';
import { Link } from 'react-router';
import heroes from '../data/heroes';

export default class HeroesMenu extends React.Component {
  render() {
    return (
      <nav className="heroes-menu">
        {heroes.map(menuHero => {
          return <Link key={menuHero.id} to={`/hero/${menuHero.id}`} activeClassName="active">
            {menuHero.name}
          </Link>;
        })}
      </nav>
    );
  }
}
