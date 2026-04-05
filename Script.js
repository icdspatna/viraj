// फोटो स्लाइडर लॉजिक
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach(s => s.style.display = "none");
    currentSlide++;
    if (currentSlide > slides.length) {currentSlide = 1}
    if(slides[currentSlide-1]) slides[currentSlide-1].style.display = "block";
    setTimeout(showSlides, 3000); // 3 सेकंड में बदलेगा
}
showSlides();

// पेज बदलने का लॉजिक
function showPage(pageId) {
    if(pageId === 'orders' || pageId === 'letters') {
        let pw = prompt("कृपया पासवर्ड दर्ज करें:");
        if(pw !== "1234") { // अपना पासवर्ड यहाँ बदलें
            alert("गलत पासवर्ड!");
            return;
        }
    }
    alert("आप " + pageId + " पेज पर जा रहे हैं। (इसे अलग HTML फाइल्स से लिंक करें)");
    // यहाँ आप window.location.href = pageId + ".html"; का उपयोग कर सकते हैं
}
