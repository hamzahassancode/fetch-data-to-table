fetch('user.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('.content-table tbody');

        // Populate table with data
        data.forEach(rowData => {
          const row = document.createElement('tr');
          Object.values(rowData).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
          });
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching data:', error));