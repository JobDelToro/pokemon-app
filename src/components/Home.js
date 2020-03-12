import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemons from './Pokemons';
import * as PokemonActions from '../actions/pokemons';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
export class Home extends Component {

    componentDidMount() {
        //Just to show loading message a little longer :)
        _.delay(() => {
            this.props.actions.pokemons.getPockemonsList({ limit: 100 });
        }, 3000)

    }

    render() {
        return (
            <Pokemons />
        );
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => ({
        actions: {
            pokemons: bindActionCreators(PokemonActions, dispatch)
        }
    }))(Home);