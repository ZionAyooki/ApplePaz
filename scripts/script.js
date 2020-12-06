/* Ticker change images and titles BONUS */
const slides = [
    ['טיפז', 'tab_tipaz.jpg', 'קבלו טיפ מטיפז'],
    ['שטחי מסחר פז סנטר', 'tab_rent.jpg', 'השכרת שטחי מסחר בתחנות פז'],
    ['נפלה עליך עז?', 'tab_goat.jpg', "קונים בקליק, אוספים בצ'יק"],
    ['קפה איטלקי אמיתי', 'tab_lavazza.jpg', 'קפה איטלקי מבית לאואצה']
];

let counter = 0;

/* Use start slider for the first change to be after 5 secs */
function startSlider() {
  setTimeout(function () {
    tickerSlides();
  }, 5000);
}

function tickerSlides() {
  counter = ++counter % 4;
  document.getElementById('ticker-title').textContent = slides[counter][0];
  document.getElementById('ticker-image').src = 'images/' + slides[counter][1];
  document.getElementById('ticker-image').alt = slides[counter][2];
  setTimeout(function () {
    tickerSlides();
  }, 5000);
}