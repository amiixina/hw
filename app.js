document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const id = Date.now();
  
    const contact = { id, name, phone };
  
    saveContact(contact);
    renderContactList();
  
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
  });
  
  function saveContact(contact) {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  
  function renderContactList() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
  
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  
    contacts.forEach(contact => {
      const div = document.createElement('div');
      div.classList.add('card', 'mb-3');
      div.setAttribute('id', `contact-${contact.id}`);
  
      const html = `
        <div class="card-body">
          <h5 class="card-title">${contact.name}</h5>
          <p class="card-text">${contact.phone}</p>
        </div>
      `;
  
      div.innerHTML = html;
      contactList.appendChild(div);
    });
  }
  
  renderContactList();
