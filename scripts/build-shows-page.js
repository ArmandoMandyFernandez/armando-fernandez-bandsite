console.log('hello');

const sectionEl = document.createElement('section');
sectionEl.className = 'shows'
document.querySelector('.hero').after(sectionEl);

const heading = document.createElement('h2');
heading.innerText = 'Shows';
heading.className = 'shows__title'
sectionEl.appendChild(heading);





















// const shows = [
//     {
//         Date: 'Mon Sept 06, 2021',
//         Venue: 'Ronald Lane',
//         Location: 'San Francisco, CA',
//     },
//     {
//         Date: 'Tue Sept 21, 2021',
//         Venue: 'Pier 3 East',
//         Location: 'San Francisco, CA',
//     },
//     {
//         Date: 'Fri Oct 15, 2021',
//         Venue: 'View Lounge',
//         Location: 'San Francisco, CA',
//     },
//     {
//         Date: 'Sat Nov 06, 2021',
//         Venue: 'Hyatt Agency',
//         Location: 'San Francisco, CA',
//     },
//     {
//         Date: 'Fri Nov 26, 2021',
//         Venue: 'Moscow Center',
//         Location: 'San Francisco, CA',
//     },
//     {
//         Date: 'Wed Dec 15 2021',
//         Venue: 'Press Clubt',
//         Location: 'San Francisco, CA',
//     },

// ]
