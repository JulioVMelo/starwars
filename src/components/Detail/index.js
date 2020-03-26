import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as Ui from './styles';
import api from '../../services/api';

export default function Detail() {
  const [person, setPerson] = useState('');
  const [starships, setStarships] = useState([]);
  const [isLoadingPerson, setLoadingPerson] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  function onHandleBack() {
    history.push('/');
  }

  async function onGetPerson() {
    try {
      setLoadingPerson(true);
      const { data } = await api.get(`people/${id}`);
      setPerson(data);
      setLoadingPerson(false);
    } catch (error) {
      console.log('[error]', error);
    }
  }

  async function onGetStarship(url) {
    try {
      const { data } = await api.get('', {
        baseURL: `${url}`,
      });

      setStarships(prevState => {
        return [...prevState, data];
      });
    } catch (error) {
      console.log(error);
    }
  }

  function onListStarships() {
    person.starships.map(starship => onGetStarship(starship));
  }

  useEffect(() => {
    onGetPerson();
  }, [id]);

  useEffect(() => {
    if (person.starships) {
      onListStarships();
    }
  }, [person]);

  return (
    <Ui.Container>
      <div className="backHome">
        <button type="button" onClick={onHandleBack}>
          Voltar
        </button>
      </div>
      <Ui.Person eyeColor={person.eye_color}>
        {person && !isLoadingPerson && (
          <>
            <p>
              Nome: <span>{person.name}</span>
            </p>
            <p>
              Sexo: <span>{person.gender}</span>
            </p>
            <p>
              Altura: <span>{person.height} cm</span>
            </p>
            <p>
              Peso: <span>{person.mass} </span>
            </p>
            <p>
              Cor dos olhos: <span className="eye" />
            </p>
          </>
        )}
        {isLoadingPerson && <h1>Carregando personagem...</h1>}
      </Ui.Person>
      <Ui.List>
        <h2>Naves</h2>
        {starships.map(starship => (
          <div className="starship">
            <p>
              Nome: <span>{starship.name}</span>
            </p>
            <p>
              Modelo: <span>{starship.model}</span>
            </p>
            <p>
              Custo em creditos: <span>{starship.cost_in_credits}</span>
            </p>
            <p>
              Fabricante: <span>{starship.manufacturer}</span>
            </p>
            <p>
              Velocidade máxima: <span>{starship.max_atmosphering_speed}</span>
            </p>
            <p>
              Classe: <span>{starship.starship_class}</span>
            </p>
          </div>
        ))}
      </Ui.List>
    </Ui.Container>
  );
}
