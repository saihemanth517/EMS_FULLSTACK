import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigator('/add-employee');
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    deleteEmployee(id)
      .then(() => getAllEmployees())
      .catch((error) => console.error(error));
  }

  return (
    <section className="bg-light py-5 min-vh-100">
      <Container className="shadow p-4 bg-white rounded">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-primary">Employee Directory</h2>
          <Button variant="success" onClick={addNewEmployee}>
            + Add Employee
          </Button>
        </div>

        <Table bordered hover responsive className="table-striped">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => updateEmployee(employee.id)}
                    className="me-2"
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeEmployee(employee.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default ListEmployeeComponent;
