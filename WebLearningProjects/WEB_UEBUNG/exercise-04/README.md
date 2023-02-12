# WDP3 exercise 04: CSS basics

## Tasks

Download project structure (starter package) from E-Learning. Open files in a text editor and the browser.

### Build an HTML form

1. Go to the contact page
2. Add an HTML form with a name, email, and phone input and a textarea for a message.
3. Add a submit button to the form.

### CSS basics

1. Link to the CSS file in your HTML files using the `link` element in the `head` of the documents.
2. Set a background color for the `body` to check whether linking worked.
   ```css
     body {
       background-color: red;
     }
   ```
3. Define a font color (`color` property) for the body, choose another color for the headlines.
4. Define a font family (`font-family` property) for the body, and another one for the headlines (use a [Google Font](https://fonts.google.com)).
5. Define a color for links in their normal state and change styles for the `:hover` state.
6. The `header` and `footer` sections should get a different background color.
7. Every second section should get a different backgroud color (e.g. light gray instead of white). Use the `nth-child` pseudo-class selector here.
8. Change the text alignment for header and footer.
9. The active menu item should be styled differently than the others to show the user which page is currently active. You have to adjust the HTML file for that as well!
10. Change the color of the list items' markers (`li::marker` is the selector you'll need for that).
11. Update the gallery styles and make the images (i.e. the font size) much smaller; remove the list styles and decrease the font-size of the images’ metadata.

## Helpful resources

- [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) – MDN
- [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started) – MDN
- [Tutorial: Creating an Accessible Contact Form in HTML](https://www.scale.at/blog/html-forms) – scale
- [Tutorial: An Introduction to the Awesome World of CSS](https://www.scale.at/blog/css-basics) – scale
- [Hello, CSS – Interneting is hard](https://www.internetingishard.com/html-and-css/hello-css/) – Interneting is hard
