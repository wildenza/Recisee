import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imagetest from './assets/imagetest.jpg'
import Spline from '@splinetool/react-spline';
import Card from './components/Card';
import './App.css'
import List from './components/list';
function App() {
  

  return (
    <div>
      
      <main>
        <div class="container">
          <div class="left">
          <div class="splinebox">
          <Spline scene="https://prod.spline.design/Q8I9JCIYEvz24a3i/scene.splinecode" />
            {/* <img src={imagetest} alt="img" /> */}
            </div>
          </div>
          <div class="right">
            <p>Selling thousands of dumplings</p>
           
          </div>
          


        </div>


        <div>
        <Card></Card>
        <Card></Card>
        </div>
        <div >
          <List name="salut" value={2}></List>
          <List name="a2"></List>
          <List name="a3"></List>
        </div>





        {/* <section id="leftbox">

        <h2>Concepts!</h2>
        
        </section>


        <section id ="rightbox">
          <img src={imagetest} alt="testimg" />
        </section>
         */}
        
      </main>
    </div>
  );
     
     
      
      
    
  
}

export default App
