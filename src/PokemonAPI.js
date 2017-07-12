import React, { Component } from 'react'
import './Pokéapi.css'
import { Route } from 'react-router-dom'
import Pokémon from './Pokémon'

class Pokéapi extends Component {
    state = {
        pokémonName: ''
    }

    handleChange = (ev) => {
        this.setState({ pokémonName: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/pokéapi/${this.state.pokémonName.toLowerCase()}`)
        this.setState({ pokémonName: '' })
    }

    render() {
        return (
        <div className="pokéapi">
            <img 
            className="pokéball" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2000px-Pok%C3%A9_Ball_icon.svg.png"
            alt="pokéball"
            />
            <h1 className="pokéapi-heading">
                Pokéapi
            </h1>
            <form onSubmit={this.handleSubmit}>
            <div>
                <input
                    type="text"
                    value={this.state.pokémonName}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <button type="submit">Look up Pokémon</button>
            </div>
            </form>
            <Route path="/pokéapi/:pokemonName" component={Pokémon} />
            {/*<Route path="/pokéapi/:pokemonName" render={(props) => <h3>You searched for {props.match.params.pokemonName}</h3>} />*/}
            <Route exact path="/pokéapi" render={() => <h3>Please enter a Pokémon to search on Pokéapi.</h3>} />
        </div>
        )
    }
}

export default Pokéapi