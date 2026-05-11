# Spots - Adaptive Social Media Feed

A responsive, adaptive social media image-sharing application designed to showcase a grid of travel and nature photography with a clean, modern user interface.

---

## 📸 Project Overview
**Spots** is a front-end web application that allows users to view a curated collection of social media posts. The project focuses on a scalable interactive design, ensuring that the profile information and image gallery adapt seamlessly to various screen sizes, from high-resolution desktops to mobile smartphones. 

SEO & Future Features: 

SEO compliant page title, meta description limited to 160 characters or less to avoid truncating content in the rich snippet search engine listings. Keyword meta-still used by some search engines for ranking. SEO compliant H-tags, heading tags.

Schema Markup JSON-LD: 

Key Schema Elements Used:
Application Details: Defines "SPOTS" as a WebApplication, highlighting the CSS Grid layout and mobile-first approach.

Author Integration: Uses the Software Engineer URL and title to verify the Software Engineer as the creator.

Bessie Coleman Context: Correctly identifies her as a "Civil Aviator" within the application's profile context.

Technical Features: Explicitly lists BEM methodology and HTML5 to improve search engine understanding of the code quality.

Future Plans:

Implementing an Admin page accessed by user login providing color pallete control and SEO related content editing: ie; page title, meta description, focus keywords making changes to SEO related content easy for a website Admin to implement as the website user base and page content grows.



### Key Features
* **Adaptive Grid Layout**: A dynamic gallery that transitions from 3 columns on desktop to 2 columns tablet view and 1 column on mobile. [cite: card.css]
* **Interactive UI**: Hover effects on like buttons and profile edit icons. [cite: card.css, profile.css]
* **Text Overflow Control**: Robust CSS handling for long titles and descriptions using ellipsis and multi-line clamping. [cite: card.css, profile.css]
* **Polished Typography**: Utilizes the 'Poppins' font family for a professional, accessible aesthetic. [cite: page.css]

---

## 🛠️ Technologies & Techniques

### Core Technologies
* **HTML5**: Semantic structure for accessibility and SEO. [cite: index.html]
* **CSS3**: Custom styling using the BEM (Block Element Modifier) methodology for maintainable code. [cite: header.css, card.css, profile.css, page.css]
* **JavaScript**: Integrated for future dynamic functionality and interactivity. [cite: index.html]

### Techniques Used
* **Flexbox & Grid**: Utilized `display: flex` for profile alignment and `display: grid` with `grid-template-areas` for the image gallery. [cite: profile.css, card.css]
* **Responsive Web Design (RWD)**: Implemented `@media` queries to reorganize the layout at breakpoints like `1320px` and `630px`. [cite: card.css, profile.css]
* **Advanced CSS**:
    * `aspect-ratio`: To maintain perfectly square images. [cite: card.css]
    * `object-fit: cover`: To prevent image distortion. [cite: card.css, profile.css]
    * `transition`: For smooth opacity changes on interactive elements. [cite: card.css, profile.css]

---

## 🖼️ Project Gallery

### Desktop View
*(Placeholder for Desktop Screenshot)*
> A 3-column grid showcasing large image cards with integrated like buttons. [cite: card.css]

### Tablet/Mobile View
*(Placeholder for Mobile Screenshot)*
> Stacked profile components and a single-column layout optimized for touch interaction. [cite: profile.css, card.css]

---

## 🚀 Live Demo
You can view the deployed project here:
**[Spots Live on GitHub Pages](https://michael-kiger.github.io/se_project_spots/)**

---

## 👤 Author
**Michael Kiger** [cite: index.html]
* *Project developed in 2026.* [cite: index.html]
