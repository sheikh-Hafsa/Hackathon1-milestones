//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function (event){
    event.preventDefault();

//Get reference to form elements using their IDS
    const profilepictureInput = document.getElementById('profile picture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const linkedInElement = document.getElementById('linkedIn') as HTMLInputElement;
    const AcademicQualificationElement = document.getElementById('Academic Qualification') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const AchievementsElement = document.getElementById('Achievements') as HTMLTextAreaElement;
    const usernameElement = document.getElementById('username') as HTMLTextAreaElement;

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
    usernameElement
    ){
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const linkedIn = linkedInElement.value;
    const AcademicQualification = AcademicQualificationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const Achievements = AchievementsElement.value;
    const username = usernameElement.value;

    const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`

    //picture elements
    const profilepicturefile = profilepictureInput.files?.[0]
    const profilepictureURL = profilepicturefile? URL.createObjectURL(profilepicturefile): "";
   
    //create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilepictureURL ? `<img src="${profilepictureURL}" alt="profile picture" class="profilepicture">`: ''}
    <p><strong>Name:${name}</strong></p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone:</strong>${phone}</p>
    <p><strong>linkedIn:</strong>${linkedIn}</p>

    <h3>AcademicQualification</h3> 
    <p>${AcademicQualification}</p>

    <h3>Experience</h3> 
    <p>${experience}</p>

    <h3>Skills</h3> 
    <p>${skills}</p>

    <h3>Achievements</h3> 
    <p>${Achievements}</p>

    `;
   const downloadLink = document.createElement('a')
   downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
   downloadLink.download = uniquePath;
   downloadLink.textContent = 'download your 2024 resume';

   //resumeOutput
    const resumeOutputElement = document.getElementById('ResumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;

    resumeOutputElement.appendChild(downloadLink);

    resumeOutputElement.style.display = "block";
    }
} else{
    console.error('one or more form elements are missing');
}
});