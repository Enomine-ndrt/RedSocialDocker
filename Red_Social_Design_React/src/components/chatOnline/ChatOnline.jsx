import "./chatOnline.css";
import {useState,useEffect} from 'react';
import axios from 'axios'

export default function ChatOnline({onlineUsers,currentId,setCurrentChat}) {
    //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const PF = "http://localhost:8800/images/";
    const base_url = "http://localhost:8800/api";
    const [friends,setFriends] = useState([]);
    const [onlineFriends,setOnlineFriends] = useState([]);
    
    useEffect(() => {
        const getFriends = async()=>{
            const res = await axios.get(base_url+"/users/friends/"+currentId);
            setFriends(res.data);
        };
        getFriends();
    },[currentId]);
   
    useEffect(() => {
        setOnlineFriends(friends.filter((f)=>onlineUsers.includes(f._id)));
    },[friends,onlineUsers]);

    const handleClick = async(user)=>{
        try{
            const res = await axios.get(base_url+`/conversations/find/${currentId}/${user._id}`);
            setCurrentChat(res.data);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="chatOnline">
            {onlineFriends.map((o)=>(
            <div className="chatOnlineFriend" onClick={()=>handleClick(o)}>
                <div className="chatOnlineImgContainer">
                    <img 
                    className="chatOnlineImg"
                    src={o?.profilePicture 
                        ? PF+o.profilePicture 
                        : PF+"person/noAvatar.png"
                        } 
                    alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">{o.username}</span>
            </div>
            ))}
        </div>
    )
}
