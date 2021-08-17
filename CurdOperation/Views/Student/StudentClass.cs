using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CurdOperation.Views.Student
{
    public class StudentDto
    {   
        public int Id { get; set; }

        public string ClientName { get; set; }

        public string Project_Type { get; set; }
        public string Description { get; set; }

        public string ClientEmail { get; set; }

        public int Hourly_Rate { get; set; }

    }
}