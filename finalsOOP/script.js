const updateBtn = document.getElementById('update-about-btn');
const modal = document.getElementById('about-modal');
const cancelBtn = document.getElementById('cancel-about-btn');
const saveBtn = document.getElementById('save-about-btn');
const textarea = document.getElementById('about-textarea');
const aboutText = document.getElementById('about-text');
const modalMessage = document.getElementById('modal-message');

// Open modal and load current text
updateBtn.addEventListener('click', () => {
    textarea.value = aboutText.innerText.trim();
    modal.classList.remove('hidden');
    modalMessage.classList.add('hidden');
});

// Cancel button
cancelBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

saveBtn.addEventListener('click', () => {
    const content = textarea.value.trim();
    if(content.length === 0){
        modalMessage.textContent = "Content cannot be empty.";
        modalMessage.classList.remove('hidden');
        return;
    }

    // Update page
    aboutText.innerText = content;

    // Send content to PHP to save in about_me.txt
    fetch('save_about.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'content=' + encodeURIComponent(content)
    })
    .then(response => response.text())
    .then(result => {
        if(result.includes('success')){
            console.log('Saved successfully!');
        } else {
            console.error('Save failed:', result);
        }
    })
    .catch(err => console.error('Error:', err));

    // Close modal
    modal.classList.add('hidden');
});
