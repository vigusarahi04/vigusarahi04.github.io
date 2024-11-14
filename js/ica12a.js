const apiEndpoint = 'https://catfact.ninja/fact';

function getFact() {
    console.log("Button clicked!");

    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error("No response from server");
            }
            return response.json();
        })
        .then(data => {
            console.log("Cat fact fetched successfully:", data.fact); 
            displayRes(data.fact); 
        })
        .catch(error => {
            console.error("Error fetching cat fact:", error);
            alert("Failed to fetch the cat fact. Please try again later.");
        });
}

function displayRes(text) {
    const paragraph = document.getElementById("api-text");
    paragraph.textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("fetch-button");
    button.addEventListener("click", getFact); 
});