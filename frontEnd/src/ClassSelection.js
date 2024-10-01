import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassSelection = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/classes')
      .then(response => setClasses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Select Class</h1>
      <ul>
        {classes.map(classItem => (
          <li key={classItem.id}>{classItem.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassSelection;
