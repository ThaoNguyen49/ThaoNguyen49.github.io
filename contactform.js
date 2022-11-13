function init(){
	var contactForm = document.getElementById("contactform");
	contactForm.onsubmit = validate;
}

function validate(){
	var name = document.getElementById("name").value;
	sessionStorage.name = name;
	var email = document.getElementById("email").value;
	sessionStorage.email = email;
	var phone = document.getElementById("phone").value;
	sessionStorage.phone = phone;
	var age = document.getElementById("age").value;
	sessionStorage.age = age;
	var other = document.getElementByIde("other").value;
	sessionStorage.other = other;

	var error_msg = ""
	// R1 name
	if (name.match("^[A-Z a-z]{1,30}$") == null){
		error_msg += "Name has to contain only characters and no more than 20 characters. ";
	}
	// // R2 email
	if (email.match("^[A-Za-z]*@[A-Z.a-z]*$") == null){
		error_msg += "Email has to contain @. ";
	}
	// // R3 phone
	// if (phone.match("^((/+49)|0)(/d{10,11})$") == null){
	// 	error_msg += "Phone number has to start with +49 or 0 and contain between 10 and 11 digits. ";
	// }
	// // // R4 age
	// if (age.match("^(/d/d)$") == null){
	// 	error_msg += "Age has to contain 2 digits. "
	// }
	// // R5 notice
	if (other.match(".{0,100}") == null){
		error_msg += "Text has to contain less than 100 characters."


	if (error_msg == ""){
		return true
	} else {
		document.getElementById("error").textContent = error_msg;
		return false

	}


}

// get data from form 


	const scriptURL = 'https://script.google.com/macros/s/AKfycbz_4Vb1SS9tG0K4pVexZWk-WbpJc-peqC76KMB9Jj1zlOad9ake5UfuE0X7jwx_5Ntf/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('spanform')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
      	msg.innerHTML = "Message sent successfully. Thank you!"
      	setTimeout(function(){
      		msg.innerHTML = ""
      	},7000)
      	form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })



window.onload = init;