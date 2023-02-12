# WDP3 exercise 08: Advanced HTML & CSS

## Tasks

Download project structure (starter package) from E-Learning. Open files in a text editor and the browser.

### Positioned layout
Use positioned layout for the decorative circles in the page headers. Add four empty `div` elements, define a size (two small and two larger circles; width and height should be the same values), and use the `border-radius` property to make them circles instead of squares.

Place them relative to the page header. Use `position: absolute` and the `top`, `right`, `bottom`, and `left` properties to find a nice position (negative values are allowed!).

You will notice, that the circles don’t stay inside the header, because the `overflow` property of elements is set to `visible` by default. Do you have an idea how to fix this?

### Responsive images

Make the author images responsive. Create a `srcset` and `sizes` attribute: use the available assets and add a sizes attribute that is closely related to your CSS code. What's the breakpoint we defined in CSS? How large will the image approximately be depending on the screen size?

Use the developer tools to check whether your code worked. Activate the device toolbar and see what happens when you change the screen size and/or the device pixel ratio (DPR) value. Note that you always need to reload the page, because once the browser loaded a large image, it doesn't additionally load a smaller one when you make the screens size smaller, which makes sense if you think about it… :)

### Custom properties

Transform all color value usages to custom properties and create a dark theme using custom property overrides and the `@media (prefers-color-scheme: dark)` media query.

### CSS finetuning

- Check spacings in sections, think about removing unnecessary margins of elements (reset some user agent styles)
- Add transitions to elements with hover states for colors (text, background, border)

The following parts are already implemented and can be found in the CSS code. Have a look and try to understand what’s going on here!

- Find usages of and play around with `width: min-content` in gallery and navigation.
- Find usage and play around with `width: clamp(...)`.
- Use a decorative underline element for the navigation items using the `::after` pseudo-element.
- Style the upload area.
- Align the "clear storage" and "load demo data" buttons next to the image gallery headline.

## Helpful resources

- [Responsive images](https://www.internetingishard.com/html-and-css/responsive-images/) – Interneting is hard
- [A guide to the responsive images syntax](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/) – CSS Tricks
- [A complete guide to custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/) – CSS Tricks
- [Building a color scheme](https://web.dev/building-a-color-scheme/) – web.dev
- [Functions in CSS: clamp](https://web.dev/learn/css/functions/#clamp()) – web.dev