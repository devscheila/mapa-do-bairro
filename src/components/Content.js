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
        let content = this.prepareContent(places);
        window.infowindow.setContent(content);
        window.infowindow.open(window.mapObject, window.markers[i]);
      }
    }
  }

  prepareContent = (location) => {
    return (
      <div>
        <h3>
          Name: <a href="">${location.venue.name}</a>
        </h3>
        <address>Address: ${location.venue.location.address}</address>
      </div>
    )
  }

  handleTextChange = (query) => {
    this.setState({ query })
    if (query) {
      this.setState({
        locations: this.filterLocations(query, this.state.places)
      });
    } else {
      this.setState({ locations: this.state.allPlaces })
    }
  }

  filterLocations = (query, locations) => {
    return (
      locations.filter(location => location.venue.name.toLowerCase().includes(query.toLowerCase()))
    )
  }

  render() {
    return (
      <content>
        <List
          locations={this.state.places}
          showInfoContent={this.handleClick}
          queryString={this.state.query}
          handleChange={this.handleTextChange}
        />
        <Map
          locations={this.state.places}
          prepareContent={this.prepareContent}
        />
      </content>
    )
  }
}

export default Content