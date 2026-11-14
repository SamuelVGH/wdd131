
// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year
document.querySelector("#currentyear").textContent = currentYear;


// Get the last modification date
const lastModified = document.lastModified;

// Display the last modification date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${lastModified}`;
