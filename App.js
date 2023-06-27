import React, { useEffect, useState } from 'react';
import employees from './employeeData';

const App = () => {
  const [departments, setDepartments] = useState({});

  useEffect(() => {
    const activeEmp = employees.filter(
      (employee) => employee.status === 'active'
    );

    const departments = {};

    activeEmp.forEach((employee) => {
      const department = employee.department;

      if (!departments[department]) {
        departments[department] = [];
      }

      departments[department].push(employee);
    });

    setDepartments(departments);
  }, []);

  return (
    <div>
      {Object.keys(departments).map((department) => (
        <div key={department}>
          <h2>{department}</h2>
          <ul>
            {departments[department].map((employee) => {
              const tags = employee.tags ? employee.tags.join(', ') : '';
              return (
                <li key={employee.email}>
                  <a href={`mailto:${employee.email}`}>{employee.name}</a>
                  {tags && ` (${tags})`}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
