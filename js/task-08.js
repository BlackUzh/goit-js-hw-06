const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit (evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    const data = {
        userEmail: email.value, 
        userPassword: password.value
    }
    const allFieldsFilled = [email, password].every((field) => field.value !== '');
    if (!allFieldsFilled) {
    alert('Please fill out all fields');
        return;
        
    }
    console.log(data);
  form.reset();
}
