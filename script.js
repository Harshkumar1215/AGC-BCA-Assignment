// ============================================
// BCA Previous Year Assignments — App Logic
// (Requires data.js to be loaded first)
// ============================================

// --- State ---
let state = {
    subject: "c-language",
    year: "2022",
    assignment: "1",
    section: "all",
    activeCO: null,
    searchTerm: ""
};

// --- DOM refs ---
const $ = id => document.getElementById(id);
const subjectTabs = document.querySelectorAll('.subject-tab');
const yearTabs = document.querySelectorAll('.year-tab');
const sectionChips = document.querySelectorAll('#sectionChips .chip');
const searchInput = $('searchInput');
const questionsContainer = $('questionsContainer');
const noResults = $('noResults');
const infoTitle = $('infoTitle');
const metaSubject = $('metaSubject');
const metaYear = $('metaYear');
const coChips = $('coChips');
const coGrid = $('coGrid');
const coSubtitle = $('coSubtitle');
const filterBar = $('filterBar');
const backToTop = $('backToTop');
const bgParticles = $('bgParticles');
const assignmentTabsEl = $('assignmentTabs');

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    buildAssignmentTabs();
    buildCOChips();
    buildCOGrid();
    render();
    setupEvents();
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

// --- Build Assignment Tabs dynamically ---
function buildAssignmentTabs() {
    const subj = subjects[state.subject];
    const yearData = subj.data[state.year];
    const assignKeys = Object.keys(yearData).sort();

    assignmentTabsEl.innerHTML = assignKeys.map(k =>
        `<button class="assign-tab${k === state.assignment ? ' active' : ''}" data-assign="${k}">Assignment ${k}</button>`
    ).join('');

    // If current assignment not available, switch to first available
    if (!yearData[state.assignment]) {
        state.assignment = assignKeys[0];
        assignmentTabsEl.querySelector(`[data-assign="${state.assignment}"]`).classList.add('active');
    }

    // Re-bind events
    assignmentTabsEl.querySelectorAll('.assign-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            assignmentTabsEl.querySelectorAll('.assign-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.assignment = tab.dataset.assign;
            state.activeCO = null;
            document.querySelectorAll('.co-chip').forEach(c => c.classList.remove('active'));
            render();
        });
    });
}

// --- Build CO chips ---
function buildCOChips() {
    const subj = subjects[state.subject];
    const cos = Object.keys(subj.courseOutcomes);
    coChips.innerHTML = cos.map(co =>
        `<button class="co-chip" data-co="${co}">${co}</button>`
    ).join('');
}

// --- Build CO Grid ---
function buildCOGrid() {
    const subj = subjects[state.subject];
    const cos = Object.entries(subj.courseOutcomes);
    const label = subj.code ? `${subj.name} (${subj.code})` : subj.name;
    coSubtitle.textContent = `${label} — Learning objectives mapped to each question`;
    coGrid.innerHTML = cos.map(([key, desc], i) => `
        <div class="co-card">
            <div class="co-badge co${i + 1}-badge">${key}</div>
            <div class="co-card-text">${desc}</div>
        </div>
    `).join('');
}

// --- Events ---
function setupEvents() {
    // Subject tabs
    subjectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            subjectTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.subject = tab.dataset.subject;
            state.activeCO = null;
            state.section = "all";
            sectionChips.forEach(c => c.classList.remove('active'));
            document.querySelector('#sectionChips .chip[data-section="all"]').classList.add('active');
            buildAssignmentTabs();
            buildCOChips();
            buildCOGrid();
            render();
        });
    });

    // Year tabs
    yearTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            yearTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.year = tab.dataset.year;
            state.activeCO = null;
            document.querySelectorAll('.co-chip').forEach(c => c.classList.remove('active'));
            buildAssignmentTabs();
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

    // CO chips (delegated)
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
    let timeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            state.searchTerm = searchInput.value.trim().toLowerCase();
            render();
        }, 200);
    });

    // Scroll
    window.addEventListener('scroll', () => {
        filterBar.classList.toggle('scrolled', window.scrollY > 100);
        backToTop.classList.toggle('visible', window.scrollY > 500);
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Passage toggle (delegated)
    questionsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.q-passage-toggle');
        if (!btn) return;
        const passage = btn.previousElementSibling;
        if (passage && passage.classList.contains('q-passage')) {
            passage.classList.toggle('expanded');
            btn.textContent = passage.classList.contains('expanded') ? '▲ Show less' : '▼ Read full passage';
        }
    });
}

// --- Render ---
function render() {
    const subj = subjects[state.subject];
    const yearData = subj.data[state.year];
    if (!yearData || !yearData[state.assignment]) {
        questionsContainer.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    const data = yearData[state.assignment];
    const label = subj.code ? `${subj.name} (${subj.code})` : subj.name;

    // Update info card
    infoTitle.textContent = `Assignment ${state.assignment}`;
    metaSubject.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> ${label}`;
    metaYear.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${state.year}`;

    // Filter
    let showA = state.section === 'all' || state.section === 'A';
    let showB = state.section === 'all' || state.section === 'B';
    let qA = showA ? [...data.sectionA] : [];
    let qB = showB ? [...data.sectionB] : [];

    if (state.activeCO) {
        qA = qA.filter(q => q.co === state.activeCO);
        qB = qB.filter(q => q.co === state.activeCO);
    }

    if (state.searchTerm) {
        const t = state.searchTerm;
        const match = q => {
            if (q.text.toLowerCase().includes(t)) return true;
            if (q.passage && q.passage.toLowerCase().includes(t)) return true;
            if (q.subs && q.subs.some(s => s.toLowerCase().includes(t))) return true;
            return false;
        };
        qA = qA.filter(match);
        qB = qB.filter(match);
    }

    if (qA.length + qB.length === 0) {
        questionsContainer.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    let html = '';

    if (qA.length > 0) {
        html += sectionHeader('Section A', '2 Marks Each');
        html += qA.map(q => questionCard(q, 2)).join('');
    }
    if (qB.length > 0) {
        html += sectionHeader('Section B', '4 Marks Each');
        html += qB.map(q => questionCard(q, 4)).join('');
    }

    questionsContainer.innerHTML = html;
}

function sectionHeader(title, sub) {
    return `<div class="section-header"><span class="section-header-text">${title} — ${sub}</span><div class="section-header-line"></div></div>`;
}

function questionCard(q, marks) {
    const coNum = parseInt(q.co.replace('CO', ''));
    let text = q.text;
    const hasExtra = q.passage || q.subs;

    // Highlight search
    if (state.searchTerm) {
        const re = new RegExp(`(${escRe(state.searchTerm)})`, 'gi');
        text = text.replace(re, '<mark>$1</mark>');
    }

    if (!hasExtra) {
        return `<div class="question-card">
            <div class="q-number">Q${q.q}</div>
            <div class="q-content">
                <div class="q-text">${text}</div>
                <div class="q-tags">
                    <span class="q-co-tag co${coNum}-tag">${q.co}</span>
                    <span class="q-marks-tag">${marks} Marks</span>
                </div>
            </div>
        </div>`;
    }

    // Card with passage and/or sub-questions
    let passageHtml = '';
    if (q.passage) {
        let pText = q.passage;
        if (state.searchTerm) {
            const re = new RegExp(`(${escRe(state.searchTerm)})`, 'gi');
            pText = pText.replace(re, '<mark>$1</mark>');
        }
        passageHtml = `<div class="q-passage">${pText}</div>
            <button class="q-passage-toggle">▼ Read full passage</button>`;
    }

    let subsHtml = '';
    if (q.subs) {
        subsHtml = `<div class="q-sub-questions">${q.subs.map(s => {
            let sText = s;
            if (state.searchTerm) {
                const re = new RegExp(`(${escRe(state.searchTerm)})`, 'gi');
                sText = sText.replace(re, '<mark>$1</mark>');
            }
            return `<div class="q-sub-item">${sText}</div>`;
        }).join('')}</div>`;
    }

    return `<div class="question-card has-passage">
        <div class="q-top-row">
            <div class="q-number">Q${q.q}</div>
            <div class="q-content">
                <div class="q-text">${text}</div>
                <div class="q-tags">
                    <span class="q-co-tag co${coNum}-tag">${q.co}</span>
                    <span class="q-marks-tag">${marks} Marks</span>
                </div>
            </div>
        </div>
        ${passageHtml}
        ${subsHtml}
    </div>`;
}

function escRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
