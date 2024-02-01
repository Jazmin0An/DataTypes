using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataTypes.Modelo
{
    internal class Customer
    {
        private string Nombre;
        private DateTime Registro;

        public Customer(string name, DateTime registrationDate)
        {
            Nombre = name;
            Registro = registrationDate;
        }
        public string GetNombre()
        {
            return Nombre;
        }

        public DateTime GetRegistro()
        {
            return Registro;
        }

    }
}
