import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Counter from './counter';
import ListAndKeys from './ListAndKeys';
import UseEffectPractice from './useEffectPractice';
import PracticeRef from './useRedPractice'; 
import EventHandling from './eventHandlingPractice';

function Header(){
  return <h1>This is Header</h1>
}

function Footer(){
  return <h1>This is Footer</h1>
} //composition Practice

function App() {
  return(
    <div>
      <Header />
      <Welcome name="John" />
      <Counter /> 
      <ListAndKeys />
      <UseEffectPractice />
      <PracticeRef />
      <EventHandling />
      <Footer /> 
    </div>
    
);

}


export default App;
