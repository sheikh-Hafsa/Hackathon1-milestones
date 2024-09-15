//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
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

//check if all form elements are present
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

    //get value from form
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const linkedIn = linkedInElement.value;
    const AcademicQualification = AcademicQualificationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const Achievements = AchievementsElement.value;
   
    //picture elements
    const profilepicturefile = profilepictureInput.files?.[0]
    const profilepictureURL = profilepicturefile? URL.createObjectURL(profilepicturefile): "";
   
    //create resume output
    const resumeHTML = `
    <h2>Resume</h2>
    ${profilepictureURL ? `<img src="${profilepictureURL}" alt="profile picture" class="profilepicture">`: ''}
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone:</strong>${phone}</p>
     <p><strong>linkedIn:</strong>${linkedIn}</p>

    <h3>Academic Qualification</h3> 
    <p>${AcademicQualification}</p>

    <h3>Experience</h3> 
    <p>${experience}</p>

    <h3>Skills</h3> 
    <p>${skills}</p>

    <h3>Achievements</h3> 
    <p>${Achievements}</p>
    `;
    //display the resume into the output container

    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeHTML;
        resumeOutputElement.classList.remove('hidden');

     //create  container for buttons
     const buttonsContainer = document.createElement('div');
     buttonsContainer.id = "buttonsContainer";
     resumeOutputElement.appendChild(buttonsContainer);

     //add download pdf button
     const downloadButton = document.createElement('button')
     downloadButton.textContent = "download as PDF";
     downloadButton.addEventListener("click", () => {
        window.print();
     });
     buttonsContainer.appendChild(downloadButton);

     //add shareable link button
     const shareLinkButton = document.createElement('button');
     shareLinkButton.textContent = 'copy shareable Link';
    shareLinkButton.addEventListener("click", async () => {
     try{
        const shareableLink = `https://yourdomain.com/resumes/${name.replace(
        /\s+/g,
        "_"
     )}_cv.html`;
     //use clipbboard
     await navigator.clipboard.writeText(shareableLink);
     alert("shareable Link copied to clipboard!");
     }catch (err) {
      console.error("failed to copied link:", err);
      alert("failed to copy link to clipboard. please try again.");
     }
    });
    buttonsContainer.appendChild(shareLinkButton);
   } else{
      console.error("resume output container not found");
   }
   } else{
    console.error("form elements are missing");
   }
});

        