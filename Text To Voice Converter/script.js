
// Create a new SpeechSynthesisUtterance object to handle the speech synthesis
let speech = new SpeechSynthesisUtterance()


// here we initialize an empty array to stor the voices
let voices = []
let voiceSelect = document.querySelector("select")
 
// here we get the voices from the speechSynthesis API
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]
    voices.forEach((voice, i)=>(voiceSelect.options[i]=new Option(voice.name,i)))
}
// here we add an event Listener to the select to change the voice   
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]

})

// here we add an event Listener to the button to read the text in the textarea 
document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value
    window.speechSynthesis.speak(speech)

})