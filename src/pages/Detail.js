import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = '4c1907'


export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    state = { movie: {} }

    async _fetchMovie({ id }) {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        const movie = await response.json();
        console.log(movie);
        this.setState({ movie });
    }

    //_goBack (){
    //    window.history.back();
   // }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        this._fetchMovie({ id: movieId })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
        return (
            <div>
                <ButtonBackToHome/>
                <h1>{Title}</h1>
                <img alt={Title} src={Poster} />
                <h3>{Actors}</h3>
                <spa>{Metascore}</spa>
                <p>{Plot}</p>
            </div>

        )
    }
}