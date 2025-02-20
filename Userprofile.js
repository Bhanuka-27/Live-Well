let currentStep = 1; // Initialize the current step to 1
const totalSteps = 4; // Total number of steps in the form

// Function to move to the next step
function nextStep(step) {
    if (!validateStep(step)) { // Validate current step before proceeding
        return; // Exit function if validation fails
    }

    document.getElementById(`step${step}`).classList.remove('active'); // Hide current step
    currentStep = step + 1; // Increment current step

    if (currentStep > totalSteps) { // If all steps are completed
        confirmProfile(); // Confirm and display the profile summary
    } else {
        document.getElementById(`step${currentStep}`).classList.add('active'); // Show next step
        updateProgressBar(); // Update the progress bar
    }
}

// Function to update the progress bar
function updateProgressBar() {
    const progress = (currentStep - 1) / totalSteps * 100; // Calculate progress percentage
    document.getElementById('progress').style.width = `${progress}%`; // Update progress bar width
    document.getElementById('progress').innerText = `${progress}%`; // Display progress percentage
}

// Function to validate required fields in the current step
function validateStep(step) {
    const stepElement = document.getElementById(`step${step}`); // Get current step element
    const inputs = stepElement.querySelectorAll('input[required]'); // Get all required inputs in the current step

    for (let input of inputs) {
        if (!input.value) { // Check if the required input is filled
            alert('Please fill out all required fields.'); // Show alert if validation fails
            return false; // Return false to indicate validation failure
        }
    }

    return true; // Return true if all required inputs are filled
}

// Function to confirm and display the profile summary
function confirmProfile() {
    const output = document.getElementById('output'); // Get the output element to display profile summary
    const profileData = { // Collect all profile data from input fields
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        age: document.getElementById('age').value,
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
        dietary: document.getElementById('dietary').value,
        exercise: document.getElementById('exercise').value,
        sleep: document.getElementById('sleep').value,
        stress: document.getElementById('stress').value,
        healthgoals: document.getElementById('healthgoals').value,
        conditions: document.getElementById('conditions').value,
        medications: document.getElementById('medications').value,
        allergies: document.getElementById('allergies').value,
        checkup: document.getElementById('checkup').value,
        insurance: document.getElementById('insurance').value,
        hobbies: document.getElementById('hobbies').value,
        volunteer: document.getElementById('volunteer').value,
        community: document.getElementById('community').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    };

    // Display the collected profile data
    output.innerHTML = `
        <p><strong>Name:</strong> ${profileData.name}</p>
        <p><strong>Surname:</strong> ${profileData.surname}</p>
        <p><strong>Age:</strong> ${profileData.age}</p>
        <p><strong>Gender:</strong> ${profileData.gender}</p>
        <p><strong>Dietary Preferences:</strong> ${profileData.dietary}</p>
        <p><strong>Exercise Routine:</strong> ${profileData.exercise}</p>
        <p><strong>Sleep Habits:</strong> ${profileData.sleep}</p>
        <p><strong>Stress Management:</strong> ${profileData.stress}</p>
        <p><strong>Health Goals:</strong> ${profileData.healthgoals}</p>
        <p><strong>Medical Conditions:</strong> ${profileData.conditions}</p>
        <p><strong>Medications:</strong> ${profileData.medications}</p>
        <p><strong>Allergies:</strong> ${profileData.allergies}</p>
        <p><strong>Last Medical Check-up:</strong> ${profileData.checkup}</p>
        <p><strong>Health Insurance Provider:</strong> ${profileData.insurance}</p>
        <p><strong>Hobbies and Interests:</strong> ${profileData.hobbies}</p>
        <p><strong>Volunteer Activities:</strong> ${profileData.volunteer}</p>
        <p><strong>Community Involvement:</strong> ${profileData.community}</p>
        <p><strong>Phone Number:</strong> ${profileData.phone}</p>
        <p><strong>Email Address:</strong> ${profileData.email}</p>
    `;

    // Show the profile summary and hide the form container
    document.getElementById('profile-output').style.display = 'block';
    document.getElementById('prompt-container').style.display = 'none';
    document.getElementById('progress').style.width = '100%'; // Set progress bar to 100%
    document.getElementById('progress').innerText = '100%'; // Display 100% in progress bar
}

// Function to skip the current step and move to the next one
function skipStep(step) {
    document.getElementById(`step${step}`).classList.remove('active'); // Hide current step
    currentStep = step + 1; // Increment current step

    if (currentStep > totalSteps) { // If all steps are completed
        confirmProfile(); // Confirm and display the profile summary
    } else {
        document.getElementById(`step${currentStep}`).classList.add('active'); // Show next step
        updateProgressBar(); // Update the progress bar
    }
}
