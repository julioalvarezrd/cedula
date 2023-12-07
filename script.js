function validarCedula() {
    // Obtener el número de cédula
    var numeroCedula = document.getElementById('numeroCedula').value;

    // Construir la URL de la API
    var apiUrl = `https://api.digital.gob.do/v3/cedulas/${numeroCedula}/validate`;

    // Realizar la solicitud a la API usando Fetch API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Mostrar el resultado en el elemento con id 'resultado'
            var resultadoElement = document.getElementById('resultado');
            if (data.valid) {
                resultadoElement.innerHTML = '<p class="cedulaCorrecta">Cedula correcta</p>';
            } else {
                resultadoElement.innerHTML = '<p class="cedulaIncorrecta">Cedula incorrecta</p>';
            }
        })
        .catch(error => {
            // Manejar errores
            console.error('Error al realizar la solicitud:', error);
            document.getElementById('resultado').innerHTML = '<p>Error al realizar la solicitud.</p>';
        });
}
