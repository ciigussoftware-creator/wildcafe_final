# Wild Cafe Ella Website

A modern, responsive website for Wild Cafe Ella - a cozy jungle-style café in the heart of Ella, Sri Lanka.

## Features

- **Modern Dark Theme**: Sleek dark design with green accents inspired by nature
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Multiple Pages**: Home, Menu, Gallery, About Us, Contact
- **Interactive Menu**: Categorized menu with modal popups for detailed item views
- **Smooth Animations**: Professional transitions and hover effects
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Social Media Integration**: Links to Instagram and Facebook

## File Structure

```
wildcafe-complete/
├── index.html              # Homepage
├── css/
│   └── style.css          # Main stylesheet with all styling
├── js/
│   ├── script.js          # Homepage JavaScript
│   └── menu.js            # Menu page JavaScript
└── pages/
    ├── menu.html          # Full menu page
    ├── gallery.html       # Photo gallery
    ├── about.html         # About us page
    └── contact.html       # Contact information
```

## Pages Overview

### Home (index.html)
- Hero section with call-to-action buttons
- Featured offerings showcase
- Experience section
- Menu preview with category tabs
- Social media links
- Footer with quick links and contact info

### Menu (pages/menu.html)
- Complete menu organized by categories:
  - Breakfast
  - Hoppers
  - Kottu
  - Rice & Curry
  - Roti
  - Pasta
  - Burgers
  - Drinks
- Interactive menu items with modal popups
- Price display in Sri Lankan Rupees

### Gallery (pages/gallery.html)
- Photo grid showcasing food and ambiance
- Responsive image gallery
- Visual journey through the cafe

### About Us (pages/about.html)
- Cafe story and background
- Core values and mission
- Sustainability commitment
- Team information

### Contact (pages/contact.html)
- Location and address
- Phone number
- Opening hours
- Google Maps integration
- Social media links
- Important information (WiFi, service charge, etc.)

## Design Features

### Color Scheme
- Primary Green: #3db854
- Dark Background: #0a0a0a
- Darker Background: #1a1a1a
- Text Light: #e0e0e0
- Text Gray: #a0a0a0

### Typography
- System font stack for optimal performance
- Clean, modern sans-serif fonts
- Responsive font sizes

### Interactive Elements
- Hover effects on buttons and cards
- Smooth scroll behavior
- Menu item modal popups
- Mobile hamburger navigation
- Tab-based menu filtering

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts integration ready
- Responsive Grid and Flexbox layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Key Features

1. **Mobile-First Design**: Optimized for mobile devices first, then enhanced for larger screens
2. **Performance Optimized**: Minimal dependencies, fast loading times
3. **SEO Friendly**: Semantic HTML, proper meta tags, descriptive alt texts
4. **Accessibility**: Proper heading hierarchy, ARIA labels where needed
5. **Easy to Update**: Well-organized code, clear comments, modular structure

## Menu Data Structure

The menu is organized in a JavaScript object with the following properties:
- `id`: Unique identifier
- `name`: Item name
- `description`: Item description
- `price`: Price in Rs.
- `image`: Image URL
- `tags`: Array of tags (e.g., "popular", "veg")
- `isVeg`: Boolean for vegetarian status

## Customization

To customize the website:

1. **Colors**: Edit CSS variables in `:root` section of style.css
2. **Menu Items**: Update menu data in js/menu.js
3. **Images**: Replace image URLs with actual cafe photos
4. **Contact Info**: Update phone, address, and social links
5. **Opening Hours**: Modify in contact page and footer

## Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files maintaining the folder structure.

## Contact Information

**Wild Cafe Ella**
- Address: No 62 Main Street, Ella 90090, Sri Lanka
- Phone: +94 (70) 202 8637
- Instagram: @wildcafeella
- Facebook: Wild Cafe Ella
- Hours: Monday - Sunday, 9:00 AM - 10:00 PM

## Important Notes

- Free WiFi available for all guests
- Ask server for spice level customization
- 10% service charge included in all bills
- All-you-can-eat specials available for certain menu items

---

© 2024 Wild Cafe Ella. All rights reserved.
