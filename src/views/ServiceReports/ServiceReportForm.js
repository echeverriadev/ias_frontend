import React, { useState, useCallback } from 'react';
import LayoutCard from '../../components/LayoutCard';
import { Form, Button, Row, Col, Badge } from 'react-bootstrap';
import { useFormik } from 'formik';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import * as Yup from 'yup';
import axios from 'axios';

const ServiceReportForm = ({ history }) => {
  const [dateInitial, setDateInitial] = useState(new Date());
  const [dateFinal, setDateFinal] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      employee_name: '',
      service_name: '',
      initial_date_hour: new Date(),
      final_date_hour: new Date(),
    },
    validationSchema: Yup.object({
      employee_name: Yup.string()
        .max(35, 'Debe ingresar menos de 35 caracteres')
        .required('Campo obligatorio'),
      service_name: Yup.string()
        .max(35, 'Debe ingresar menos de 35 caracteres')
        .required('Campo obligatorio'),
      initial_date_hour: Yup.date().required('Required'),
      final_date_hour: Yup.date().required('Required'),
    }),
    onSubmit: (values) => {
      const data = {
        employee_name: values.employee_name,
        service_name: values.service_name,
        initial_date_hour: moment(values.initial_date_hour).format(
          'YYYY-MM-DD hh:mm:ss'
        ),
        final_date_hour: moment(values.final_date_hour).format(
          'YYYY-MM-DD hh:mm:ss'
        ),
      };
      handleSubmit(data);
    },
  });

  const handleSubmit = useCallback(async (body) => {
    const result = await axios.post('/reports', body);
    if (result.status === 200 || result.status === 201) {
      alert(result.message);
      history.goBack();
    }
  }, [history]);

  return (
    <LayoutCard>
      <Row>
        <Col>
          <h2 className="mb-4">Crear nuevo reporte</h2>
        </Col>
      </Row>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Row className="mb-2">
            <Col>
              <Form.Label>Nombre del técnico</Form.Label>
              <Form.Control
                id="employee_name"
                name="employee_name"
                type="text"
                placeholder="Ej. Pedro Perez"
                onChange={formik.handleChange}
                value={formik.values.employee_name}
              />
              <div className="wrapper-error">
                {formik.errors.service_name && (
                  <Badge variant="danger">{formik.errors.service_name}</Badge>
                )}
              </div>
            </Col>
            <Col>
              <Form.Label>Nombre del servicio</Form.Label>
              <Form.Control
                id="service_name"
                name="service_name"
                type="text"
                placeholder="Ej. Reparación de pared de marmol"
                onChange={formik.handleChange}
                value={formik.values.service_name}
              />
              <div className="wrapper-error">
                {formik.errors.service_name && (
                  <Badge id="error" variant="danger">
                    {formik.errors.service_name}
                  </Badge>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Hora de inicio</Form.Label> <br />
              <DateTimePicker
                id="initial_date_hour"
                name="initial_date_hour"
                onChange={(value) => {
                  setDateInitial(value);
                  formik.setFieldValue('initial_date_hour', value);
                }}
                value={dateInitial}
              />
            </Col>
            <Col>
              <Form.Label>Hora final</Form.Label> <br />
              <DateTimePicker
                id="final_date_hour"
                name="final_date_hour"
                minDate={dateInitial}
                onChange={(val) => {
                  setDateFinal(val);
                  formik.setFieldValue('final_date_hour', val);
                }}
                value={dateFinal}
              />
            </Col>
          </Row>
        </Form.Group>

        <Row>
          <Col className="justify-content-md-right">
            <Button
              variant="light"
              className="mx-2"
              onClick={() => history.goBack()}
            >
              Volver
            </Button>
            <Button
              id="submitButton"
              variant="primary"
              className="mx-2"
              type="submit"
            >
              Crear
            </Button>
          </Col>
        </Row>
      </Form>
    </LayoutCard>
  );
};

export default ServiceReportForm;
