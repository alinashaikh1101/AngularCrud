var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
    debugger;
    $scope.InsertData = function () {
        var Action = document.getElementById("btnSave").getAttribute("value");
        if (Action == "Submit") {
            $scope.Employee = {};
            $scope.Employee.FirstName = $scope.FirstName;
            $scope.Employee.LastName = $scope.LastName;

            $scope.Employee.City = $scope.City;
            $scope.Employee.Age = $scope.Age;
            $scope.Employee.Salary = $scope.Salary;
            $scope.HireDate = "";
            $http({
                method: "post",
                url: "https://localhost:44375/Employee/Insert_Employee",
                datatype: "json",
                data: JSON.stringify($scope.Employee)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData();
                $scope.FirstName = "add";
                $scope.EmpLastName = "";
                $scope.EmpCity = "";
                $scope.EmpAge = "";
                $scope.EmpSalary = "";
                $scope.HireDate = "";
                $scope.Description = "";
            })
        } else {
            $scope.Employe = {};
            $scope.Employe.EmpFirstName = $scope.EmpName;
            $scope.Employe.EmpLastName = $scope.EmpCity;
            $scope.Employe.EmpAge = $scope.EmpAge;
            $scope.Employe.EmpSalary = $scope.EmpSalary;
            $scope.Employe.EmpHireDate = $scope.EmpHireDate;
            $scope.Employe.EmpDescription = $scope.EmpDescription;
            $scope.Employe.EmpId = document.getElementById("EmpID").value;
            $http({
                method: "post",
                url: "https://localhost:44375/Employee/Update_Employee",
                datatype: "json",
                data: JSON.stringify($scope.Employe)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData();
                $scope.EmpFirstName = "";
                $scope.EmpLastName = "";
                $scope.EmpCity = "";
                $scope.EmpAge = "";
                $scope.EmpSalary = "";
                $scope.EmpHireDATE = "";
                $scope.EmpDescription = "";
                document.getElementById("btnSave").setAttribute("value", "Submit");
                document.getElementById("btnSave").style.backgroundColor = "cornflowerblue";
                document.getElementById("spn").innerHTML = "Add New Employee";
            })
        }
    }
    $scope.GetAllData = function () {
        $http({
            method: "get",
            url: "https://localhost:44375/Employee/Get_AllEmployee"
        }).then(function (response) {
            $scope.employees = response.data;
        }, function () {
            alert("Error Occur");
        })
    };
    $scope.DeleteEmp = function (Emp) {
        $http({
            method: "post",
            url: "https://localhost:44375/Employee/Delete_Employee",
            datatype: "json",
            data: JSON.stringify(Emp)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllData();
        })
    };
    
    $scope.UpdateEmp = function (Emp) {
        document.getElementById("ID").value = Emp.Id;
        $scope.EmpFirstName = Emp.FirstName;
        $scope.EmpLastName = Emp.LastName;
        $scope.EmpCity = Emp.City;
        $scope.EmpAge = Emp.Age;
        $scope.EmpSalary = Emp.Salary;
        $scope.EmpHireDate = Emp.HireDate;
        $scope.EmpDescription = Emp.Description;
        document.getElementById("btnSave").setAttribute("value", "Update");
        document.getElementById("btnSave").style.backgroundColor = "Orange";
        document.getElementById("spn").innerHTML = "Update Employee Information";
    }
})