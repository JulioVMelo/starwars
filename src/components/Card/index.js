import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Ui from './styles';

export default function Card({ person }) {
  const history = useHistory();

  function onViewDetail(id) {
    history.push(`/${id}`);
  }

  function onPrepareId(url) {
    const listChar = url.split('');
    const position = listChar.length - 2;
    const id = listChar[position];
    onViewDetail(id);
  }

  return (
    <Ui.Card>
      <h3>{person.name}</h3>
      <button type="button" onClick={() => onPrepareId(person.url)}>
        Ver detalhes
      </button>
    </Ui.Card>
  );
}

Card.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};

Card.defaultProps = {
  person: {
    name: '',
    url: '',
  },
};
