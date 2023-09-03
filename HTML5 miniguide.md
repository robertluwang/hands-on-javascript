# HTML5 miniguide

Copyright © 2023 by Robert Wang

In this miniguide, we'll explore HTML5, the latest version of the Hypertext Markup Language. HTML5 introduces new features and improvements for building modern and interactive web pages. Let's dive in!

## Table of Contents

- [Introduction to HTML5](#introduction-to-html5)
- [Setting Up Your Environment](#setting-up-your-environment)
- [Document Structure in HTML5](#document-structure-in-html5)
- [HTML5 Elements](#html5-elements)
- [Multimedia in HTML5](#multimedia-in-html5)
- [Forms in HTML5](#forms-in-html5)
- [Canvas and SVG Graphics](#canvas-and-svg-graphics)
- [Web Storage](#local-storage-and-web-storage)
- [Geolocation](#geolocation)
- [Drag and Drop](#drag-and-drop)
- [Web Workers](#web-workers)
- [Best Practices for HTML5](#best-practices-for-html5)
- [Further Reading](#further-reading)
- [Conclusion](#conclusion)

## Introduction to HTML5

HTML5 is the latest version of the Hypertext Markup Language used to structure content on the web. It introduces new elements, attributes, and APIs for enhanced web development.

## Setting Up Your Environment

To write HTML5, you need a code editor. Create an HTML5 document:

html5-hello.html
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello HTML5</title>
</head>
<body>
    <!-- Your content goes here -->
    <p>Hello HTML5!</p>
</body>
</html>
```

- `<!DOCTYPE html>`: Declares HTML5.
- `<meta charset="UTF-8">`: Specifies character encoding.
- `<title>`: Sets the page title.

## Document Structure in HTML5

HTML5 simplifies the document structure:

html5-doc.html
```html
<header>
    <h1>Main Heading</h1>
</header>
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
    </article>
</main>
<footer>
    &copy; 2023 YourWebsite.com
</footer>
```

## HTML5 Elements

Semantic elements for content structure:

- `<header>`
- `<nav>`
- `<main>`
- `<article>`
- `<footer>`

## Multimedia in HTML5

Embed audio and video:

html5-av.html
```html
<!DOCTYPE html>
<html>
<body>

<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

<video controls width="320" height="240">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video element.
</video>

</body>
</html>
```

## Forms in HTML5

Use new input types:

html5-form.html
```html
<!DOCTYPE html>
<html>
<body>

<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="birthdate">Birthdate:</label>
    <input type="date" id="birthdate" name="birthdate">
    
    <input type="submit" value="Submit">
</form>

</body>
</html>
```

## Canvas and SVG Graphics

Draw with the `<canvas>` element or use SVG:

html5-canvas.html
```html
<!DOCTYPE html>
<html>
<body>

<canvas id="myCanvas" width="200" height="100"></canvas>

<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>

</body>
</html>
```

## Web Storage
Web storage is a web browser feature introduced in HTML5 that allows web applications to store data on the client-side, which means data is saved locally in the user's browser. This data persists even after the user closes the browser tab or navigates away from the website. Web storage provides two main mechanisms for storing data: localStorage and sessionStorage.

**localStorage**:

localStorage allows you to store key-value pairs in the user's browser with no expiration time.
The data stored in localStorage remains available even after the user closes the browser and returns to the website at a later time.
It is typically used for storing user preferences, settings, and other data that should persist between browser sessions.
The data is accessible across different browser windows and tabs as long as they are part of the same domain.

**sessionStorage**:

sessionStorage is similar to localStorage but with a shorter lifespan.
Data stored in sessionStorage is available only during the lifetime of the page session. When the user closes the browser tab or navigates away from the page, the data is discarded.
It is often used for temporarily storing data that is needed for a specific session, such as form data or user interactions within a single page.
Like localStorage, sessionStorage is also domain-specific and accessible across different browser tabs/windows from the same origin.

Here is local storage sample code.

html5-storage.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Web Storage Example</title>
</head>
<body>
    <h1>Web Storage Example</h1>
    
    <input type="text" id="inputText" placeholder="Enter a message">
    <button onclick="saveData()">Save</button>
    <button onclick="displayData()">Display Saved Data</button>

    <p id="output"></p>

    <script>
        // Function to save data to localStorage
        function saveData() {
            const inputData = document.getElementById('inputText').value;
            localStorage.setItem('userMessage', inputData);
            document.getElementById('inputText').value = ''; // Clear input field
        }

        // Function to display saved data from localStorage
        function displayData() {
            const savedData = localStorage.getItem('userMessage');
            if (savedData) {
                document.getElementById('output').textContent = 'Saved Message: ' + savedData;
            } else {
                document.getElementById('output').textContent = 'No data saved.';
            }
        }
    </script>
</body>
</html>
```

## Geolocation
HTML5 Geolocation is an API that allows web applications to access the user's geographical location information using their device's GPS or other location sources (like Wi-Fi or IP address). It provides the latitude and longitude coordinates of the user's device, enabling web applications to offer location-based services or tailor content based on the user's location.

html5-geo.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Geolocation Example</title>
</head>
<body>
    <h1>Geolocation Example</h1>
    
    <p>Click the button to get your current location:</p>
    <button onclick="getLocation()">Get Location</button>

    <p id="location"></p>

    <script>
        // Function to get the user's current location
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                document.getElementById('location').innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        // Function to display the user's location
        function showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById('location').innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
        }

        // Function to handle geolocation errors
        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    document.getElementById('location').innerHTML = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    document.getElementById('location').innerHTML = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    document.getElementById('location').innerHTML = "The request to get user location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    document.getElementById('location').innerHTML = "An unknown error occurred.";
                    break;
            }
        }
    </script>
</body>
</html>
```

## Drag and Drop

Implement drag-and-drop functionality:

html5-drag.html
```html
<!DOCTYPE html>
<html>
<body>

<div id="draggable" draggable="true">Drag me!</div>
<div id="droppable">Drop here!</div>

<script>
    const draggable = document.getElementById('draggable');
    const droppable = document.getElementById('droppable');
    
    draggable.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', 'Dragged item');
    });

    droppable.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    droppable.addEventListener('drop', (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        droppable.textContent = data;
    });
</script>

</body>
</html>
```

## Web Workers
HTML Web Workers are a valuable feature in web development that allows you to run JavaScript code in the background, separate from the main thread of your web page. Web Workers are particularly useful for performing CPU-intensive tasks, running scripts without blocking the user interface, and improving the overall performance of web applications.

html5-webworker.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Web Worker Example with Blob URL</title>
</head>
<body>
    <h1>Web Worker Example with Blob URL</h1>
    
    <p>Click the button to start a background task:</p>
    <button onclick="startWorker()">Start Worker</button>
    <p id="result"></p>

    <script>
        function startWorker() {
            const workerCode = `
                self.addEventListener('message', function(event) {
                    const message = event.data;
                    self.postMessage('Worker received: ' + message);
                });
            `;

            const blob = new Blob([workerCode], { type: 'application/javascript' });
            const workerURL = URL.createObjectURL(blob);
            const worker = new Worker(workerURL);

            worker.postMessage('Hello from the main thread!');
            
            worker.onmessage = function(event) {
                document.getElementById('result').textContent = event.data;
                URL.revokeObjectURL(workerURL); // Clean up the Blob URL
            };
        }
    </script>
</body>
</html>
```

## Best Practices for HTML5

- Use semantic elements.
- Optimize multimedia content.
- Ensure cross-browser compatibility.
- Follow accessibility guidelines.

## Further Reading
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): Comprehensive HTML documentation from Mozilla.

- [W3Schools HTML Tutorial](https://www.w3schools.com/html/): Interactive tutorials and examples for HTML.

- [HTML5 Doctor](http://html5doctor.com/): Articles and tips on using HTML5 effectively.

## Conclusion

HTML5 opens up exciting possibilities for web development. Continue experimenting and building amazing web applications.

