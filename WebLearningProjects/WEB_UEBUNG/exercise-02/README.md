# WDP3 exercise 02: HTML basics

## Tasks

### Getting familiar with reading HTML

1. Download project structure (starter package) from E-Learning.
2. Have a look at the three HTML files: open the files in a text editor (e.g. VS Code) and the `index.html` file in a browser (e.g. Google Chrome).
3. Remember the basic structure of an HTML file:
  - A doctype: `<!DOCTYPE html>`
  - The root element: `<html>` with the `lang` attribute to set the document’s language
  - The head and body: `<head>` for the metadata, `<body>` for the content
  - The head contains information about the used characterset (`charset`) and a page title (`<title>`)
  - The body contains the webpage’s content, for now it's just an `h1` headline (a headline of level 1)

### Getting familiar with writing HTML

1. Add basic HTML tags to the page to structure the content. Parts that all three pages (index, about, contact) have in common are: a navigation, a header, a main content area, and a footer. (You can start writing the code in the index file first and then copy-paste it to the other files.)
2. Add a list of links to the navigation including links to the other pages of our mini website.
3. Add an `h1` headline to the header.
4. Add some text and two links to imaginary sites (Impressum, Privacy policy) to the footer.
5. Fill the main content section of the "contact page" with content: use the address tag, links (`mailto`, `tel`), line breaks,…
6. (homework) Fill the main content section of the "about page" with content: use sections, headlines, paragraphs, lists, images (use the ones from the assets folder)…

## Homework (optional)

1. Make sure that your HTML structure is ready for the next exercise. Add missing pages, sections and content (see text templates below).
2. Use the [W3C Validator](https://validator.w3.org) and check the code of all three HTML pages. Write all errors and warnings down in a text file and fix them in the HTML files.


## Helpful resources

- [A quick introduction to HTML](https://html.spec.whatwg.org/multipage/introduction.html#a-quick-introduction-to-html) – WHATWG
- [Markup validation service](https://validator.w3.org) – W3C
- [Tutorial: Let’s Get Started With Web Development](https://www.scale.at/blog/lets-get-started) – scale
- [Tutorial: Building a Small Website – First Steps](https://www.scale.at/blog/building-a-small-website) – scale
- [Basic web pages – Interneting is hard](https://www.internetingishard.com/html-and-css/basic-web-pages/) – Interneting is hard
- [Links and images – Interneting is hard](https://www.internetingishard.com/html-and-css/links-and-images/) – Interneting is hard

## Text templates

Instead of coming up with your own text ideas you can use the following to fill your webpage with some content.

### Footer

This app was built with love in Hagenberg, Upper Austria.

### Title & subtitle

**index**: Welcome to "Ascii School", Upload your favorite images and transform them to ASCII art. This application was built at FH Hagenberg during the WDP3 exercise.

**about**: About "Ascii School", This project was built during the WDP3 exercises at FH Hagenberg.

**contact**: Contact, Contact the author of the page.

### About page content

**Section 1**

Headline: The goal
Introduction: This project was built during the WDP3 exercises at FH Hagenberg. The main focus of the project is getting familiar with web frontend technologies like HTML, CSS, and JavaScript.

Subheadline: Project steps and ToDos
List of tasks:
- HTML setup: gallery page (homepage), about, contact page
- Gallery page: render data from web storage, implement like button
- Contact page: contact form and basic styling with CSS
- Form validation and image transformation (image to ASCII art)
- CSS Layout
- Image upload, store image in local storage, store metadata
- CSS refinement
- Geolocation, drag & drop

**Section 2**

Headline: What is Ascii
Text: ASCII, abbreviated from American Standard Code for Information Interchange, is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices. Most modern character-encoding schemes are based on ASCII, although they support many additional characters. Source: https://en.wikipedia.org/wiki/ASCII

Subheadline: History
Text: ASCII was developed from telegraph code. Its first commercial use was as a seven-bit teleprinter code promoted by Bell data services. Work on the ASCII standard began in May 1961, with the first meeting of the American Standards Association's (ASA) (now the American National Standards Institute or ANSI) X3.2 subcommittee. The first edition of the standard was published in 1963, underwent a major revision during 1967, and experienced its most recent update during 1986. Compared to earlier telegraph codes, the proposed Bell code and ASCII were both ordered for more convenient sorting (i.e., alphabetization) of lists and added features for devices other than teleprinters. Source: https://en.wikipedia.org/wiki/ASCII#Overview

**Section 3**

Headline: The authors

Title: Minerva McGonagall
Text: Professor McGonagall is a professor at Hogwarts School for Witchcraft and Wizardry and is the head of Gryffindor House and professor of Transfiguration, as well as being the Deputy Headmistress under Albus Dumbledore and a member of the Order of the Phoenix.

Title: Severus Snape
Text: Severus Snape is the Potions Master at Hogwarts School for Witchcraft and Wizardry, though he is widely rumoured to covet the Defence Against the Dark Arts post.

> Images can be found in the assets folder.
