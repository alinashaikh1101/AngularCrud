using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace CrudDataGrid.ViewModel
{
    public class ClientViewModel
    {
        public int? ClientId { get; set; }
        public string ClientName { get; set; }
        public string ClientEmail { get; set; }
        public string ProjectType { get; set; }
        public int HourlyRate { get; set; }
        public string Description { get; set; }
        public bool TermsAndService { get; set; }
        public bool Special { get; set; }
       
    }
    public class EmployeeViewModel
    {
        
        public string ProjectType { get; set; }
        public List<ClientViewModel> clientViews { get; set; }
       
    }
    

    public class FacultyViewModel
    {
        public List<ClientViewModel> Employees { get; set; }
        public int FacultyId { get; set; }

        public string FacultyName { get; set;}

        public string FacultyEmail { get; set; }
        public string Description { get; set; }

        public bool Tos { get; set; }
        public bool Special { get; set; } 

    }
}