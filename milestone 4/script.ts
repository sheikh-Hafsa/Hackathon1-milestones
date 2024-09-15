//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    //type assertion
    const profilepictureInput = document.getElementById('profile picture') as HTMLInputElement; 
    const nameElement= document.getElementById('name') as HTMLInputElement;
    const emailElement= document.getElementById('email') as HTMLInputElement;
    const phoneElement= document.getElementById('phone') as HTMLInputElement;
    const linkedInElement= document.getElementById('linkedIn') as HTMLInputElement;
    const AcademicQualificationElement= document.getElementById('Academic Qualification') as HTMLTextAreaElement;
    const experienceElement= document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement= document.getElementById('skills') as HTMLInputElement;
    const AchievementsElement= document.getElementById('Achievements') as HTMLTextAreaElement;

   if (profilepictureInput && 
    nameElement &&
    emailElement &&
    phoneElement && 
    linkedInElement &&
    AcademicQualificationElement &&
    experienceElement && 
    skillsElement &&
    AchievementsElement
    ){
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const linkedIn = phoneElement.value;
    const AcademicQualification = AcademicQualificationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const Achievements = AchievementsElement.value;

    //picture elements
    const profilepicturefile = profilepictureInput.files?.[0]
    const profilepictureURL = profilepicturefile? URL.createObjectURL(profilepicturefile): "";
   
    //create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilepictureURL ? `<img src="${profilepictureURL}" alt="profile picture" class="profilepicture">`: ''}
    <p><strong>Name:</strong><span id="edit-name" class="editable"></p> ${name}</span></p>
    <p><strong>Email:</strong><span id="edit-email" class="editable"></p> ${email}</span></p>
    <p><strong>Phone:</strong><span id="edit-phone" class="editable"></p> ${phone}</span></p>
    <p><strong>linkedIn:</strong><span id="edit-linkedIn" class="editable"></p> ${linkedIn}</span></p>

    <h3>Academic Qualification</h3> 
    <p id="edit-" class="editable">${AcademicQualification}</p>

    <h3>Experience</h3> 
    <p id="edit-experience" class="editable">${experience}</p>

    <h3>Skills</h3> 
    <p id="edit-skills" class="editable">${skills}</p>

    <h3>Achievements</h3> 
    <p id="edit-Achievements" class="editable">${Achievements}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    makeEditable();     
    }
}  else {
    console.error('one or more output elements are missing')
}
});
function makeditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";
            //replace content
            if(currentElement.tagName === 'p' || currentElement.tagName === 'SPAN'){
                const input = document.createElement('input')
                input.type = "text"
                input.value = currentValue
                input.classList.add('editing-input')
                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display ='inline'
                    input.remove()
                })
                currentElement.style.display= "none"
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }

        })
    })
}