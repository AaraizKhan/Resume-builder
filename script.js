var _a, _b, _c, _d;
// Function to handle adding sections (education, experience, language, skills)
function addSection(sectionType) {
    var sectionDiv = document.createElement('div');
    sectionDiv.classList.add('details-section');
    var content = '';
    if (sectionType === 'education') {
        content = "\n            <input type=\"text\" placeholder=\"Enter Degree\">\n            <input type=\"text\" placeholder=\"Enter Institution\">\n            <input type=\"text\" placeholder=\"Enter Graduation Year\">\n        ";
    }
    else if (sectionType === 'experience') {
        content = "\n            <input type=\"text\" placeholder=\"Enter Job Title\">\n            <input type=\"text\" placeholder=\"Enter Company\">\n            <input type=\"text\" placeholder=\"Enter Duration\">\n        ";
    }
    else if (sectionType === 'language') {
        content = "\n            <input type=\"text\" placeholder=\"Enter Language\">\n            <input type=\"text\" placeholder=\"Enter Proficiency\">\n        ";
    }
    else if (sectionType === 'skill') {
        content = "\n            <input type=\"text\" placeholder=\"Enter Skill\">\n        ";
    }
    sectionDiv.innerHTML = content;
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', function () { return sectionDiv.remove(); });
    sectionDiv.appendChild(removeButton);
    var sectionContainer = document.querySelector("#".concat(sectionType, "-fields"));
    sectionContainer === null || sectionContainer === void 0 ? void 0 : sectionContainer.appendChild(sectionDiv);
}
// Event listeners for adding sections
(_a = document.getElementById('add-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return addSection('education'); });
(_b = document.getElementById('add-experience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return addSection('experience'); });
(_c = document.getElementById('add-language')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return addSection('language'); });
(_d = document.getElementById('add-skill')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { return addSection('skill'); });
// Function to generate the CV
function generateCV() {
    var _a;
    var cvContentDiv = document.getElementById('cv-content');
    cvContentDiv.innerHTML = '';
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var summary = document.getElementById('summary').value;
    // User image
    var userImageInput = document.getElementById('user-image');
    var userImageURL = ((_a = userImageInput.files) === null || _a === void 0 ? void 0 : _a[0])
        ? URL.createObjectURL(userImageInput.files[0])
        : '';
    var cvHtml = '';
    if (userImageURL) {
        cvHtml += "<img src=\"".concat(userImageURL, "\" alt=\"User Image\" style=\"width: 100px; height: auto; border-radius: 8px;\">");
    }
    cvHtml += "\n        <h3>".concat(fullName, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <p><strong>Summary:</strong> ").concat(summary, "</p>\n        <hr>\n    ");
    cvContentDiv.innerHTML += cvHtml;
    var sectionTypes = ['education', 'experience', 'language', 'skill'];
    // Your original code here...
    // New code for CV Generation:
}
// Your original code here...
// New code for CV Generation:
