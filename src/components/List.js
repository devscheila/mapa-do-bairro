import React from 'react'

const List = (props) => {
  const places = props.places;
  
  // exibe a listagem de locais num menu lateral e um campo para filtragem de locais
  return (
    <div className="pos-f-t" id="list-places">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="p-4">
          <h2>Places</h2>
          <span>{props.queryString}</span>
          <input type="text" value={props.queryString} onChange={e => props.handleChange(e.target.value)} />
          <ul>
            {places.map(pin => (
              <li key={pin.venue.id}>
                <h3>
                  <a href="#" onClick={() => props.showInfoContent(pin)}>
                    {pin.venue.name}
                  </a>
                </h3>
                <address>{pin.venue.location.address}</address>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default List