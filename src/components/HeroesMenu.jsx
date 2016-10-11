import React from 'react';
import { Link } from 'react-router';
import heroes from '../data/heroes';

export default function HeroesMenu() {
  return (
    <nav className="heroes-menu">
      {heroes.map(menuHero => (
        <Link key={menuHero.id} to={`/hero/${menuHero.id}`} activeClassName="active">
          {menuHero.name}
        </Link>
      ))}
    </nav>
  );
}
