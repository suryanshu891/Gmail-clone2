import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import Mail from "./Mail";
import Rightsidebar from "./Rightsidebar";
import Starred from "./Starred"
import Snoozed from "./Snoozed"
import Sent from "./Sent"
import Drafts from "./Drafts"


const Main = () => {
    return (

        <div class="body-wrapper">
            <Leftsidebar />
            <Header />
            {/* <Mail/> */}
            <Routes><Route path="/mail" element={<Mail />}></Route>
                <Route path="/starred" element={<Starred />}></Route>
                <Route path="/Snoozed" element={<Snoozed/>}></Route>
                <Route path="/Sent" element={<Sent/>}></Route>
                <Route path="/Drafts" element={<Drafts/>}></Route>
                
            </Routes>
           
        </div> 

        

    )
};
export default Main;