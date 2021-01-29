import { useState } from 'react';

export const NewGameForm = () => {
  const [name, setName] = useState('');
  const [createNew, setCreateNew] = useState(true);
  const [newGameName, setNewGameName] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
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
            onClick={handleChange}
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
            onClick={handleChange}
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

        <input type="submit" value="Absände" />
      </form>
    </div>
  );
};
