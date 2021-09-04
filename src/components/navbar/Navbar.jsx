import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () =>{
      setIsScrolled(window.pageYOffset===0 ? false:true);
      return()=>(window.onscroll=null);
  }

   
    return (
        <div className={isScrolled ? "navbar scrolled":"navbar"}>
           <div className="container">
            <div className="left">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
               <span>Homepage</span>
               <span>Movies</span>
               <span>Drama</span>
               <span>New and Popular</span>
               <span>Playlist</span>
            </div> 
            <div className="right">
                <Search  className="icon"/>
                <Notifications className="icon"/> 
                <img src="https://m.media-amazon.com/images/M/MV5BZDJlYzMyZTctYzBiMi00Y2E5LTk4YzgtNzU5YzE0MDZkY2EwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_FMjpg_UX1000_.jpg" alt=""/>
                    <div className="profile">
                    <ArrowDropDown className="icon"/> 
                    <div className="options">
                        <span>settings</span>
                        <span>Logout</span>
                    </div>
                    </div>                
                   
                </div> 
           </div>
        </div>
    )
}

export default Navbar
