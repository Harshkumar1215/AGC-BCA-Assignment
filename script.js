// ============================================
// BCA Previous Year Assignments — Script
// ============================================

// --- Assignment Data ---
const courseOutcomes = {
    CO1: "Design algorithms and choose the right data type and statements for programs.",
    CO2: "Learn the implementation of simple 'C' program, operators and Console I/O function.",
    CO3: "Learning concepts of control statements by writing program control the sequence of the program and give logical outputs.",
    CO4: "Understand the declaration and implementation of arrays and functions.",
    CO5: "Learn the structures declaration, initialization and implementation.",
    CO6: "Understand the file operations, file pointers and importance of pre-processor directives."
};

// Assignment 1 questions (same across all years)
const assignment1 = {
    sectionA: [
        { q: 1, text: "Define the term Pseudo code.", co: "CO1" },
        { q: 2, text: "Illustrate the meaning of Expression in C language.", co: "CO1" },
        { q: 3, text: "Explain the character set of C language.", co: "CO1" },
        { q: 4, text: "Simplify the meaning of Identifiers.", co: "CO1" },
        { q: 5, text: "Define the term constant and variable.", co: "CO1" },
        { q: 6, text: "List the various steps for problem analysis.", co: "CO1" },
        { q: 7, text: "Define keywords? Give example.", co: "CO1" },
        { q: 8, text: "Difference between Decision table and Decision tree.", co: "CO1" },
        { q: 9, text: "Elaborate the term Symbolic Constants with an example?", co: "CO1" },
        { q: 10, text: "Differentiate between an algorithm and a flowchart?", co: "CO1" },
        { q: 11, text: "List out the various logical operators.", co: "CO2" },
        { q: 12, text: "Differentiate between Formatted and Unformatted I/O functions.", co: "CO2" },
        { q: 13, text: "Explain the function of getch() and putchar() with example.", co: "CO2" },
        { q: 14, text: "Specify the use of scanf() function?", co: "CO2" },
        { q: 15, text: "Describe library functions?", co: "CO2" },
        { q: 16, text: "Difference between assignment operator (=) and equality operator (==)?", co: "CO2" },
        { q: 17, text: "Compare the prefix and postfix operator?", co: "CO2" },
        { q: 18, text: "Illustrate the term operator and operand?", co: "CO2" },
        { q: 19, text: "Describe unary operators? Give example.", co: "CO2" },
        { q: 20, text: "Write the difference between getch() and puts()?", co: "CO2" },
        { q: 21, text: "Differentiate between while and do while loop.", co: "CO3" },
        { q: 22, text: "Define Strings? How we can traverse a string?", co: "CO3" },
        { q: 23, text: "Give the syntax of if-else statement.", co: "CO3" },
        { q: 24, text: "Write the concept of initialization and declaration of strings?", co: "CO3" },
        { q: 25, text: "Define String with example.", co: "CO3" },
        { q: 26, text: "Mention the use of 'break' and 'continue' statements.", co: "CO3" },
        { q: 27, text: "Name three string handling functions available in C.", co: "CO3" },
        { q: 28, text: "Describe the difference between Static variable and Automatic variable.", co: "CO3" },
        { q: 29, text: "Specify the syntax used for 'for' statement.", co: "CO3" },
        { q: 30, text: "Describe the usage of storage classes?", co: "CO3" }
    ],
    sectionB: [
        { q: 31, text: "Define flowchart? Demonstrate the various symbol used in flowchart? Explain with example.", co: "CO1" },
        { q: 32, text: "Explain the data types in C programming?", co: "CO1" },
        { q: 33, text: "Elaborate all types of constants?", co: "CO1" },
        { q: 34, text: "Define identifier and also write the rules of identifier.", co: "CO1" },
        { q: 35, text: "State the use of algorithms in developing a program? How is it different from flowchart?", co: "CO1" },
        { q: 36, text: "Define the following terms with suitable example: i. Expressions ii. Keywords", co: "CO1" },
        { q: 37, text: "Describe the different operators used in C with example?", co: "CO2" },
        { q: 38, text: "Write the Formatted functions with example?", co: "CO2" },
        { q: 39, text: "Discuss the Conditional operator or explain Ternary Operator with example?", co: "CO2" },
        { q: 40, text: "Differentiate between relational and logical operators used in C?", co: "CO2" },
        { q: 41, text: "Describe the five arithmetic operators in C?", co: "CO2" },
        { q: 42, text: "Explain Unformatted I/O functions with example?", co: "CO2" },
        { q: 43, text: "Explain the various decision making statements in C language.", co: "CO3" },
        { q: 44, text: "Demonstrate the various storage classes in C programming with an example?", co: "CO3" },
        { q: 45, text: "Paraphrase the loop control statements or iteration statements of C in detail.", co: "CO3" },
        { q: 46, text: "Explain the operations performed on string with an example?", co: "CO3" },
        { q: 47, text: "Define the Switch-Case statement with example?", co: "CO3" },
        { q: 48, text: "Write the Go to and continue statement?", co: "CO3" }
    ]
};

// Assignment 2 questions (same across all years)
const assignment2 = {
    sectionA: [
        { q: 1, text: "What is an array? How to declare and initialize an array?", co: "CO4" },
        { q: 2, text: "Explain the concept of functions in C with example.", co: "CO4" },
        { q: 3, text: "What is recursion? Give an example.", co: "CO4" },
        { q: 4, text: "How to pass an array to a function?", co: "CO4" },
        { q: 5, text: "Explain the difference between call by value and call by reference.", co: "CO4" },
        { q: 6, text: "Write a program to find factorial using recursion.", co: "CO4" },
        { q: 7, text: "Explain the concept of multidimensional array with example.", co: "CO4" },
        { q: 8, text: "What are the advantages of using functions in C?", co: "CO4" },
        { q: 9, text: "Explain the scope of variables in C.", co: "CO4" },
        { q: 10, text: "What is the difference between array and pointer?", co: "CO4" },
        { q: 11, text: "Define structure. Write the syntax for structure declaration with an example.", co: "CO5" },
        { q: 12, text: "What do you mean by unions? How memory is allocated to unions?", co: "CO5" },
        { q: 13, text: "Mention the difference between structure and union with example.", co: "CO5" },
        { q: 14, text: "List the two ways of passing structure to a function.", co: "CO5" },
        { q: 15, text: "Specify the different ways to access members in a structure.", co: "CO5" },
        { q: 16, text: "Write the significance of structure and union in C.", co: "CO5" },
        { q: 17, text: "Demonstrate the actual parameters and formal parameters? Illustrate with example.", co: "CO5" },
        { q: 18, text: "Explain the concept of pointers in C.", co: "CO5" },
        { q: 19, text: "How are pointers declared and initialized?", co: "CO5" },
        { q: 20, text: "Write notes on pointers and its uses.", co: "CO5" },
        { q: 21, text: "Explain the following file functions with example: a) Fseek() b) Fopen() c) Fclose() d) Ftell()", co: "CO6" },
        { q: 22, text: "Write notes on processing a data file.", co: "CO6" },
        { q: 23, text: "Explain the operating modes of files.", co: "CO6" },
        { q: 24, text: "Write the various file handling functions in C language.", co: "CO6" },
        { q: 25, text: "List the various types of errors occur during file operations.", co: "CO6" },
        { q: 26, text: "Explain the concept of file pointer in C.", co: "CO6" },
        { q: 27, text: "How to read data from a file in C?", co: "CO6" },
        { q: 28, text: "How to write data to a file in C?", co: "CO6" },
        { q: 29, text: "What is the difference between text file and binary file?", co: "CO6" },
        { q: 30, text: "Explain the importance of pre-processor directives in C.", co: "CO6" }
    ],
    sectionB: [
        { q: 31, text: "Write a program to add two matrices using arrays.", co: "CO4" },
        { q: 32, text: "Write a program to find the sum of n numbers using function.", co: "CO4" },
        { q: 33, text: "Write a program to reverse a string using recursion.", co: "CO4" },
        { q: 34, text: "Write a program to find the largest element in an array.", co: "CO4" },
        { q: 35, text: "Write a program to calculate factorial using function.", co: "CO4" },
        { q: 36, text: "Write a program to sort an array in ascending order.", co: "CO4" },
        { q: 37, text: "Write a program to store and display employee information using structure.", co: "CO5" },
        { q: 38, text: "Write a program to demonstrate the use of union.", co: "CO5" },
        { q: 39, text: "Write a program to pass structure to a function.", co: "CO5" },
        { q: 40, text: "Write a program to demonstrate the use of pointers.", co: "CO5" },
        { q: 41, text: "Write a program to swap two numbers using pointers.", co: "CO5" },
        { q: 42, text: "Write a program to demonstrate pointer to structure.", co: "CO5" },
        { q: 43, text: "Write a program to read data from a file and display it on screen.", co: "CO6" },
        { q: 44, text: "Write a program to save employee details in a file using file handling.", co: "CO6" },
        { q: 45, text: "Write a program to append data to an existing file.", co: "CO6" },
        { q: 46, text: "Write a program to copy data from one file to another.", co: "CO6" },
        { q: 47, text: "Write a program to count the number of characters, words and lines in a file.", co: "CO6" },
        { q: 48, text: "Write a program to demonstrate fseek() and ftell() functions.", co: "CO6" }
    ]
};

// --- State ---
let state = {
    year: "2022",
    assignment: "1",
    section: "all",
    activeCO: null,
    searchTerm: ""
};

// --- DOM Elements ---
const yearTabs = document.querySelectorAll('.year-tab');
const assignTabs = document.querySelectorAll('.assign-tab');
const sectionChips = document.querySelectorAll('#sectionChips .chip');
const searchInput = document.getElementById('searchInput');
const questionsContainer = document.getElementById('questionsContainer');
const noResults = document.getElementById('noResults');
const infoTitle = document.getElementById('infoTitle');
const metaYear = document.getElementById('metaYear');
const coChips = document.getElementById('coChips');
const coGrid = document.getElementById('coGrid');
const filterBar = document.getElementById('filterBar');
const backToTop = document.getElementById('backToTop');
const bgParticles = document.getElementById('bgParticles');

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    buildCOChips();
    buildCOGrid();
    render();
    setupEventListeners();
});

// --- Particles ---
function createParticles() {
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 12) + 's';
        p.style.animationDelay = Math.random() * 10 + 's';
        p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
        bgParticles.appendChild(p);
    }
}

// --- Build CO chips ---
function buildCOChips() {
    const cos = ['CO1', 'CO2', 'CO3', 'CO4', 'CO5', 'CO6'];
    coChips.innerHTML = cos.map(co => 
        `<button class="co-chip" data-co="${co}">${co}</button>`
    ).join('');
}

// --- Build CO Grid ---
function buildCOGrid() {
    const cos = Object.entries(courseOutcomes);
    coGrid.innerHTML = cos.map(([key, desc], i) => `
        <div class="co-card">
            <div class="co-badge co${i+1}-badge">${key}</div>
            <div class="co-card-text">${desc}</div>
        </div>
    `).join('');
}

// --- Event Listeners ---
function setupEventListeners() {
    // Year tabs
    yearTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            yearTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.year = tab.dataset.year;
            render();
        });
    });

    // Assignment tabs
    assignTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            assignTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.assignment = tab.dataset.assign;
            // Reset CO filter when switching assignment
            state.activeCO = null;
            document.querySelectorAll('.co-chip').forEach(c => c.classList.remove('active'));
            render();
        });
    });

    // Section chips
    sectionChips.forEach(chip => {
        chip.addEventListener('click', () => {
            sectionChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            state.section = chip.dataset.section;
            render();
        });
    });

    // CO chips
    coChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.co-chip');
        if (!chip) return;
        const co = chip.dataset.co;
        if (state.activeCO === co) {
            state.activeCO = null;
            chip.classList.remove('active');
        } else {
            document.querySelectorAll('.co-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            state.activeCO = co;
        }
        render();
    });

    // Search
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            state.searchTerm = searchInput.value.trim().toLowerCase();
            render();
        }, 200);
    });

    // Scroll effects
    window.addEventListener('scroll', () => {
        // Filter bar shadow
        filterBar.classList.toggle('scrolled', window.scrollY > 100);
        // Back to top
        backToTop.classList.toggle('visible', window.scrollY > 500);
    });

    // Back to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Render ---
function render() {
    const data = state.assignment === "1" ? assignment1 : assignment2;

    // Update info card
    infoTitle.textContent = `Assignment ${state.assignment}`;
    metaYear.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${state.year}`;

    // Filter questions
    let showA = state.section === 'all' || state.section === 'A';
    let showB = state.section === 'all' || state.section === 'B';

    let questionsA = showA ? data.sectionA : [];
    let questionsB = showB ? data.sectionB : [];

    // CO filter
    if (state.activeCO) {
        questionsA = questionsA.filter(q => q.co === state.activeCO);
        questionsB = questionsB.filter(q => q.co === state.activeCO);
    }

    // Search filter
    if (state.searchTerm) {
        questionsA = questionsA.filter(q => q.text.toLowerCase().includes(state.searchTerm));
        questionsB = questionsB.filter(q => q.text.toLowerCase().includes(state.searchTerm));
    }

    const totalResults = questionsA.length + questionsB.length;

    if (totalResults === 0) {
        questionsContainer.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    let html = '';

    if (questionsA.length > 0) {
        html += renderSectionHeader('Section A', '2 Marks Each');
        html += questionsA.map(q => renderQuestion(q, 'A', 2)).join('');
    }

    if (questionsB.length > 0) {
        html += renderSectionHeader('Section B', '4 Marks Each');
        html += questionsB.map(q => renderQuestion(q, 'B', 4)).join('');
    }

    questionsContainer.innerHTML = html;
}

function renderSectionHeader(title, subtitle) {
    return `
        <div class="section-header">
            <span class="section-header-text">${title} — ${subtitle}</span>
            <div class="section-header-line"></div>
        </div>
    `;
}

function renderQuestion(q, section, marks) {
    const coNum = parseInt(q.co.replace('CO', ''));
    let text = q.text;

    // Highlight search term
    if (state.searchTerm) {
        const regex = new RegExp(`(${escapeRegex(state.searchTerm)})`, 'gi');
        text = text.replace(regex, '<mark>$1</mark>');
    }

    return `
        <div class="question-card">
            <div class="q-number">Q${q.q}</div>
            <div class="q-content">
                <div class="q-text">${text}</div>
                <div class="q-tags">
                    <span class="q-co-tag co${coNum}-tag">${q.co}</span>
                    <span class="q-marks-tag">${marks} Marks</span>
                </div>
            </div>
        </div>
    `;
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
