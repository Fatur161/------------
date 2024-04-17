function validate(input) {
  return input.value.length > 0 ? true : false;
}

function ageCheck(input) {
  return Number(input.value) >= 18 ? true : false;
}

const phoneRegEx =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

function testPhone(phone) {
  if (phoneRegEx.test(phone.value)) {
    return true;
  } else {
    return false;
  }
}

function generateCard() {
  return Math.floor(Math.random() * 9e15) + 1e15;
}

function purc() {
  Swal.fire({
    title: `Успешно ваша номер карточки: <br> ${generateCard()}`,
    icon: "success",
    confirmButtonText: "Ок",
  });
}

function cancel() {
  Swal.fire({
    title: "Ошибка",
    icon: "error",
    confirmButtonText: "Ок",
  });
}

function capitalizeFirstLetter() {
  let input = document.getElementById("myInput");
  let text = input.value;
  input.value = text.charAt(0).toUpperCase() + text.slice(1);
}

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
});

const lastname = document.getElementById("lastname"),
  firstname = document.getElementById("firstname"),
  tel = document.getElementById("phone"),
  age = document.getElementById("age"),
  regBtn = document.getElementById("card-btn"),
  clearBtn = document.getAnimations("card-btn-clear");

regBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    validate(lastname) &&
    validate(firstname) &&
    validate(tel) &&
    validate(age) &&
    ageCheck(age) &&
    testPhone(tel)
  ) {
    purc();
  } else {
    cancel();
  }
});

clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  lastname.value = "";
  firstname.value = "";
  tel = "";
  age = "";
});
