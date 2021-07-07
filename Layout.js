import React from 'react'
import logo from './logo.svg';
 
function Layout(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Praktikum  PAM MG-04 </h1>
      </header>
      <main className="App-body">
        <img
              alt=""
              width={150}
              height={150}
              src="https://p4.wallpaperbetter.com/wallpaper/271/682/513/monochrome-notebooks-laptop-cat-wallpaper-preview.jpg"
            ></img>
      
        {props.children}
      </main>
      <footer className="App-footer">
        <div className="links">
          <a href="">
            <img
              alt=""
              width={20}
              height={20}
              src="https://img.icons8.com/color/50/000000/youtube-squared.png"
            ></img>
            Youtube
          </a>

          <a href="">
            <img
              width={20}
              height={20}
              src="https://img.icons8.com/metro/26/000000/github.png"
              alt=""
            ></img>
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Layout

