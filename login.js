const data = [
  {
    username: "Ansumana",
    id: "ST177",
  },
  {
    username: "Muhammed",
    id: "ST178",
  },
  {
    username: "Amadou",
    id: "ST179",
  },
];

const psw = document.querySelector("#password");
const userName = document.querySelector("#username");

const submit = document.querySelector(".login");

function handler() {
  submit.addEventListener("click", () => {
    console.log(userName.value, psw.value);

    let is_true = false;

    for (let i = 0; i < data.length; i++) {
      if (userName.value == data[i].username && psw.value == data[i].id) {
        is_true = true;
        break;
      } else {
        is_true = false;
      }
    }

    // const result = data.find((d) => {
    //   if (userName.value == d.username && psw.value == d.id) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    if (is_true) {
      console.log("Success");
    } else {
      console.log("try again");
    }
  });
}

handler();
