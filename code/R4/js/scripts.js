/* Variables */
const dataTable = document.querySelector("#table-data");

/* Petición a la API de MediaStack */
fetch("http://api.mediastack.com/v1/news?access_key=d2de2a96cf411f9aabba1773035ee4d2&keywords=tennis&countries=us")
  .then(res => res.json())
  .then(info => {
    // Recorre el array de objetos
    info.data.forEach(dataNew => {
      // Crea un tr en el HTML
      let tr = document.createElement("tr");
      // Asigna la clase table-row al tr
      tr.classList.add("table-row");
      // Inserta los td con los datos obtenidos de la API en el HTML
      tr.innerHTML = `
        <td>${dataNew.author}</td>
        <td>${dataNew.title}</td>
        <td>${dataNew.source}</td>
        <td>${dataNew.category}</td>
        <td>${dataNew.language}</td>
        <td>${dataNew.country}</td>
      `;
      // Inserta el tr en el tbody del HTML
      dataTable.appendChild(tr);
    });
  });