// Function to handle adding sections (education, experience, language, skills)
function addSection(sectionType: string): void {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('details-section');

    let content = '';
    if (sectionType === 'education') {
        content = `
            <input type="text" placeholder="Enter Degree">
            <input type="text" placeholder="Enter Institution">
            <input type="text" placeholder="Enter Graduation Year">
        `;
    } else if (sectionType === 'experience') {
        content = `
            <input type="text" placeholder="Enter Job Title">
            <input type="text" placeholder="Enter Company">
            <input type="text" placeholder="Enter Duration">
        `;
    } else if (sectionType === 'language') {
        content = `
            <input type="text" placeholder="Enter Language">
            <input type="text" placeholder="Enter Proficiency">
        `;
    } else if (sectionType === 'skill') {
        content = `
            <input type="text" placeholder="Enter Skill">
        `;
    }

    sectionDiv.innerHTML = content;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => sectionDiv.remove());

    sectionDiv.appendChild(removeButton);

    const sectionContainer = document.querySelector(`#${sectionType}-fields`);
    sectionContainer?.appendChild(sectionDiv);
}

// Event listeners for adding sections
document.getElementById('add-education')?.addEventListener('click', () => addSection('education'));
document.getElementById('add-experience')?.addEventListener('click', () => addSection('experience'));
document.getElementById('add-language')?.addEventListener('click', () => addSection('language'));
document.getElementById('add-skill')?.addEventListener('click', () => addSection('skill'));

// Function to generate the CV
function generateCV(): void {
    const cvContentDiv = document.getElementById('cv-content')!;
    cvContentDiv.innerHTML = '';

    const fullName = (document.getElementById('full-name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;

    // User image
    const userImageInput = document.getElementById('user-image') as HTMLInputElement;
    const userImageURL = userImageInput.files?.[0]
        ? URL.createObjectURL(userImageInput.files[0])
        : '';

    let cvHtml = '';

    if (userImageURL) {
        cvHtml += `<img src="${userImageURL}" alt="User Image" style="width: 100px; height: auto; border-radius: 8px;">`;
    }

    cvHtml += `
        <h3>${fullName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Summary:</strong> ${summary}</p>
        <hr>
    `;

    cvContentDiv.innerHTML += cvHtml;

    const sectionTypes = ['education', 'experience', 'language', 'skill'];
   



// Your original code here...

// New code for CV Generation:

