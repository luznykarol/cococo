import React, { Component } from 'react'

import InputField from './partials/InputField'
import TextField from './partials/TextField'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      company: '',
      cityName: '',
      eventType: '',
      acceptance: '',
      emailValid: true,
      nameValid: true,
      // messageValid: true,
      formValid: false,
      isSending: false,
      isSend: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.validateField = this.validateField.bind(this)
  }

  handleCheckbox(e) {
    console.log(this.state.acceptance)
    this.setState({ acceptance: e.target.checked })
  }

  handleChange(e) {
    let change = {}
    let name = e.target.name
    let value = e.target.value
    change[name] = value
    this.setState(
      {
        [name]: value,
      },
      () => this.validateField(name, value),
    )
  }

  clearForm() {
    this.setState({
      email: '',
      name: '',
    })
  }

  validateField(fieldName, value) {
    let emailValid = this.state.emailValid
    let nameValid = this.state.nameValid

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        break
      case 'name':
        nameValid = value.length >= 1
        break
      default:
        break
    }

    this.setState(
      {
        emailValid: emailValid,
        nameValid: nameValid,
        // messageValid: messageValid,
      },
      this.validateForm,
    )
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.nameValid })
  }

  handleFormSubmit(e) {
    let contactTitle = this.props.formTitle
    e.preventDefault()
    if (!this.state.isSending && this.state.formValid) {
      this.setState({
        formValid: this.state.emailValid && this.state.nameValid,
      })
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': contactTitle, ...this.state }),
      })
        .then(() => {
          this.setState({
            isSending: false,
            isSend: true,
          })
          this.clearForm()
        })
        .catch((error) => alert(error))
    }
  }

  render() {
    const contactTitle = this.props.formTitle
    const statusClass =
      this.state.isSending || this.state.isSend
        ? 'form-container__status form-container__status--active'
        : 'form-container__status'
    const sendingStatus = !this.state.isSend ? (
      <div className='loading-dots loading-dots--blue'>
        <div className='loading-dots--dot'></div>
        <div className='loading-dots--dot'></div>
        <div className='loading-dots--dot'></div>
      </div>
    ) : (
      <h1 className='title-3'>
        Thank you for reaching out! <br />
        I'm rushing to reply!
      </h1>
    )

    return (
      <form
        onSubmit={this.handleFormSubmit}
        className='form-container'
        name={contactTitle}
        data-netlify='true'>
        <div className={statusClass}>{sendingStatus}</div>
        <div className='field-grouped'>
          <InputField
            type='email'
            name='email'
            placeholder='Adres e-mail'
            label='Adres e-mail'
            required={true}
            onChange={this.handleChange}
            error={this.state.emailValid}
            errorMessage='Wpisz poprawny adres email'
          />
        </div>
        <div className='field-grouped'>
          <InputField
            type='text'
            name='name'
            placeholder='Imię i nazwisko'
            label='Imię i nazwisko'
            onChange={this.handleChange}
            error={this.state.nameValid}
            errorMessage='Wpisz swoje imię'
          />
        </div>

        <div className='field-grouped'>
          <InputField
            type='text'
            name='cityName'
            placeholder='Miasto'
            label='Miasto'
            onChange={this.handleChange}
            required={false}
          />
        </div>

        <div className='field-grouped'>
          <InputField
            type='text'
            name='eventType'
            placeholder='Rodzaj organizowanego eventu'
            label='Rodzaj organizowanego eventu'
            onChange={this.handleChange}
          />
        </div>
        <div className='flex items-center'>
          <div>
            <input
              className='styled-checkbox'
              name='acceptance'
              id='acceptance'
              type='checkbox'
              checked={this.state.acceptance}
              onChange={this.handleCheckbox}
            />
            <label htmlFor='acceptance'></label>
          </div>
          <p className='ml-4 text-xxs text-yellow'>
            Potwierdzam, że jestem świadomy, że Cozy Cocktail Collective
            wykorzystuje moje dane na cele marketingu bezpośredniego.
          </p>
        </div>

        <div className='control'>
          <button disabled={this.state.isSending} role='submit'>
            Wyślij zgłoszenie
          </button>
        </div>
      </form>
    )
  }
}
