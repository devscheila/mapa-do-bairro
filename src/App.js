import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  
  componentDidMount() {
    this.renderMap()
  }

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -27.6198, lng: -48.5915 },
      zoom: 12
    })
    window.map = map
  }

  loadScript = (url) => {
    var index  = window.document.getElementsByTagName('script')[0]
    var script = window.document.createElement('script')
    script.src = url
    script.async = true
    script.defer = true
    script.onerror = () => { alert(`Erro ao carregar o Mapa`) }
    index.parentNode.insertBefore(script, index)
  }

  renderMap = () => {
    this.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCgtXMapS7ZgS5HDVujBNxK-WS-9ie208g&callback=initMap')
    window.initMap = this.initMap
  }
  
  render() {
    return (
      <main>
        <Header />
        <Content />
      </main>
    )
  }
}

export default App