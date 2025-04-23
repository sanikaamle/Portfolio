const roadmapTab = document.getElementById('roadmap-tab');
const aboutTab = document.getElementById('about-tab');
const roadmapSection = document.getElementById('roadmap-section');
const aboutSection = document.getElementById('about-section');
const toggleModeButton = document.getElementById('toggle-mode');
const milestones = document.querySelectorAll('.milestone');
const car = document.querySelector('.car');

// Tab Switching
roadmapTab.addEventListener('click', () => {
  roadmapSection.classList.remove('hidden');
  aboutSection.classList.add('hidden');
});

aboutTab.addEventListener('click', () => {
  aboutSection.classList.remove('hidden');
  roadmapSection.classList.add('hidden');
});

// Color Mode Toggle
toggleModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Car Movement
milestones.forEach((milestone, index) => {
  milestone.addEventListener('click', () => {
    const leftPosition = milestone.offsetLeft - 25;
    car.style.left = `${leftPosition}px`;
    alert(milestone.dataset.content); // Show description
  });
});

// Dark Mode Styling
document.body.classList.add('dark-mode');
