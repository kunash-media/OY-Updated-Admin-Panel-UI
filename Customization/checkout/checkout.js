document.addEventListener('DOMContentLoaded', function() {
    // Toggle left navigation
    document.getElementById('menuIcon').addEventListener('click', function() {
        const leftNav = document.getElementById('leftNav');
        leftNav.style.display = leftNav.style.display === 'block' ? 'none' : 'block';
        document.querySelector('.main-content').classList.toggle('left-nav-active');
    });

    // Profile dropdown toggle
    document.getElementById('profileIcon').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click from bubbling up
        const menu = document.getElementById('profileMenu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Close profile dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.profile-dropdown')) {
            document.getElementById('profileMenu').style.display = 'none';
        }
    });

    // Toggle submenus in left navigation
    document.getElementById('onlineStoreToggle').addEventListener('click', function() {
        const sub = document.getElementById('onlineStoreSub');
        sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('catalogToggle').addEventListener('click', function() {
        const sub = document.getElementById('catalogSub');
        sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('customersToggle').addEventListener('click', function() {
        const sub = document.getElementById('customersSub');
        sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    });

    // Add these new event listeners for the additional dropdowns
    document.getElementById('storeCustomizationToggle').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click from bubbling up
        const sub = document.getElementById('storeCustomizationSub');
        sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('settingsToggle').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click from bubbling up
        const sub = document.getElementById('settingsSub');
        sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    });

    // NEW: Update button functionality
    document.querySelector('.btn-success').addEventListener('click', function() {
        // Get all form values
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            altPhone: document.getElementById('altPhone').value,
            street: document.getElementById('street').value,
            pincode: document.getElementById('pincode').value,
            city: document.getElementById('city').value,
            country: document.getElementById('country').value,
            cardNumber: document.getElementById('cardNumber').value,
            cardName: document.getElementById('cardName').value,
            expiry: document.getElementById('expiry').value,
            cvv: document.getElementById('cvv').value
        };

        // Validate that all fields are filled
        let isValid = true;
        for (let key in formData) {
            if (!formData[key].trim()) {
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            showPopup('Please fill in all fields before updating.', 'error');
            return;
        }

        // Simulate data update process
        showPopup('Data updated successfully!', 'success');

        // Store the updated data (in a real application, this would be sent to a server)
        localStorage.setItem('checkoutData', JSON.stringify(formData));
    });

    // Function to show popup message
    function showPopup(message, type) {
        // Create popup element
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: ${type === 'success' ? '#d4edda' : '#f8d7da'};
            color: ${type === 'success' ? '#155724' : '#721c24'};
            border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
            border-radius: 8px;
            padding: 20px 30px;
            font-size: 16px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            text-align: center;
            min-width: 300px;
            font-family: 'Open Sans', sans-serif;
        `;

        popup.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}" style="font-size: 20px;"></i>
                <span>${message}</span>
            </div>
        `;

        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9998;
        `;

        // Add elements to page
        document.body.appendChild(overlay);
        document.body.appendChild(popup);

        // Remove popup after 3 seconds
        setTimeout(() => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
        }, 3000);

        // Allow clicking overlay to close popup
        overlay.addEventListener('click', () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
        });
    }

    // Load saved data on page load (if any)
    const savedData = localStorage.getItem('checkoutData');
    if (savedData) {
        const data = JSON.parse(savedData);
        for (let key in data) {
            const element = document.getElementById(key);
            if (element) {
                element.value = data[key];
            }
        }
    }
});