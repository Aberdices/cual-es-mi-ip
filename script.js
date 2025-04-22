fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipBox = document.getElementById('ip');
    ipBox.textContent = data.ip;
  });

function copyIP() {
  const ipText = document.getElementById('ip').textContent;
  navigator.clipboard.writeText(ipText).then(() => {
    alert('IP copiada al portapapeles: ' + ipText);
  });
}
