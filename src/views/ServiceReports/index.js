import React, { useState, useEffect, useCallback } from 'react';
import LayoutCard from '../../components/LayoutCard';
import { Table, Row, Col, Button } from 'react-bootstrap';
import Pagination from 'react-paginating';
import axios from 'axios';
import moment from 'moment';

const limit = 4;

const ServiceReports = ({ location, history }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reports, setReport] = useState([]);
  const [items, setItems] = useState([]);
  const total = Math.ceil(reports.length);
  const pageCount = Math.ceil(reports.length / limit);

  const newReport = useCallback(() => {
    history.push('/service-reports/form');
  }, [history]);


  const itemsPaginaton = useCallback(
    (data) => {
      //algoritmo de la paginacion client side
      setItems([]);
      let _items = [...data];
  
      if (limit > 0) {
        _items = _items.slice((currentPage - 1) * limit, currentPage * limit);
      }
      console.log(_items);
      setItems(_items);
    },
    [setItems, currentPage],
  )

  useEffect(() => {
    itemsPaginaton(reports);
  }, [currentPage, reports, itemsPaginaton]);

  
  const handleGetReports = useCallback(
    async () => {
      const resp = await axios.get('/reports');
      //console.log(resp);
      if (resp.status === 200 || resp.status === 201) {
        const data = resp.data.categories.map((c) => ({
          employee_name: c.employee_name,
          final_date_hour: moment(c.final_date_hour).format(
            'YYYY-MM-DD hh:mm:ss'
          ),
          id: c.id,
          initial_date_hour: moment(c.initial_date_hour).format(
            'YYYY-MM-DD hh:mm:ss'
          ),
          service_name: c.service_name,
        }));
        setReport(data);
        itemsPaginaton(data);
      }
    },
    [setReport,itemsPaginaton],
  )

  useEffect(() => {
    handleGetReports();
  }, [handleGetReports]);

  const handlePageChange = useCallback(
    (page, e) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  return (
    <LayoutCard>
      <Row>
        <Col lg="12">
          <h2 className="mb-3">Lista de reportes de servicio realizados</h2>
        </Col>
        <Col className="justify-content-md-right">
          <Button id="create" variant="primary mb-4" onClick={newReport}>
            Crear nuevo reporte
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Técnico</th>
                <th>Servicio</th>
                <th>Hora inicio</th>
                <th>Hora fin</th>
              </tr>
            </thead>
            <tbody>
              {items.length ? (
                items.map((r) => {
                  return (
                    <tr key={r.id}>
                      <td>{r.id}</td>
                      <td>{r.employee_name}</td>
                      <td>{r.service_name}</td>
                      <td>{r.initial_date_hour}</td>
                      <td>{r.final_date_hour}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <p style={{ textAlign: 'center' }}>
                      No hay reportes registrados
                    </p>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
        <Col lg="12">
          <Pagination
            className="container-pagination"
            total={total}
            limit={limit}
            pageCount={pageCount}
            currentPage={currentPage}
          >
            {({
              pages,
              currentPage,
              hasNextPage,
              hasPreviousPage,
              previousPage,
              nextPage,
              totalPages,
              getPageItemProps,
            }) => (
              <div className="wrapper-items">
                <Button
                  variant="light"
                  {...getPageItemProps({
                    pageValue: 1,
                    onPageChange: handlePageChange,
                  })}
                >
                  Primero
                </Button>

                {hasPreviousPage && (
                  <Button
                    variant="light"
                    {...getPageItemProps({
                      pageValue: previousPage,
                      onPageChange: handlePageChange,
                    })}
                  >
                    {'<'}
                  </Button>
                )}

                {pages.map((page) => {
                  let activePage = null;
                  if (currentPage === page) {
                    activePage = { backgroundColor: '#afd7ff' };
                  }
                  return (
                    <Button
                      variant="light"
                      {...getPageItemProps({
                        pageValue: page,
                        key: page,
                        style: activePage,
                        onPageChange: handlePageChange,
                      })}
                    >
                      {page}
                    </Button>
                  );
                })}

                {hasNextPage && (
                  <Button
                    variant="light"
                    {...getPageItemProps({
                      pageValue: nextPage,
                      onPageChange: handlePageChange,
                    })}
                  >
                    {'>'}
                  </Button>
                )}

                <Button
                  variant="light"
                  {...getPageItemProps({
                    pageValue: totalPages,
                    onPageChange: handlePageChange,
                  })}
                >
                  Último
                </Button>
              </div>
            )}
          </Pagination>
        </Col>
      </Row>
    </LayoutCard>
  );
};

export default ServiceReports;
