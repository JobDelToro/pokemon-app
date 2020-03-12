import React from 'react';
import { Link } from 'react-router-dom'; 
import _ from 'lodash';
import { connect } from 'react-redux';
import AppStyles from '../containers/App.scss';
import Avatar from './Avatar';
import { pokemonId } from '../utils/helpers';
const Pokemon = (props) => {

    const {id, pokemon } = props;

    const pokemonName = (name) => {
        return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    }

    return (
        <div className={`${AppStyles['col-xs-12']} ${AppStyles['col-sm-4']} ${AppStyles['col-md-3']}`}>
            <div className={AppStyles.thumbnailWrap}>
                <div className={AppStyles.thumbnail}>
                    <Avatar pokemon={pokemon} />
                    <div className={AppStyles.caption}>
                        <span className={`${AppStyles.label} ${AppStyles['label-default']}`}>
                            {pokemonId(pokemon.url)}
                        </span>
                        <h1>{pokemonName(pokemon.name)}</h1>
                        {
                            <div>
                                <button type="button" className={`${AppStyles.btn} ${AppStyles['btn-default']} ${AppStyles['btn-lx']}`}>
                                    <Link to={`/pokemon/${id}`}>Show</Link>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;
