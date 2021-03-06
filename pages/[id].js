import React, { Fragment } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import pokemonApi from '../api/pokemon'

const Detail = ({ pokemon }) => (
  <div>
    <Head>
      <title>Pokemon Detail</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="hero">
      <h1 className="title">Gotta Catch 'Em All</h1>
      <center>
        <h2>{pokemon.name}</h2>
        {pokemon.sprites ? (
          <Fragment>
            <img src={pokemon.sprites.front_default} alt="front sprite" />
            <img src={pokemon.sprites.back_default} alt="back sprite" />
          </Fragment>
        ) : null}
      </center>
      <Link href={`/`}>
        <a>Back to list</a>
      </Link>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

Detail.getInitialProps = async ({ query }) => {
  console.log('💎  Hello, I am new getInitialProps at [id].js')
  const { data } = await pokemonApi.get(query.id)
  return {
    pokemon: data,
  }
}

export default Detail
