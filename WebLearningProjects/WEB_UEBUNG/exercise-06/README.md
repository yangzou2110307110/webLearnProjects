# WDP3 exercise 05: CSS box model & CSS layouts

## Tasks

Download project structure (starter package) from E-Learning. Open files in a text editor and the browser.

### Layout basics

1. Add the viewport meta tag to your HTML files: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
2. Add `box-sizing: border-box` to your CSS file for all elements
3. Add a `div` element with the class `content-container` to all sections to limit the content width to 700-800px.
   ```css
   .content-container {
     max-width: 800px;
   }
   ```
4. Add margins and paddings to your sections to give the content more "space to breathe".

### Style the contact form using CSS grid

On small screens the grid should have one column, on larger screens the grid should have two columns. The left column is for the input field labels, the right one for the input fields.  The first column should be half the size of the second column.

The submit button should be placed on the bottom right of the form.

(See preview images `form-1col` and `form-2col`.)

### Use CSS grid for the gallery on the homepage

Make a responsive gallery grid: one column on small screens and up to three columns as soon as there's enough space. Use media queries for the breakpoints or use a combination of the `repeat` and `minmax` function and the `auto-fit` keyword when defining `grid-template-columns`.

(See preview images `gallery-1col`, `gallery-2col`, and `gallery-3col`.)

### Use CSS flexible box layout for the navigation

On small screens the navigation should be stacked in column direction, on larger screens in row direction (use media queries for the breakpoint). The first navigation entry should be on the left of the screen, the others to the right. (The first entry should take up all the remaining available space…)

(See preview images `nav-small-screens` and `nav-large-screens`.)

### Use CSS flexible box layout and CSS grid layout for the authors

The authors on the about page consist of a title, an image and some text.
  - On small screens the text should be above the image and the image should be below the text. The image should never be larger than its container (use the `max-width` property).
  - On larger screens the image should be on the left side of the text and have a maximum width of 400px. 
  - Between the image and the text should be a bit of spacing.

Use flexbox layout for the first author and grid layout for the second one.

### Style inputs and buttons

Use the following CSS properties to style the input fields and buttons:
- border
- padding
- background-color
- color

Don’t forget to style `:hover` and `:focus` states of interactive elements!

```css
button {
   /* add styles */
}

button:hover {
   /* add styles */
}

button:focus {
   /* add styles */
}
```

## Helpful resources

- [The CSS box model](https://www.internetingishard.com/html-and-css/css-box-model/) – Interneting is hard
- [Flexbox](https://www.internetingishard.com/html-and-css/flexbox/) – Interneting is hard
- [A complete guide to grid](https://css-tricks.com/snippets/css/complete-guide-grid/) – CSS Tricks
- [A complete guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) – CSS Tricks