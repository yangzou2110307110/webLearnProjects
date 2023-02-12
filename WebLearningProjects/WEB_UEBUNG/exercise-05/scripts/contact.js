
window.onload = () => {
    
    const nameInput = document.getElementById('name-input');

    nameInput.oninput = () => {
        const value = nameInput.value;
        // console.log("Input: " + value);

        const parts = value.split(" ").filter(obj => obj.length > 0); 
        console.log(parts);   


        if(parts.length === 2){
            // ok
            nameInput.setCustomValidity("");
        } else {
            // validation error
            nameInput.setCustomValidity("Name: <First Name> <Last Name>");
        }

        nameInput.reportValidity();
    };

    window.onsubmit = () => {
        console.log("submit window"); 
    };

    const contactForm = document.getElementById('contact-form');
    contactForm.onsubmit = (event) => {
        console.log("submit form"); 
        event.preventDefault();
        // event.stopPropagation();

        const formData = new FormData(contactForm);
        // console.log(formData.get("email"));
        console.log("Form data"); 
        console.log("-----------------------------"); 
        for(const pair of formData.entries()) {
            console.log(pair[0] + " : " + pair[1]);
        }
        console.log("-----------------------------"); 
    };
}