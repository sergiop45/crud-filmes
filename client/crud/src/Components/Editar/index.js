import React, {Component} from 'react';
import './style.css';

class Editar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            ano: "",
            descricao:"",
            api: "http://localhost:4000/filmes"
        }

        this.editar = this.editar.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    limpar() {
        
        this.setState({
            nome: "",
            ano: "",
            descricao:"",
        });

        
    }

    editar() {
        
        let state = this.state;
        let url = state.api
        let filme = {
            nome: state.nome,
            ano: state.ano,
            descricao: state.descricao
        }

        fetch(url, {
            method: "PUTCH",
            body: JSON.stringify(filme),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then( () => {
            this.limpar()
            alert("Filme Editado!")
        })
        .catch((err) => alert("Erro ao editar filme: " +err));

    }
    
    render() {
       
        return (
            <div className="editar">
            Nome:
            <input 
            name='name' placeholder='Titulo...' type='text' 
            className='cadastro-input' value={this.state.nome}
            onChange={(e) => {
                this.setState({nome: e.target.value})
            }
            }
            />
            Ano de Lançamento:
            <input 
            name='ano' placeholder='Ano...' type='text' 
            className='cadastro-input' value={this.state.ano}
            onChange={(e) => this.setState({ano: e.target.value})}
            />
            Descrição:
            <input 
            name='descricao' placeholder='Descrição...' type='text' 
            className='cadastro-input' value={this.state.descricao}
            onChange={(e) => this.setState({descricao: e.target.value})}
            />
            <div className='buttons'>
            <button onClick={() => this.editar()}>Editar</button>
            <button onClick={() => this.limpar()} >limpar </button>
            </div>
            
        </div>
        );

    }

}

export default Editar;