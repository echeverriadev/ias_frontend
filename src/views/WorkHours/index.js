import React, { useState } from 'react';
import LayoutCard from '../../components/LayoutCard';
import { Table, Row, Col, Button } from 'react-bootstrap';
import Pagination from 'react-paginating';

const fruits = [
    ['apple', 'orange'],
    ['banana', 'avocado'],
    ['coconut', 'blueberry'],
    ['payaya', 'peach'],
    ['pear', 'plum']
  ];
const limit = 2;
const pageCount = 3;
const total = fruits.length * limit;

const WorkHours = ({ location, history }) => {
    const [currentPage, setCurrentPage] = useState(1);

  const newReport = () => {
    history.push('/service-reports/form');
  };
  const handlePageChange = (page, e) => {
    setCurrentPage(page)
  };

  return (
    <LayoutCard>
      <Row>
        <Col lg="12">
          <h2 className="mb-3">Lista de reportes de horas realizados</h2>
        </Col>
        <Col className="justify-content-md-right">
          <Button variant="primary mb-4" onClick={newReport}>
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
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
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
            getPageItemProps
          }) => (
            <div className="wrapper-items">
              <Button
              variant="light"
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: handlePageChange
                })}
              >
                Primero
              </Button>

              {hasPreviousPage && (
                <Button
                variant="light"
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: handlePageChange
                  })}
                >
                  {'<'}
                </Button>
              )}

              {pages.map(page => {
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
                      onPageChange: handlePageChange
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
                    onPageChange: handlePageChange
                  })}
                >
                  {'>'}
                </Button>
              )}

              <Button
              variant="light"
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: handlePageChange
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

export default WorkHours;
