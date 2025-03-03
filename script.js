const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Registering the click events for all buttons
document.querySelectorAll('.filter button').forEach(button => {
    button.addEventListener('click', function() {
    const filter = this.getAttribute('data-filter');
    document.querySelectorAll('.project-card').forEach(project => {
    project.classList.remove('show');
    if (filter === 'all' || project.getAttribute('data-category') === filter) {
        project.classList.add('show');
            }
        });
    })
});

// Get the modal
var modal = document.getElementById('lightboxModal');

// Get the modal image and caption
var modalImg = document.getElementById('modalImage');
var captionText = document.getElementById('caption');

// Function to open the modal and display the clicked image
function openModal(element) {
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
    modal.setAttribute('aria-hidden', 'false');
    modalImg.setAttribute('tabindex', '0');
    modalImg.focus();

    // Trap focus inside the modal
    document.addEventListener('keydown', trapFocus);
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', trapFocus);
}

// Function to trap focus within the modal
function trapFocus(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        modal.focus();
    } else if (event.key === 'Escape') {
        closeModal();
    }
}


document.getElementById("name").addEventListener("input", validateForm);
document.getElementById("email").addEventListener("input", validateForm);
document.getElementById("message").addEventListener("input", validateForm);

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var messageError = document.getElementById("message-error");
    var submitButton = document.getElementById("submit-button");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    var isValid = true;

    if (!name) {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else if (name.length < 2) {
        nameError.textContent = "Name must be at least 2 characters long.";
        isValid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!message) {
        messageError.textContent = "Message is required.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters long.";
        isValid = false;
    }

    if (isValid) {
        submitButton.disabled = false;
        submitButton.classList.add("enabled");
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove("enabled");
    }
    
    return isValid;
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  if (validateForm()) {
      document.getElementById("contact-form").style.display = "none";
      document.getElementById("success-message").style.display = "block";
      confetti();
  }
});

function confetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

