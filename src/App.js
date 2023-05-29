import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { Screen } from './reuse/Screen';
import { Bubble } from './Bubble';
import './App.css'

let bubbleList = [
    { title:"About"}, { title: "Projects" }, { title: "Skills" },{ title: "History" }]

export const App = (props) => {
  const [bubbles, setBubbles] = useState(bubbleList);



  console.log("CHECK HERE: " , props.path);
  return (
    <>
      <Screen>
        {bubbles.map(item => <Bubble key={item.title} id='bubble' item={item.title}></Bubble>)}
      </Screen>
    </>
  );
}
