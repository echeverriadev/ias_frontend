import React from 'react';
import LayoutCard from './LayoutCard';
import { Row, Col } from 'react-bootstrap';
import PieChart from "./PieChart";

const ResultReport = ({ result = {} }) => {
  return (
    <LayoutCard>
      <p className="caption-search">Resultado del empleado: {result.name}</p>
      <Row className="search-component">
        <Col md="6">
          <ul className="list-hours">
            <li> Horas Totales: {result.total_hours}hrs</li>
            <li> Horas Diurnas: {result.normal_hours}hrs</li>
            <li> Horas Nocturnas: {result.night_hours}hrs</li>
            <li> Horas Dominicales: {result.week_hours}hrs</li>
            <li> Horas Diurnas Extras: {result.extra_normal_hours}hrs</li>
            <li> Horas Nocturnas Extras: {result.extra_night_hours}hrs</li>
            <li> Horas Dominicales Extras: {result.extra_week_hours}hrs</li>
          </ul>
        </Col>
        <Col md="6"><PieChart result={result} /></Col>
      </Row>
    </LayoutCard>
  );
};

export default ResultReport;
