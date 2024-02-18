// navigation.js

function goToNextStep() {
    // Get the current page
    var currentPage = window.location.pathname;

    // Define the mapping of pages to their corresponding next steps
    var pageMappings = {
        '/pageA.html': '/pageB.html',
        '/pageB.html': '/pageC.html',
        '/pageC.html': '/pageD.html',
        // Add more mappings as needed
    };

    // Determine the next step based on the current page
    var nextStep = pageMappings[currentPage];

    // Navigate to the next step
    if (nextStep) {
        window.location.href = nextStep;
    } else {
        console.error("Next step not defined for the current page.");
    }
}
