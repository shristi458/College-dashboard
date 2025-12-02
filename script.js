// ============================
// SIDEBAR ACTIVE BUTTON CODE
// ============================

// सभी sidebar buttons select करना
const menuItems = document.querySelectorAll('.sidebar ul li');

// हर item पर click event
menuItems.forEach(item => {
    item.addEventListener('click', () => {

        // पहले सभी से active class हटाओ
        menuItems.forEach(li => li.classList.remove('active'));

        // जिस पर click किया है उस पर active class जोड़ो
        item.classList.add('active');
    });
});



// ============================
// SECTION SWITCHING CODE
// (Optional: अगर future में अलग page show करना है)
// ============================

// Example: sections
const dashboardSection = document.getElementById("dashboard");
const studentSection = document.getElementById("students");
const teacherSection = document.getElementById("teachers");
const courseSection = document.getElementById("courses");
const attendanceSection = document.getElementById("attendance");


// सभी sections hide करने का function
function hideAllSections() {
    const allSections = document.querySelectorAll(".section");
    allSections.forEach(sec => sec.style.display = "none");
}

// Sidebar button click पर right side pages खुलेंगे
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const clicked = item.innerText.trim();  // which menu clicked
        
        hideAllSections();

        if (clicked === "Dashboard") {
            dashboardSection.style.display = "block";
        } 
        else if (clicked === "Students") {
            studentSection.style.display = "block";
        } 
        else if (clicked === "Teachers") {
            teacherSection.style.display = "block";
        } 
        else if (clicked === "Courses") {
            courseSection.style.display = "block";
        } 
        else if (clicked === "Attendance") {
            attendanceSection.style.display = "block";
        }
    });
});


// Default: पहली बार dashboard दिखे
hideAllSections();
if (dashboardSection) {
    dashboardSection.style.display = "block";
}