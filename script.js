// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('header a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Expand and collapse project descriptions
document.querySelectorAll('.project').forEach(project => {
    const description = project.querySelector('p');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Description';
    toggleButton.classList.add('toggle-button');

    toggleButton.addEventListener('click', () => {
        description.classList.toggle('show-description');
    });

    project.appendChild(toggleButton);
});

