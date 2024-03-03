document.addEventListener('DOMContentLoaded', function() {
    var selectedAgency;
    document.getElementById('agencySelect').addEventListener('change', function() {
      selectedAgency = this.value;
      displayCrewMembers(apiUrl, selectedAgency);
    });
  
    var apiUrl = 'https://api.spacexdata.com/v4/crew';
    displayCrewMembers(apiUrl, selectedAgency);
  
    function displayCrewMembers(apiUrl, selectedAgency) {
      var crewListContainer = document.getElementById('crewList');
      crewListContainer.innerHTML = '';
      fetch(apiUrl)
        .then(function(response) {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(function(data) {
          var filteredData = data.filter(function(crewMember) {
            return selectedAgency === '' || crewMember.agency === selectedAgency;
          });
          filteredData.forEach(function(crewMember) {
            var crewCard = document.createElement('div');
            crewCard.classList.add('col-md-4');
            crewCard.innerHTML = `
              <div class="card mb-4">
                <img src="${crewMember.image}" class="card-img-top" alt="${crewMember.name}">
                <div class="card-body">
                  <h5 class="card-title">${crewMember.name}</h5>
                  <p class="card-text">Agency: ${crewMember.agency}</p>
                  <a href="${crewMember.wiki}" target="_blank" class="btn btn-primary">View Wiki</a>
                </div>
              </div>
            `;
            crewListContainer.appendChild(crewCard);
          });
        })
        .catch(function(error) {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  });