import React, { useEffect, useState } from 'react';
import * as Ui from './styles';
import Card from '../Card';
import api from '../../services/api';

export default function List() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function handleFetchListPeople() {
      await api.get('people').then(res => setPeople(res.data.results));
    }

    handleFetchListPeople();
  }, []);

  return (
    <Ui.List>
      {people &&
        people.map(person => <Card key={person.name} person={person} />)}
    </Ui.List>
  );
}
