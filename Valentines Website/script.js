document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    let initialContainerHTML;

    function initializeMainMenu() {
        // Remove any existing heart animations
        const existingAnimation = document.querySelector('.heart-animation');
        if (existingAnimation) {
            existingAnimation.remove();
        }

        // Set the initial content
        container.innerHTML = initialContainerHTML;

        // Re-attach event listeners since they are lost when innerHTML is reset
        const yesButton = document.getElementById('yesButton');
        const noButton = document.getElementById('noButton');

        yesButton.addEventListener('click', showSuccessScreen);
        noButton.addEventListener('mouseover', moveNoButton);
        noButton.addEventListener('click', moveNoButton); // Also move on click for mobile
    }

    function moveNoButton() {
        const noButton = document.getElementById('noButton');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
        noButton.style.transform = 'translate(0, 0)';
    }

    function showSuccessScreen() {
        container.innerHTML = '';

        const message = document.createElement('div');
        message.classList.add('valentine-message');
        message.innerHTML = 'I loved you the day I met you. I love you today. And I will love you for the rest of my life.';
        container.appendChild(message);

        const backButton = document.createElement('button');
        backButton.id = 'backButton';
        backButton.textContent = 'Back to Menu';
        container.appendChild(backButton);

        backButton.addEventListener('click', initializeMainMenu);

        createHeartAnimation();
    }

    function createHeartAnimation() {
        const heartAnimationDiv = document.createElement('div');
        heartAnimationDiv.classList.add('heart-animation');
        document.body.appendChild(heartAnimationDiv);

        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            heartAnimationDiv.appendChild(heart);
        }
    }

    // Save the initial state and set up the first run
    initialContainerHTML = container.innerHTML;
    initializeMainMenu();
});