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
    id: "ST178",
  },
];

const psw = document.querySelector("#password");
const userName = document.querySelector("#username")

const submit = document.querySelector(".login")

function handler() {
    submit.addEventListener('click', () => {
        data.map( (d) => {
           if(userName.value == d.username) {
            console.log('Success')
           } else {
            console.log('try again')
           }
        })
    })
}

handler()