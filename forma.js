// $('body').on('click', '.password-checkbox', function(){
// 	if ($(this).is(':checked')){
// 		$('#password-input').attr('type', 'text');
// 	} else {
// 		$('#password-input').attr('type', 'password');
// 	}
// });
function check() {
    let name = document.getElementById("nameM");
    let surname = document.getElementById("surnameM");
    let username = document.getElementById("usernameM");
    let password = document.getElementById("password-input");
    let passwordPovtor = document.getElementById("passwordPovtor");

    document.getElementById('errorMessage')
    .innerHTML=""

    if (name.value == ''){
        document.getElementById('errorMessage')
        .innerHTML+= "Поле имя не заполнено <br>";
        elsealert(`Привет ${name}`);
    }

    if (surname.value == ''){
        document.getElementById('errorMessage')
        .innerHTML+= "Поле фамилия не заполнено <br>";
    }

    if (username.value == ''){
        document.getElementById('errorMessage')
        .innerHTML+= "Поле имя пользователя не заполнено <br>";
    }

    if (password.value == ''){
        document.getElementById('errorMessage')
        .innerHTML+= "Поле пароль не заполнено <br>";
    }

    if (passwordPovtor.value == ''){
        document.getElementById('errorMessage')
        .innerHTML+= "Поле подтвердить пароль не заполнено <br>";
    }

    if (password.value.length<=5){
        document.getElementById('errorMessage')
        .innerHTML+= "Ваш пароль слишком короткий <br>";
    }

    let fields = form.querySelectorAll('.field')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
      alert('привет')
    }
  }
})
}
