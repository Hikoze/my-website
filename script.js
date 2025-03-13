document.getElementById('questionForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const question = document.getElementById('question').value;
    
    if (!name || !question) {
        alert('Nama dan pertanyaan wajib diisi!');
        return;
    }

    try {
        const response = await fetch('https://5ee9da2c-685b-43e4-a9cf-1969dc061a76-00-x553vvpxu9eu.pike.replit.dev/send-question', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, question })
        });

        const result = await response.json();
        alert(result.message);
        
        // Optional: Clear form after submission
        document.getElementById('questionForm').reset();
    } catch (error) {
        alert('Terjadi kesalahan saat mengirim pertanyaan');
        console.error('Error:', error);
    }
});
