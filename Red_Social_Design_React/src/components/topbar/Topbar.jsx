import "./topbar.css";
import {Person,Search,Chat,Notifications} from '@mui/icons-material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from'../../context/AuthContext'; 


export default function Topbar() {
    const {user} = useContext(AuthContext);
    //const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const PF = "http://localhost:8800/images/";

    const ExitSession = ()=>{
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div className="topbarContainer">
           <div className="topbarLeft">
               <Link to={'/'} style={{ textDecoration: "none" }}>  
               <span className="logo">NKTSocial</span>
               </Link>
           </div>
           <div className="topbarCenter">
             <div className="searchbar">
                <Search className="searchIcon"/>
               <input placeholder="Search for friend , post or video" className="searchInput" />
             </div>
           </div>
           <div className="topbarRight">
               <div className="topbarLinks">
              
                   
              
                   <span className="topbarLink">Homepage</span>
                   <span className="topbarLink">Timeline</span>
               </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Link to="/messenger" style={{ textDecoration:"none" }}>
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                        </Link>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                    <span onClick={ExitSession} className="topbarLink"><ExitToAppIcon/></span>
                        
                    </div>

                </div>
                <Link to={`/profile/${user.username}`}>
                <img src={
                    user.profilePicture 
                    ? PF+user.profilePicture 
                    : PF+"person/noAvatar.png"
                    } alt="" className="topbarImg" />
                </Link>
              
           </div>
        </div>
    )
}
