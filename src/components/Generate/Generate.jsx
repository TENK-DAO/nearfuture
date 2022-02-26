import React, { useContext } from 'react';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';
import { appStore } from '../../state/app';
import useBuy from '../../hooks/useBuy';

const Generate = () => {
  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  const { oneNFT } = state.price;

  const { formatPrice } = useBuy();

  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">NFTs that Evolve.</h2>
          <p className="generate__text">
          Near Future is NEAR’s first evolving Tribal RPG. NF: Primal is the first chapter in this brand new evolving universe, with a hand-drawn set of 3,500 unique ‘post-historic’ Nearbot NFTs at its core.

          </p>
          <p className="generate__text">
            NEAR Future NFTs are priced at a flat rate of {formatPrice(oneNFT)}{' '}
            NEAR.
          </p>
        </div>

        <div className="generate__block">
          {soldOut ? <GenerateSoldOut /> : <GenerateBlock />}

          <picture>
            <source srcSet="./images/Near_Future_Warrior.png, ./images/Near_Future_Warrior.png" />
            <img
              className={`generate__img ${
                soldOut ? 'generate__img-sold-out' : ''
              }`}
              src="./images/Near_Future_Warrior.png"
              alt="generate near future"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Generate;
