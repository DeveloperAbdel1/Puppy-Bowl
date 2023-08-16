/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './SinglePlayer.css'
import { useParams, useNavigate } from "react-router-dom"


function SinglePlayer(props) {

    const { id } = useParams();
 
    const singlePlayer = props.playerData.filter((player) => {
        // player came from AllPlayers Componenet
        if (player.id == Number(id)) {   // Number() converts strings into numbers
            return player
        }
    })


    return(
        <div className='single-player-container'>
            <div className='single-player-card'>
             
                <p id='single-name'>{singlePlayer[0].name}</p>
                <p className='single-pup'>Id: {singlePlayer[0].id}</p>
                <p className='single-pup'>Breed: {singlePlayer[0].breed}</p>
                <p className='single-pup'>Status: {singlePlayer[0].status}</p>
                </div>
                <div className='col2'>
                <img src={singlePlayer[0].imageUrl} alt="puppy pic" className='single-pup'></img>
                {/* <button onClick={() => props.History.goBack()}>Back</button> */}
            </div>
           
        </div>

    )
}




export default SinglePlayer