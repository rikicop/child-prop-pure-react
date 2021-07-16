import React, { Component } from 'react'
import { render } from 'react-dom';
import './Card.css';


function Card({children, title}){
  return(
  <div className='container'>
      {children}
   <button> {title} </button>
  </div>
)
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <>
        <Card children={'Hey, are you passing me??'} title='Aprietmae Pues!!'></Card>

        <Card title='Aprietmae Pues!!'> <em> Just do it dude!!!, dot it Now </em> </Card>
       
        <Card title='Aprietmae Pues!!'>
             Empieza a editar y sucederá la magia... :)
        </Card>
        <br />
        <Card children={'Hey, are you passing me??'} title='Aprietmae Pues!!'></Card>

        <Card title='Aprietmae Pues!!'> <em> Just do it dude!!!, dot it Now </em> </Card>
       
        <Card title='Aprietmae Pues!!'>
             Empieza a editar y sucederá la magia... :)
        </Card>
      </>
    );
  }
}
render(<App />, document.getElementById('root'));

