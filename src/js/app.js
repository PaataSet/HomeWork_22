console.log("HomeWork_22");

/*
დავალება

    სერვერიდან წამოიღეთ მონაცემები ამ endpoint-ის გამოყენებით https://jsonplaceholder.typicode.com/users
    ჯავასკრიპტის გამოყენებით გამოიტანეთ  შემდეგი ინფორმაცია: name, email და address;
    დაამატეთ სტილებიც რომ ვიზუალურად კარგად გამოიყურებოდეს, სასურველი იქნება გამოიყენოთ grid-template-columns: repeate(3,1fr) 
    სტრუქტურა, რომ ქარდები სამ-სამ ბლოკებად იყოს განაწილებული.
*/

const body = document.querySelector("body");
const section = document.createElement("section");

const newSection = document.createElement("section");
body.append(newSection);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response) => {
    console.log(Response);
    return Response.json();
  })
  .then((data) => {
    console.log(data);

    const dataToUse = data;
    console.log(dataToUse);
    const logData = (el, index, arr) => {
      console.log(el, index, arr);
    };

    const formatedArray = dataToUse.map((el, index, arr) => {
      return {
        name: el.name,
        email: el.email,
        address: el.address.street,
      };
    });

    function renderHTML(data) {
      const formatedData = data.map(
        (el) =>
          `<div class="card">
            <h2>${el.name}</h2>
            <p>${el.email}</p>
            <p>${
              el.address.street +
              ", " +
              el.address.suite +
              ", " +
              el.address.city
            }</p>
               
          </div>`
      );
      return formatedData.join(" ");
    }

    newSection.innerHTML = renderHTML(data);
  })
  .catch((error) => {
    console.log(error);
  });
