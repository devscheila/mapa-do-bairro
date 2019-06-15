const CLIENT_ID = '1F00KRM4LJXVO3BWIDTWLTLAMHLZNP5XHQNJUP5TT1ZJ1F0R'
const CLIENT_SECRET = 'MM1L3WQEFVJ3UVSBHRNQU2UN0QJ4XH5LL5W0ZPY1BZVU220H'

export const getPlaces = () => {
  return (
    fetch(`https://api.foursquare.com/v2/venues/explore?cat=Alimenta%C3%A7%C3%A3o&near=Ingleses%20do%20Rio%20Vermelho%2C%20Florian%C3%B3polis%2C%20SC%2C%20Brasil&nearGeoId=10014718&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180101`)
      .then(resp => resp.json())
      .then(result => result.response.groups[0].items)
  )
}   