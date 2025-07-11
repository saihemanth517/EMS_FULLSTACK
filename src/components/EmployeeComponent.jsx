import React, { useState, useEffect } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const EmployeeComponent = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((res) => {
          setEmployee(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const validateForm = () => {
    const err = {};
    let isValid = true;

    if (!employee.firstName.trim()) {
      err.firstName = 'First name is required';
      isValid = false;
    }
    if (!employee.lastName.trim()) {
      err.lastName = 'Last name is required';
      isValid = false;
    }
    if (!employee.email.trim()) {
      err.email = 'Email is required';
      isValid = false;
    }

    setErrors(err);
    return isValid;
  };

  const saveOrUpdate = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setBackendError('');

    if (id) {
      updateEmployee(id, employee)
        .then(() => navigate('/employees'))
        .catch((err) => {
          if (
            err.response &&
            err.response.status === 500 &&
            err.response.data.includes('Duplicate entry')
          ) {
            setBackendError('🚫 Email is already in use.');
          } else {
            setBackendError('❌ Something went wrong. Please try again.');
          }
        });
    } else {
      createEmployee(employee)
        .then(() => navigate('/employees'))
        .catch((err) => {
          if (
  err.response &&
  err.response.status === 400 &&
  err.response.data === 'Email is already in use.'
) {
  setBackendError('🚫 Email is already in use.');
}
 else {
            setBackendError('❌ Something went wrong. Please try again.');
          }
        });
    }
  };

  const title = id ? 'Update Employee' : 'Add Employee';

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h3 className="text-center mb-4 text-primary">{title}</h3>

        {backendError && (
          <Alert variant="danger" className="text-center">
            {backendError}
          </Alert>
        )}

        <Form onSubmit={saveOrUpdate}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={employee.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={employee.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="email" className="mb-4">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={employee.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => navigate('/employees')}>
              ← Back
            </Button>

            <Button variant="success" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default EmployeeComponent;
