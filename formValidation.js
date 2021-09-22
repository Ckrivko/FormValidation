function validate() {

    document.querySelector("#submit").type = "button";
  
    let companyCheck = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');

    let submitBtn = document.getElementById('submit');

    function checkbox() {

        if (companyCheck.checked) {
            companyInfo.style = 'display: block';

        }
        else {
            companyInfo.style.display = 'none';
        }
    }

    companyCheck.addEventListener('change', checkbox);

    submitBtn.addEventListener('click', (event) => {

        event.preventDefault()

        let isValid = true;


        let usernameEl = document.getElementById('username');
        let emailEl = document.getElementById('email');
        let passEl = document.getElementById('password');
        let confirmPassEl = document.getElementById('confirm-password');
        let companyEl = document.getElementById('companyNumber');

        let userReg = /^[a-zA-Z0-9]{3,20}$/;
        let emailReg = /^[^@.]+@[^@]*\.[^@]*$/;
        let passReg = /^\w{5,15}$/;



        if (!userReg.test(usernameEl.value)) {

            isValid = false;
            usernameEl.style.borderColor = 'red';

        }
        else {
            usernameEl.style.borderColor = '';
        }

        if (!emailReg.test(emailEl.value)) {

            isValid = false;
            emailEl.style.borderColor = 'red';

        }
        else {
            emailEl.style.borderColor = '';
        }

        if (passReg.test(passEl.value) &&
            passReg.test(confirmPassEl.value)
            && passEl.value === confirmPassEl.value) {

            passEl.style.borderColor = '';
            confirmPassEl.style.borderColor = '';
        }
        else {
            isValid = false;
            passEl.style.borderColor = 'red';
            confirmPassEl.style.borderColor = 'red';

        }

        if (companyCheck.checked) {

            if (companyEl.value < 1000 || companyEl.value > 9999) {

                isValid = false;
                companyEl.style.borderColor = 'red';

            }
            else {

                companyEl.style.borderColor = '';
            }

        }

        if (isValid) {

            document.getElementById('valid').style.display = 'block';
        }

        else {
            document.getElementById('valid').style.display = 'none';
        }



    })

}










