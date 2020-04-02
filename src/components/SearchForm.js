import React, { Component } from 'react'

const API_KEY = '4c1907'



export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value });
    }

    _handleSubmit = async (e) => {
        e.preventDefault();
        const { inputMovie } = this.state;
         const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`);
         const { Search = [], totalResults = "0" } = await response.json();
         console.log({ Search, totalResults});
         this.props.onResults(Search);
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text"
                            onChange={this._handleChange}
                            placeholder="Movie to search" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}