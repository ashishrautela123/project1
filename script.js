document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    

    const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');
    
    
    this.reset();
});
