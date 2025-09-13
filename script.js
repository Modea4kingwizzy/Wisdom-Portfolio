// Handle file uploads
function handleFiles(event) {
  const files = event.target.files;
  const list = document.getElementById('uploadList');
  for (let file of files) {
    const item = document.createElement('div');
    item.className = 'upload-item';
    item.innerHTML = `<span>${file.name}</span>`;
    list.appendChild(item);
  }
}

function saveUploads() {
  localStorage.setItem('uploads', document.getElementById('uploadList').innerHTML);
  alert('Uploads saved locally!');
}

function clearUploads() {
  document.getElementById('uploadList').innerHTML = '';
  localStorage.removeItem('uploads');
}

function prefillExample() {
  document.getElementById('fullname').innerText = 'Agaliwa Wisdom';
  document.getElementById('email').innerText = 'wisdom@example.com';
  document.getElementById('phone').innerText = '+234 810 000 0000';
  document.getElementById('waecYear').innerText = '2022';
  addSampleProject();
}

function addSampleProject() {
  const grid = document.getElementById('portfolioGrid');
  const div = document.createElement('div');
  div.className = 'thumb';
  div.innerHTML = '<img src="https://via.placeholder.com/150x100.png?text=Sample+Design" alt="sample"><div class="small">Sample Project</div>';
  grid.appendChild(div);
}

function clearPortfolio() {
  document.getElementById('portfolioGrid').innerHTML = '';
}

function downloadHTML() {
  const source = document.documentElement.outerHTML;
  const blob = new Blob([source], {type: 'text/html'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Agaliwa_Wisdom_Portfolio.html';
  a.click();
}

function sendDemoMessage() {
  const name = document.getElementById('cname').value;
  const email = document.getElementById('cemail').value;
  const message = document.getElementById('cmessage').value;
  if (!name || !email || !message) { alert('Please fill all fields.'); return; }
  alert('Demo message sent! In real deployment, this would send via backend.');
  resetContact();
}

function resetContact() {
  document.getElementById('cname').value = '';
  document.getElementById('cemail').value = '';
  document.getElementById('cmessage').value = '';
}

// Load saved uploads on startup
window.onload = () => {
  if (localStorage.getItem('uploads')) {
    document.getElementById('uploadList').innerHTML = localStorage.getItem('uploads');
  }
};
