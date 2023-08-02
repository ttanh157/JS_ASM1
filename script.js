"use strict";
const submitBtn = document.getElementById("submit-btn");
const healthyBtn = document.getElementById("healthy-btn");
const bmiBtn = document.getElementById("bmi-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const tableBodyEl = document.getElementById("tbody");

//Biến toàn cục
//Hàm tính BMI
function calBMI(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i].type === "Cat") {
      a[i].bmi = ((Number(a[i].weight) * 703) / Number(a[i].leng) ** 2).toFixed(
        2
      );
    }
    if (a[i].type === "Dog") {
      a[i].bmi = ((Number(a[i].weight) * 886) / Number(a[i].leng) ** 2).toFixed(
        2
      );
    }
  }
  return a;
}
//Biến HelthyPet
const healthyPet = [];

//Ngày hiện tại dạng dd/mm/yyyy
const today = new Date();
const formattedToday = today.toLocaleDateString("vi-VN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
//Hàm deletePet
const deletePet = (petId) => {
  // Confirm before deletePet
  if (confirm("Are you sure?")) {
    for (let i = 0; i < petArr.length; i++) {
      if (petId === petArr[i].id) {
        petArr.splice(i, 1);
        renderTable(petArr);
      }
    }
  }
};

const petArr = [];
//Hàm check dữ liệu hợp lệ
function validateData(data) {
  //Kiểm tra rỗng
  let isValidate = true;
  if (data.id.trim() === "") {
    alert("ID is invalid");
    isValidate = false;
  }
  if (data.name.trim() === "") {
    alert("Name is invalid");
    isValidate = false;
  }
  if (isNaN(data.age) || data.age < 1 || data.age > 15) {
    alert("Age is invalid! Age must be between 1 and 15!");
    isValidate = false;
  }

  if (isNaN(data.weight) || data.weight < 1 || data.weight > 15) {
    alert("Weight is invalid! Weight must be between 1 and 15!");
    isValidate = false;
  }
  if (isNaN(data.leng) || data.leng < 1 || data.leng > 100) {
    alert("Length is invalid! Length must be between 1 and 100!");
    isValidate = false;
  }
  for (let i = 0; i < petArr.length; i++) {
    if (petArr[i].id === data.id) {
      alert("ID must be unique!");
      isValidate = false;
      break;
    }
  }
  if (data.type === "Select Type") {
    isValidate = false;
    alert("Please select Type!");
  }
  if (data.breed === "Select Breed") {
    isValidate = false;
    alert("Please select Breed!");
  }
  return isValidate;
}
//Hàm tạo bảng
const renderTable = function (p) {
  tableBodyEl.innerHTML = "";
  for (let i = 0; i < p.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `<th scope="row">${p[i].id}</th>
    <td>${p[i].name}</td>
    <td>${p[i].age}</td>
    <td>${p[i].type}</td>
    <td>${p[i].weight} kg</td>
    <td>${p[i].leng} cm</td>
    <td>${p[i].breed}</td>
    <td>
      <i class="bi bi-square-fill" style="color: ${p[i].color}"></i>
    </td>
    <td><i class="bi bi-${
      p[i].vaccinated === false ? "x" : "check"
    }-circle-fill"></i></td>
    <td><i class="bi bi-${
      p[i].dewormed === false ? "x" : "check"
    }-circle-fill"></i></td>
    <td><i class="bi bi-${
      p[i].sterilized === false ? "x" : "check"
    }-circle-fill"></i></td>
    <td>${formattedToday}</td>
    <td><button type="button" class="btn btn-danger" onclick="deletePet('${
      p[i].id
    }')")>Delete</button>
    </td>`;
    tableBodyEl.appendChild(row);
  }
};
//Tạo bảng tính BMI
const renderBMI = function (p) {
  tableBodyEl.innerHTML = "";
  for (let i = 0; i < p.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `<th scope="row">${p[i].id}</th>
    <td>${p[i].name}</td>
    <td>${p[i].age}</td>
    <td>${p[i].type}</td>
    <td>${p[i].weight} kg</td>
    <td>${p[i].leng} cm</td>
    <td>${p[i].breed}</td>
    <td>
      <i class="bi bi-square-fill" style="color: ${p[i].color}"></i>
    </td>
    <td><i class="bi bi-${
      p[i].vaccinated === false ? "x" : "check"
    }-circle-fill"></i></td>
    <td><i class="bi bi-${
      p[i].dewormed === false ? "x" : "check"
    }-circle-fill"></i></td>
    <td><i class="bi bi-${
      p[i].sterilized === false ? "x" : "check"
    }-circle-fill"></i></td>
    <td>${formattedToday}</td>
    <td class="bmitable">${p[i].bmi}</td>
    <td><button type="button" class="btn btn-danger" onclick="deletePet('${
      p[i].id
    }')")>Delete</button>
    </td>`;
    tableBodyEl.appendChild(row);
  }
};
//Clear Input
const clearInput = () => {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "#000000";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
};
//Data Demo
const data1 = {
  id: "P001",
  name: "Beo",
  age: 3,
  type: "Cat",
  color: "Gray",
  weight: 6,
  leng: 70,
  breed: "Tabby",
  vaccinated: true,
  dewormed: true,
  sterilized: true,
  date: new Date(2023, 2, 1),
};
const data2 = {
  id: "P002",
  name: "May",
  age: 1,
  type: "Cat",
  color: "Gray",
  weight: 3,
  leng: 40,
  breed: "Tabby",
  vaccinated: true,
  dewormed: true,
  sterilized: true,
  date: new Date(2023, 2, 2),
};
petArr.push(data1);
petArr.push(data2);

//Xử lý sự kiện khi click vào Button Submit
submitBtn.addEventListener("click", function (e) {
  //1. Lấy dữ liệu từ các Form Input
  const data = {
    id: idInput.value,
    name: nameInput.value,
    type: typeInput.value,
    age: parseInt(ageInput.value),
    weight: parseInt(weightInput.value),
    leng: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date(),
  };
  //2. Validate dữ liệu
  const validate = validateData(data);
  if (validate) {
    //3. Thêm thú cưng vào danh sách
    petArr.push(data);
    //4. Hiển thị danh sách thú cưng
    renderTable(petArr);
    //5. Xóa các dữ liệu nhập trong Form Input
    clearInput();
    // console.log(petArr);
  }
});

//Show healthy Pet
healthyBtn.addEventListener("click", function (e) {
  if (healthyPet !== petArr) {
    healthyPet.splice(0, healthyPet.length);
    for (let i = 0; i < petArr.length; i++) {
      if (
        petArr[i].vaccinated === true &&
        petArr[i].dewormed === true &&
        petArr[i].sterilized === true
      ) {
        healthyPet.push(petArr[i]);
      }
    }
  }
  if (healthyBtn.textContent === "Show Healthy Pet") {
    healthyBtn.textContent = "Show All Pet";
    renderTable(healthyPet);
  } else {
    healthyBtn.textContent = "Show Healthy Pet";
    renderTable(petArr);
  }
});

//Tính BMI
let clickBMI = true;
bmiBtn.addEventListener("click", function () {
  let bmipetArr = calBMI(petArr);
  console.log(bmipetArr);

  if (clickBMI == true) {
    calBMI(petArr);
    renderBMI(petArr);
    document.querySelector(".thbmi").classList.remove("hidden");
    console.log(petArr);
    clickBMI = false;
  } else {
    renderTable(petArr);
    document.querySelector(".thbmi").classList.add("hidden");
    clickBMI = true;
  }
});
