const lastModified = document.querySelector('#lastModified');
const lastMod = new Date(document.lastModified);

lastModified.textContent = `Last modified: ${lastMod.toLocaleString()}`;

