document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formElement = document.getElementById('resumeForm') as HTMLFormElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const profilePicElement = document.getElementById('profilePic') as HTMLInputElement;
    const summaryElement = document.getElementById('summary') as HTMLInputElement;
    const countryElement = document.getElementById('country') as HTMLInputElement;
    const expInfoElement = document.getElementById('experience-info') as HTMLInputElement;
    const certificationElement = document.getElementById('certification') as HTMLInputElement;

    if (
        nameElement && emailElement && phoneElement && educationElement &&
        skillElement && experienceElement && profilePicElement &&
        countryElement && summaryElement && expInfoElement && certificationElement
    ) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skill = skillElement.value;
        const experience = experienceElement.value;
        const country = countryElement.value;
        const summary = summaryElement.value;
        const expYear = expInfoElement.value;
        const certification = certificationElement.value;
        const profilePic = profilePicElement.files?.[0];
        const profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '';
        
        const output = `
        <div class="content">
            <div class="content1">
                <div class="content-img">
                    <img src="${profilePicURL}" alt="Profile Picture"/>
                </div>
                <div class="content-skill">
                    <h4>SKILLS</h4>
                    <ul>
                        <li>${skill}</li>
                    </ul>
                </div>
            </div>
            <div class="content-container">  
                <div class="content2">
                    <h1>${name}</h1>
                    <div class="content-add">
                        <p>${country}</p>
                        <p>${phone}</p>
                        <p>${email}</p>
                    </div>
                    <div class="content-summary">
                        <h1>SUMMARY</h1>
                        <p>${summary}</p>
                    </div>
                    <div class="content-experience">
                        <h1>EXPERIENCE</h1>
                        <p>${expYear}</p>
                        <p><b>${skill}</b> | ${country}</p>
                        <p>${experience}</p>
                    </div>
                    <div class="content-education">
                        <h1>EDUCATION</h1>
                        <p>${education}</p>
                    </div>
                    <div class="content-certification">
                        <h1>Certification</h1>
                        <ul>
                            <li>${certification}</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
        <button id="editButton">Edit</button> <!-- Edit button -->
        `;

        const outputElement = document.getElementById('output');
        if (outputElement) {
            outputElement.innerHTML = output;
            outputElement.style.display = 'block'; // Show the resume output
        } else {
            console.error("Output element not found");
        }

        // Hide the form after displaying the updated resume
        if (formElement) {
            formElement.style.display = 'none';
        }

        // Add event listener to the Edit button
        document.getElementById('editButton')?.addEventListener('click', function() {
            // Show the form again for editing
            formElement.style.display = 'block';

            // Hide the resume output while editing
            if (outputElement) {
                outputElement.style.display = 'none';
            }

            // Populate the form with current values
            nameElement.value = name;
            emailElement.value = email;
            phoneElement.value = phone;
            educationElement.value = education;
            skillElement.value = skill;
            experienceElement.value = experience;
            countryElement.value = country;
            summaryElement.value = summary;
            expInfoElement.value = expYear;
            certificationElement.value = certification;

            // Reset the profile picture input as file inputs can't be set programmatically
            profilePicElement.value = '';
        });
    } else {
        console.error("Some form elements are missing");
    }
});
