
import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Header } from './components/header/header'

interface Props {
   name: string
}

export function App (props: Props){
  const { name } = props;
  return (
    <div>
      <Header />
      <h1>Hello {name}</h1>
    </div>
  );
}

export default hot(App);
