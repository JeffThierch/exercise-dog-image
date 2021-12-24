import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dogImage: '',
    };

    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.dogImage.includes('terrier')) {
      console.log('oi');
      return false;
    }
    return true;
  }

  handleClick() {
    this.componentDidMount();
  }

  async fetchAPI() {
    const fetchData = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await fetchData.json();
    this.setState({
      dogImage: data.message,
    });
  }

  render() {
    const { dogImage } = this.state;
    const dogImageRender = (
      <>
        <section className="dog-image-container">
          <img
            src={ dogImage }
            alt="dog"
            className="dog-image"
          />
        </section>
        <button type="button" onClick={ this.handleClick }>Trocar Imagem</button>
      </>
    );

    if (dogImage === '') {
      return 'loading...';
    }

    return (
      <main>
        {dogImageRender}
      </main>
    );
  }
}
