function searchData() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    const entry = data.find(item =>
        item.nombre.toLowerCase().includes(input) || item.dni.includes(input)
    );

    if (input === "") {
        resultDiv.innerHTML = "";
        return;
    }

    if (entry) {
        resultDiv.innerHTML = `
            <p class="${entry.estado.toLowerCase().includes('retiró') ? 'success' : 'fail'}">
                ${entry.nombre} (${entry.dni})<br>
                <strong>${entry.estado}</strong><br>
                ${entry.fecha ? "Fecha: " + entry.fecha : ""}
            </p>
        `;
    } else {
        resultDiv.innerHTML = '<p class="fail">Operador no encontrado.</p>';
    }
}
