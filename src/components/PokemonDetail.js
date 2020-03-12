import React, { Component } from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as PokemonActions from '../actions/pokemons';
import AppStyles from '../containers/App.scss';

class PokemonDetail extends Component {

    componentDidMount() {
            
            this.props.actions.pokemonFetch.getPokemon(this.props.match.params.id);
    }

    pokemonName(name) {
        return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    }

    renderAvatar(pokemon) {
        let pokemonAvatarURL = `http://www.poketdex.com/images/dex/pokemon-large/${pokemon.id}.png`;

        return <img title={pokemon.name} alt={pokemon.name} src={pokemonAvatarURL} />;

    }

    renderAbilities(pokemon) {
        return (
            <div>
                <h1>Abilities</h1>
                <ul>
                    {_.map(pokemon.abilities, (ability, index) => (<li key={index}>{ability.ability.name}</li>))}
                </ul>
            </div>
        )
    }

    renderForms(pokemon) {
        return (
            <div>
                <h1>Forms</h1>
                <ul>
                    {_.map(pokemon.forms, (form, index) => (<li key={index}>{form.name}</li>))}
                </ul>
            </div>
        )
    }

    renderGames(pokemon) {
        return (
            <div>
                <h1>Games edtions</h1>
                <ul>
                    {_.map(pokemon.game_indices, (game_indice, index) => (<li key={index}>{game_indice.version.name}</li>))}
                </ul>
            </div>
        )
    }

    renderHeight(pokemon) {
        return (
            <div>
                <h1>Height</h1>
                <ul>
                    <li>{pokemon.height} ft</li>
                </ul>
            </div>
        )
    }

    renderMoves(pokemon) {
        return (
            <div>
                <h1>Moves</h1>
                <ul>
                    {_.map(pokemon.moves, (move, index) => (<li key={index}>{move.move.name}</li>))}
                </ul>
            </div>
        )
    }
    renderBase() {

        const { data } = this.props.pokemon;
        console.log('heeeey', data);
        return (
            <div>
                {this.props.pokemon.data.length === 0 ?

                <div className={`${AppStyles.alert} ${AppStyles['alert-default']}`} role="alert">
                    Please wait, loading...
                </div>
                :
                <div className={`${AppStyles.panel} ${AppStyles.clearfix} ${AppStyles['panel-default']}`}>
                    <div className={AppStyles['panel-body']}>
                        <div className={AppStyles.row}>
                            <div className={AppStyles.thumbnail}>
                                {this.renderAvatar(data)}
                                <div className={AppStyles.caption}>
                                    <span className={`${AppStyles.label} ${AppStyles['label-default']}`}>
                                        {data.id}
                                    </span>
                                    <h1>{this.pokemonName(data.name)}</h1>
                                </div>
                            </div>
                            {/* {_.map(props.pokemons, (pokemon, index) => (
                                <Pokemon key={index} id={index + 1} pokemon={pokemon} />
                            ))
                            } */}
                        </div>
                        <div className={AppStyles.row}>
                            {this.renderAbilities(data)}
                        </div>
                        <div className={AppStyles.row}>
                            {this.renderForms(data)}
                        </div>
                        <div className={AppStyles.row}>
                            {this.renderGames(data)}
                        </div>
                        <div className={AppStyles.row}>
                            {this.renderHeight(data)}
                        </div>
                        <div className={AppStyles.row}>
                            {this.renderMoves(data)}
                        </div>
                    </div>
                </div>
                }
            </div>
            
        )
    }

    render() {
        console.log("holaaaa",this.props.pokemon.data);
        return <div>{this.renderBase()}</div>
    }
}

const mapStateToProps = (state) => {
     return { pokemon: state.pokemonEdit }
};

export default connect(
    mapStateToProps,
    (dispatch) => ({
        actions: {
            pokemonFetch: bindActionCreators(PokemonActions, dispatch)
        }
    })
    )(PokemonDetail);