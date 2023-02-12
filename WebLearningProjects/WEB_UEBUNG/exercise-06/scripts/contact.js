
window.onload = function () {

    const nameInput = document.getElementById("name-input");
    nameInput.oninput = () => {

        const value = nameInput.value;

        const parts = value.split(" ")
            .filter(txt => txt.trim().length > 0);

        // const parts = value.split(" ")
        //     .filter(function (txt) {
        //         return txt.trim().length > 0;
        //     });

        console.log(parts);

        if (parts.length === 2) {
            if (parts[0].length < 3) {
                // console.error(
                //     "Firstname should have more than 2 characters.");
                nameInput.setCustomValidity(
                    "Firstname should have more than 2 characters.");

            } else if (parts[1].length < 3) {
                // console.error(
                //     "Lastname should have more than 2 characters.");

                nameInput.setCustomValidity(
                    "Lastname should have more than 2 characters.");
            } else {
                //ok
                nameInput.setCustomValidity("");
            }
        } else {
            // console.error("Name: <Firstname> <Lastname>");
            nameInput.setCustomValidity("Name: <Firstname> <Lastname>");
        }

        nameInput.reportValidity();
    };

    // const submitBtn = document.getElementById("submit-btn");
    // submitBtn.onclick = event => {
    //     console.log("submit ...");
    //     event.preventDefault(); // cancel event
    // };

    const contactForm = document.getElementById("contact-form");
    contactForm.onsubmit = event => {
        console.log("submit ...");
        event.preventDefault(); // cancel event

        const formData = new FormData(contactForm);

        console.log("Form Data");
        for (const pair of formData.entries()) {
            console.log(`  ${pair[0]}: ${pair[1]}`);
        }
        console.log("---------------------------------");
        console.log("E-Mail: " + formData.get("email"));

        // form data processing code
    };



}

