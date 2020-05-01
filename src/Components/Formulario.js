import React, { Component } from 'react'

export default class Formulario extends Component {

    constructor()
    {
        super();

        this.state = 
        {
            username: '',
            name: '',
            idioma: '',
            genero: '',
            sobre: '',
            accept: '',
            message : ''
        }
    }

    save(e)
    {
        this.setState({
            message : "sucesso"
        })
    }

    onChange(e)
    {
        if(e.target.name === 'accept')
        {
            this.setState({
                [e.target.name] : e.target.checked
            }) 
        }
        else
        {
            this.setState({
            [e.target.name] : e.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <label htmlFor="username">Nome de usuario:</label>
                <div style={{padding : "10px"}}>
                    <input value={this.state.username} onChange={this.onChange.bind(this)} name="username" id="username" type="text" />
                </div>

                <label htmlFor="name">Nome:</label>
                <div style={{padding : "10px"}}>
                    <input value={this.state.name} onChange={this.onChange.bind(this)} name="name" id="name" type="text" />
                </div>

                <label htmlFor="idioma">Idioma</label>
                <div style={{padding : "10px"}}>
                    <select name="idioma" id="idioma" value={this.state.idioma} onChange={this.onChange.bind(this)}>
                        <option value="">Selecione um tipo</option>
                        <option value="en">Ingles</option>
                        <option value="es">Espanhol</option>
                        <option value="jp">Japones</option>
                    </select>
                </div>

                <label htmlFor="genero">Genero</label>
                <div style={{padding : "10px"}}>
                    <input type="radio" value="h" onChange={this.onChange.bind(this)} name="genero"/>Homem
                    <input type="radio" value="m" onChange={this.onChange.bind(this)} name="genero"/>Mulher
                </div>

                <label htmlFor="sobre">Sobre:</label>
                <div style={{padding : "10px"}}>
                    <textarea name="sobre" id="sobre" value={this.state.sobre} onChange={this.onChange.bind(this)}/>
                </div>

                <div style={{padding : "10px"}}>
                    <input id="accept" name="accept" type="checkbox" value={this.state.accept} onChange={this.onChange.bind(this)} />Termos e Condições
                </div>

                <div style={{padding : "10px"}}>
                    <button onClick={this.save.bind(this)}>Guardar</button>
                    <span>{this.state.message}</span>
                </div>

                <div style={{padding : "10px"}}>
                    <p>{JSON.stringify(this.state)}</p>
                </div>
            </div>
        )
    }
}
