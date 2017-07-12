import React, { Component } from 'react'
import './Pokémon.css'

class Pokémon extends Component {
    constructor(props){
        super(props)

        this.state = {
            pokémon: {}
        }

        this.fetchUserData(props)
    }

    fetchUserData = (props) => {
        (fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.pokemonName}`))
            .then(response => response.json())
            .then(data => {
                const pokémon = {
                    name: data.name,
                    frontSprite: data.sprites.front_default,
                    height: data.height,
                    weight: data.weight,
                    baseExperience: data.base_experience,
                }
                this.setState({ pokémon })
            })
            .catch(err => console.warn(err))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchUserData(nextProps)
        }
    }

    render() {
        const { name, frontSprite, height, weight, baseExperience } = this.state.pokémon
        return(
            <div className="pokémon">
                <img src={frontSprite} alt="pokémon sprite front" />
                <h2>{name}</h2>
                <h3>height: {height}</h3>
                <h3>weight: {weight}</h3>
                <h3>base exp: {baseExperience}</h3>
            </div>
        )
    }
}

export default Pokémon