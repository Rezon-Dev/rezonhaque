document.addEventListener('DOMContentLoaded', () => {
    const options = {
        threshold: 0.5, // Start typing when 50% of the section is visible
        rootMargin: "0px"
    };

    const typeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const textElement = entry.target;
                const fullText = textElement.getAttribute('data-text');
                
                // Start the typing effect
                typeText(textElement, fullText);
                
                // Stop observing once typed so it doesn't repeat
                observer.unobserve(textElement);
            }
        });
    }, options);

    // Initialize all story paragraphs
    const paragraphs = document.querySelectorAll('.story-content p');
    
    paragraphs.forEach(p => {
        // Move the text into a data attribute and clear the paragraph
        p.setAttribute('data-text', p.innerText);
        p.innerText = ''; 
        typeObserver.observe(p);
    });

    function typeText(element, text) {
        let i = 0;
        element.style.opacity = "1"; // Ensure it's visible when typing starts
        
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                // Add a subtle blinking cursor effect at the end if you want
                element.innerHTML += '<span class="cursor">|</span>';
            }
        }, 20); // Adjust speed here (lower = faster)
    }
});
