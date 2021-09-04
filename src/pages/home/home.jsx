import Featured from "../../components/featured/featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"

const home = () => {
    return (
        <div className="home">
           <Navbar />
            <Featured type="" />
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
            </div>
    )
}

export default home
