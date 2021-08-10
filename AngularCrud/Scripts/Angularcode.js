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
            $http({
                method: "post",
                url: "https://localhost:44375/Employee/Insert_Employee",
                datatype: "json",
                data: JSON.stringify($scope.Employe)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData();
                $scope.EmpFirstName = "";
                $scope.EmpLastName = "";
                $scope.EmpCity = "";
                $scope.EmpAge = "";
            })
        } else {
            $scope.Employe = {};
            $scope.Employe.EmpFirstName = $scope.EmpName;
            $scope.Employe.EmpLast = $scope.EmpCity;
            $scope.Employe.EmpAge = $scope.EmpAge;
            $scope.Employe.EmpId = document.getElementById("EmpID_").value;
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
        document.getElementById("btnSave").setAttribute("value", "Update");
        document.getElementById("btnSave").style.backgroundColor = "Blue";
        document.getElementById("spn").innerHTML = "Update Employee Information";
    }
})