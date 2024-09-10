// script.ts

document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
    const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

    toggleSkillsButton.addEventListener('click', () => {
        // Toggle the visibility of the skills section
        if (skillsSection.classList.contains('hidden')) {
            skillsSection.classList.remove('hidden');  // Show the skills section
            toggleSkillsButton.textContent = 'Hide Skills';
        } else {
            skillsSection.classList.add('hidden');  // Hide the skills section
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
});

