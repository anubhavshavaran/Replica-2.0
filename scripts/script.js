// Sign in button.
const signInButton = document.querySelector('#signin-btn');
signInButton.addEventListener('click', () => {
    alert('User signed in.');
});

// Start Button.
const startButtons = document.querySelectorAll('.start-btn');
for (let i = 0; i < startButtons.length; i++) {
    startButtons[i].addEventListener('click', () => {
        alert('Start button clicked.');
    });
}

// Book Call Buttons.
const bookCallButtons = document.querySelectorAll('.book-call');
const callTitles = document.querySelectorAll('.path-title h3');

for (let i = 0; i < bookCallButtons.length; i++) {
    let alertMessage = '';

    bookCallButtons[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                alertMessage = `You booked a call for ${callTitles[i].innerText}!`;
                break;
                
            case 1:
                alertMessage = `You booked a call for ${callTitles[i].innerText}!`;
                break;
                
            case 2:
                alertMessage = `You booked a call for ${callTitles[i].innerText}!`;                
                break;
        }
        alert(alertMessage);
    });
}

// Scroll to top button.
const scrollToTopButton = document.querySelector('#scroll-to-top');
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
