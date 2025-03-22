// Array of rooms with images, ratings, live user count, and a count of play button clicks
const rooms = [
    {
        name: "Cyber Heist 2077",
        description: "A futuristic heist where you must infiltrate a high-security vault.",
        image: "cyber.jpg",
        rating: "4.8/5",
        userCount: 12,
        playCount: 0
    },
    {
        name: "Haunted Mansion",
        description: "A chilling escape in a mansion full of haunted secrets.",
        image: "haunted.jpg",
        rating: "4.5/5",
        userCount: 8,
        playCount: 0
    },
    {
        name: "Time Traveler's Lab",
        description: "Navigate through a time traveler's laboratory to save history.",
        image: "time.webp",
        rating: "4.7/5",
        userCount: 15,
        playCount: 0
    },
    {
        name: "Escape from Alcatraz",
        description: "Break out of the infamous Alcatraz prison before it's too late.",
        image: "alcatraz.jpg",
        rating: "4.9/5",
        userCount: 25,
        playCount: 0
    },
    {
        name: "Lost Pyramid",
        description: "Venture deep into an ancient pyramid and find your way out.",
        image: "lost.jpg",
        rating: "4.6/5",
        userCount: 18,
        playCount: 0
    }
];

// Function to display rooms dynamically
function displayRooms(rooms) {
    const roomsContainer = document.getElementById('rooms-container');
    roomsContainer.innerHTML = ''; // Clear any existing rooms

    rooms.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.classList.add('room');

        roomElement.innerHTML = `
            <img src="${room.image}" alt="${room.name}">
            <h3>${room.name}</h3>
            <p>${room.description}</p>
            <div class="rating">Rating: ${room.rating}</div>
            <div class="user-count">Live Users: ${room.userCount}</div>
            <button class="play-button" onclick="handlePlayClick('${room.name}')">Play</button>
        `;

        roomsContainer.appendChild(roomElement);
    });
}

// Function to handle play button click and update the live user count
function handlePlayClick(roomName) {
    const room = rooms.find(r => r.name === roomName);

    // Simulate user login check
    const isLoggedIn = true; // Simulate logged-in state, change as needed (true or false)

    if (isLoggedIn) {
        // User is logged in, simulate entering the room
        room.userCount++;  // Increase user count
        room.playCount++;  // Increase play count for tracking

        alert(`Welcome to ${room.name}!`);

        // Simulate navigating to the escape room page (you can replace this with actual redirection)
        window.location.href = `escape-room-${room.name.replace(/\s+/g, '-').toLowerCase()}.html`;
    } else {
        // Redirect to sign-up/login page if not logged in
        alert("Please log in to play.");
        window.location.href = 'login-signup.html';  // You can replace with your actual login page URL
    }

    // Update the live user count on the page
    displayRooms(rooms);
}

// Initial call to display all rooms
displayRooms(rooms);
