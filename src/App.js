import React from 'react';
import './App.css';
  
function App() {
    return (
        <div class="main-div">
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                     <h1>*Artsy Logo*</h1>   
                    </div>
                    <li><a href="#tutorials">Tutorials</a></li>
                    <li><a href="#Create">Create</a></li>
                    <li><a href="#Ideas">Ideas</a></li>
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>                    
                </div>
                <div class="logo">
                  <a href="#Home"><img  height='70px' src= "data:image/png;base64,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" /></a> 
                </div>                        
                <div class="logo">
                <a href="#Account"><img width='5px' height='70px' src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRML9xBKXpWDNm39ze4mis42fEH7s2We7tmhg&usqp=CAU" /></a>
                </div> 
            </nav>
            <div class="middle-body">
              <div class="click-to-ide">
                <div class="rectangle"><img width='100%' height='100%'  src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmcGDfxS6t8iPkZnrNi2Wjo6GmAIyPqPqKQ&usqp=CAU" /></div>
                <div class="class-btn"><button class="btn btn-sm1">Get To Creating</button></div>
              </div>

              <div class="click-to-ide">
                <div class="rectangle"><img img width='100%' height='100%' src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjp-gD7AWuy_iz0rJ88NMp1orJGWdNcTn_6g&usqp=CAU" /></div>
                <div class="class-btn"><button class="btn btn-sm1">Learn With Video Tutorial</button></div>
                
              </div>
            </div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  
export default App