document.addEventListener('DOMContentLoaded', function () {
  const mapContainer = document.querySelector('.bd-map');

const divisions = [
  {
    name: 'Dhaka: SMET Services',
    className: 'dhaka',
    title: 'Dhaka',
    location: '2/2, Pallabi, Mirpur, Dhaka – 1216'
  },
  {
    name: 'Chattogram: M/S Aladin Lpg',
    className: 'chattogram',
    title: 'Chattogram',
    location: 'Manikchari, Rangamati'
  },
  {
    name: 'Barishal: Saad Motors Ltd.',
    className: 'barishal',
    title: 'Barishal',
    location: 'Plot: A-41, Kawnia, Barishal, Bangladesh'
  },
  {
    name: 'Khulna: Maria LPG Filling Station',
    className: 'khulna',
    title: 'Khulna',
    location: 'Joy Bangla More, City Bypass, Khulna'
  },
  {
    name: 'Rangpur: Saad Motors Limited LPG',
    className: 'rangpur',
    title: 'Rangpur',
    location: 'Sathmatha, Rangpur'
  },
  {
    name: 'Rajshahi: Modhu LPG Filling Station',
    className: 'rajshahi',
    title: 'Rajshahi',
    location: 'Royna, Boraigram, Natore'
  },
  {
    name: 'Mymensingh: Bhuiyan LPG Filling Station',
    className: 'mymensingh',
    title: 'Mymensingh',
    location: 'Joypur, Ishwarganj, Mymensingh'
  },
  {
    name: 'Sylhet: Jalalpur LPG Filling Station',
    className: 'sylhet',
    title: 'Sylhet',
    location: 'Jalalpur, Nabiganj, Habiganj'
  }
];

  // Set the default active division class (use className, not name)
  let activeDivisionClass = 'dhaka';

  // Create map division elements and append to mapContainer
  divisions.forEach(division => {
    const divisionElement = document.createElement('div');
    divisionElement.classList.add('division', division.className);
    divisionElement.innerHTML = `<div>${division.name}<div class="divarrorsec"></div></div>`;
    divisionElement.style.display = division.className === activeDivisionClass ? 'block' : 'none';
    mapContainer.appendChild(divisionElement);
  });

  // Function to update the location details
  function updateDivisionDetails(division) {
    const detailsContainer = document.querySelector('.division-details');
    if (detailsContainer) {
      detailsContainer.querySelector('.division-title').textContent = division.title;
      detailsContainer.querySelector('.division-short-text').textContent = division.location;
    }
  }

  // Show data temporarily on hover
  function showDivisionOnHover(event) {
    if (event.target.tagName === 'LI') {
      const divisionClass = divisions.find(div => div.name === event.target.textContent.trim())?.className;
      if (divisionClass) {
        // Show only the hovered division
        document.querySelectorAll('.bd-map .division').forEach(div => {
          div.style.display = div.classList.contains(divisionClass) || div.classList.contains(activeDivisionClass)
            ? 'block'
            : 'none';
        });

        const hoveredDivision = divisions.find(div => div.className === divisionClass);
        if (hoveredDivision) {
          updateDivisionDetails(hoveredDivision);
        }
      }
    }
  }

  // Show and mark division on click
  function showDivisionOnClick(event) {
    if (event.target.tagName === 'LI') {
      const divisionClass = divisions.find(div => div.name === event.target.textContent.trim())?.className;
      if (divisionClass) {
        // Show only the clicked division
        document.querySelectorAll('.bd-map .division').forEach(div => {
          div.style.display = div.classList.contains(divisionClass) ? 'block' : 'none';
        });

        const selectedDivision = divisions.find(div => div.className === divisionClass);
        if (selectedDivision) {
          updateDivisionDetails(selectedDivision);
        }

        activeDivisionClass = divisionClass; // Update the active division
      }
    }
  }

  // Keep the active division visible on mouseout
  function handleMouseOut() {
    const activeDivision = divisions.find(div => div.className === activeDivisionClass);
    if (activeDivision) {
      updateDivisionDetails(activeDivision);
      document.querySelectorAll('.bd-map .division').forEach(div => {
        div.style.display = div.classList.contains(activeDivisionClass) ? 'block' : 'none';
      });
    }
  }

  // Add event listeners
  const divisionsList = document.querySelector('.divisions-list');
  divisionsList.addEventListener('mouseover', showDivisionOnHover);
  divisionsList.addEventListener('click', showDivisionOnClick);
  divisionsList.addEventListener('mouseout', handleMouseOut);
});