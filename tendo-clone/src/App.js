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

  <h1 className="body">How Tendo works</h1>
  <p className="paragraph1"> Earn with Tendo in three easy steps</p>
<br/><br/>


    <div className="form">
    
             <form className="form1">
                <div>Fill out the form and we'll be in touch as soon as possible.</div> <br/><br/>
             <h2 className="ht">Supplier onboarding Form</h2><br/>
             <input  className="b1" type="text" name="full name" placeholder="Full Name" /> <br/>
             <input  className="b2" type="phone" name="phone" placeholder="Phone number" /> <br/>
             <input  className="b3" type="email" name="email" placeholder="Active Email" />  <br/>
             <input  className="b2" type="text" name="business" placeholder="Business" /> <br/>
             <input  className="b4" type="text" name="location" placeholder="business-location" /> <br/>
             <select className="option">
               <option value="text" selected>Product category</option>
               <option value="text">Fashion</option>
               <option value="text">Cosmetics</option>
               <option value="text">Health</option>
               <option value="text">Applicances</option>
               <option value="text">Stationery</option>
               <option value="text">Others</option>
               </select>
               <br/>
<label className="text">Provide correct infomation</label><br/>
             <button onClick="Signout" className="button1">Get Started</button>
           </form>
            
        </div>

    </div> 

    
  );

}

export default App;











