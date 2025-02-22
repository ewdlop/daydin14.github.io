# ChangeLog includes the following Features

- **Single-Page Application**: Built using React, providing a smooth and seamless user experience.
- **Responsive Design**: Ensures the application works well on both desktop and mobile devices.
- **Theme Toggle**: Allows users to switch between light and dark themes for better accessibility and user experience.
- **Progress Bar**: Displays a progress bar to indicate page status or length down the page.
- **Google Maps Integration**: Embeds Google Maps for county-based location features and services.
- **Google Analytics**: Tracks and reports website traffic for better insights and analytics.
- **Font Awesome and React Icons**: Utilizes Font Awesome and React Icons for a wide range of icons and symbols.
- **Contact Form**: Includes a contact form for users to get in touch easily.
- **Gradients**: Implements gradient backgrounds and elements for a modern and visually appealing design.

# Commit History

### Version 1.0.2

- `Pull Request` : About Page - Updated About page with Features, Tech-stack, and Project Structure components and constants .
  - ESLinted
  - Update README
  - Refactored Features and Technologies into components added on About page
  - Refactor NavMenu to dynamically render menu items based on the current route
  - Add ProjectStructure component and project structure constants
  - Update social media links with tooltips in About section
  - Remove unused ThemeToggle component from LeftSidePanel
  - Remove commented-out mobile progress bar code from Header component
  - Version Bump

---

### Version 1.0.1

- `Pull Request` : About Page - Updated About page with Features and Tech-stack information.
  - Update README
  - Refactored About page with Features and Tech-stack information
  - Refactor Header component styles for progress bar
  - Refactor Hero component styles for personal branding name
  - Version Bump

---

### Version 1.0.0

- `Pull Request` : BugFixes - Minor tweaks and cleanup after React live deploy.
  - README updates
  - Version Bump: Official Version `1.0.0`
  - Nit picky clean up
  - Use constants in Footer component with FooterDetails constant
  - Refactor import path for PlaceHolder image in ProjectDetails.js
  - Refactor Hero component styles for hover effect
  - Added screenshots to readme and updated features section in readme
  - Refactor import path for Sampler component
  - UI bug fixes
  - Added dedicated PlaceHolder image and updated ProjectDetails constant to fix Error in production
  ```
  Access to image at 'https://via.placeholder.com/150' from origin 'https://daydin14.github.io' has been blocked
  by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  ```

---

### Journey to Version 1.0.0

- `Pull Request` : React - Complete project rewrite-conversion from static `HTML` to a complete `REACT` application.
  - removed old project
  - Refactor FontAwesomeScript to handle Font Awesome Kit ID error and script appending
  - Added error handling for Google Analytics and enabled initialization
  - Bug Fixes: Refactored GitHubCity to use Gold Hexcode, Replaced 'class' with 'className' in Hero
  - Added HelmetProvider dependencies and script titles
  - Refactor PropTypes in GmapEmbeded, Modal, and ProjectLinks components
  - Updated mobile view for Header, Projects and Contact sections
  - Refactor useIsMobile hook to include isPortrait state
  - Refactor package dependencies and add Google Tag Manager integration
  - Added custom favicon
  - Refactor package dependencies and add GH-Pages Deployment and configuration
  - Refactor Contact component to use GmapEmbeded and update email with constants
  - Update package dependencies and add Google Analytics integration
  - Misc UI updates
  - Update README.md
  - Refactor progress bar styling in Header component and added Hero images
  - Refactor Home component to include Hero section and update section headings
  - Added Hero component
  - Added GitHub City to Projects section with Year Select and Color Picker
  - Refactor Skills component to dynamically render category items and add SkillsDetails constant file
  - Added react-icons dependency
  - Refactor Skills component to dynamically render category items
  - Add SkillsDetails constant file
  - Add more FontAwesome icon dependencies
  - Refactor project card links and add project modal
  - Added TODO
  - Added glow on hover for project cards
  - Added Project Images
  - Refactored ProjectDetails descriptions and links
  - Updated project links icons in project card
  - Refactor Header component to add theme toggle button
  - Refactor Projects component to improve project card layout
  - Refactor Projects component to improve project card layout and add GitHub and Live Demo links
  - Refactored Projects with ProjectDetails constant
  - Update README.md
  - Added basic projects info
  - Minor refactor LeftSidePanel component and update ThemeToggle component
  - Refactor meta tags in index.html and manifest.json
  - Refactor ThemeToggle component to use a toggle switch for theme selection
  - Update package dependencies for FontAwesomeScript and update ThemeToggle component
  - Add FontAwesomeScript component to dynamically load Font Awesome icons
  - Add FontAwesomeScript component to dynamically load Font Awesome icons
  - Refactor Contact component to add form functionality and Google Maps embed
  - Refactor Skills component to add categories, skills, and hover effects
  - Refactor Projects component to use separate cards for each project category
  - Refactor Home page to use separate components for Projects, Skills, and Contact sections
  - Removed trailing spaces and normalizing page formats
  - Refactor NavMenu component to use anchor tags, added placeholder content in Home page
  - Created About component to include profile picture, name, title, and description
  - Top margin for main content & Home sections
  - Refactor Header component to include progress bar
  - Hamburger menu for sidebar navigation
  - Lint and Copilot it
  - Refactor Header component to include LeftSidePanel and toggle sidebar functionality
  - Added LeftSidePanel component for sidebar navigation
  - Add useIsMobile hook for responsive design
  - Update both READMEs.md
  - Refactor About page to include profile pictures and social media icons
  - Moved Theme Toggle to NavMenu
  - Added official GitHub and LInkedin logo
  - Add About page AppRoutes and Navigation
  - Add About page with profile picture and bio
  - Added profile pictures
  - Add ThemeToggle component for toggling between light and dark mode
  - Add light&dark mode support to tailwind.config.js, Updated application to use Tailwind CSS
  - Add ThemeContext and ThemeProvider components for managing the theme of the application
  - Refactor CSS imports
  - Add Sandbox page and Sampler component to test and showcase different CSS libraries/frameworks
  - Added multiple CSS Libraries/Frameworks: Bootstrap, Bulma, ChakraUI, MaterialUI, PureCSS, Tailwind CSS, DaisyUI
  - Fixed babel-preset-react-app dependency warning
  - Refactor routing setup for sandbox feature testing
  - Linted
  - Added ESLint dev dependency and configuration
  - Refactor project structure and add Header, NavMenu, and Footer components
  - Refactor routing setup and create separate AppRoutes component
  - Added react-router-dom and created Home Page
  - Refactored project structure setup, Removed unused CSS, Updated imports, Added comments
  - Created a react application
  - Moved old project to temp folder 'old/'
