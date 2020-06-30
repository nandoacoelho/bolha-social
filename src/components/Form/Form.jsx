import PrimaryButton from '../PrimaryButton/PrimaryButton'
import React from 'react'
import styles from './Form.module.scss'
import { useState } from 'react'

export default function Form({ onsubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    window.open(
      `mailto:maristela@nmadigital.com?subject="Uma mensagem para Bolha Social"&body=${name}\n${email}\n${phone}\n${message}`
    )
    onsubmit()
  }

  return (
    <form className={styles.form} name="bolha" encType="text/plain" onSubmit={handleSubmit}>
      <input
        htmlFor="bolha"
        value={name}
        onChange={event => {
          event.persist()
          setName(event.target.value)
        }}
        className={styles.inputText}
        placeholder="Nome"
      />
      <input
        htmlFor="bolha"
        onChange={event => {
          event.persist()
          setEmail(event.target.value)
        }}
        className={styles.inputText}
        type="email"
        value={email}
        placeholder="Email"
      />
      <input
        htmlFor="bolha"
        onChange={event => {
          event.persist()
          setPhone(event.target.value)
        }}
        className={styles.inputText}
        type="tel"
        value={phone}
        placeholder="Telefone"
      />
      <textarea
        htmlFor="bolha"
        value={message}
        onChange={event => {
          event.persist()
          setMessage(event.target.value)
        }}
        className={styles.inputTextarea}
        placeholder="Mensagem"
      />
      <PrimaryButton isSubmit title="ENVIAR" />
    </form>
  )
}
