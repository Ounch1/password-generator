let rangeInput = document.getElementById('rgAmntChar');
let rangeInputLabel = document.getElementById('rgAmntCharLabel');

let includeNumCheckBox = document.getElementById('cbNumbers');
let includeCapCheckBox = document.getElementById('cbCapital');

rangeInput.addEventListener('input', function() {
    var value = rangeInput.value;
    console.log(value);
    rangeInputLabel.innerHTML = `Amount characters: ${value}`;
});

let submitBtn = document.getElementById('btnSubmit');
let output = document.getElementById('output');

submitBtn.addEventListener('click', function() 
{
    output.innerHTML = `Your password is: ${generatePassword()}`;
});

function generatePassword() 
{
    const letterSet = "abcdefghijklmnopqrstuvwxyz";
    const capitalLetterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numSet = "1234567890";
    let charSet = "";

    charSet = charSet.concat("", letterSet);

    if (includeNumCheckBox.checked)
    {
        charSet = charSet.concat("", numSet);
    }

    if (includeCapCheckBox.checked)
    {
        charSet = charSet.concat("", capitalLetterSet);
    }

    let charArray = charSet.split("");

    let password = "";
    for (let i = 0; i < rangeInput.value; i++)
    {
        let random = charArray[Math.floor(Math.random() * charArray.length)];
        password = password.concat("", random)
    }

    return password;
}