import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {
  const items = ['asadasdasd', 'Build Awsome App'];
  return (
      <ul>
          <li>{items[0]}</li>
          <li>{items[1]}</li>
      </ul>
  )
};

const AppHeader = () =>{
   return (
       <h1>My Todo List</h1>
   )
};

const SearchPannel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '25px'
    };
  return (

      <input
          style={searchText}
          placeholder = "search" />
      );
};

const App = () => {

    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>;
    const welcomeBox = <span>Welcome Back</span>;
   // const loginBox = <></return>

    return (
        <div>
            {isLoggedIn ? welcomeBox : loginBox}
            <span>{(new Date()).toString()}</span>
            <AppHeader />
            <SearchPannel />
            <ToDoList />
        </div>
    )

};
ReactDOM.render(<App />, document.getElementById('root'));
