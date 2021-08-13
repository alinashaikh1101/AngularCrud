
using AngularCrud;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
namespace AngularCRUD.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee  
        public ActionResult Index()
        {
            return View();
        }
        /// <summary>  
        ///   
        /// Get All Employee  
        /// </summary>  
        /// <returns></returns>  
        public JsonResult Get_AllEmployee()
        {
            using (DemoEntities Obj = new DemoEntities())
            {
                List<Employee> Emp = Obj.Employees.ToList();
                return Json(Emp, JsonRequestBehavior.AllowGet);
            }
        }
        /// <summary>  
        /// Get Employee With Id  
        /// </summary>  
        /// <param name="Id"></param>  
        /// <returns></returns>  
        public JsonResult Get_EmployeeById(string Id)
        {
            using (DemoEntities Obj = new DemoEntities())
            {
                int EmpId = int.Parse(Id);
                return Json(Obj.Employees.Find(EmpId), JsonRequestBehavior.AllowGet);
            }
        }
        /// <summary>  
        /// Insert New Employee  
        /// </summary>  
        /// <param name="Employe"></param>  
        /// <returns></returns>  
        /// 
        [HttpPost]
        public string Insert_Employee(Employee Emp)
        {
            
            if (Emp != null)
            {
                using (DemoEntities Obj = new DemoEntities())
                {

                    

                    Obj.Employees.Add(Emp);
                    Obj.SaveChanges();
                    return "Employee Added Successfully";
                }
            }
            else
            {
                return "Employee Not Inserted! Try Again";
            }
        }
        /// <summary>  
        /// Delete Employee Information  
        /// </summary>  
        /// <param name="Emp"></param>  
        /// <returns></returns>  
        [HttpDelete]
        public string Delete_Employee(Employee Emp)
        {
            if (Emp != null)
            {
                using (DemoEntities Obj = new DemoEntities())
                {
                    var employee = Obj.Employees.Where(s => s.Id == Emp.Id).FirstOrDefault();
                    if (employee != null)
                    {
                        Obj.Employees.Remove(employee);
                        Obj.SaveChanges();
                        return "Employee Deleted Successfully";
                    }
                    else
                    {
                        return "Employee not found.";
                    }
                }
            }
            else
            {
                return "Employee Not Deleted! Try Again";
            }

        }
        /// <summary>  
        /// Update Employee Information  
        /// </summary>  
        /// <param name="Emp"></param>  
        /// <returns></returns>  
        [HttpPost]
        public string Update_Employee(Employee Emp)
        {
            if (Emp != null)
            {
                using (DemoEntities Obj = new DemoEntities())
                {
                    var Emp_ = Obj.Entry(Emp);
                    Employee EmpObj = Obj.Employees.Where(x => x.Id == Emp.Id).FirstOrDefault();
                    EmpObj.FirstName = Emp.FirstName;
                    EmpObj.LastName = Emp.LastName;
                    EmpObj.City = Emp.City;
                    EmpObj.Age = Emp.Age;
                    EmpObj.Salary = Emp.Salary;
                    EmpObj.HireDate = Emp.HireDate;
                    Obj.SaveChanges();
                    return "Employee Updated Successfully";
                }
            }
            else
            {
                return "Employee Not Updated! Try Again";
            }
            
        }
    }
}