function toggleDarkMode() {
    const body = document.body;
    const checkbox = document.getElementById("ch1");

    body.classList.toggle("dark-mode", checkbox.checked);
    localStorage.setItem("darkMode", checkbox.checked);

    const dropdownCheckbox = document.getElementById('dropdownMenu');
    const dropdownCheckboxState = localStorage.getItem('dropdownCheckboxState');

    if (dropdownCheckboxState === 'checked') {
        dropdownCheckbox.checked = true;
    }

    dropdownCheckbox.addEventListener('change', function () {
        if (dropdownCheckbox.checked) {
            localStorage.setItem('dropdownCheckboxState', 'checked');
        } else {
            localStorage.removeItem('dropdownCheckboxState');
        }
    });
}

function loadDarkModeState() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    const checkbox = document.getElementById("ch1");
    const body = document.body;

    if (isDarkMode) {
        body.classList.add("dark-mode");
        checkbox.checked = true;
    }

    const dropdownCheckbox = document.getElementById('dropdownMenu');
    const dropdownCheckboxState = localStorage.getItem('dropdownCheckboxState');

    if (dropdownCheckboxState === 'checked') {
        dropdownCheckbox.checked = true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadDarkModeState();
    toggleDarkMode();
});
