import React, { Component } from 'react'
import Map from './Map'
import List from './List'
import * as PlacesAPI from '../api/Places'

class Content extends Component {

  state = {
    places: [],
    allPlaces: [],
    query: ''
  }

  componentDidMount() {
    PlacesAPI.getPlaces().then(resp =>
      this.setState({ places: resp, allPlaces: resp })
    )
  }

  handleClick = (places) => {
    for (let i = 0; i < window.markers.length; i++) {
      if (places.venue.id === window.markers[i].title) {
        let content = this.infoPlaces(places)
        window.infowindow.setContent(content)
        window.infowindow.open(window.map, window.markers[i])
      }
    }
  }

  infoPlaces = (place) => {
      return ( 
        `<div class="infoWindow">
          <h3>
            ${place.venue.name}
          </h3>
          <address>${place.venue.location.address}</address>
          <p>* Dados fornecidos por <a href="https://pt.foursquare.com/city-guide" title="Foursquare City Guide">Foursquare City Guide</a></p>
        </div>`
      )
    }

  handleTextChange = (query) => {
    this.setState({ query })
    if (query) {
      this.setState({
        places: this.filterPlaces(query, this.state.places)
      });
    } else {
      this.setState({ places: this.state.allPlaces })
    }
  }

  filterPlaces = (query, places) => {
    return (
      places.filter(place => place.venue.name.toLowerCase().includes(query.toLowerCase()))
    )
  }

  render() {
    return (
      <content>
        <List
          places={this.state.places}
          showInfoContent={this.handleClick}
          queryString={this.state.query}
          handleChange={this.handleTextChange}
        />
        <Map
          places={this.state.places}
          infoPlaces={this.infoPlaces}
        />
      </content>
    )
  }
}

export default Content