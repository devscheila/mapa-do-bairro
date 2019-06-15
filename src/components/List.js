import React, { Component } from 'react'

class List extends Component {
  
  render() {
    const locations = this.props.locations;
    return (
      <aside id="list">
        <h2>Places</h2>
        <span>{this.props.queryString}</span>
        <input type="text" value={this.props.queryString} onChange={e => this.props.handleChange(e.target.value)} />
        <ul>
          {locations.map(loc => (
            <li key={loc.venue.id}>
                <h3>
                    <a href="#" onClick={() => this.props.showInfoContent(loc)}>
                    {loc.venue.name}
                  </a>
                </h3>
                <address>{loc.venue.location.address}</address>
            </li>
          ))}
        </ul>
      </aside>
    )
  }

}

export default List