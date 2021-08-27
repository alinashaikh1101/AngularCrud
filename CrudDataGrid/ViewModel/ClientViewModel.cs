using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CrudDataGrid.ViewModel
{
    public class ClientViewModel
    {
        public int ClientId { get; set; }
        public string ClientName { get; set; }
        public string ClientEmail { get; set; }
        public string ProjectType { get; set; }
        public int HourlyRate { get; set; }
        public string Description { get; set; }
        public bool TermsAndService { get; set; }
        public bool special { get; set; }
        public bool Special { get; internal set; }
    }
}