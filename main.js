"use strict";
// script.ts
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggleSkillsButton');
    const skillsSection = document.getElementById('skillsSection');
    toggleSkillsButton.addEventListener('click', () => {
        // Toggle the visibility of the skills section
        if (skillsSection.classList.contains('hidden')) {
            skillsSection.classList.remove('hidden'); // Show the skills section
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.classList.add('hidden'); // Hide the skills section
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
});
