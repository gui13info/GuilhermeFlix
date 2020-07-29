import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor:''
  };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    


    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]:valor, //nome: 'valor'
      })
    }

    function funcaoHandle(infoEvento){  
      setValue(
        infoEvento.target.getAttribute('name'),
        infoEvento.target.value)
      };

  return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome} </h1>


          <form onSubmit={function handleSubmit(infoEvento){
            infoEvento.preventDefault();
            // console.log("Paraa")
            setCategorias([
              ...categorias,
              values
            ]);

            setValues(valoresIniciais);
          }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={funcaoHandle}
        />

        <FormField
          label="Descrição:"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={funcaoHandle}
        />
        
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={funcaoHandle}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={funcaoHandle}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={funcaoHandle}
            />
          </label>
        </div> */}


          <button>Cadastar</button>
        </form>

      <ul>
          {categorias.map((categoria, i)=>{
            return(
              <li key={`${categoria}${i}`}> 
                {categoria.nome}
               </li>
            );
          })}
      </ul>

        <Link to='/'>
            Ir para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;