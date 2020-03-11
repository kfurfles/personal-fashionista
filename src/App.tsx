
import React from 'react';
import { hot } from "react-hot-loader/root";
interface Props {
   name: string
}

export function App (props: Props){
  const { name } = props;
  return <h1>Hello {name}</h1>;
}

export default hot(App);
