var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a, _b;
    event.preventDefault();
    var formElement = document.getElementById('resumeForm');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillElement = document.getElementById('skill');
    var experienceElement = document.getElementById('experience');
    var profilePicElement = document.getElementById('profilePic');
    var summaryElement = document.getElementById('summary');
    var countryElement = document.getElementById('country');
    var expInfoElement = document.getElementById('experience-info');
    var certificationElement = document.getElementById('certification');
    if (nameElement && emailElement && phoneElement && educationElement &&
        skillElement && experienceElement && profilePicElement &&
        countryElement && summaryElement && expInfoElement && certificationElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var skill_1 = skillElement.value;
        var experience_1 = experienceElement.value;
        var country_1 = countryElement.value;
        var summary_1 = summaryElement.value;
        var expYear_1 = expInfoElement.value;
        var certification_1 = certificationElement.value;
        var profilePic = (_a = profilePicElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicURL = profilePic ? URL.createObjectURL(profilePic) : '';
        var output = "\n        <div class=\"content\">\n            <div class=\"content1\">\n                <div class=\"content-img\">\n                    <img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\"/>\n                </div>\n                <div class=\"content-skill\">\n                    <h4>SKILLS</h4>\n                    <ul>\n                        <li>").concat(skill_1, "</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"content-container\">  \n                <div class=\"content2\">\n                    <h1>").concat(name_1, "</h1>\n                    <div class=\"content-add\">\n                        <p>").concat(country_1, "</p>\n                        <p>").concat(phone_1, "</p>\n                        <p>").concat(email_1, "</p>\n                    </div>\n                    <div class=\"content-summary\">\n                        <h1>SUMMARY</h1>\n                        <p>").concat(summary_1, "</p>\n                    </div>\n                    <div class=\"content-experience\">\n                        <h1>EXPERIENCE</h1>\n                        <p>").concat(expYear_1, "</p>\n                        <p><b>").concat(skill_1, "</b> | ").concat(country_1, "</p>\n                        <p>").concat(experience_1, "</p>\n                    </div>\n                    <div class=\"content-education\">\n                        <h1>EDUCATION</h1>\n                        <p>").concat(education_1, "</p>\n                    </div>\n                    <div class=\"content-certification\">\n                        <h1>Certification</h1>\n                        <ul>\n                            <li>").concat(certification_1, "</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>  \n        </div>\n        <button id=\"editButton\">Edit</button> <!-- Edit button -->\n        ");
        var outputElement_1 = document.getElementById('output');
        if (outputElement_1) {
            outputElement_1.innerHTML = output;
            outputElement_1.style.display = 'block'; // Show the resume output
        }
        else {
            console.error("Output element not found");
        }
        // Hide the form after displaying the updated resume
        if (formElement) {
            formElement.style.display = 'none';
        }
        // Add event listener to the Edit button
        (_b = document.getElementById('editButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            // Show the form again for editing
            formElement.style.display = 'block';
            // Hide the resume output while editing
            if (outputElement_1) {
                outputElement_1.style.display = 'none';
            }
            // Populate the form with current values
            nameElement.value = name_1;
            emailElement.value = email_1;
            phoneElement.value = phone_1;
            educationElement.value = education_1;
            skillElement.value = skill_1;
            experienceElement.value = experience_1;
            countryElement.value = country_1;
            summaryElement.value = summary_1;
            expInfoElement.value = expYear_1;
            certificationElement.value = certification_1;
            // Reset the profile picture input as file inputs can't be set programmatically
            profilePicElement.value = '';
        });
    }
    else {
        console.error("Some form elements are missing");
    }
});
