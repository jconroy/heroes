import React from 'react';
import HeroPreview from './HeroPreview';
import heroes from '../data/heroes';

export default function IndexPage() {
  return (
    <div className="home">
      <div className="heroes-selector">
        {heroes.map(heroData => <HeroPreview key={heroData.id} {...heroData} />)}
      </div>
    </div>
  );
}
