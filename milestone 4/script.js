var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilepictureInput = document.getElementById('profile picture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var linkedInElement = document.getElementById('linkedIn');
    var AcademicQualificationElement = document.getElementById('Academic Qualification');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var AchievementsElement = document.getElementById('Achievements');
    if (profilepictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        linkedInElement &&
        AcademicQualificationElement &&
        experienceElement &&
        skillsElement &&
        AchievementsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var linkedIn = phoneElement.value;
        var AcademicQualification = AcademicQualificationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var Achievements = AchievementsElement.value;
        //picture elements
        var profilepicturefile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n    <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\"></p> ").concat(name_1, "</span></p>\n    <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"></p> ").concat(email, "</span></p>\n    <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\"></p> ").concat(phone, "</span></p>\n    <p><strong>linkedIn:</strong><span id=\"edit-linkedIn\" class=\"editable\"></p> ").concat(linkedIn, "</span></p>\n\n    <h3>Academic Qualification</h3> \n    <p id=\"edit-\" class=\"editable\">").concat(AcademicQualification, "</p>\n\n    <h3>Experience</h3> \n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n    <h3>Skills</h3> \n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n    <h3>Achievements</h3> \n    <p id=\"edit-Achievements\" class=\"editable\">").concat(Achievements, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === 'p' || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
