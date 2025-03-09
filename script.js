document.addEventListener('DOMContentLoaded', () => {
    const userRank = localStorage.getItem('userRank');
    const rankHeader = document.getElementById('user-rank-header');
    const logoutButton = document.getElementById('logout-button');

    if (userRank) {
        rankHeader.innerText = `Rank: ${userRank}`;
        rankHeader.style.color = getRankColor(userRank);
        rankHeader.style.fontWeight = 'bold';
        rankHeader.style.position = 'absolute';
        rankHeader.style.top = '10px';
        rankHeader.style.right = '20px';
        
        // Show logout button
        logoutButton.style.display = 'inline';
    } else {
        // Hide logout button if not logged in
        logoutButton.style.display = 'none';
    }

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('userRank');
        rankHeader.innerText = '';
        logoutButton.style.display = 'none';
        window.location.reload(); // Reload the page to reflect changes
    });
});

function getRankColor(rank) {
    switch (rank) {
        case 'Moderation Team': return 'red';
        case 'Administration Team': return 'green';
        case 'HR': return 'orange';
        case 'Directive Team': return 'purple';
        case 'Leadership Team': return 'yellow';
        case 'Foundership Team': return 'blue';
        case 'Co-Founder': return 'cyan';
        case 'Founder': return 'cyan';
        default : return 'gray';
    }
}
if (userRank) {
    const rankLogo = document.createElement('img');
    rankLogo.src = getRankLogo(userRank);
    rankLogo.alt = `${userRank} Logo`;
    rankLogo.style.width = '20px'; // Adjust size as needed
    rankHeader.appendChild(rankLogo);
    rankHeader.innerText = ` Rank: ${userRank}`;
    rankHeader.style.color = getRankColor(userRank);
    rankHeader.style.fontWeight = 'bold';
}

function getRankLogo(rank) {
    switch (rank) {
        case 'Moderation Team': return 'images/moderation_logo.png';
        case 'Administration Team': return 'images/administration_logo.png';
        case 'HR': return 'images/hr_logo.png';
        case 'Directive Team': return 'images/directive_logo.png';
        case 'Leadership Team': return 'images/leadership_logo.png';
        case 'Foundership Team': return 'images/foundership_logo.png';
        case 'Co-Founder': return 'images/cofounder_logo.png';
        case 'Founder': return 'images/founder_logo.png';
        default: return 'images/default_logo.png';
    }
}
document.getElementById('settings-button').addEventListener('click', function() {
    const themeDropdown = document.getElementById('theme-dropdown');
    themeDropdown.classList.toggle('hidden'); // Toggle visibility of the dropdown
});

document.getElementById('change-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme'); // Toggle dark theme class
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => link.classList.toggle('dark-theme')); // Toggle dark theme for links
});