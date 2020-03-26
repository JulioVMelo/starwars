import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from './components/List';
import Detail from './components/Detail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/:id?" exact component={Detail} />
    </Switch>
  );
}
