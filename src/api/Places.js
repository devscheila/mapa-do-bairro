const CLIENT_ID = '1F00KRM4LJXVO3BWIDTWLTLAMHLZNP5XHQNJUP5TT1ZJ1F0R'
const CLIENT_SECRET = 'MM1L3WQEFVJ3UVSBHRNQU2UN0QJ4XH5LL5W0ZPY1BZVU220H'

export const getPlaces = () => {

const parameters = {
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  query: "alimentacao",
  near: "Florianopolis",
  v: "20182507"
}

return (
  fetch(`https://api.foursquare.com/v2/venues/explore?`+ new URLSearchParams(parameters))
      .then(resp => resp.json())
      .then(result => result.response.groups[0].items)
  )
}