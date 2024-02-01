var customerList = document.getElementById("list");

function Customer(nombre, registro) {
    this.Nombre = nombre;
    this.Registro = registro;

    this.GetNombre = function () {
        return this.Nombre;
    }

    this.GetRegistro = function () {
        return this.Registro;
    }
}

const customers = [];
const nombres = ["Jimena", "Alba", "Camila", "Emma", "Eliana", "Gustavo", "Adrián", "Erick", "Pablo", "Rubén"];
var listContent = "";

for (var i = 0; i < 10; i++) {
    const fecha = moment().set({ 'date': i + 1, 'month': moment().month(), 'year': moment().year() });
    customers.push(new Customer(nombres[i], fecha));
}


for (var i = 0; i < customers.length; i++) {
    var customer = customers[i];
    listContent += "<li> " + customer.GetNombre() + ",  " + moment(customer.GetRegistro()).format('DD-MM-YYYY HH:mm:ss') + "</li>";
}

customerList.innerHTML = listContent;
