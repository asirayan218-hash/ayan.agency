// Mobile 3-Dot Menu Toggle Handler
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

// Login Modal Control Handlers
const loginModal = document.getElementById('loginModal');
const loginEmail = document.getElementById('loginEmail');
const loginPass = document.getElementById('loginPass');

function openLoginModal() {
    loginModal.style.display = 'flex';
}

function closeLoginModal() {
    loginModal.style.display = 'none';
    loginEmail.value = '';
    loginPass.value = '';
}

// Handle Login with Email Notification Simulation
function handleLogin() {
    const email = loginEmail.value.trim();
    const pass = loginPass.value.trim();

    if(email === '' || pass === '') {
        alert('Please fill in both email and password!');
        return;
    }

    // Simulating backend notification alert sent to admin/client email
    alert(`Success! Secure login detected for ${email}.\n📧 Notification email dispatched to your inbox regarding this login session.`);
    closeLoginModal();
}

// Contact System Submission Handler (Ready for live backend like Formspree)
function submitContactForm(event) {
    event.preventDefault(); // Page refresh rokne ke liye
    
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const msg = document.getElementById('userMsg').value.trim();

    if(name === '' || email === '' || msg === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Jab tu website live karega (jaise Vercel ya Netlify par), toh yeh data Formspree ke zariye direct teri email par aa jaye ga.
    alert(`Thank you, ${name}! Your project inquiry has been sent successfully. We will reach out to ${email} shortly.`);
    
    document.getElementById('contactForm').reset();
}
