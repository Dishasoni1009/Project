# Real Trust - Landing Page

A modern, responsive landing page for Real Trust, a real estate consultation, design, and marketing service. This project features a clean, professional design with dynamic content loading and form submissions.

![Real Trust](assests/landing_images/logo.svg)

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Assets & Images](#assets--images)
- [Getting Started](#getting-started)
- [File Descriptions](#file-descriptions)
- [Technologies Used](#technologies-used)
- [Browser Support](#browser-support)

## 🎯 Overview

Real Trust is a professional landing page designed for a real estate consultation and marketing service. The page showcases services, projects, client testimonials, and includes contact forms and newsletter subscription functionality.

### Key Highlights

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Content**: Projects and clients loaded from API with fallback support
- **Interactive Forms**: Contact form and newsletter subscription
- **Performance Optimized**: Lazy loading images and efficient code

## 📁 Project Structure

```
project/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and responsive design
├── js/
│   └── main.js            # JavaScript functionality and API integration
└── assests/
    ├── landing_images/    # All image assets
    │   ├── logo.svg
    │   ├── couple_image.svg
    │   ├── pexels-*.svg   # Professional images
    │   └── Ellipse *.svg  # Client avatars
    └── landing_icons/      # Icon assets
        ├── circle-dollar-sign.svg
        ├── paintbrush-2.svg
        ├── home.svg
        ├── Linkedin.svg
        └── Group*.svg      # Social media icons
```

## ✨ Features

### 1. **Hero Section**
- Eye-catching hero banner with background image
- Call-to-action form for free consultation
- Smooth overlay effects

### 2. **Navigation Bar**
- Sticky navigation for easy access
- Smooth scroll to sections
- Responsive mobile menu

### 3. **Service Sections**
- **Why Choose Us**: Highlights key services (ROI, Design, Marketing)
- **About Us**: Company information with image gallery
- **Projects**: Dynamic project showcase (loaded from API)
- **Happy Clients**: Client testimonials (loaded from API)

### 4. **Interactive Forms**
- Contact form in hero section
- Newsletter subscription in footer
- Form validation and error handling
- API integration for data submission

### 5. **Footer**
- Company information
- Quick navigation links
- Newsletter subscription
- Social media icons

## 🖼️ Assets & Images

### Landing Images (`assests/landing_images/`)

| Image File | Usage | Description |
|------------|-------|-------------|
| `logo.svg` | Header & Footer | Real Trust company logo |
| `couple_image.svg` | Hero Background | Professional real estate consultation scene |
| `pexels-fauxels-3182834.svg` | Hero Section | Team collaboration background image |
| `pexels-brett-sayles-2881232.svg` | Intro Gallery | Team at work - main circle image |
| `pexels-brett-sayles-2881232-1.svg` | About Section | Property tour - large photo |
| `pexels-brett-sayles-2881232-2.svg` | Intro Gallery | Team meeting - secondary circle |
| `pexels-brett-sayles-2881232-3.svg` | Intro Gallery | Client handshake - tertiary circle |
| `pexels-andres-ayrton-6578391.svg` | About Section | Team discussion - small photo |
| `Ellipse 11.svg` | Client Avatar | Client testimonial profile picture |
| `Ellipse 12.svg` | Client Avatar | Client testimonial profile picture |
| `Ellipse 13.svg` | Client Avatar | Client testimonial profile picture |
| `Ellipse 28.svg` | Client Avatar | Client testimonial profile picture |
| `Ellipse 29.svg` | Client Avatar | Client testimonial profile picture |
| `Ellipse 31.svg` | Client Avatar | Client testimonial profile picture (reserve) |
| `Ellipse 33.svg` | Client Avatar | Client testimonial profile picture (reserve) |
| `Ellipse 35.svg` | Client Avatar | Client testimonial profile picture (reserve) |
| `Rectangle.svg` | Decorative | Decorative shape element |

### Landing Icons (`assests/landing_icons/`)

| Icon File | Usage | Description |
|-----------|-------|-------------|
| `circle-dollar-sign.svg` | Why Choose Us | ROI/Potential ROI feature icon |
| `paintbrush-2.svg` | Why Choose Us | Design service icon |
| `home.svg` | Why Choose Us | Marketing service icon |
| `Linkedin.svg` | Footer | LinkedIn social media icon |
| `Group.svg` | Footer | Social media icon |
| `Group-1.svg` | Footer | Social media icon |
| `Frame.svg` | Decorative | Decorative frame element |

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server (for API integration)

### Installation

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd project
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server for better experience:

### Running Locally

#### Option 1: Direct File Opening
- Double-click `index.html` to open in your default browser
- Or right-click → Open with → Your preferred browser

#### Option 2: Using Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

#### Option 3: Using Node.js HTTP Server
```bash
# Install http-server globally (if not installed)
npm install -g http-server

# Run server
http-server -p 8000

# Then open: http://localhost:8000
```

#### Option 4: Using VS Code Live Server
- Install "Live Server" extension in VS Code
- Right-click on `index.html`
- Select "Open with Live Server"

### API Integration

The frontend is configured to connect to a Django backend API. To enable full functionality:

1. **Update API URL** (if needed)
   - Open `js/main.js`
   - Update `API_BASE_URL` constant:
   ```javascript
   const API_BASE_URL = 'http://127.0.0.1:8000/api';
   ```

2. **Backend Requirements**
   - Django REST Framework backend
   - CORS enabled
   - Endpoints:
     - `GET /api/projects/` - Fetch projects
     - `GET /api/clients/` - Fetch clients
     - `POST /api/contact/` - Submit contact form
     - `POST /api/subscribe/` - Newsletter subscription

3. **Fallback Behavior**
   - If API is unavailable, the page uses default/fallback data
   - Forms still work but show success messages (data not saved)

## 📄 File Descriptions

### `index.html`
- Main HTML structure
- Semantic HTML5 elements
- Accessible markup with ARIA labels
- Sections: Header, Hero, Intro, Why Choose Us, About, Projects, Clients, CTA, Footer

### `css/style.css`
- Complete styling for all sections
- Responsive design with media queries
- Modern CSS features (Grid, Flexbox, Custom Properties)
- Smooth animations and transitions
- Color scheme: Blue (#1b6fdc), Orange (#ff7a18), White

### `js/main.js`
- API integration functions
- Dynamic content rendering
- Form submission handlers
- Error handling and loading states
- Connection testing
- Fallback data management

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript (ES6+)**: Async/await, Fetch API
- **SVG**: Scalable vector graphics for images and icons
- **Responsive Design**: Mobile-first approach

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Features

### Color Palette
- **Primary Blue**: `#1b6fdc` - Trust and professionalism
- **Deep Blue**: `#0f1c3f` - Depth and sophistication
- **Orange**: `#ff7a18` - Energy and call-to-action
- **Text**: `#1f2a44` - Readable dark gray
- **Background**: `#f7f9ff` - Light, clean background

### Typography
- **Font Family**: Inter, Segoe UI, Arial (sans-serif)
- **Headings**: Bold, large sizes for hierarchy
- **Body**: Readable line-height and spacing

### Layout
- **Grid System**: CSS Grid for complex layouts
- **Flexbox**: For component alignment
- **Responsive Breakpoints**: Mobile, tablet, desktop

## 📱 Responsive Design

The page is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Changing Colors
Edit `css/style.css` and update CSS custom properties:
```css
:root {
    --blue: #1b6fdc;
    --orange: #ff7a18;
    /* ... */
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `css/style.css`
3. Add JavaScript functionality in `js/main.js` (if needed)

### Updating Content
- Edit text directly in `index.html`
- Update images by replacing files in `assests/` folders
- Modify API endpoints in `js/main.js`

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths in `assests/` folder
- Ensure file names match exactly (case-sensitive)
- Verify image files exist

### API Not Connecting
- Check browser console for errors
- Verify backend server is running
- Check CORS settings in backend
- Verify API_BASE_URL in `js/main.js`

### Styles Not Applying
- Clear browser cache
- Check CSS file path in HTML
- Verify no syntax errors in CSS

## 📝 Notes

- All images are in SVG format for scalability
- The page includes fallback data if API is unavailable
- Forms include basic validation
- Console logging is enabled for debugging

## 📞 Support

For issues or questions:
1. Check browser console for error messages
2. Verify all files are in correct locations
3. Ensure proper file paths in HTML/CSS/JS

## 📄 License

This project is created for Real Trust. All rights reserved.

---

**Built with ❤️ for Real Trust**

*Last Updated: 2025*
