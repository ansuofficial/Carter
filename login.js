
const data = [
  {
    username: "Ansumana",
    id: "ST177",
    role: 'Admin'
  },
  {
    username: "Muhammed",
    id: "ST178",
    role: "Teacher"
  },
  {
    username: "Amadou",
    id: "ST179",
    role: "Student"
  },
];

let admin = document.querySelector('#admin')
let body = document.querySelector("body");

const psw = document.querySelector("#password");
const userName = document.querySelector("#username");

const submit = document.querySelector(".login");

function handler() {
  submit.addEventListener("click", () => {
    const result = data.find((d) => {
      console.log(d.role)
      if (userName.value == d.username && psw.value == d.id && d.role == "Admin") {
        return true;
      } else {
        return false;
      }
    });

    if (result) {
     return body

    } else {
      console.log("try again");
    }
  });
}

handler();









    // console.log(userName.value, psw.value);

    // let is_true = false;

    // for (let i = 0; i < data.length; i++) {
    //   if (userName.value == data[i].username && psw.value == data[i].id) {
    //     is_true = true;
    //     break;
    //   } else {
    //     is_true = false;
    //   }
    // }
