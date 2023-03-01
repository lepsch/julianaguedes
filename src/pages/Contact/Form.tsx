import React from 'react'
import axios from 'axios'

import './Form.scss'

function Form () {
  const [sending, setSending] = React.useState(false)
  const nomeRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const telefoneRef = React.useRef<HTMLInputElement>(null)
  const mensagemRef = React.useRef<HTMLTextAreaElement>(null)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      email: emailRef.current!.value,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      mensagem: mensagemRef.current!.value,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      nome: nomeRef.current!.value,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      telefone: telefoneRef.current!.value,
    }
    setSending(true)
    try {
      await axios.post('/sendmail.php', data)
      alert('Mensagem enviada com sucesso!')
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      emailRef.current!.value = ''
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      mensagemRef.current!.value = ''
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      nomeRef.current!.value = ''
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      telefoneRef.current!.value = ''
    } finally {
      setSending(false)
    }
  }

  const onInput = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = event.currentTarget
    input.setCustomValidity('')
  }

  return <div className='Form'>
    <h1 className='title'>Envia uma mensagem</h1>
    { /* eslint-disable-next-line @typescript-eslint/no-floating-promises */ }
    <form action='/sendmail.php' className='form' method='post' onSubmit={ (event) => { onSubmit(event) } }>
      <div className='form-group'>
        <label htmlFor='nome'>Nome</label>
        <input disabled={ sending } id='nome' name='nome' onInput={ onInput } ref={ nomeRef } required type='text' />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input disabled={ sending } id='email' name='email' onInput={ onInput } ref={ emailRef } required type='email' />
      </div>
      <div className='form-group'>
        <label htmlFor='telefone'>Telefone</label>
        <input disabled={ sending } id='telefone' minLength={ 9 } name='telefone' onInput={ onInput } ref={ telefoneRef } required type='tel' />
      </div>
      <div className='form-group'>
        <label htmlFor='mensagem'>Mensagem</label>
        <textarea disabled={ sending } id='mensagem' name='mensagem' onInput={ onInput } ref={ mensagemRef } required rows={ 5 } />
      </div>
      <button className='button' disabled={ sending } type='submit'>Enviar</button>
    </form>
  </div>
}

export default Form
