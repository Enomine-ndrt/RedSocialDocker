import './conversation.css';
import {useEffect,useState} from 'react';
import axios from 'axios';

export default function Conversation({conversation,currentUser}) {
    const [user,setUser] = useState(null);
    //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const PF = "http://localhost:8800/images/";
    const base_url = "http://localhost:8800/api";

    useEffect(()=>{
        const friendId = conversation.members.find((m)=> m !== currentUser._id); 
        const getUser = async()=>{
            try{
                const res = await axios(base_url+"/users?userId="+friendId);
                setUser(res.data);
            }catch(err){
                console.log(err);
            }            
        };
        getUser();
    },[currentUser,conversation]);

    return (
        <div className="conversation">
       <img 
       className="conversationImg" 
       src={
           user?.profilePicture 
       ? PF+user.profilePicture 
       : PF+"person/noAvatar.png"
       } 
       alt="" />
           
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}
