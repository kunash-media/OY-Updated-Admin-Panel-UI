document.addEventListener('DOMContentLoaded', function() {

    // Load admin data when page loads
    loadAdminData();

    document
        .getElementById("menuIcon")
        .addEventListener("click", function() {
            const leftNav = document.getElementById("leftNav");
            leftNav.style.display =
                leftNav.style.display === "block" ? "none" : "block";
        });

    document
        .getElementById("profileIcon")
        .addEventListener("click", function(e) {
            e.stopPropagation();
            const menu = document.getElementById("profileMenu");
            menu.style.display =
                menu.style.display === "block" ? "none" : "block";
        });

    document.addEventListener("click", function() {
        document.getElementById("profileMenu").style.display = "none";
    });

    document
        .getElementById("onlineStoreToggle")
        .addEventListener("click", function() {
            const sub = document.getElementById("onlineStoreSub");
            sub.style.display =
                sub.style.display === "block" ? "none" : "block";
        });

    document
        .getElementById("catalogToggle")
        .addEventListener("click", function() {
            const sub = document.getElementById("catalogSub");
            sub.style.display =
                sub.style.display === "block" ? "none" : "block";
        });

    document
        .getElementById("customersToggle")
        .addEventListener("click", function() {
            const sub = document.getElementById("customersSub");
            sub.style.display =
                sub.style.display === "block" ? "none" : "block";
        });

         // Add these two new event listeners for the additional toggles
    document.getElementById('settingsToggle').addEventListener('click', function() {
        const sub = document.getElementById('settingsSub');
        sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('storeCustomizationToggle').addEventListener('click', function() {
        const sub = document.getElementById('storeCustomizationSub');
        sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    });


    // Update button functionality with success popup
    const updateBtn = document.getElementById('updateBtn');
    const settingsForm = document.getElementById('settingsForm');

    if (updateBtn && settingsForm) {
        updateBtn.addEventListener('click', function(e) {
            e.preventDefault();

            // Simple validation
            const inputs = settingsForm.querySelectorAll('input, select, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });

            if (isValid) {
                // Show success popup with green tick
                showSuccessPopup();
            } else {
                alert('Please fill in all fields before updating.');
            }
        });
    }

    // Function to show success popup with green tick icon
    function showSuccessPopup() {
        // Create popup overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;

        // Create popup content
        const popup = document.createElement('div');
        popup.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            max-width: 400px;
            width: 90%;
        `;

        // Create success icon
        const icon = document.createElement('div');
        icon.innerHTML = '<i class="fas fa-check-circle" style="color: #28a745; font-size: 60px; margin-bottom: 20px;"></i>';

        // Create success message
        const message = document.createElement('h4');
        message.textContent = 'Information Updated Successfully!';
        message.style.cssText = `
            color: #333;
            margin-bottom: 20px;
            font-family: 'Roboto', sans-serif;
        `;

        // Create OK button
        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.style.cssText = `
            background-color: #28a745;
            color: white;
            border: none;
            padding: 10px 30px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            font-family: 'Roboto', sans-serif;
        `;

        // Add hover effect to OK button
        okButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#218838';
        });
        okButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#28a745';
        });

        // Close popup when OK is clicked
        okButton.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });

        // Assemble popup
        popup.appendChild(icon);
        popup.appendChild(message);
        popup.appendChild(okButton);
        overlay.appendChild(popup);

        // Add to page
        document.body.appendChild(overlay);

        // Close popup when clicking outside
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    }

    // Load admin data function (placeholder - replace with your actual data loading logic)
    function loadAdminData() {
        // Add your data loading logic here
        console.log('Loading admin data...');
        // Example: You can populate form fields with saved data here
    }
});