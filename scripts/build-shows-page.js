console.log('hello');

const sectionEl = document.createElement('section');
sectionEl.className = 'shows'
document.querySelector('.hero').after(sectionEl);

const heading = document.createElement('h2');
heading.innerText = 'Shows';
heading.className = 'shows__title'
sectionEl.appendChild(heading);

const container = document.createElement('div');
container.className = 'shows__container'
sectionEl.appendChild(container);



const shows = [
    {
        Date: 'Mon Sept 06, 2021',
        Venue: 'Ronald Lane',
        Location: 'San Francisco, CA',
    },
    {
        Date: 'Tue Sept 21, 2021',
        Venue: 'Pier 3 East',
        Location: 'San Francisco, CA',
    },
    {
        Date: 'Fri Oct 15, 2021',
        Venue: 'View Lounge',
        Location: 'San Francisco, CA',
    },
    {
        Date: 'Sat Nov 06, 2021',
        Venue: 'Hyatt Agency',
        Location: 'San Francisco, CA',
    },
    {
        Date: 'Fri Nov 26, 2021',
        Venue: 'Moscow Center',
        Location: 'San Francisco, CA',
    },
    {
        Date: 'Wed Dec 15 2021',
        Venue: 'Press Clubt',
        Location: 'San Francisco, CA',
    },

]


for (let i = 0; i < shows.length; i++){
    let showData = document.createElement('div');
    showData.innerText = `${shows[i].Date} ${shows[i].Venue} ${shows[i].Location}`;
    showData.classList.add('shows__data');
    container.appendChild(showData);

}

















