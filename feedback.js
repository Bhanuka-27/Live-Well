// Function to validate the feedback form
function validateForm() {
    const form = document.getElementById('feedbackForm'); // Get the feedback form element
    if (form.checkValidity()) {
        alert('Feedback submitted successfully!');
        return true;
    } else {
        alert('Please fill out all required fields correctly.');
        return false; 
    }
}

// Function to preview the feedback before submission
function previewFeedback() {
    // Populate the preview section with the form values
    document.getElementById('previewName').innerText = document.getElementById('name').value;
    document.getElementById('previewEmail').innerText = document.getElementById('email').value;
    document.getElementById('previewFirstTime').innerText = document.querySelector('input[name="firstTime"]:checked').value;
    document.getElementById('previewInformative').innerText = document.querySelector('input[name="informative"]:checked').value;
    document.getElementById('previewImprovements').innerText = document.getElementById('improvements').value;
    document.getElementById('previewRating').innerText = document.querySelector('input[name="rating"]:checked').value;
    document.getElementById('previewRecommend').innerText = document.querySelector('input[name="recommend"]:checked').value;
    document.getElementById('previewUpdates').innerText = document.getElementById('updates').value;
    document.getElementById('previewAdditionalComments').innerText = document.getElementById('additionalComments').value;

    // Hide the form and show the preview section
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('previewSection').style.display = 'block';
}

// Function to edit the feedback after preview
function editFeedback() {
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('feedbackForm').style.display = 'block';
}

// Function to confirm and submit the feedback
function submitFeedback() {
    alert('Feedback confirmed and submitted!');
}
