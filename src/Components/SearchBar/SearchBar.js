import './SearchBar.css';
import React from 'react';
import ReactDOM from 'react-dom';

export class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button class="SearchButton">SEARCH</button>
      </div>
    );
  }
}
