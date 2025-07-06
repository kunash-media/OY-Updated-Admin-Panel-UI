document.getElementById('password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    
    // Hide previous messages
    errorMessage.classList.add('hidden');
    successMessage.classList.add('hidden');
    
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.classList.remove('hidden');
        return;
    }
    
    // Validate password length
    if (newPassword.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        errorMessage.classList.remove('hidden');
        return;
    }
    
    // Check if passwords match
    if (newPassword !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match. Please try again.';
        errorMessage.classList.remove('hidden');
        return;
    }
    
    // Store the updated password (in a real app, this would be sent to server)
    const userData = {
        email: email,
        password: newPassword,
        updatedAt: new Date().toISOString()
    };
    
    // Store in localStorage for demo purposes
    localStorage.setItem('userCredentials', JSON.stringify(userData));
    
    // Show success message
    successMessage.textContent = 'Password updated successfully! You can now login with your new password.';
    successMessage.classList.remove('hidden');
    
    // Clear form fields
    document.getElementById('email').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
    
    console.log('Password updated for:', email);
});