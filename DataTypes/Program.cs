// See https://aka.ms/new-console-template for more information
using DataTypes.Modelo;

class Program
{
    static void Main()
    {

        // instancia de la clase Customer en una lista de tipo customer 
        List<Customer> customers = new List<Customer>();
        string[] nombres = { "Jimena", "Alba", "Camila", "Emma", "Eliana", "Gustavo", "Adrián", "Erick", "Pablo", "Rubén" };
        //int tope = nombres.Length;
        //Console.WriteLine(tope);

        for (int i = 0; i < 10; i++)
        {
            DateTime fecha = new DateTime(DateTime.Now.Year, DateTime.Now.Month, i+1);
            //Console.WriteLine(i+1);
            customers.Add(new Customer(nombres[i], fecha));
        }

        //foreach
        Console.WriteLine("\nListado foreach");
        foreach (Customer customer in customers)
            Console.WriteLine(customer.GetNombre() +", "+ customer.GetRegistro());


        //for
        Console.WriteLine("\nListado for");
        for (int i = 0; i < customers.Count; i++)
            Console.WriteLine(customers[i].GetNombre() + ", " +customers[i].GetRegistro());


        //while
        Console.WriteLine("\nListado while");
        int aux = 0;
        while (aux < customers.Count)
        {
            Console.WriteLine(customers[aux].GetNombre() + ", " + customers[aux].GetRegistro());
            aux++;
        }

        //do-while
        Console.WriteLine("\nListado do-while");
        aux = 0;
        do
        {
            Console.WriteLine(customers[aux].GetNombre() + ", " + customers[aux].GetRegistro());
            aux++;
        } while (aux < customers.Count);


        Console.ReadKey();
    }
}