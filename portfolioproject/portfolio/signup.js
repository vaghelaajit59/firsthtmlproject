let register = [];
function submit()
{
let name = document.getElementById('name').value;
let address = document.getElementById('address').value;
let male = document.getElementById('male').value;
let female = document.getElementById('female').value;
let number = document.getElementById('number').value;
let username = document.getElementById('username').value;
console.log('This is tut 20');

let name1  = sessionStorage.getItem('sessionname');
let password = sessionStorage.getItem('sessionpassword');
console.log(name1);



register.push(
{
   name:name,
    address:address,
    //male:male,
    //female:female,
    number:number
}
);
console.log(register);

}


