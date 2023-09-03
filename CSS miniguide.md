# CSS miniguide

Copyright © 2023 by Robert Wang

## Introduction to CSS

### What is CSS?
CSS, or Cascading Style Sheets, is a language used for describing the look and formatting of a document written in HTML. It allows you to control the appearance of web pages, including layout, colors, and fonts.

### Why Use CSS?
- **Separation of Concerns**: CSS separates the content (HTML) from its presentation (styling), making it easier to maintain and update websites.
- **Consistency**: CSS ensures a consistent look and feel across all pages of a website.
- **Responsive Design**: CSS helps create responsive designs that adapt to different screen sizes and devices.
- **Reusability**: Styles defined in CSS can be reused throughout a website.

## Basic CSS Syntax

### CSS Rules
A CSS rule is made up of a **selector** and a **declaration block**.

- **Selector**: Identifies the HTML element(s) you want to style.
- **Declaration Block**: Contains one or more **property-value pairs** enclosed in curly braces `{}`.

```css
/* CSS Rule Example */
selector {
    property: value;
    /* More properties */
}
```

**Sample Code:**

```css
/* Styling heading elements */
h1 {
    color: blue;
    font-size: 24px;
}
```

## CSS Properties

### Color Properties
- `color`: Sets the text color.
- `background-color`: Sets the background color.

**Sample Code:**

```css
/* Styling paragraphs with color and background color */
p {
    color: #333;
    background-color: #f5f5f5;
}
```

### Text Properties
- `font-family`: Defines the font family for text.
- `font-size`: Sets the font size.
- `font-weight`: Specifies the font weight (e.g., bold).
- `text-align`: Aligns text (e.g., left, center, right).

**Sample Code:**

```css
/* Styling text with font properties */
p {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}
```

### Box Properties
- `width` and `height`: Sets the dimensions of elements.
- `margin` and `padding`: Defines spacing around elements.
- `border`: Creates a border around elements.

**Sample Code:**

```css
/* Styling a container with box properties */
.container {
    width: 300px;
    height: 200px;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ddd;
}
```

### Display and Positioning
- `display`: Determines how an element is displayed (e.g., block, inline).
- `position`: Controls the positioning of elements (e.g., relative, absolute).

**Sample Code:**

```css
/* Styling a navigation menu with display and position */
.nav-menu {
    display: inline-block;
    position: relative;
    top: 10px;
    left: 20px;
}
```

### Responsive Design
- `media queries`: Allows styles to adapt to different screen sizes.

**Sample Code:**

```css
/* Media query for responsive design */
@media (max-width: 768px) {
    /* Styles for screens smaller than 768px */
    .container {
        width: 100%;
    }
}
```

## CSS Selectors

### Type Selectors
Selects elements of a specific type (e.g., `h1`, `p`).

**Sample Code:**

```css
/* Styling all paragraphs */
p {
    font-weight: normal;
}
```

### Class Selectors
Selects elements with a specific class attribute (e.g., `.btn`).

**Sample Code:**

```css
/* Styling buttons with a specific class */
.btn {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
}
```

### ID Selectors
Selects a unique element with a specific ID attribute (e.g., `#header`).

**Sample Code:**

```css
/* Styling a header with a specific ID */
#header {
    font-size: 28px;
    text-align: center;
}
```

### Descendant Selectors
Selects elements that are descendants of a specific element (e.g., `ul li` selects `li` elements within `ul`).

**Sample Code:**

```css
/* Styling list items within an unordered list */
ul li {
    list-style-type: square;
}
```

### Pseudo-classes and Pseudo-elements
- `:hover`, `:active`: Apply styles to elements in specific states.
- `::before`, `::after`: Add content or style to elements.

**Sample Code:**

```css
/* Styling links on hover */
a:hover {
    color: red;
}

/* Adding content before paragraphs */
p::before {
    content: "→ ";
    font-weight: bold;
}
```

## CSS Box Model

The CSS Box Model describes how elements are structured:

- **Content**: The actual content (text, images) of the element.
- **Padding**: Space between the content and the element's border.
- **Border**: A visible border around the element.
- **Margin**: Space outside the element, creating separation from other elements.

**Sample Code:**

```

css
/* Styling a box with padding, border, and margin */
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid #000;
    margin: 10px;
}
```

## CSS Layout

### Display Property
- `display: block`: Elements are displayed as blocks and stack vertically.
- `display: inline`: Elements are displayed inline and flow horizontally.

**Sample Code:**

```css
/* Styling block-level and inline-level elements */
.block-element {
    display: block;
}
.inline-element {
    display: inline;
}
```

### Position Property
- `position: relative`: Elements are positioned relative to their normal position.
- `position: absolute`: Elements are positioned relative to the nearest positioned ancestor.

**Sample Code:**

```css
/* Positioning elements relatively and absolutely */
.relative-element {
    position: relative;
    top: 10px;
    left: 20px;
}
.absolute-element {
    position: absolute;
    top: 0;
    right: 0;
}
```

### Flexbox
- `display: flex`: Creates flexible containers for distributing space among child elements.

**Sample Code:**

```css
/* Using Flexbox for layout */
.flex-container {
    display: flex;
    justify-content: space-between;
}
```

### Grid
- `display: grid`: Creates grid layouts with rows and columns.

**Sample Code:**

```css
/* Creating a grid layout */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

## CSS Transitions and Animations

### Transition
- `transition`: Smoothly transitions properties over time.

**Sample Code:**

```css
/* Adding transitions to buttons */
.button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    transition: background-color 0.3s ease-in-out;
}
.button:hover {
    background-color: #e74c3c;
}
```

### Animation
- `@keyframes`: Defines animations using keyframes.

**Sample Code:**

```css
/* Creating a slide-in animation */
@keyframes slide-in {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
}

.slide {
    animation: slide-in 1s ease-in-out;
}
```

## Complete demo in CSS

This demo includes styling for headings, paragraphs, buttons, a navigation menu, box model properties, layout techniques, and transitions.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My CSS Website</title>
    <style>
        /* Basic CSS Syntax */
        h1 {
            color: blue;
            font-size: 24px;
        }

        /* Color Properties */
        p {
            color: #333;
            background-color: #f5f5f5;
        }

        /* Text Properties */
        .special-text {
            font-family: Arial, sans-serif;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
        }

        /* Box Properties */
        .box {
            width: 200px;
            height: 100px;
            padding: 20px;
            border: 2px solid #000;
            margin: 10px;
        }

        /* Styling for block-level elements */
        .block-element {
            display: block;
            background-color: #3498db;
            color: #fff;
            padding: 10px;
            margin: 10px;
        }

        /* Styling for inline-level elements */
        .inline-element {
            display: inline;
            background-color: #e74c3c;
            color: #fff;
            padding: 5px;
            margin: 5px;
        }

        /* Position Property */
        .relative-element {
            position: relative;
            top: 20px;
            left: 40px;
        }

        .flexbox-container {
            display: flex;
            flex-wrap: wrap; /* Allow items to wrap to the next line */
            justify-content: center; /* Center items along the main axis */
            align-items: center; /* Center items along the cross axis */
            height: 400px; /* Set a fixed height for the container */
            border: 2px solid #333;
            margin: 20px;
            padding: 10px;
        }

        /* Flex items styles */
        .flexbox-item {
            flex: 1; /* Allow items to grow and shrink equally */
            min-width: 150px; /* Minimum width for items */
            max-width: 300px; /* Maximum width for items */
            height: 100px; /* Fixed height for items */
            margin: 10px; /* Spacing between items */
            text-align: center;
            background-color: #3498db;
            color: #fff;
            font-weight: bold;
            display: flex;
            justify-content: center; /* Center text horizontally */
            align-items: center; /* Center text vertically */
        }

        /* Custom styles for specific items */
        .flexbox-item:nth-child(2n) {
            background-color: #e74c3c;
        }

        /* Media query for responsiveness */
        @media (max-width: 768px) {
            .flexbox-container {
                flex-direction: column; /* Switch to a column layout on smaller screens */
            }
        }

        /* Grid */
        /* Define a grid container */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* Create 3 columns with equal width */
            grid-gap: 20px; /* Add spacing between grid items */
        }

        /* Style for grid items */
        .grid-item {
            background-color: #3498db;
            color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 18px;
            border: 1px solid #333;
        }

        /* Transitions */
        .button {
            background-color: #3498db;
            color: #fff;
            padding: 10px 20px;
            transition: background-color 0.3s ease-in-out;
        }
        .button:hover {
            background-color: #e74c3c;
        }

        .slide-in-element {
            width: 200px;
            height: 100px;
            background-color: #3498db;
            color: #fff;
            text-align: center;
            line-height: 100px;
            font-size: 18px;
            position: relative;
            left: -100%; /* Start the element outside the viewport */
            animation: slide-in 1s ease-in-out forwards; /* Apply the animation */
        }

        /* Keyframes for the slide-in animation */
        @keyframes slide-in {
            0% {
                left: -100%; /* Start position (outside the viewport) */
            }
            100% {
                left: 0; /* End position (slide in to the original position) */
            }
        }
    </style>
</head>
<body>
    <!-- Heading -->
    <h1>Welcome to My CSS Website</h1>

    <!-- Paragraphs -->
    <p>This is a simple website demo to showcase CSS concepts.</p>
    <p class="special-text">Explore our content and styles.</p>

    <!-- Box Model -->
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>

    <!-- Block-level elements -->
    <div class="block-element">Block Element 1</div>
    <div class="block-element">Block Element 2</div>
    <div class="block-element">Block Element 3</div>

    <!-- Inline-level elements -->
    <span class="inline-element">Inline Element 1</span>
    <span class="inline-element">Inline Element 2</span>
    <span class="inline-element">Inline Element 3</span>

    <!-- Position Property -->
    <div class="relative-element">Relative Positioning</div>

    <!-- Flex container with row layout -->
    <div class="flexbox-container">
        <div class="flexbox-item">Item 1</div>
        <div class="flexbox-item">Item 2</div>
        <div class="flexbox-item">Item 3</div>
        <div class="flexbox-item">Item 4</div>
        <div class="flexbox-item">Item 5</div>
    </div>

    <!-- Grid container with grid items -->
    <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
        <div class="grid-item">Item 5</div>
        <div class="grid-item">Item 6</div>
    </div>

    <!-- Transitions -->
    <button class="button">Hover Over Me</button>

    <!-- Element to apply the slide-in animation -->
    <div class="slide-in-element">Slide In</div>

</body>
</html>
```

## CSS Best Practices

1. **Use External Stylesheets**: Place CSS in separate external files for better organization and caching.

2. **Be Consistent**: Maintain consistent naming conventions and formatting.

3. **Use Comments**: Add comments to clarify your CSS code.

4. **Test Across Browsers**: Ensure your styles work in different web browsers.

5. **Mobile-First Design**: Start with mobile-friendly styles and add responsiveness for larger screens.

6. **Accessibility**: Consider accessibility principles when designing your styles.

## Further Reading

1. **MDN Web Docs - CSS**: [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
   - The Mozilla Developer Network (MDN) offers extensive documentation on CSS, covering everything from basic concepts to advanced techniques.

2. **CSS Tricks**: [CSS-Tricks](https://css-tricks.com/)
   - CSS-Tricks is a website dedicated to CSS, with articles, tutorials, and examples on a wide range of CSS topics.

3. **W3Schools - CSS Tutorial**: [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
   - W3Schools provides a beginner-friendly CSS tutorial with interactive examples and quizzes.

## Conclusion

CSS is a powerful tool for web designers and developers to control the visual presentation of web content. With an understanding of CSS selectors, properties, and layout techniques, you can create beautifully styled and responsive websites. Continuously practice and explore more advanced CSS features to enhance your web development skills.