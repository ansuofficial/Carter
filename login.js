
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

const admin = document.querySelector("#admin")
const form = document.querySelector("#form");
const error = document.querySelector(".error");


console.log(admin)
const psw = document.querySelector("#password");
const userName = document.querySelector("#username");

const submit = document.querySelector(".login");


const displayAdmin = () => {
  form.classList.toggle("hide");
  admin.classList.toggle("hide");
  let html = ` 
     <div class="side-bar">
      <div class="side-bar-container">
        <div class="side-bar-content">
          <div>
            <h1>${userName.value}</h1>
            <div class="image-con">
              <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="Image">
            </div>
          </div>
          <div class="side-bar-items">
          <h3>Pages</h3>
            <ul>
              <li><i class="bi bi-person"></i> <span>Add new user</span></li>
              <li><i class="bi bi-person"></i> <span>Add new user</span></li>
              <li><i class="bi bi-person"></i> <span>Add new user</span></li>
              <li><i class="bi bi-person"></i> <span>Add new user</span></li>
              <li><i class="bi bi-person"></i> <span>Add new user</span></li>
            </ul>
          </div>
        </div>
      </div>
     </div>

     <div class="header">
      <div class="header-content">
        <div class="header-item">
          <h3>Registered students</h3>
          <h1>+1500</h1>
        </div>
        <div class="header-item">
          <h3>Teachers</h3>
          <h1>39</h1>
        </div>
        <div class="header-item">
          <h3>Transactions</h3>
          <h1>+700</h1>
        </div>
      </div>
     </div>

     <div class="invoice-con">
      <h1>Transactions</h1>
      <div class="invoice-content">

      </div>
     </div>
     `;
  admin.insertAdjacentHTML("afterbegin", html);
};

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
     displayAdmin()
    } else {
      error.classList.remove('hide')
      psw.value = ""
      userName.value = ""
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
