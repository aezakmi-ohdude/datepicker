
let datepickers = document.querySelectorAll('[data-component="datepicker"]');

datepickers.forEach((datepicker) => {
    
    let toggle = datepicker.querySelector('[data-datepicker="toggle"]');
    let calendar = datepicker.querySelector('[data-datepicker="calendar"]'); 
    toggle.addEventListener('click', () => {

        calendar.classList.toggle('datepicker__calendar--active')
    
    });
});