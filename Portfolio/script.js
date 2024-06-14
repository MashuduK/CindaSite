// Create icons and add them to the container
const iconContainer = document.querySelector('.icon-container');
for (let i = 0; i < 20; i++) { // Adjust the number of icons as needed
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.style.top = `${Math.random() * 100}%`;
    icon.style.left = `${Math.random() * 100}%`;
    icon.style.animationDelay = `${Math.random() * 5}s`;
}