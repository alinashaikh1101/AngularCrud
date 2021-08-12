using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularCrud.Models
{
    public class EmployeeViewModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }
        public string City { get; set; }
        public int Age { get; set; }

        public int Salary { get; set; }
        public DateTime HireDate { get; set; }
    }
}