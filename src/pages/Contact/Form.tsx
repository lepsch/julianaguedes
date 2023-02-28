import React from 'react'

import './Form.scss'

function Form () {
  return <div className='Form'>
    <h1 className='title'>Envia uma mensagem</h1>
    <form action='/send.php' className='form' method='post'>
      <div className='form-group'>
        <label htmlFor='nome'>Nome</label>
        <input id='nome' type='text' />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' />
      </div>
      <div className='form-group'>
        <label htmlFor='telefone'>Telefone</label>
        <input id='telefone' type='tel' />
      </div>
      <div className='form-group'>
        <label htmlFor='mensagem'>Mensagem</label>
        <textarea id='mensagem' rows={ 5 } />
      </div>
      <button className='button' type='submit'>Enviar</button>
    </form>
  </div>
}

export default Form
