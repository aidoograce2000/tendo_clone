import  "./App.css"

function App() {
  return (
    <div className="App"> 

  <nav className="navbar">
    <h1 className="logo">tendo</h1>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/">Become a supplier </a></li>
      <li><a href="/" className="btn-primary">Get App</a></li>
    </ul>
     </nav>

  <header className="header">
    <div className="header-left">
      <h1>Start your online business from home</h1>
      <p className="p-start">Tendo enables anyone to start their online business without investing any capital.</p>
      <p className="p-merchant">Become a Tendo merchant now.</p>
    <button className="cta-button">Join Tendo</button>
    </div>
    <div className="header-right">
    <img src="./image/home.png" alt="" srcset="" />
    </div>

    </header>

    </div>
  );

}

export default App;











