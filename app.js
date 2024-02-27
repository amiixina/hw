function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (!name || !phone) {
        alert("Please fill in both fields");
        return;
    }

    const id = generateIdFromPhone(phone);

    const contact = {
        id: id,
        name: name,
        phone: phone
    };

    addContactToLocalStorage(contact);
    updateContactList();

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';

    console.log(`New contact added - ID: ${id}, Name: ${name}, Phone: ${phone}`);
}

function generateIdFromPhone(phone) {
    return phone.replace(/\D/g, '');
}

function addContactToLocalStorage(contact) {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function updateContactList() {
    const contactList = document.getElementById('contactList');
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contactList.innerHTML = '';

    contacts.forEach(contact => {
        const listItem = document.createElement('div');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <strong>${contact.name}</strong> - ${contact.phone}
            <button type="button" class="btn btn-danger btn-sm float-right" onclick="deleteContact('${contact.id}')">Delete</button>
        `;
        contactList.appendChild(listItem);
    });
}

function deleteContact(id) {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts = contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    updateContactList();
}

window.onload = updateContactList;