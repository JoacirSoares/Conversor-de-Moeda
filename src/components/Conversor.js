/* eslint-disable no-useless-constructor */
import React from 'react'
import './Conversor.css'

export default class Conversor extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            moedaA: "",
            moedaB: 0
        }

        this.converter = this.converter.bind(this);
    }

    converter() {
        let dePara = `${this.props.moedaA}_${this.props.moedaB}`
        let url = `https://free.currconv.com/api/v7/convert?q=${dePara}&compact=ultra&apiKey=dfb071fd313c5c1be995`

        fetch(url)
        .then(res => {

            return res.json()

        })
        .then(json => {
            let cotacao = json[dePara]
            let moedaB = (parseFloat(this.state.moedaA) * cotacao).toFixed(2)
            this.setState({ moedaB })
        })
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="number" onChange={e => {
                    this.setState({moedaA: e.target.value})
                }}></input>
                <input type="button" value="converter" onClick={this.converter}></input>
                <h2>{this.state.moedaB}</h2>
            </div>
        )
    }
}