

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var data = JSON.parse(xhttp.responseText)
       var container = document.getElementById("container");
       data.slice(1).forEach((row, i) => {
        var rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.innerHTML = `
                <h5 class="company">${row.company}</h5>
                <h3 class="position">${row.position}</h3>
                <p class="location">${row.location}</p>
        `;
        container.appendChild(rowDiv);
       });
    }
};
xhttp.open("GET", "https://remoteok.com/api", true);
xhttp.send();