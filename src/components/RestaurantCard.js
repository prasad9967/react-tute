import React from "react"

const RestaurantCard = (props) => {
    const styleCard = {
        backgroundColor: '#f0f0f0f0'
    }


    return (
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg" alt="res logo"/>
            <h3>{props.name}</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 Stars</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}


export default RestaurantCard