const dataTable = document.querySelector("#table-data");

fetch("http://api.mediastack.com/v1/news?access_key=d2de2a96cf411f9aabba1773035ee4d2&keywords=tennis&countries=us")
  .then(res => res.json())
  .then(info => {
    info.data.forEach(dataNew => {
      let tr = document.createElement("tr");
      tr.classList.add("table-row")
      tr.innerHTML = `
        <td>${dataNew.author}</td>
        <td>${dataNew.title}</td>
        <td>${dataNew.source}</td>
        <td>${dataNew.category}</td>
        <td>${dataNew.language}</td>
        <td>${dataNew.country}</td>
      `;
      dataTable.appendChild(tr);
    });
  });