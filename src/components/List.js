import React, { Component } from 'react'

class List extends Component {

  render() {
    const places = this.props.places;
    return (
      <aside>
        <h2>Places</h2>
        <span>{this.props.queryString}</span>
        <input type="text" value={this.props.queryString} onChange={e => this.props.handleChange(e.target.value)} />
        <ul>
          {places.map(pin => (
            <li key={pin.venue.id}>
              <h3>
                <a href="#" onClick={() => this.props.showInfoContent(pin)}>
                  {pin.venue.name}
                </a>
              </h3>
              <address>{pin.venue.location.address}</address>
            </li>
          ))}
        </ul>
      </aside>
    )
  }

}

export default List