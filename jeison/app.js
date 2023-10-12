const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const cedula = document.getElementById("numeroCedula")
const Celular = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")
const consultorio = document.getElementById("numeroConsultorio")
const correo = document.getElementById("correo")
const edad = document.getElementById("edad")

const formularioMedicos = document.getElementById("registroMedicosForm")
const formularioPacientes = document.getElementById("registroPacientesForm")

class Usuario {
    constructor(nombres, apellidos, numerocedula, telefono, especialidad) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.cedula = numerocedula
        this.celular = telefono
        this.especialidad = especialidad
    }
}
const mostrarMedicos = function () {
    let medicos = []
    let cuerpoTabla = document.getElementById("cuerpoTablaMedicos")
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos) {
        medicos = JSON.parse(localMedicos)
    }
    medicos.forEach(medico => {
        let fila = document.createElement("tr")
        let celdaNombres = fila.insertCell()
        let celdaApellidos = fila.insertCell()
        let celdaCedula = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCelular = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaPaciente = fila.insertCell()


        celdaNombres.textContent = medico.nombres
        celdaApellidos.textContent = medico.apellidos
        celdaCedula.textContent = medico.cedula
        celdaCelular.textContent = medico.celular
        celdaConsultorio.textContent = medico.consultorio
        celdaCorreo.textContent = medico.correo
        celdaEspecialidad.textContent = medico.especialidad
        celdaPaciente.textContent = "Sin asignar"


        cuerpoTabla.appendChild(fila)


    });
};
const mostrarPacientes = function () {
    let pacientes = [];
    let cuerpoTabla = document.getElementById("cuerpoTablaPacientes")
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.forEach(paciente => {
        let fila = document.createElement("tr")
        let celdaNombres = fila.insertCell()
        let celdaApellidos = fila.insertCell()
        let celdaCedula = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdaCelular = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaMedico = fila.insertCell()


        celdaNombres.textContent = paciente.nombres;
        celdaApellidos.textContent = paciente.apellidos;
        celdaCedula.textContent = paciente.cedula;
        celdaCelular.textContent = paciente.celular;
        celdaEdad.textContent = paciente.edad;
        celdaEspecialidad.textContent = paciente.especialidad;
        celdaMedico.textContent = "Sin asignar";


        cuerpoTabla.appendChild(fila);


    });
};

if (window.location.href.endsWith("ListadoMedicoUno.html")) {
    mostrarMedicos()
}

if (window.location.href.endsWith("ListadoPacienteUno.html")) {
    mostrarPacientes()
}


//------------
if (window.location.href.endsWith("registrosMedicos.html")) {


    formularioMedicos.addEventListener("submit", function (event) {
        event.preventDefault()

        let valorNombres = nombres.value
        let valorApellido = apellidos.value
        let valorCedula = cedula.value
        let valorConsultorio = consultorio.value
        let valorCelular = telefono.value
        let valorCorreo = correo.value
        let valorEspecialidad = especialidad.value

        const medico = new Usuario(valorNombres, valorApellido, valorCedula, valorCelular, valorEspecialidad)
        medico.consultorio = valorConsultorio
        medico.correo = valorCorreo

        let medicos = []
        let localMedicos = localStorage.getItem("medicos")
        if (localMedicos) {
            medicos = JSON.parse(localMedicos)
        }
        medicos.push(medico)
        localStorage.setItem("medicos", JSON.stringify(medicos))
        alert("Medico registrado")



        console.log(medico)
        alert("Medico Registrado")

    })
}




if (window.location.href.endsWith("registroPacientes.html")) {


    formularioPacientes.addEventListener("submit", function (event) {
        event.preventDefault()

        let valorNombres = nombres.value
        let valorApellido = apellidos.value
        let valorCedula = cedula.value
        let valorEdad = edad.value
        let valorCelular = telefono.value
        let valorEspecialidad = especialidad.value

        const paciente = new Usuario(valorNombres, valorApellido, valorCedula, valorCelular, valorEspecialidad);
        paciente.edad = valorEdad

        let pacientes = []

        let localPacientes = localStorage.getItem("pacientes")
        if (localPacientes) {
            pacientes = JSON.parse(localPacientes)
        }
        pacientes.push(paciente)
        localStorage.setItem("pacientes", JSON.stringify(pacientes))
        alert("Paciente registrado")



        console.log(paciente)
        alert("Paciente Registrado")

    })
}
