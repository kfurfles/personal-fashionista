
import React from 'react';
import { hot } from "react-hot-loader/root";
interface Props {
   name: string
}

export function ButtonComponent(props: { text: string }){
return (<button>{ props.text }</button>)
} 

export class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return <h1>Hello {name}</h1>;
  }
}

export default hot(App);
