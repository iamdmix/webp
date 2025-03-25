import React from 'react';
import './App.css';
import Header from './components/Header';
import Greeting from './components/Greeting';
import ClickCounter from './components/ClickCounter';
import TodoList from './components/ToDoList';
import ProfileCard from './components/ProfileCard';
import ToggleInfo from './components/ToggleInfo';
import UserForm from './components/UserForm';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <ClickCounter />
      <TodoList />
      <ProfileCard name="John Doe" photo="profile.jpg" bio="A passionate developer." />
      <ToggleInfo />
      <UserForm />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;