import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';


function App() {
 const [stats, setStats] = useState({
   strikes: 0,
   balls: 0
 })

 const foul = () => {
   if (stats.strikes < 2){
     setStats({...stats, strikes: stats.strikes + 1})
   }
 }

 const strike = () => {
   if (stats.strikes === 2){
     hit();
   } else {
     setStats({...stats, strikes: stats.strikes + 1})
   }
 }

 const ball = () => {
   if(stats.balls > 2){
      hit()
   } else {
    setStats({...stats, balls: stats.balls + 1})
   }
 }

 const hit = () => {
  setStats({...stats, strikes: 0, balls: 0})
 }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Scoreboard</h1>

       <Display stat={stats}/>
       <Dashboard foul={foul} strike={strike} ball={ball} hit={hit}/>
      </header>
    </div>
  );
}

export default App;
