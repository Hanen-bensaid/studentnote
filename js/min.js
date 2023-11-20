//recupére les valeurs des champs du formulaire
const fullName = document.querySelector('.fullName');//recreparation de champs 
const dateOfBirth = document.querySelector('.dateOfBirth');
const gender = document.querySelector('select[name="gender"]');
const task1 = document.querySelector('.task1');
const task2 = document.querySelector('.task2');
const task3 = document.querySelector('.task3');
// récuperer les buttons
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');
// validation ule full name
function validatefullName(fullName){
    //check if the full name is required
    if (!fullName) {
        return "full name is required.";
    }
    //check the length of full name 
    if (fullName.length < 3 || fullName.length > 20) {
        return "Full name must be between 3 and 20 characters long.";
    }
    //check the format of full name 
    if (!/^[a-zA-Z ]+$/.test(fullName)) {
        return "full name must contain only letters and spaces.";
    }
    //if the ful name pases allof the validation rules , return nule.
    return null;
}
function validateDate(date) {
    //check if the date is required
    if (!date) {
        return "date is required.";
    }
    // check the format of the date 
   if(!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return"date must be in the format DD-MM-YYYY";
   }
   //check the range ofthe date 
   const today = new Date();
   const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
   const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
   if (date < minDate || date > maxDate) {
    return "Date must be between today and one year from today.";
   }
   // if the date passes all of the validation rules , return null.
    return null;
}
function validateGender(gender) {
    //check if the gender is required
    if (!gender) {
        return"gender is required.";
    }
    // check if the gender is a valid value
    const validateGender = ["Male" , "Female"];
    if (!validateGender.includes(gender)) {
        return "Gender must be valid value.";
    }
    //ifthe gender passes all of the validation rules , return null.
    return null;
}

//afficher le valeur de champs
submit.addEventListener('click', (event) => {
    console.log(dateOfBirth.value);
   if(validatefullName(fullName.value) !== null) {
    alert(validatefullName(fullName.value))
    return;
   }
   if(validateDate(dateOfBirth.value) !== null) {
    alert(validateDate(dateOfBirth.value))
    return;
   }
  if (validateGender(gender.value) !== null) {
    alert(validateGender(gender.value))
  return;
}
//calculer le resulta
const total =((parseInt(task1.value) + parseInt(task2.value) + parseInt(task3.value)) / 3)
// afficher le résultat dans le champ "result"
result.innerHTML =
`<h1>full Name :</h1> 
${fullName.value}
<h1> Birth date :</h1>
${dateOfBirth.value}
<h1>Gender : </h1>
${gender.value}
<h1> Average : </h1>
${total}
<h1>Mark :</h1>
${total >= 10 ? "Succeed" : "Fail"}
`;
});
reset.addEventListener('click', ()=> {
    result.innerHTML = ""
    fullName.value = ''
    dateOfBirth.value = ''
    task1.value = ''
    task2.value = ''
    task3.value = ''
});