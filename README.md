# Izo Arts Uganda

A responsive portfolio website showcasing contemporary Ugandan art - paintings and mixed-media works.

## 🎨 Overview

Izo Arts Uganda is a modern, clean online art gallery designed to showcase the vibrant work of a contemporary Ugandan artist. The website features a beautiful, minimal design that puts the art front and center while providing visitors with an engaging experience to explore artworks, learn about the artist, and inquire about commissions.

## ✨ Features

- **Responsive Design** - Mobile-first approach, fully responsive across all devices
- **Interactive Gallery** - Filterable artwork grid with category-based filtering
- **Artwork Modals** - Click to view detailed artwork information
- **Contact Form** - Client-side form validation with success messaging
- **Smooth Animations** - Subtle hover effects and scroll animations
- **Accessibility** - Semantic HTML, proper ARIA labels, and keyboard navigation
- **Modern UI** - Clean, professional design with warm African-inspired accent colors

## 🛠️ Tech Stack

- **HTML5** - Semantic markup for better SEO and accessibility
- **CSS3** - Custom styles with CSS Grid and Flexbox
- **Bootstrap 5** - Responsive grid system and components
- **Vanilla JavaScript** - Interactive features without dependencies
- **Google Fonts** - Cormorant Garamond (headings) + Lora (body text)
- **Bootstrap Icons** - Scalable vector icons

## 📁 File Structure

```
izo-arts/
├── index.html          # Homepage with hero, featured works, and CTAs
├── gallery.html        # Gallery page with filterable artworks
├── about.html          # Artist biography and background
├── contact.html        # Contact form and information
├── css/
│   └── styles.css      # Custom styles and responsive design
├── js/
│   └── main.js         # Interactive functionality
└── images/             # Placeholder for artwork images
```

## 🎨 Design Features

### Color Palette
- **Background**: Light beige (#faf9f6, #f7f5f0)
- **Accent Colors**: 
  - Deep Orange (#d35400)
  - Earthy Brown (#8b4513)
  - Muted Green (#556b2f)
  - Gold (#b8860b)
- **Text**: Dark gray (#1a1a1a)

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Lora (serif)

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/bugembetrick/izo-arts.git
cd izo-arts
```

2. Open with a local web server (recommended):
```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080
```

3. Open your browser and navigate to `http://localhost:8080`

### Direct Access

You can also open `index.html` directly in your browser, though some features work best with a local server.

## 📄 Pages

### Home (`index.html`)
- Full-screen hero section with call-to-action buttons
- Featured artworks grid (6 pieces)
- About preview section
- Custom commission CTA

### Gallery (`gallery.html`)
- Interactive filter buttons (All, Portraits, Abstract, Cultural Scenes, Landscapes)
- 12 artwork cards with hover effects
- Bootstrap modals for detailed artwork views
- "Inquire About This Piece" functionality

### About (`about.html`)
- Artist biography and story
- Connection to Ugandan culture
- Themes and inspirations
- Artistic journey and vision
- Exhibitions and achievements list

### Contact (`contact.html`)
- Contact form with validation
  - Name, Email, Subject, Message fields
  - Client-side validation
  - Success message on submission
- Contact information (email, WhatsApp, Instagram)
- Commission process overview
- Social media links

## 💡 JavaScript Features

- **Navbar Scroll Effect** - Changes background on scroll
- **Back to Top Button** - Appears on scroll, smooth scrolls to top
- **Gallery Filtering** - Dynamic filtering by artwork category
- **Modal Population** - Dynamic artwork detail modals
- **Form Validation** - Client-side validation with custom messages
- **Smooth Scrolling** - For anchor links
- **Mobile Menu** - Auto-closes on link click
- **Lazy Loading** - Progressive image loading

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 991px
- **Desktop**: ≥ 992px

## 🚀 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings
3. Navigate to Pages section
4. Select the branch to deploy (main/master)
5. Save and wait for deployment

The site will be available at: `https://bugembetrick.github.io/izo-arts/`

### Other Hosting Options

- **Netlify**: Drag and drop the folder or connect to GitHub
- **Vercel**: Import the GitHub repository
- **Cloudflare Pages**: Connect to GitHub repository

## 🎨 Customization

### Adding New Artworks

Edit `gallery.html` and add new artwork cards with the appropriate data attributes:

```html
<div class="col-lg-4 col-md-6 gallery-item" data-category="portraits">
    <div class="artwork-card" data-bs-toggle="modal" data-bs-target="#artworkModal" 
         data-title="Artwork Title" 
         data-year="2024" 
         data-medium="Oil on Canvas" 
         data-dimensions="80 x 100 cm"
         data-description="Artwork description here"
         data-image="path/to/image.jpg">
        <div class="artwork-image">
            <img src="path/to/image.jpg" alt="Artwork Title" loading="lazy">
        </div>
        <div class="artwork-info">
            <h3 class="artwork-title">Artwork Title</h3>
            <p class="artwork-medium">Oil on Canvas | 2024</p>
        </div>
    </div>
</div>
```

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --color-accent-orange: #d35400;
    --color-accent-brown: #8b4513;
    /* Add your custom colors */
}
```

## 📝 License

© 2025 Izo Arts Uganda. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. For suggestions or issues, please open an issue on GitHub.

## 📧 Contact

- **Email**: info@izoarts.com
- **WhatsApp**: +256 700 123 456
- **Instagram**: [@izoartsuganda](https://instagram.com/izoartsuganda)
- **Location**: Kampala, Uganda
