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

       
        public string Description { get; set; }

        public string ClientEmail { get; set; }

        
        public int HourlyRate { get;  set; }
        public string ProjectType { get;  set; }
    }
}