document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('timeline-track');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');

    // State
    let currentTypeFilter = 'all';  // PRIMARY: Type filter
    let currentGroupMode = 'month'; // SECONDARY: Time grouping

    // Initial Render
    function init() {
        // Type Filter Controls (Primary)
        const typeBtns = document.querySelectorAll('.type-btn');
        typeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                typeBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentTypeFilter = e.target.dataset.type;
                renderTimeline();
            });
        });

        // Time Grouping Controls (Secondary)
        const timeBtns = document.querySelectorAll('.time-btn');
        timeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                timeBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentGroupMode = e.target.dataset.group;
                renderTimeline();
            });
        });

        renderTimeline();
    }

    // Get filtered data based on type selection
    function getFilteredData() {
        let data = [...AI_TIMELINE_DATA];
        if (currentTypeFilter !== 'all') {
            data = data.filter(item => item.type === currentTypeFilter);
        }
        return data.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    function renderTimeline() {
        track.innerHTML = '';
        const quickNavList = document.getElementById('quick-nav-list');
        if (quickNavList) quickNavList.innerHTML = '';

        // Get filtered and sorted data based on type selection
        const sortedData = getFilteredData();

        if (currentGroupMode === 'all') {
            // Flat list with subtle month dividers
            renderItemsWithDividers(sortedData);
        } else {
            const groups = groupData(sortedData, currentGroupMode);
            const groupIds = [];

            Object.entries(groups).forEach(([header, items], index) => {
                const groupId = `group-${index}`;

                // Render Group Header
                const headerEl = document.createElement('div');
                headerEl.className = 'group-header';
                headerEl.id = groupId;
                headerEl.textContent = header;
                track.appendChild(headerEl);

                // Render Items in this group
                renderItems(items);

                // Add to Nav
                groupIds.push({ id: groupId, label: header });
            });

            if (quickNavList) {
                renderQuickNav(groupIds);
            }
        }
    }

    function renderQuickNav(groupIds) {
        const list = document.getElementById('quick-nav-list');

        groupIds.forEach(group => {
            const btn = document.createElement('button');
            btn.className = 'nav-pill';
            btn.textContent = simplifyLabel(group.label);

            btn.addEventListener('click', () => {
                // Step 1: Scroll to top first (instant)
                window.scrollTo({ top: 0, behavior: 'instant' });

                // Step 2: After a tiny delay, scroll to target
                setTimeout(() => {
                    const target = document.getElementById(group.id);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 50);
            });

            list.appendChild(btn);
        });
    }

    function simplifyLabel(label) {
        // "January 2025" -> "Jan"
        // "Q1 2025" -> "Q1"
        // "H1 2025" -> "H1"
        return label.replace(' 2025', '').substring(0, 3);
    }

    function groupData(data, mode) {
        const groups = {};
        data.forEach(item => {
            const date = new Date(item.date);
            let key = '';

            if (mode === 'month') {
                key = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
            } else if (mode === 'quarter') {
                const q = Math.floor(date.getMonth() / 3) + 1;
                key = `Q${q} ${date.getFullYear()}`;
            } else if (mode === 'half') {
                const h = date.getMonth() < 6 ? 'H1' : 'H2';
                key = `${h} ${date.getFullYear()}`;
            }

            if (!groups[key]) groups[key] = [];
            groups[key].push(item);
        });
        return groups;
    }

    // Render items with subtle month dividers (for 'All' mode)
    function renderItemsWithDividers(items) {
        let lastMonth = null;

        items.forEach(item => {
            const itemDate = new Date(item.date);
            const itemMonth = itemDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

            // Insert divider when month changes
            if (lastMonth !== null && lastMonth !== itemMonth) {
                const divider = document.createElement('div');
                divider.className = 'month-divider';
                divider.innerHTML = `<span>${itemMonth}</span>`;
                track.appendChild(divider);
            }
            lastMonth = itemMonth;

            // Render the item
            renderSingleItem(item);
        });
    }

    // Render a single item (reusable)
    function renderSingleItem(item) {
        const row = document.createElement('div');
        row.className = `event-row type-${item.type}`;
        row.dataset.id = item.id;

        const marker = document.createElement('div');
        marker.className = 'event-marker';

        const card = document.createElement('div');
        card.className = 'event-card';

        card.innerHTML = `
            <div class="card-header">
                <span class="tag ${item.type}">${item.type}</span>
                <span class="card-date">${formatDate(item.date)}</span>
            </div>
            <h3 class="event-title">${item.title}</h3>
            <p class="event-desc">${item.description}</p>
        `;

        card.addEventListener('click', () => openModal(item));

        row.appendChild(marker);
        row.appendChild(card);
        track.appendChild(row);
    }

    function renderItems(items) {
        items.forEach(item => renderSingleItem(item));
    }

    function openModal(item) {
        const typeColor = getTypeColor(item.type);

        modalBody.innerHTML = `
            <div class="card-header">
                <span class="tag ${item.type}">${item.type}</span>
                <span class="card-date" style="color: var(--text-tertiary);">${formatDate(item.date)}</span>
            </div>
            <h2 style="font-family: var(--font-heading); margin-bottom: 1rem; margin-top:0.5rem; color: ${typeColor};">${item.title}</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6;">${item.description}</p>
            
            ${item.metrics ? `
                <div style="margin-top: 1.5rem; background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px; border-left: 2px solid ${typeColor};">
                    <h4 style="color: var(--text-tertiary); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.75rem;">Benchmarks</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem;">
                        ${Object.entries(item.metrics).map(([key, val]) => `
                            <div>
                                <div style="color: ${typeColor}; font-weight: bold; font-size: 1.1rem;">${val}</div>
                                <div style="color: var(--text-tertiary); font-size: 0.8rem;">${key}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${item.links && item.links.length > 0 ? `
                <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.8rem;">
                    ${item.links.map(link => `
                        <a href="${link.url}" target="_blank" style="color: ${typeColor}; text-decoration: none; border: 1px solid rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 20px; font-size: 0.85rem; transition: all 0.2s;">
                            ${link.text} &nearr;
                        </a>
                    `).join('')}
                </div>
            ` : ''}
        `;
        modalOverlay.classList.remove('hidden');
    }

    modalClose.addEventListener('click', () => {
        modalOverlay.classList.add('hidden');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.add('hidden');
    });

    // Helper to get color for modal dynamic styling (sync with CSS)
    function getTypeColor(type) {
        const colors = {
            'model': '#818cf8', // Indigo
            'image': '#fb923c', // Orange
            'video': '#f43f5e', // Rose
            'hardware': '#f472b6', // Pink
            'tool': '#22d3ee', // Cyan
            'news': '#c084fc', // Purple
            'benchmark': '#4ade80' // Green
        };
        return colors[type] || '#ffffff';
    }

    function formatDate(dateStr) {
        const options = { month: 'short', day: 'numeric' }; // Concise date for mobile
        return new Date(dateStr).toLocaleDateString('en-US', options);
    }

    init();
});
