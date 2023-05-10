import { Component } from 'react';
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    image: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=34890588-9da305e6d5e870774c8e66624&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(image => this.setState({ image }))
      .finally(() => this.setState({ loading: false }));
  }

  result = () => {
    this.state.image.hits.map(({ webformatURL, largeImageURL, tags }) => {
      return (
        <ul class="gallery">
          <li class="gallery-item">
            <img src={webformatURL} alt={tags} />
          </li>
        </ul>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar />
        {this.state.loading && <h1>Загружаем</h1>}
        {this.state.image && <ImageGallery images={this.state.image.hits} />}
      </div>
    );
  }
}
