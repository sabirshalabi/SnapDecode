const fileInput = document.getElementById('file-input');
const processBtn = document.getElementById('process-btn');
const outputText = document.getElementById('output-text');
const imagePreview = document.getElementById('image-preview');
const processBtnText = document.getElementById('process-btn-text');
const processBtnSpinner = document.getElementById('process-btn-spinner');

let selectedImage = null;

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        selectedImage = e.target.files[0];
        processBtn.disabled = false;
    } else {
        selectedImage = null;
        processBtn.disabled = true;
    }
    // Show image preview
    if (selectedImage) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Selected Image" class="max-h-full max-w-full object-contain">`;
        };
        reader.readAsDataURL(selectedImage);
    } else {
        imagePreview.innerHTML = 'No image selected.';
    }
});

processBtn.addEventListener('click', async () => {
    if (!selectedImage) return;

    processBtn.disabled = true;
    processBtn.textContent = 'Processing...';
    processBtnText.classList.add('hidden');
    processBtnSpinner.classList.remove('hidden');

    try {
        const { data: { text } } = await Tesseract.recognize(
            selectedImage,
            'eng',
            { logger: (m) => console.log(m) }
        );

        outputText.value = text;
    } catch (error) {
        console.error('Error during OCR processing:', error);
        outputText.value = 'Error: Unable to process the image.';
    } finally {
        processBtn.disabled = false;
        processBtn.textContent = 'Process Screenshot';
        processBtnText.classList.remove('hidden');
        processBtnSpinner.classList.add('hidden');
    }
});
