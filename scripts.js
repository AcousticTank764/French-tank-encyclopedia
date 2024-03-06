const nightModeToggle = document.getElementById('night-mode');

// Vérifier si le mode nuit est activé dans le localStorage au chargement de la page
if (localStorage.getItem('nightMode') === 'true') {
    nightModeToggle.checked = true;
    activateNightMode();
}

// Fonction pour activer le mode nuit
function activateNightMode() {
    document.body.classList.add('night-mode');
    // Enregistrer l'état du mode nuit dans le localStorage
    localStorage.setItem('nightMode', 'true');
}

// Fonction pour désactiver le mode nuit
function deactivateNightMode() {
    document.body.classList.remove('night-mode');
    // Supprimer l'état du mode nuit dans le localStorage
    localStorage.removeItem('nightMode');
}

// Écouter les changements de la case à cocher
nightModeToggle.addEventListener('change', () => {
    if (nightModeToggle.checked) {
        activateNightMode();
    } else {
        deactivateNightMode();
    }
});
