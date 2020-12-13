import { Component } from 'react';
import shortid from 'shortid';

import s from './Form.module.css';
import st from '../box.module.css';

const INITIAL__STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;

    onAdd({ id: shortid.generate(), name, number });

    this.resetForm();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;

    if (!name || !number) {
      alert('Одно или больше полей осталось не заполненым');
      return false;
    }

    return onCheckUnique(name);
  };

  resetForm = () => {
    this.setState(INITIAL__STATE);
  };

  render() {
    const { name, number } = this.state;
    const handleChangeForm = this.handleChangeForm;
    const handleFormSubmit = this.handleFormSubmit;

    return (
      <form className={s.form} onSubmit={handleFormSubmit}>
        <label className={s.input}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeForm}
          />
        </label>
        <label className={s.input}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChangeForm}
          />
        </label>
        <button className={st.myButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
