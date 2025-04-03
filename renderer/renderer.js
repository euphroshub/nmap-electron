const scanButton = document.getElementById('scanButton');
const targetInput = document.getElementById('target');
const resultsDiv = document.getElementById('results');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');

scanButton.addEventListener('click', async () => {
    const target = targetInput.value.trim();
    if (!target) {
        showError('Please enter a target IP or hostname');
        return;
    }

    try {
        scanButton.disabled = true;
        loadingDiv.style.display = 'block';
        errorDiv.style.display = 'none';
        resultsDiv.textContent = '';

        const results = await window.electronAPI.scan(target);
        if (results.success) {
            resultsDiv.textContent = results.output;
        } else {
            showError(results.error || 'An error occurred during the scan');
        }
    } catch (error) {
        showError(error.message || 'An error occurred during the scan');
    } finally {
        scanButton.disabled = false;
        loadingDiv.style.display = 'none';
    }
});

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}
