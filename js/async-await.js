
let url='https://jsonplaceholder.typicode.com/users/2';

let response=[
  {
    id: 101,
    name: 'sanket mane',
    email: 'sanketmane159@gmail.com'
  }
];

const fetchDetails=async ()=> {
  console.log('before fetch');
  let res= await fetch(url);
  let data= await res.json();    
  response.push(data);
  console.log('after fetch');
  displayDetails(response); 
  }
  
const displayDetails=(response)=> {
  let output=''
  response.forEach((element,index) => {
    output+=`<li>
    ${element.id},
    ${element.name},
    ${element.email};
    </li>`
  });
  
  document.getElementById('list').innerHTML=output;
}

fetchDetails();