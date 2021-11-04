import "./message.css";
import {format} from 'timeago.js';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Message({message,own}) {
    //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const PF = "http://localhost:8800/images/";
    const base_url = "http://localhost:8800/api/";
    const [user,setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async()=>{
            const res = await axios.get(`${base_url}users?userId=${message.sender}`);
           setUser(res.data);
        }
        fetchUser();
    },[message.sender]);
   
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img 
                className="messageImg"
                src={user?.profilePicture 
                    ? PF+user.profilePicture 
                    : PF+"person/noAvatar.png"
                    } 
                alt="" />
                <p className="messageText">
                    {message.text} 
               </p>
            </div>
            <div className="messageBottom">
               {format(message.createdAt)}
            </div>
        </div>
    )
}
