//Cahche DOM elements
const noteButton = document.getElementById("noteButton")
const noteSpans = document.querySelectorAll(".wkeys span, .bkeys span")

//Initialize note text styling
noteSpans.forEach(span => {
    const isWhiteKey = span.parentElement.classList.contains("wkeys");
    span.classList.add(isWhiteKey ? "noteText" : "noteTextB")
})

//Note visibility toggle
noteButton.addEventListener("click", () => {
    const showNotes = noteButton.textContent === "Show Note Names";
    noteButton.textContent = showNotes ? "Hide Note Names" : "Show Note Names";
    noteSpans.forEach(span => span.classList.toggle('noDisplay', !showNotes))
})

//Audio playback toggle
document.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON" && event.target.id){
        const audio = new Audio(`pianoKeysMP3/${event.target.id}.mp3`);
        audio.play().catch(error => console.error("Audio file error",error))
    }
})