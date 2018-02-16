import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

/* eslint-disable global-require */
const DECKS = [
  { name: 'Anjanath', picture: require('../../assets/MHW-Anjanath_Icon.png') },
  {
    name: 'Tobi Kadachi',
    picture: require('../../assets/MHW-Tobi-Kadachi_Icon.png'),
  },
];

const Deck = () => (
  <GridList cols={3}>
    {DECKS.map(({ name, picture }) => (
      <GridTile>
        <img src={picture.replace('/', '')} alt={name} />
      </GridTile>
    ))}
  </GridList>
);

export default Deck;
