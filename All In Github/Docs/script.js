const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

let streams = [];
let symbolSize = 20; // Ukuran font/simbol
let lastDrawTime = 0;
const fps = 30; // Batasi FPS agar tidak terlalu berat

// Karakter yang akan jatuh (Matrix/Hacker Aesthetic)
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=~[]{}|;:,.<>?';

// Fungsi untuk mengatur ulang ukuran canvas saat jendela diubah
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.hacker-banner').offsetHeight;

    // Hitung ulang jumlah kolom
    const columns = Math.floor(canvas.width / symbolSize);
    streams = [];
    for (let i = 0; i < columns; i++) {
        // y: posisi awal (tinggi baris kode), speed: kecepatan jatuh
        streams.push({ y: Math.floor(Math.random() * canvas.height / symbolSize), speed: Math.random() * 0.5 + 0.5 });
    }
}

// Panggil sekali untuk inisialisasi awal
resizeCanvas();
window.addEventListener('resize', resizeCanvas);


// Fungsi untuk menggambar frame animasi
function drawMatrix(timestamp) {
    // Batasi FPS
    if (timestamp < lastDrawTime + (1000 / fps)) {
        requestAnimationFrame(drawMatrix);
        return;
    }
    lastDrawTime = timestamp;

    const currentTheme = htmlElement.getAttribute('data-theme');
    let color;
    if (currentTheme === 'light') {
        // Warna light mode: abu-abu/biru yang lebih tenang
        color = '#007BFF'; 
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'; // Background lebih terang
    } else {
        // Warna dark mode: neon green
        color = '#00FF99';
        ctx.fillStyle = 'rgba(31, 31, 31, 0.05)'; // Background gelap semi-transparan (efek trail)
    }

    // Menggambar background semi-transparan untuk efek trail/ghosting
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = symbolSize + 'px Roboto Mono';
    ctx.fillStyle = color;

    streams.forEach(stream => {
        const x = stream.x * symbolSize;
        const y = stream.y * symbolSize;
        
        // Pilih karakter acak
        const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Gambar karakter
        ctx.fillText(randomChar, x, y);

        // Pindahkan ke bawah
        stream.y += stream.speed;

        // Reset baris jika sudah melewati batas bawah (ditambah 10 baris agar transisi lebih mulus)
        if (stream.y * symbolSize > canvas.height + symbolSize * 10) {
            stream.y = 0;
            stream.speed = Math.random() * 0.5 + 0.5;
        }
    });

    requestAnimationFrame(drawMatrix);
}

// Tentukan x untuk setiap stream (kolom)
streams.forEach((stream, index) => {
    stream.x = index;
});

// Mulai animasi
drawMatrix(0);


// --- Theme Toggle Functionality (TETAP SAMA) ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; 

const storedTheme = localStorage.getItem('theme');
const initialTheme = storedTheme || 'dark';

if (initialTheme) {
    htmlElement.setAttribute('data-theme', initialTheme);
    if (initialTheme === 'light') {
        themeToggle.textContent = '🌑 Switch to Dark Mode';
    } else {
        themeToggle.textContent = '☀️ Switch to Light Mode';
    }
}

themeToggle.addEventListener('click', () => {
    let newTheme;
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌑 Switch to Dark Mode';
        newTheme = 'light';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Switch to Light Mode';
        newTheme = 'dark';
    }
    localStorage.setItem('theme', newTheme);
    // Panggil resize/redraw untuk memastikan warna matrix berubah
    resizeCanvas();
});


// --- Search Functionality (TETAP SAMA) ---
function searchTable() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("repoSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("awesomeTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        
        for (j = 0; j <= 3; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}

// --- Sorting Functionality (TETAP SAMA) ---
var sortDirection = {};

function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("awesomeTable");
    switching = true;

    if (sortDirection[columnIndex] === undefined) {
        sortDirection[columnIndex] = "asc";
    } else {
        sortDirection[columnIndex] = sortDirection[columnIndex] === "asc" ? "desc" : "asc";
    }
    
    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

            var xValue = x.innerHTML;
            var yValue = y.innerHTML;

            if (columnIndex === 2) {
                xValue = parseInt(xValue.replace('⭐', '').trim());
                yValue = parseInt(yValue.replace('⭐', '').trim());
            }

            if (sortDirection[columnIndex] === "asc") {
                if (xValue > yValue) {
                    shouldSwitch = true;
                    break;
                }
            } else if (sortDirection[columnIndex] === "desc") {
                if (xValue < yValue) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
