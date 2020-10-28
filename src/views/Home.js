import React from 'react'
import LayoutCard from "../components/LayoutCard";
import logoBrand from "../assets/logo-brand.jpg";

const Home = () => {
    return (
        <LayoutCard>
            <div className="wrapper-home">
                <img src={logoBrand} alt={logoBrand} />
                <h1>Sistema de reportes de iAS</h1>
                <br/>
                <p style={{textAlign: 'justify'}}>Descripción del caso de implementación
Implementar una plataforma compuesta por un backend y un frontend, donde se cumplan
los módulos y las reglas de negocio mencionadas en este documento. <br/>
La empresa IAS HandyMan ofrece servicios de reparación para hogares por medio de la
línea telefónica, el proceso es el siguiente:<br/><br/>
1. Un cliente llama a la línea y solicita un servicio<br/>
2. Un técnico es enviado a atender el servicio<br/>
3. El técnico reporta las horas que le tomó realizar el servicio.<br/><br/>
La empresa también cuenta con servicios de atención de emergencias, dónde se puede
solicitar un técnico en cualquier momento del día, cualquier día.<br/>
Para la empresa, el cálculo de nómina ha sido especialmente difícil, debido a la cantidad de
tiempo invertida en el cálculo de las horas de trabajo de cada técnico, calcular horas extras,
horas dominicales y horas nocturnas.<br/><br/>
Usted ha sido seleccionado para realizar esta calculadora, donde recibirá el reporte de los
técnicos y entregará por medio de una consulta, para un técnico, cuál es su calculo de
horas trabajadas por semana.</p>
            </div>
        </LayoutCard>
    )
}

export default Home
