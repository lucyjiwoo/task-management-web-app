function addMember() {
    // Find the form element
    const form = document.querySelector('.create-block-section');
    
    // Create a new input field for the member's email
    const newInput = document.createElement('input');
    newInput.type = 'email';
    newInput.name = 'members'; // Use the same name for form submission as an array
    newInput.placeholder = 'Email of member';
    newInput.classList.add('members');
    // Find the Add button
    const addButton = document.getElementById('add-btn');

    // Insert the new input field above the Add button
    form.insertBefore(newInput, addButton);
}
