import React, { Component } from 'react'

class Map extends Component {

  markers = []

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

        marker.addListener('click', () => {
          let content = this.props.infoPlaces(places[i])
          infowindow.setContent(content)
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
      <div id="map"></div>
    )
  }
}

export default Map