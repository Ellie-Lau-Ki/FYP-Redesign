document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.getElementById('country');

    // Fetch the list of countries from the JSON file
    fetch('countries.json')
        .then(response => response.json())
        .then(countries => {
            // Populate the country selection dropdown
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country;
                option.textContent = country;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));
});

document.addEventListener('DOMContentLoaded', function () {
    const hourSelect = document.getElementById('hours');

    // Fetch the list of hours from the JSON file
    fetch('preferred_hours.json')
        .then(response => response.json())
        .then(hours => {
            // Populate the country selection dropdown
            hours.forEach(hour => {
                const option = document.createElement('option');
                option.value = hour;
                option.textContent = hour;
                hourSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));
});

// add educational button

const educationContainer = document.getElementById('educationContainer');
const addEducationBtn = document.getElementById('addEducationBtn');
let educationCount = 0;

addEducationBtn.addEventListener('click', () => {
    educationCount++;

    const education = document.createElement('div');
    education.className = 'education';
    education.innerHTML = `
      <h3>Educational Background ${educationCount}</h3>
      <label for="companyName${educationCount}">Institution*</label>
      <input type="text" id="companyName${educationCount}" name="companyName${educationCount}" required>
      <label for="posts${educationCount}">Degree*</label>
      <input type="text" id="posts${educationCount}" name="posts${educationCount}" required>
      <label for="posts${educationCount}">Graduation*</label>
      <input type="month" id="posts${educationCount}" name="posts${educationCount}" required><br>
      <label for="posts${educationCount}">Degree*</label>
      <select id="hours" name="hours[]" required>
                        <option value="" disabled selected>Select a Type of Degree</option>
                        <option value="">Associates Degree</option>
                        <option value="">Bachelor’s Degree</option>
                        <option value="">Master’s Degree</option>
                        <option value="">Doctorate Degree</option>
                        <option value="">Other (Please Specify)</option>
                        </select>
    <label for="posts${educationCount}">Major*</label>
      <input type="text" id="posts${educationCount}" name="posts${educationCount}" required><br>
      
      <button class="delete-btn" onclick="removeSection(${educationCount})">Delete</button>
    `;

    educationContainer.appendChild(education);
});

function removeEducation(educationNumber) {
    const educationToRemove = document.querySelector(`.education:nth-child(${educationNumber})`);
    if (educationToRemove) {
        educationContainer.removeChild(educationToRemove);
    }
}

//add work




const sectionContainer = document.getElementById('sectionContainer');
const addSectionBtn = document.getElementById('addSectionBtn');
let sectionCount = 0;

addSectionBtn.addEventListener('click', () => {
    sectionCount++;

    const section = document.createElement('div');
    section.className = 'section';
    section.innerHTML = `
      <h3>Work Experience ${sectionCount}</h3>
      <label for="companyName${sectionCount}">Job Title*</label>
      <input type="text" id="companyName${sectionCount}" name="companyName${sectionCount}" required>
      <label for="posts${sectionCount}">Company Name*</label>
      <input type="text" id="posts${sectionCount}" name="posts${sectionCount}" required>
      <label for="posts${sectionCount}">Location*</label>
      <input type="text" id="posts${sectionCount}" name="posts${sectionCount}" required><br>
      <label for="posts${sectionCount}">From*</label>
      <input type="month" id="month">
      <label for="posts${sectionCount}">To*</label>
      <input type="month" id="month">
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="posts${sectionCount}"> I currently work here</label><br>
    <label for="posts${sectionCount}">Role Description*</label>
      <input type="text" id="posts${sectionCount}" name="posts${sectionCount}" required><br>
      <button class="delete-btn" style="border:none" onclick="removeSection(${sectionCount})">Delete</button>
    `;

    sectionContainer.appendChild(section);
});

function removeSection(sectionNumber) {
    const sectionToRemove = document.querySelector(`.section:nth-child(${sectionNumber})`);
    if (sectionToRemove) {
        sectionContainer.removeChild(sectionToRemove);
    }
}




const skillContainer = document.getElementById('skillContainer');
const addSkillBtn = document.getElementById('addSkillBtn');
let skillCount = 0;

addSkillBtn.addEventListener('click', () => {
    skillCount++;

    const skill = document.createElement('div');
    skill.className = 'skill';
    skill.innerHTML = `
      <label>Programming Language ${skillCount}</label> 
      <input type="text" id="companyName${skillCount}" name="companyName${skillCount}" required>
      <label for="posts${skillCount}">Proficiency *</label>
      <select id="hours" name="hours[]" required>
                        <option value="" disabled selected>Select Proficiecny</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediary</option>
                        <option value="">Advanced</option>
                        </select>
      <button class="delete-btn" style="border:none" onclick="removeSection(${skillCount})">Delete</button>
    `;

    skillContainer.appendChild(skill);
});

function removeSkill(skillNumber) {
    const skillToRemove = document.querySelector(`.skill:nth-child(${skillNumber})`);
    if (skillToRemove) {
        skillContainer.removeChild(skillToRemove);
    }
}


const skill2Container = document.getElementById('skill2Container');
const addSkill2Btn = document.getElementById('addSkill2Btn');
let skill2Count = 0;

addSkill2Btn.addEventListener('click', () => {
    skill2Count++;

    const skill2 = document.createElement('div');
    skill2.className = 'skill2';
    skill2.innerHTML = `
      <label>Framework ${skill2Count}</label>
      <input type="text" id="companyName${skill2Count}" name="companyName${skill2Count}" required>
      <label for="posts${skill2Count}">Proficiency *</label>
      <select id="hours" name="hours[]" required>
                        <option value="" disabled selected>Select Proficiecny</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediary</option>
                        <option value="">Advanced</option>
                        </select>
      <button class="delete-btn" style="border:none" onclick="removeSection(${skill2Count})">Delete</button>
    `;

    skill2Container.appendChild(skill2);
});

function removeSkill2(skill2Number) {
    const skill2ToRemove = document.querySelector(`.skill:nth-child(${skill2Number})`);
    if (skill2ToRemove) {
        skill2Container.removeChild(skill2ToRemove);
    }
}


const skill3Container = document.getElementById('skill3Container');
const addSkill3Btn = document.getElementById('addSkill3Btn');
let skill3Count = 0;

addSkill3Btn.addEventListener('click', () => {
    skill3Count++;

    const skill3 = document.createElement('div');
    skill3.className = 'skill3';
    skill3.innerHTML = `
      <label>Technology ${skill3Count}</label>
      <input type="text" id="companyName${skill3Count}" name="companyName${skill3Count}" required>
      <label for="posts${skill3Count}">Proficiency *</label>
      <select id="hours" name="hours[]" required>
                        <option value="" disabled selected>Select Proficiecny</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediary</option>
                        <option value="">Advanced</option>
                        </select>
      <button class="delete-btn" style="border:none" onclick="removeSection(${skill3Count})">Delete</button>
    `;

    skill3Container.appendChild(skill3);
});

function removeSkill3(skill3Number) {
    const skill3ToRemove = document.querySelector(`.skill3:nth-child(${skill3Number})`);
    if (skill3ToRemove) {
        skill3Container.removeChild(skill3ToRemove);
    }
}

const skill4Container = document.getElementById('skill4Container');
const addSkill4Btn = document.getElementById('addSkill4Btn');
let skill4Count = 0;

addSkill4Btn.addEventListener('click', () => {
    skill4Count++;

    const skill4 = document.createElement('div');
    skill4.className = 'skill4';
    skill4.innerHTML = `
      <label>Design Sofware ${skill4Count}</label>
      <input type="text" id="companyName${skill4Count}" name="companyName${skill4Count}" required>
      <label for="posts${skill4Count}">Proficiency *</label>
      <select id="hours" name="hours[]" required>
                        <option value="" disabled selected>Select Proficiecny</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediary</option>
                        <option value="">Advanced</option>
                        </select>
      <button class="delete-btn" style="border:none" onclick="removeSection(${skill4Count})">Delete</button>
    `;

    skill4Container.appendChild(skill4);
});

function removeSkill4(skill4Number) {
    const skill4ToRemove = document.querySelector(`.skill4:nth-child(${skill4Number})`);
    if (skill4ToRemove) {
        skill4Container.removeChild(skill4ToRemove);
    }
}

const skill5Container = document.getElementById('skill5Container');
const addSkill5Btn = document.getElementById('addSkill5Btn');
let skill5Count = 0;

addSkill5Btn.addEventListener('click', () => {
    skill5Count++;

    const skill5 = document.createElement('div');
    skill5.className = 'skill4';
    skill5.innerHTML = `
      <label>Design Tool ${skill5Count}</label>
      <input type="text" id="companyName${skill5Count}" name="companyName${skill5Count}" required>
      <label for="posts${skill5Count}">Proficiency *</label>
      <select id="hours" name="hours[]" required>
                        <option value="" disabled selected>Select Proficiecny</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediary</option>
                        <option value="">Advanced</option>
                        </select>
      <button class="delete-btn" style="border:none" onclick="removeSection(${skill5Count})">Delete</button>
    `;

    skill5Container.appendChild(skill5);
});

function removeSkill5(skill4Number) {
    const skill5ToRemove = document.querySelector(`.skill5:nth-child(${skill5Number})`);
    if (skill5ToRemove) {
        skill5Container.removeChild(skill5ToRemove);
    }
}

