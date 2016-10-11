import React from 'react';
import { Link } from 'react-router';

function HeroPreview(props) {
  return (
    <Link to={`/hero/${props.id}`}>
      <div className="hero-preview">
        <img src={`img/${props.image}`} alt="" />
        <h2 className="name">{props.name}</h2>
      </div>
    </Link>
  );
}

HeroPreview.propTypes = {
  id: React.PropTypes.string,
  image: React.PropTypes.string,
  name: React.PropTypes.string,
};

export default HeroPreview;
