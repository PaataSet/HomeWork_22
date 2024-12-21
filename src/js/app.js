console.log("HomeWork_22");

/*

დავალება

    სერვერიდან წამოიღეთ მონაცემები ამ endpoint-ის გამოყენებით https://jsonplaceholder.typicode.com/users
    ჯავასკრიპტის გამოყენებით გამოიტანეთ  შემდეგი ინფორმაცია: name, email და address;
    დაამატეთ სტილებიც რომ ვიზუალურად კარგად გამოიყურებოდეს, სასურველი იქნება გამოიყენოთ grid-template-columns: repeate(3,1fr) 
    სტრუქტურა, რომ ქარდები სამ-სამ ბლოკებად იყოს განაწილებული.

*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
  });
