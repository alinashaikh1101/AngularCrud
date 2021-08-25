using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CurdOperation.Models
{
    public class Client
    {
        public string ClientName { get;  set; }
        public int Id { get;  set; }
        public int HourlyRate { get;  set; }
        public string ClientEmail { get;  set; }
        public string Description { get;  set; }
        public string ProjectType { get; set; }
    }
}