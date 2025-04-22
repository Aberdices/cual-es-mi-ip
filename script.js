// Función para obtener la información de la IP
async function getIPInfo() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        document.getElementById('ip').textContent = data.ip;
        
        // Obtener información de ubicación usando ip-api.com
        const locationResponse = await fetch(`https://ip-api.com/json/${data.ip}`);
        const locationData = await locationResponse.json();
        
        if (locationData.status === 'success') {
            document.getElementById('location').textContent = 
                `${locationData.city}, ${locationData.regionName}, ${locationData.country}`;
            document.getElementById('isp').textContent = locationData.isp;
        }
    } catch (error) {
        console.error('Error al obtener la información:', error);
        document.getElementById('ip').textContent = 'Error al obtener la IP';
        document.getElementById('location').textContent = 'Error al obtener la ubicación';
        document.getElementById('isp').textContent = 'Error al obtener el ISP';
    }
}

// Función para obtener información del navegador
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    
    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
        browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
    } else {
        browserName = "Desconocido";
    }
    
    document.getElementById('browser').textContent = browserName;
}

// Ejecutar las funciones cuando la página cargue
window.addEventListener('load', () => {
    getIPInfo();
    getBrowserInfo();
}); 
