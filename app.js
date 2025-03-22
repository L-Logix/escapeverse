// Function to fetch room names from rooms.txt
async function fetchRoomNames() {
    try {
        // Fetch the rooms.txt file (which contains only the room names)
        const response = await fetch('rooms.txt');
        const textData = await response.text();

        // Split the file content by newlines to get an array of room names
        const roomNames = textData.split('\n').map(name => name.trim());

        // Fetch room details (static data or from another file)
        fetchRoomDetails(roomNames);
    } catch (error) {
        console.error('Error fetching room names:', error);
    }
}

// Function to fetch room details (static example data for now)
function fetchRoomDetails(roomNames) {
    const rooms = [
        { 
            name: 'Cyber Heist 2077', 
            description: 'A futuristic escape where you need to steal a valuable piece of tech from a high-security facility.',
            image: 'https://example.com/cyber-heist.jpg',
            rating: 4.5,
            recommendation: 'Highly Recommended!'
        },
        { 
            name: 'Haunted Mansion', 
            description: 'Explore the spooky and eerie rooms of an abandoned mansion full of secrets and ghosts.',
            image: 'https://example.com/haunted-mansion.jpg',
            rating: 4.0,
            recommendation: 'For Horror Enthusiasts'
        },
        { 
            name: 'The Time Traveler\'s Lab', 
            description: 'Travel through different eras to unlock the mystery of a rogue time machine.',
            image: 'https://example.com/time-travelers-lab.jpg',
            rating: 4.7,
            recommendation: 'Best for Puzzle Lovers'
        },
        { 
            name: 'Escape from Alcatraz', 
            description: 'Escape the infamous prison with nothing but your wits and the help of fellow inmates.',
            image: 'https://example.com/alcatraz.jpg',
            rating: 4.3,
            recommendation: 'Perfect for Team Players'
        },
        { 
            name: 'The Lost Pyramid', 
            description: 'Uncover the secrets of an ancient pyramid, solving riddles and dodging traps.',
            image: 'https://example.com/lost-pyramid.jpg',
            rating: 4.2,
            recommendation: 'For History Buffs'
        }
    ];

    // Filter rooms by names
    const filteredRooms = rooms.filter(room => roomNames.includes(room.name));

    // Display the rooms on the page
    displayRooms(filteredRooms);
}

// Function to display rooms dynamically
function displayRooms(rooms) {
    const roomsContainer = document.getElementById('rooms-container');
    roomsContainer.innerHTML = ''; // Clear existing content

    rooms.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.classList.add('room');

        roomElement.innerHTML = `
            <img src="${room.image}" alt="${room.name}">
            <h3>${room.name}</h3>
            <p>${room.description}</p>
            <div class="rating">⭐ ${room.rating}</div>
            <div class="recommendation">${room.recommendation}</div>
        `;

        roomsContainer.appendChild(roomElement);
    });
}

// Search Functionality
function searchRooms() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const filteredRooms = rooms.filter(room => 
        room.name.toLowerCase().includes(searchQuery) || room.description.toLowerCase().includes(searchQuery)
    );
    displayRooms(filteredRooms);
}

// Fetch rooms and display when page loads
document.addEventListener('DOMContentLoaded', fetchRoomNames);

// Event Listener for Search
document.getElementById('searchBar').addEventListener('input', searchRooms);
