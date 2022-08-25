import React, {Component}  from 'react';
import './style.css';
import {AiFillDelete} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import {Redirect, Route} from 'react-router';
 import Editar from '../Editar';

class Filmes extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            api: "http://localhost:4000/filmes",
            filmes: [],
            redirectTo: false,
            idEdit: ""
        }

        this.listar = this.listar.bind(this);
        this.deletar = this.deletar.bind(this);
        this.editar = this.editar.bind(this);
    }

    componentDidMount() {
        this.listar();
    }

    async listar () {
        
        let state = this.state;
        let pathApi = state.api;
        
        await fetch(pathApi)
        .then((data) => data.json())
        .then((lista) => {
            this.setState({filmes: lista})
        }).catch((err) => alert("erro: " + err));
        
    }

    async deletar(id) {
        let state = this.state;
        let url = state.api + "/" + id;
        await fetch(url, {method: "DELETE"})
        .then(alert("filme excluido!"))
        .catch((err) => alert("erro ao tentar excluir: " + err));
        this.listar()
    }

    editar(id) {
        this.state.redirectTo = "editar";
        this.state.idEdit = id;
    }
    

    render() {

        return (
            <div className='filmesList'>
                <h1>Lista de Filmes</h1>
                <br></br>
                <table border="1">
                
                    <thead>
                        <th>ID</th>
                        <th>TITULO</th>
                        <th>ANO</th>
                        <th>DESCRIÇÃO</th>
                        <th>EDITAR</th>
                        <th>DELETAR</th>
                    </thead>
                   {this.state.filmes.map((filme) => {
                    return(
                        
                        <tbody key={filme.id}>
                        <td> {filme.id} </td>
                        <td> {filme.title} </td>
                        <td> {filme.year} </td>
                        <td> {filme.description} </td>
                        <td><FiEdit onClick={() => this.editar(filme.id)}/></td>
                        <td><AiFillDelete onClick={() => this.deletar(filme.id)}/></td>
                        </tbody>
                    );
                
                   })}
                
                </table>
            </div>
        );
        
    }
}

export default Filmes;