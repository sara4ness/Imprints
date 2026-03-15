document.addEventListener('DOMContentLoaded', () => {
    // Geofencing constants
    const REQUIRED_DISTANCE_METERS = 50; // User must be within 50m to unlock

    // Coordinates simulating spots around Outernet / Denmark Street (approx 51.515, -0.130)
    // These are randomized around the center to simulate the hunt
    const centerLat = 51.5160;
    const centerLng = -0.1303;

    // Helper to generate a slight offset
    const randomOffset = () => (Math.random() - 0.5) * 0.003;

    // Array of the images
    // Array of the images
    const fragments = [
        { id: 1, src: 'images/images-new/IMG_2203 copy 2.JPG', theme: 5, starAsset: 'star-01.png', clue: 'Seek the contrast in this urban layer.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 2, src: 'images/images-new/27E24677-CD6C-4607-841D-88348D7D43F7_1_105_c.jpg', theme: 2, starAsset: 'star-06.png', clue: 'A faded fragment of the past.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 3, src: 'images/images-new/3D962933-3591-4B47-B57F-1A9BFC2788FA_1_105_c copy.JPG', theme: 1, starAsset: 'star-05.png', clue: 'Look for overlapping textures.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 4, src: 'images/images-new/56E8A5A7-64F3-46CA-B829-A80F99ED6322_1_105_c.jpg', theme: 3, starAsset: 'star-02.png', clue: 'Hidden in plain sight on the street.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 5, src: 'images/images-new/A0173217-A2FA-44E0-AC23-103CBBEAE41A_1_105_c.jpg', theme: 8, starAsset: 'star-10.png', clue: 'A splash of color on a grey wall.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 6, src: 'images/images-new/IMG_22031 copy 2.JPG', theme: 7, starAsset: 'star-06.png', clue: 'Detail of layered urban history.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 7, src: 'images/images-new/IMG_3136 copy.JPG', theme: 1, starAsset: 'star-06.png', clue: 'Find the hidden geometry in the city.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 9, src: 'images/New images/IMG_3140.jpg', theme: 5, starAsset: 'star-01.png', clue: 'Look for this architectural imprint.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 10, src: 'images/New images/IMG_3143.jpg', theme: 6, starAsset: 'star-08.png', clue: 'A forgotten mark in the alley.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 11, src: 'images/New images/IMG_3144.jpg', theme: 4, starAsset: 'star-03.png', clue: 'A texture that tells a story.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 12, src: 'images/New images/IMG_3152.jpg', theme: 1, starAsset: 'star-05.png', clue: 'Find the balance in this urban shot.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 13, src: 'images/New images/IMG_3156.jpg', theme: 3, starAsset: 'star-09.png', clue: 'A striking pattern on the pavement.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 14, src: 'images/New images/IMG_3157.jpg', theme: 2, starAsset: 'star-11.png', clue: 'Layered advertisements from another time.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 15, src: 'images/New images/IMG_3162.jpg', theme: 7, starAsset: 'star-02.png', clue: 'Look for this graphic urban detail.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 16, src: 'images/New images/IMG_3168.jpg', theme: 4, starAsset: 'star-04.png', clue: 'Find the tag hidden behind the sign.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 17, src: 'images/New images/IMG_3169.jpg', theme: 6, starAsset: 'star-10.png', clue: 'A macro view of the city’s bones.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 18, src: 'images/New images/IMG_3172.jpg', theme: 5, starAsset: 'star-01.png', clue: 'Look for the bright slash of paint.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 19, src: 'images/New images/IMG_3176.jpg', theme: 3, starAsset: 'star-11.png', clue: 'Faded posters overlapping in the alley.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 20, src: 'images/New images/IMG_3181.jpg', theme: 8, starAsset: 'star-08.png', clue: 'Architecture meets urban art.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 21, src: 'images/New images/IMG_3182.jpg', theme: 6, starAsset: 'star-06.png', clue: 'A hidden texture on the wall.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 22, src: 'images/New images/IMG_3183.jpg', theme: 1, starAsset: 'star-07.png', clue: 'Look for the bold pattern below.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 23, src: 'images/New images/IMG_3187.jpg', theme: 2, starAsset: 'star-02.png', clue: 'A final mark of urban creativity.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 24, src: 'images/New images/IMG_3189.jpg', theme: 5, starAsset: 'star-05.png', clue: 'Find the contrast between textures.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 25, src: 'images/New images/IMG_3191.jpg', theme: 7, starAsset: 'star-10.png', clue: 'A bold urban statement.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 26, src: 'images/New images/IMG_3195.jpg', theme: 4, starAsset: 'star-03.png', clue: 'Look for the layered mark.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 27, src: 'images/New images/IMG_3199.jpg', theme: 3, starAsset: 'star-09.png', clue: 'A forgotten detail of the street.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 28, src: 'images/New images/IMG_3200.jpg', theme: 6, starAsset: 'star-08.png', clue: 'Urban geometry at its finest.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 29, src: 'images/New images/IMG_3201.jpg', theme: 8, starAsset: 'star-05.png', clue: 'Find the hidden slash of color.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 30, src: 'images/New images/IMG_3208.jpg', theme: 1, starAsset: 'star-06.png', clue: 'A micro shot of weathered stone.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 31, src: 'images/New images/IMG_3209.jpg', theme: 2, starAsset: 'star-01.png', clue: 'Look for the stencil in the shadows.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 32, src: 'images/New images/IMG_3210.jpg', theme: 5, starAsset: 'star-11.png', clue: 'Layered textures of the Outernet.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 33, src: 'images/New images/IMG_3212.jpg', theme: 7, starAsset: 'star-07.png', clue: 'A forgotten urban signature.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 34, src: 'images/New images/IMG_3221.jpg', theme: 4, starAsset: 'star-02.png', clue: 'Look for the patterned imprint.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 35, src: 'images/New images/IMG_3222.jpg', theme: 6, starAsset: 'star-06.png', clue: 'Find the macro detail on the pillar.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 36, src: 'images/New images/IMG_3223.jpg', theme: 8, starAsset: 'star-01.png', clue: 'A bold slash on a textured wall.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 37, src: 'images/New images/IMG_3225.jpg', theme: 3, starAsset: 'star-05.png', clue: 'Look for the graphic mark.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 38, src: 'images/New images/IMG_3232.jpg', theme: 1, starAsset: 'star-03.png', clue: 'A final piece of the urban puzzle.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() },
        { id: 39, src: 'images/New images/IMG_3239 (1).jpg', theme: 2, starAsset: 'star-06.png', clue: 'Look closely at the layered textures.', lat: centerLat + randomOffset(), lng: centerLng + randomOffset() }
    ];
;

    // State
    const TOTAL_FRAGMENTS = fragments.length;
    let foundFragments = [];
    let activeFragment = null;
    let map = null;
    let userMarker = null;
    let markers = {};
    let currentUserLat = null;
    let currentUserLng = null;
    let watchId = null;

    // DOM Elements
    const gridContainer = document.getElementById('fragment-grid');
    const modal = document.getElementById('capture-modal');
    const modalContent = modal.querySelector('.modal-content');
    const closeModalBtn = document.getElementById('close-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalInstruction = document.getElementById('modal-instruction');
    const modalDistance = document.getElementById('modal-distance');

    const cameraInput = document.getElementById('camera-input');
    const captureLabel = document.getElementById('capture-label');
    const captureText = document.getElementById('capture-text');
    const captureIcon = document.getElementById('capture-icon');

    const scanningOverlay = document.getElementById('scanning-overlay');
    const successOverlay = document.getElementById('success-overlay');
    const errorOverlay = document.getElementById('error-overlay');

    const continueBtn = document.getElementById('continue-btn');
    const errorBtn = document.getElementById('error-btn');
    const progressText = document.getElementById('progress-text');
    const progressFill = document.getElementById('progress-fill');

    const btnGrid = document.getElementById('btn-grid');
    const btnMap = document.getElementById('btn-map');
    const viewGrid = document.getElementById('view-grid');
    const viewMap = document.getElementById('view-map');

    // Navigation Logic
    btnGrid.addEventListener('click', () => {
        btnGrid.classList.add('active');
        btnGrid.setAttribute('aria-pressed', 'true');
        btnMap.classList.remove('active');
        btnMap.setAttribute('aria-pressed', 'false');
        viewGrid.classList.add('active-view');
        viewMap.classList.remove('active-view');
    });

    btnMap.addEventListener('click', () => {
        btnMap.classList.add('active');
        btnMap.setAttribute('aria-pressed', 'true');
        btnGrid.classList.remove('active');
        btnGrid.setAttribute('aria-pressed', 'false');
        viewMap.classList.add('active-view');
        viewGrid.classList.remove('active-view');

        // Initialize map if it hasn't been yet, or invalidate size if hidden
        if (!map) {
            initMap();
        } else {
            map.invalidateSize();
        }
    });

    // Load state from local storage
    if (localStorage.getItem('imprintsState2')) {
        foundFragments = JSON.parse(localStorage.getItem('imprintsState2'));
    }

    // Initialize Leaflet Map
    function initMap() {
        // Center on Outernet / Denmark St
        map = L.map('leaflet-map').setView([centerLat, centerLng], 18);

        // Light mode map tiles (CartoDB Light NoLabels - grayscale and avoids 401 Auth errors more reliably)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        // Add pins for fragments
        fragments.forEach((fragment) => {
            const isFound = foundFragments.includes(fragment.id);

            // Create a custom div icon with specific star asset
            const starClass = fragment.starAsset.split('.')[0]; // e.g., 'star-01'
            const customIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div class="marker-star ${isFound ? 'found-star' : ''} ${starClass}">
                        <img src="images/stars/${fragment.starAsset}" class="star-asset" alt="Star">
                       </div>`,
                iconSize: [50, 50],
                iconAnchor: [25, 25]
            });

            const marker = L.marker([fragment.lat, fragment.lng], { icon: customIcon }).addTo(map);

            // Clicking a pin opens the modal
            marker.on('click', () => {
                const numStr = fragment.id.toString().padStart(2, '0');
                openModal(fragment, numStr, isFound);
            });

            markers[fragment.id] = marker;
        });

        // Start Tracking User Location
        startLocationTracking();
    }

    // Geolocation Tracking
    function startLocationTracking() {
        if ("geolocation" in navigator) {
            // Watch position updates continuously
            watchId = navigator.geolocation.watchPosition(
                (position) => {
                    currentUserLat = position.coords.latitude;
                    currentUserLng = position.coords.longitude;
                    updateUserMarker();

                    // If modal is open, continuously update distance text
                    if (activeFragment) {
                        checkDistance(activeFragment);
                    }
                },
                (error) => {
                    console.warn("Geolocation Error:", error);
                    // Handle error (e.g. permission denied) silent fallback to debug mode if needed
                },
                { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
            );
        } else {
            console.error("Geolocation not supported by this browser.");
        }
    }

    function updateUserMarker() {
        if (!map || currentUserLat === null) return;

        // Custom user icon (pulsing blue dot)
        if (!userMarker) {
            const userIcon = L.divIcon({
                className: 'custom-div-icon',
                html: '<div class="user-location-marker"></div>',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });
            userMarker = L.marker([currentUserLat, currentUserLng], { icon: userIcon, zIndexOffset: 1000 }).addTo(map);
        } else {
            userMarker.setLatLng([currentUserLat, currentUserLng]);
        }
    }

    // Distance Calculation (Haversine formula) in meters
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371e3; // metres
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    }

    // Initialize Grid
    function renderGrid() {
        gridContainer.innerHTML = '';
        fragments.forEach((fragment, index) => {
            const isFound = foundFragments.includes(fragment.id);
            const numStr = (index + 1).toString().padStart(2, '0');

            const card = document.createElement('div');
            card.className = `fragment-card ${isFound ? 'found' : ''}`;
            card.dataset.id = fragment.id;

            const img = document.createElement('img');
            img.src = fragment.src;
            img.alt = `Fragment ${numStr}`;
            img.className = 'fragment-image';
            img.loading = 'lazy';

            card.appendChild(img);

            card.addEventListener('click', () => {
                openModal(fragment, numStr, isFound);
            });

            gridContainer.appendChild(card);
        });

        updateProgress();
    }

    function updateProgress() {
        progressText.textContent = `${foundFragments.length} / ${TOTAL_FRAGMENTS}`;
        const percentage = (foundFragments.length / TOTAL_FRAGMENTS) * 100;
        progressFill.style.width = `${percentage}%`;
        
        // Update ARIA progress
        const progressBar = document.getElementById('progress-container');
        if (progressBar) {
            progressBar.setAttribute('aria-valuenow', foundFragments.length);
        }
    }

    // Modal & Distance Logic
    function checkDistance(fragment) {
        if (true) { // Always allow capture for exhibition testing
            enableCapture("");
            return;
        }

        if (currentUserLat === null || currentUserLng === null) {
            modalDistance.textContent = "Waiting for GPS signal...";
            modalDistance.className = "modal-distance";
            disableCapture();
            return;
        }

        const dist = calculateDistance(currentUserLat, currentUserLng, fragment.lat, fragment.lng);

        if (dist <= REQUIRED_DISTANCE_METERS) {
            enableCapture(`You are ${Math.round(dist)}m away!`);
        } else {
            disableCapture(`${Math.round(dist)}m away. Move closer!`);
        }
    }

    function enableCapture(msg) {
        modalDistance.textContent = msg;
        modalDistance.className = "modal-distance valid";
        captureLabel.classList.remove('disabled');
        cameraInput.disabled = false;
        captureText.textContent = "Unlock Imprint";
    }

    function disableCapture(msg = "Too far away") {
        modalDistance.textContent = msg;
        modalDistance.className = "modal-distance";
        captureLabel.classList.add('disabled');
        cameraInput.disabled = true;
        captureText.textContent = "Seek Imprint";
    }

    function openModal(fragment, numStr, isFound = false) {
        // Reset all overlays first to prevent ghost states
        scanningOverlay.classList.add('hidden');
        successOverlay.classList.add('hidden');
        errorOverlay.classList.add('hidden');

        activeFragment = fragment;
        modalImage.src = fragment.src;
        modalTitle.textContent = `Fragment #${numStr}`;
        modalInstruction.textContent = fragment.clue;

        // Apply dynamic theme based on fragment property (or fallback to rotation)
        const themeIndex = fragment.theme || (fragments.indexOf(fragment) % 8) + 1;
        modalContent.classList.add(`theme-${themeIndex}`);

        if (isFound) {
            modalContent.classList.add('is-found');
        } else {
            modalContent.classList.remove('is-found');
            // Only check distance if NOT found
            checkDistance(fragment);
        }

        modal.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
        activeFragment = null;
        cameraInput.value = ''; // Reset input
        
        // Force hide all overlays
        scanningOverlay.classList.add('hidden');
        successOverlay.classList.add('hidden');
        errorOverlay.classList.add('hidden');

        // Clear all themes and found state
        for (let i = 1; i <= 8; i++) {
            modalContent.classList.remove(`theme-${i}`);
        }
        modalContent.classList.remove('is-found');
    }

    closeModalBtn.addEventListener('click', closeModal);

    // Handle Camera Input and Verification
    cameraInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        scanningOverlay.classList.remove('hidden');

        // Check distance one final time at the moment of capture
        let isValid = true; // Always allow in exhibition mode
        if (currentUserLat !== null && false) { // Skip distance check for exhibition
            const dist = calculateDistance(currentUserLat, currentUserLng, activeFragment.lat, activeFragment.lng);
            isValid = dist <= REQUIRED_DISTANCE_METERS;
        }

        setTimeout(() => {
            scanningOverlay.classList.add('hidden');

            if (isValid) {
                // Success!
                if (!foundFragments.includes(activeFragment.id)) {
                    foundFragments.push(activeFragment.id);
                    localStorage.setItem('imprintsState2', JSON.stringify(foundFragments));

                    // Update map marker instantly
                    if (markers[activeFragment.id]) {
                        const iconHtml = markers[activeFragment.id].options.icon.options.html;
                        markers[activeFragment.id].options.icon.options.html = iconHtml.replace('marker-star', 'marker-star found-star');
                        markers[activeFragment.id].setIcon(markers[activeFragment.id].options.icon);
                    }
                }
                successOverlay.classList.remove('hidden');
            } else {
                // Failed! (They moved out of range or spoofed)
                errorOverlay.classList.remove('hidden');
            }
        }, 2000); // 2 second mock analysis
    });

    continueBtn.addEventListener('click', () => {
        successOverlay.classList.add('hidden');
        closeModal();
        renderGrid();
    });

    errorBtn.addEventListener('click', () => {
        errorOverlay.classList.add('hidden');
        cameraInput.value = '';
    });

    // Request initial position to speed up acquisition
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                currentUserLat = pos.coords.latitude;
                currentUserLng = pos.coords.longitude;
                // If map is already initialized, update marker
                if (map) updateUserMarker();
            },
            () => console.warn("Initial GPS request failed or denied.")
        );
    }

    // Setup initial view
    renderGrid();
});
