var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //Get reference to form elements using their IDS
    var profilepictureInput = document.getElementById('profile picture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var linkedInElement = document.getElementById('linkedIn');
    var AcademicQualificationElement = document.getElementById('Academic Qualification');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var AchievementsElement = document.getElementById('Achievements');
    var usernameElement = document.getElementById('username');
    //check if all form elements are present
    if (profilepictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        linkedInElement &&
        AcademicQualificationElement &&
        experienceElement &&
        skillsElement &&
        AchievementsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var linkedIn = linkedInElement.value;
        var AcademicQualification = AcademicQualificationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var Achievements = AchievementsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //picture elements
        var profilepicturefile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n    <p><strong>Name:").concat(name_1, "</strong></p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Phone:</strong>").concat(phone, "</p>\n    <p><strong>linkedIn:</strong>").concat(linkedIn, "</p>\n\n    <h3>AcademicQualification</h3> \n    <p>").concat(AcademicQualification, "</p>\n\n    <h3>Experience</h3> \n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3> \n    <p>").concat(skills, "</p>\n\n    <h3>Achievements</h3> \n    <p>").concat(Achievements, "</p>\n\n    ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'download your 2024 resume';
        //resumeOutput
        var resumeOutputElement = document.getElementById('ResumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error('one or more form elements are missing');
    }
});
