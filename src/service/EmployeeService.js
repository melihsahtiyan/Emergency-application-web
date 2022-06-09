const BASE_URL =
"http://localhost:8080/employee";

export default class EmployeeService{
   


    getAll = async () => {
        return fetch(BASE_URL+"/getAll",{
            headers: {
                "Accept": "application/json"
            }
        }).then( res => res.json());
    }


// addEmployee = async (emp) => {
//     return fetch(BASE_URL+'/addEmployee',{
//         method: "POST",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(emp)
//     }).then(response => response.json())
// }

}