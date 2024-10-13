document.getElementById('generateVectorsBtn').addEventListener('click', function() {
    const size = document.getElementById('size').value;
    const vector1 = document.getElementById('vector1');
    const vector2 = document.getElementById('vector2');
    
    vector1.innerHTML = '';
    vector2.innerHTML = '';

    for (let i = 0; i < size; i++) {
        vector1.innerHTML += `<input type="number" name="vector1[]" required>`;
        vector2.innerHTML += `<input type="number" name="vector2[]" required>`;
    }

    document.getElementById('vectorContainer').style.display = 'block';
});
