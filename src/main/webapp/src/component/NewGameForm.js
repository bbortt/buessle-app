// @flow
import React, { useState } from 'react';
import type { Element } from 'react';

import { useDispatch } from 'react-redux';

import { createLobby, joinLobby } from '../redux/action/lobby.action';
import { initializePlayer } from '../redux/action/player.action';

export const NewGameForm = (): Element<'div'> => {
  const [name, setName] = useState('');
  const [createNew, setCreateNew] = useState(true);
  const [newGameName, setNewGameName] = useState('');
  const [code, setCode] = useState('');
  const [touched, setTouched] = useState(false);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (errors.length > 0) {
      return;
    }

    dispatch(initializePlayer(name));
    if (createNew) {
      dispatch(createLobby(newGameName));
    } else {
      dispatch(joinLobby(code));
    }
  };

  const validateForm = (): boolean => {
    const errors = [];
    if (name.length <= 0) {
      errors.push('Dr Namä vergesse!');
    }
    if (createNew && newGameName.length <= 0) {
      errors.push('Dr Gäim Name vergesse!');
    }
    if (!createNew && code.length <= 0) {
      errors.push('Dr Code vergesse!');
    }
    if (!touched) {
      setTouched(!touched);
    }
    setErrors(errors);
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'createNew':
        setCreateNew(event.target.value === 'new');
        break;
      case 'newGameName':
        setNewGameName(event.target.value);
        break;
      case 'code':
        setCode(event.target.value);
        break;
      default:
    }

    validateForm();
  };

  return (
    <div className="NewGameForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="field_name">
          Namä:
          <input
            type="text"
            id="field_name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <br />

        <label htmlFor="field_new">
          I erstellä es nöis Spiel
          <input
            type="radio"
            id="field_new"
            name="createNew"
            value="new"
            onChange={handleChange}
            checked={createNew ? 'checked' : ''}
          />
        </label>

        <br />

        <label htmlFor="field_existing">
          I hane Iladig
          <input
            type="radio"
            id="field_existing"
            name="createNew"
            value="existing"
            onChange={handleChange}
            checked={!createNew ? 'checked' : ''}
          />
        </label>

        <br />

        {createNew ? (
          <div>
            <label htmlFor="field_newGameName">
              Spiel Namä:
              <input
                type="text"
                id="field_newGameName"
                name="newGameName"
                value={newGameName}
                onChange={handleChange}
              />
            </label>

            <br />
          </div>
        ) : (
          <div>
            <label htmlFor="field_code">
              Kod:
              <input
                type="code"
                id="field_code"
                name="code"
                value={code}
                onChange={handleChange}
              />
            </label>

            <br />
          </div>
        )}

        <input
          type="submit"
          value="Absände"
          disabled={!touched || errors.length !== 0}
        />
      </form>
    </div>
  );
};
