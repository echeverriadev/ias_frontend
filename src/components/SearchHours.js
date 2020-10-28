import React from 'react';
import LayoutCard from './LayoutCard';
import { Row, Col, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SearchHours = ({ title, items, onSubmit}) => {
  const formik = useFormik({
    initialValues: {
      employeeName: '',
    },
    validationSchema: Yup.object({
      employeeName: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      onSubmit(values.employeeName)
    },
  });

  return (
    <LayoutCard>
      <p className="caption-search">{title}</p>
      <form onSubmit={formik.handleSubmit}>
        <Row className="search-component">
          <Col>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control
                name="employeeName"
                onChange={formik.handleChange}
                value={formik.values.employeeId}
                as="select"
                custom
              >
              { items.length ? items.map((i)=> (<option value={i}>{i}</option>)) : (<option value={-1} disabled selected>Seleccione un técnico</option>)}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Button type="submit">Calcular horas</Button>
          </Col>
        </Row>
      </form>
    </LayoutCard>
  );
};

SearchHours.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchHours;
