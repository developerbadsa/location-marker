document.addEventListener('DOMContentLoaded', function () {
  const mapContainer = document.querySelector('.bd-map');

  const divisions = [
    {
      name: 'Dhaka: SMET Services',
      className: 'dhaka',
      title: 'Dhaka',
      shortText: 'Dhaka is the capital of Bangladesh.',
      longText: 'Dhaka is the most densely populated city in Bangladesh and a major hub for commerce and culture.'
    },
    {
      name: 'Chattogram: M/S Aladin Lpg',
      className: 'chattogram',
      title: 'Chattogram',
      shortText: 'Chattogram is the major port city of Bangladesh.',
      longText: 'Chattogram is known for its bustling port, vibrant trade, and natural beauty including hills and the Bay of Bengal.'
    },
    {
      name: 'Barishal: Saad Motors Ltd.',
      className: 'barishal',
      title: 'Barishal',
      shortText: 'Barishal is a city on the southern coast of Bangladesh.',
      longText: 'Barishal is famous for its rivers and floating markets, making it a unique destination in the country.'
    },
    {
      name: 'Khulna: Maria LPG Filling Station',
      className: 'khulna',
      title: 'Khulna',
      shortText: 'Khulna is the gateway to the Sundarbans.',
      longText: 'Khulna is known for its close proximity to the Sundarbans, the largest mangrove forest in the world.'
    },
    {
      name: 'Rangpur: Saad Motors Limited LPG',
      className: 'rangpur',
      title: 'Rangpur',
      shortText: 'Rangpur is a historic city in the north of Bangladesh.',
      longText: 'Rangpur is known for its colonial history, agricultural richness, and diverse culture.'
    },
    {
      name: 'Rajshahi: Modhu LPG Filling Station',
      className: 'rajshahi',
      title: 'Rajshahi',
      shortText: 'Rajshahi is known as the Silk City of Bangladesh.',
      longText: 'Rajshahi is famous for its silk industry, mangoes, and serene environment along the Padma River.'
    },
    {
      name: 'Mymensingh: Bhuiyan LPG Filling Station',
      className: 'mymensingh',
      title: 'Mymensingh',
      shortText: 'Mymensingh is a city rich in educational and cultural heritage.',
      longText: 'Mymensingh is home to numerous historical sites and the prestigious Bangladesh Agricultural University.'
    },
    {
      name: 'Sylhet: Jalalpur LPG Filling Station',
      className: 'sylhet',
      title: 'Sylhet',
      shortText: 'Sylhet is a city surrounded by tea gardens and natural beauty.',
      longText: 'Sylhet is known for its spiritual sites, lush tea gardens, and breathtaking landscapes.'
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
      detailsContainer.querySelector('.division-short-text').textContent = division.shortText;
      detailsContainer.querySelector('.division-long-text').textContent = division.longText;
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
