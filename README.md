# SnapDecode

SnapDecode is a web application designed to effortlessly convert images into text using Optical Character Recognition (OCR) technology. This tool is perfect for users looking to quickly digitize written content from screenshots, photos, and scanned documents without the need for manual typing. Built with modern web technologies, SnapDecode offers a straightforward interface for uploading images and retrieving the recognized text.

## Features

- **Image Upload:** Users can upload images in various formats (JPG, PNG, etc.) to be processed.
- **Live Preview:** Immediately view the uploaded image within the application.
- **Text Extraction:** Utilize Tesseract.js, a powerful OCR library, to extract text from images.
- **Responsive Design:** Built using TailwindCSS, the application is fully responsive and accessible on various devices.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the latest version of [Node.js](https://nodejs.org/) installed on your machine. This project uses Tesseract.js, which requires Node.js to function.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your_username_/SnapDecode.git
   ```
2. Navigate to the project directory:
   ```sh
   cd SnapDecode
   ```
3. There's no need for additional installation steps as the project relies on client-side JavaScript and CDN-hosted libraries.

### Running the Application

Open the `index.html` file in a modern web browser to launch SnapDecode.

## Usage

1. **Choose an Image:** Click on the "Choose File" button and select an image from your device.
2. **Preview the Image:** The selected image will be displayed in the preview area.
3. **Process the Image:** Click on the "Process Screenshot" button to start the OCR process. The recognized text will appear in the text area below the button.

## Built With

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - The markup language used
- [TailwindCSS](https://tailwindcss.com/) - The CSS framework used
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The programming language used
- [Tesseract.js](https://tesseract.projectnaptha.com/) - The OCR library used


## License

Distributed under the MIT License. See `LICENSE` for more information.
