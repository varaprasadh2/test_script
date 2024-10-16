(function() {
    // Create a div element for the bubble
    const bubble = document.createElement('div');
    bubble.id = 'custom-bubble';
    bubble.innerHTML = '<p>Click me!</p>';
    
    // Append the bubble to the body
    document.body.appendChild(bubble);

    // Style the bubble
    const style = document.createElement('style');
    style.innerHTML = `
        #custom-bubble {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background-color: #007BFF;
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        #custom-bubble:hover {
            transform: scale(1.1);
        }
    `;
    
    // Append the style to the head
    document.head.appendChild(style);

    // Handle bubble click event
    bubble.addEventListener('click', function() {
        alert('Bubble clicked!');
        // Here, you can also include code to open a chatbox or do any other action
    });
})();
