# WDP3 exercise 04: CSS basics

## Tasks

Download project structure (starter package) from E-Learning. Open files in a text editor and the browser.

### Build an HTML form

Open the `contact.html` file in your code editor and in the browser. We are going to add a contact form to the first content section including fields for a name, email, phone and a general message. The name and email fields should be required.

Every form starts with the `form` tag, an action, and a method attribute. In our case, we don't need the action for now, as we won't do anything with the data.

```html
<form action="" method="POST">
  <!-- TODO: form fields -->
</form>
```

> Every form input should always have a label for UX and accessibility reasons.

Let's add an input field for the name:

```html
<form action="" method="POST">
  <label for="name-input">Name</label>
  <input id="name-input" type="text" name="name" required />
  <!-- TODO: more form fields -->
</form>
```

**Task:** Add inputs with labels for email and phone. Note that there are special `types` for these fields.

For the message we use a `textarea` instead of an `input` tag. The initial size can be controlled by the `rows` or `cols` attributes and later by using CSS. The `textarea` tag requires a closing tag. The content of the element would be shown as initial text content within the textarea.

```html
<form action="" method="POST">
  <label for="name-input">Name</label>
  <input id="name-input" type="text" name="name" required />

  <!-- TODO: email and phone fields -->

  <label for="message-input">Message</label>
  <textarea id="message-input" name="message" rows="4"></textarea>
</form>
```

**Task:** The last missing part is a submit button. You can either use an `input` of type `submit` or a `button` element. The only difference is that a button has content. This could be used to add an additional icon next to the text for example.

#### Submitting the form & dev tools

Click the submit button without filling out any of the form fields and note the built in validation of the browser that tells you which fields are required.

Open the developer tools and navigate to the network tab. Submit the form with data and find the form data via dev tools. Change the method from `POST` to `GET` and see the difference.

### CSS basics

**Task:** Link to the CSS file in your HTML files using the `link` element in the `head` of all three pages.

**Task:** Set a background color for the `body` to check whether linking worked. Remove the background color again, unless you like looking at a very red page.
```css
  body {
    background-color: red;
  }
```

Let's define some base styles using _type selectors_. Set a font color (`color` property) for the body, choose another color for the headlines (use the colors defined in the CSS file already or select your own favorite ones). We’re making use of _CSS inheritance_ here. We don't have to define the color for each possible element but can set this style for the body which is then inherited by its descendants.

```css
body {
  color: #242424; /* Is inherited by the body's descendatns */
}
```

**Task**: Define a color for the headlines (from `h1` to `h6`). Use grouping of CSS selectors so you don't need to write a separate rule for each headline.

Next, we change the default font family for the body. I used `Helvetica, Arial, sans-serif` as value for the body font. For the headlines I looked up a monospace font on [Google Font](https://fonts.google.com); this will also be used for the ASCII images on the gallery page, so we need a font where all characters have the same width.

#### Including a Google Font

There are different ways how to include a Google Font (or any other web font). For performance reasons it’s always best to self-host the font files. So you download the files, add them to your project (e.g. in `assets/fonts`) and embed them in your CSS file using the `@font-face` at-rule CSS offers. Here is a very [nice tutorial about including custom web fonts](https://www.internetingishard.com/html-and-css/web-typography/) with a more detailled explanation.

```css
@font-face {
  font-family: 'VT323';
  src: url('assets/VT323-regular.woff') format('woff');
}
```

To speed things up for the exercise, we will just add the imports provided by Google. Add the code snippet to the `head` of all HTML files.

```html
<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
```

This snippet is provided by Google for all their webfonts. You can then use the font like this:

```css
h1 {
  font-family: 'VT323', monospace;
}
```

It's always good when links can be easily distinguished from the rest of the text. Users expect them to have a different color or are underlined or both.

**Task:** Update the styling of links and don't forget the `hover` state (use a CSS pseudo class for that).

**Task:** Use the `background-color` property and define different colors for the `header` and the `footer`. I used the "main color" for the header and the "main color (light)" for the footer (find the values in the given CSS file in the comment on top).

**Task:** Change the `text-alignment` for header and footer.

#### More CSS pseudo classes

There are some very useful CSS pseudo classes to achieve things like "every second section should get a different background color". This is how I would write this in CSS:

```css
section:nth-child(2n) {
  background-color: #efefef;
}

/* or */

section:nth-child(even) {
  background-color: #efefef;
}
```

#### Adding classes to the HTML code and using class selectors

Let’s have a look at our main navigation. This element should be prominent for the user to find. I want the link text to have uppercase letters and the currently active page should have a different styling.

We could use type selectors again like this:

```css
nav a {
  /* add link styles here */
}
```

But imagine when we update our site and add another navigation somewhere else (e.g. to the footer). Then these styles would apply there as well. In this case we want to be more explicit, so we need to update our HTML code first and add some classes:

```html
<nav class="main-nav">
  <a href="./index.html" class="nav-link">Gallery</a>
  <a href="./about.html" class="nav-link">About</a>
  <a href="./contact.html" class="nav-link">Contact</a>
</nav>
```

Then we can add styles only for the main navigation in the CSS by using class selectors:

```css
.main-nav {

}

.nav-link {

}
```

**Task:** The main nav items should have uppercase text, should be blue ("highlight color") and underlined and on hover the underline should go away and the color should switch to our "accent color".

To highlight the current page, we can add an additional class to the respective menu item (to the index item on the index page, to the about item on the about page,…):

```html
<a href="./index.html" class="nav-link is-active">Gallery</a>
```

In CSS you can now add styles to a navigation link that is active by combining the two classes (without a space between the selectors!):

```css
.nav-link.is-active {
  /* styles go here */
}
```

#### List styles

You can update the list styles for the lists on the about and the gallery pages. Change the color of the markers (e.g. to the "accent color") by using the `li::marker` selector.

**Task:** On the gallery page, remove the list markers (list style), decrease the font size of the ASCII images (this must be really small depending on the font; when using the "VT323" Google font from above, about `4px` is a good size), and also decrease the font size of the image’s meta data a bit.