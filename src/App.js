import './App.css'
import React,{Component} from 'react'
import NavBar from './components/navbar'
import NewBar from './components/newbar'
import {BrowserRouter , Router , Route, Routes} from 'react-router-dom'
import NewsItem from './components/NewsItem';

export default class App extends Component{

  render()
  {return(
    <div>
      <NavBar/>
 <BrowserRouter>
   <Routes>
   <Route path="/" element={<NewBar catagory="home" />}/>
    <Route path="/Anime" element={<NewBar catagory="Anime" />}/>
    <Route path="/Business" element={<NewBar catagory="Business" />}/>
    <Route path="/Entertainment" element={<NewBar catagory="Entertainment" />}/>
    <Route path="/General" element={<NewBar catagory="General" />}/>
    <Route path="/Health" element={<NewBar catagory="Health" />}/>
    <Route path="/Science" element={<NewBar catagory="Science" />}/>
    <Route path="/Technology" element={<NewBar catagory="Technology" />}/>
    <Route path="/Sports" element={<NewBar catagory="Sports" />}/>
    <Route path="*" element={<div>Please enter a valid path</div>}/>
    </Routes>
    
   </BrowserRouter>
    </div>
  )
  }
}
