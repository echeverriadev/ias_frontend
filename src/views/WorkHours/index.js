import React, { useState, useEffect, useCallback } from 'react';
import LayoutCard from '../../components/LayoutCard';
import { Row, Col } from 'react-bootstrap';
import SearchHours from '../../components/SearchHours';
import ResultReport from '../../components/ResultReport';
import axios from 'axios';
import ScaleLoader from 'react-spinners/ScaleLoader';

var axiosMocky = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const WorkHours = ({ location, history }) => {
  const [employees, setEmployee] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetReports = async () => {
    // llamada al mocky para cargar el select de empleados
    const resp = await axiosMocky.get(
      'https://run.mocky.io/v3/482e957b-0bd5-4ccd-bc89-72b6c132a437'
    );
    if (resp.status === 200 || resp.status === 201) {
      const data = resp.data.employees;
      setEmployee(data);
    }
  };

  const onHandleSearch = useCallback(async (employeeName) => {
    //metodo para consultar al mocky en base al employee seleccionado y obtener el reporte
    setLoading(true)
    setResult(null)
    const resp = await axiosMocky.get(
      'https://run.mocky.io/v3/e6f1d90b-f0e4-4fb8-b1d3-ed83d665e1f5'
    );
    if (resp.status === 200 || resp.status === 201) {
      const data = resp.data.employees;
      setResult(data.find((e) => e.name === employeeName));
    }
    setLoading(false)
  }, [setLoading,setResult])

  useEffect(() => {
    //cargar select de los empleados
    handleGetReports();
  }, []);

  return (
    <LayoutCard>
      <Row>
        <Col lg="12">
          <h2 className="mb-3">Calcular reporte de horas por técnico</h2>
        </Col>
        <Col>
        {employees.length ? (<SearchHours
            title="Selecciona un técnico a consultar"
            items={employees}
            onSubmit={onHandleSearch}
          />): (
           <div style={{textAlign: 'center'}}>
            <ScaleLoader
              width={4}
              radius={2}
              margin={2}
              heigh={35}
              color={'#123abc'}
            />
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {result && !loading ? (
            <ResultReport result={result} />
          ) : !result && loading ? (
            <div style={{textAlign: 'center'}}>
            <ScaleLoader
              width={4}
              radius={2}
              margin={2}
              heigh={35}
              color={'#123abc'}
            />
            </div>
          ) : (
            <p style={{ textAlign: 'center' }}>
              Por favor, seleccione un técnico a consultar
            </p>
          )}
        </Col>
      </Row>
    </LayoutCard>
  );
};

export default WorkHours;
