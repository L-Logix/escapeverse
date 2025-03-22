// Fade-in animation for rooms when they load
document.addEventListener('DOMContentLoaded', () => {
    const rooms = document.querySelectorAll('.room');
    rooms.forEach((room, index) => {
        room.style.animation = `fadeIn 0.8s ease-out forwards ${index * 0.2}s`;  // Delay per room
    });
});

// CSS Animation for fade-in
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
