import React from 'react'
import LayoutCard from "../components/LayoutCard";
import logoBrand from "../assets/logo-brand.jpg";

const Home = () => {
    return (
        <LayoutCard>
            <div className="wrapper-home">
                <img src={logoBrand} alt={logoBrand} />
                <h1>Sistema de reportes de iAS</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dolor autem voluptatum alias! Eveniet, animi.</p>
            </div>
        </LayoutCard>
    )
}

export default Home
