using AngularCrud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularCrud.Services
{
    public class EmployeeService
    {
        DemoEntities db = new DemoEntities();

        public List<EmployeeViewModel> GetEmployeeList()
        {
           

            var Employee = db.Employees.Select(s => new EmployeeViewModel
            {
                Id = s.Id,
                FirstName = s.FirstName,
                LastName = s.LastName,
                City = s.City,
                Age =s.Age,
                Salary = s.Salary,
                HireDate = s.HireDate
                
            }).ToList();
            return Employee;
        }

        public EmployeeViewModel GetemployeeById(int id)
        {
            var Employee = db.Employees.Where(s => s.Id == id).Select(s => new EmployeeViewModel
            {
                Id = s.Id,
                FirstName = s.FirstName,
                LastName =s.LastName,
                City = s.City,
                Age = s.Age,
                Salary = s.Salary,
                HireDate = s.HireDate
            }).FirstOrDefault();
            return Employee;

        }
        [HttpPost]
        public int Insert_Employee(EmployeeViewModel EmpInfoDto)
        {
            Employee stdnt = new Employee()
            {
                Id = EmpInfoDto.Id,
                FirstName = EmpInfoDto.FirstName,
                LastName= EmpInfoDto.LastName,
                City = EmpInfoDto.City,
                Age = EmpInfoDto.Age,
                Salary = EmpInfoDto.Salary,
                HireDate = EmpInfoDto.HireDate

            };
            db.Employees.Add(stdnt);
            return db.SaveChanges();
        }
        [HttpPost]
        public string Update_Employee(EmployeeViewModel EmpInfoDto)
        {
            var Employees = db.Employees.Where(s => s.Id == EmpInfoDto.Id).FirstOrDefault();
            if (Employees == null)
            {
                return "Employee info not found.";
            }
            else
            {
                EmpInfoDto.Id = EmpInfoDto.Id;
                EmpInfoDto.FirstName = EmpInfoDto.FirstName;
                EmpInfoDto.LastName = EmpInfoDto.LastName;
                EmpInfoDto.City = EmpInfoDto.City;
                EmpInfoDto.Age = EmpInfoDto.Age;
                EmpInfoDto.Salary = EmpInfoDto.Salary;
                EmpInfoDto.HireDate = EmpInfoDto.HireDate;
                





                db.Entry(EmpInfoDto).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return "Employee updated successfully.";
            }
        }
    }
}
    