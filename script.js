const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = colorBox.style.backgroundColor === 'blue' ? 'pink' : 'blue';
  });
  
