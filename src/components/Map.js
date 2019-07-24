import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Map extends Component {

  static propTypes = {
    places: PropTypes.array.isRequired
  };

  markers = []

  // adiciona marcadores no mapa para todos os locais listados
  addMarkers = (places) => {
    if (window.google) {
      let infowindow = new window.google.maps.InfoWindow()
      for (let i = 0; i < places.length; i++) {
        let marker = new window.google.maps.Marker({
          position: {
            lat: places[i].venue.location.lat,
            lng: places[i].venue.location.lng
          },
          map: window.map,
          title: places[i].venue.id,
          animation: window.google.maps.Animation.DROP
        })

        // ao clicar no marcador exibe um popup com os dados do local e anima o marcador
        marker.addListener('click', () => {
          let content = this.props.infoPlaces(places[i])
          infowindow.setContent(content)
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
          setTimeout(() => marker.setAnimation(null), 2100);
          infowindow.open(window.map, marker) 
        })

        this.markers.push(marker)
      }

      window.infowindow = infowindow
      window.markers = this.markers
    }
  }

  deleteMarkers = () => {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null)
    }
  }

  render() {
    this.deleteMarkers()
    this.addMarkers(this.props.places)
    return (
      <div id="map" role="application"></div>
    )
  }
}

export default Map