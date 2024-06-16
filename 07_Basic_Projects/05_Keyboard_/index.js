let insert = document.querySelector("#insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
    
    <div class=color">
    
    <table>
    <thead>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
    </thead>

    <tbody>
     <tr>
     <td>${e.key === " " ? "Space" : e.key}</td>
     <td>${e.keyCode}</td>
     <td>${e.code}</td>
     </tr>
    
    </tbody>
    
    </table>




    </div>
     
    
    
    `;
});
