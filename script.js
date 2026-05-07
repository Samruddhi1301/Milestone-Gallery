/**
 * SAMRUDDHI DESHMUKH - DATA ENGINE
 * Restored Registry with 12 Certificates
 */

const certificateRegistry = [
    { name: " Front-End Development Intern", provider: "Cognifyz Technologies", year: "Jan 2026", file: "assets/cognifyz.PNG" },
    { name: "Google Cloud Generative AI Internship", provider: "Google Cloud", year: "July 2025", file: "assets/Google Cloud Generative AI internship.PNG" },
    { name: "Crafting Precision Prompts with Generative AI", provider: "IBM SkillsBuild ", year: "June 2025", file: "assets/Crafting Precision Prompts with Generative AI.PNG" },
    { name: "Introduction to DevOps Tools", provider: "simplilearn", year: "April 2025", file: "assets/Introduction to DevOps Tools.PNG" },
    { name: "Python 3.4.3 Training", provider: "Spoken Tutorial Project, IIT Bombay", year: "Sept 2024", file: "assets/Python 3.4.3 Training.PNG" },
    { name: "React & JavaScript Development", provider: "Udemy", year: " May2024", file: "assets/React & JavaScript Development.PNG" },
    { name: "Bootstrap Training", provider: "Spoken Tutorial Project, IIT Bombay", year: "March 2024", file: "assets/Bootstrap Training.PNG" },
    { name: "Project Management", provider: "Great Learning", year: "Feb 2024", file: "assets/project management.PNG" },
    { name: "Generative AI and ChatGPT", provider: "ExcelR ", year: " Dec 2023 ", file: "assets/Gen ai.PNG" },
    { name: "HTML Training", provider: "Spoken Tutorial Project, IIT Bombay", year: "Dec 2023", file: "assets/HTML Training.PNG" },
    { name: "Dynamic Programing", provider: "Great Learning", year: " Nov 2023", file: "assets/Dynamic Programing.PNG" },
    { name: "Build a Full Website using WordPress", provider: " Coursera", year: " Oct 2023", file: "assets/Build a Full Website using WordPress.PNG" }
];
function initializeWiseVault() {
    const certGrid = document.getElementById('cert-render-engine');

    certificateRegistry.forEach(c => {
        const certHtml = `
            <div class="wise-cert-card">
                <div class="cert-info">
                    <h3>${c.name}</h3>
                    <p>Verified by <strong>${c.provider}</strong> • Completed ${c.year}</p>
                </div>
                <div class="image-container-720">
                    <img src="${c.file}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/720x500?text=Certificate+Preview'">
                </div>
            </div>
        `;
        certGrid.insertAdjacentHTML('beforeend', certHtml);
    });
    
    console.log("Vault Synchronized: 12 Certificates Loaded.");
}

window.addEventListener('load', initializeWiseVault);
