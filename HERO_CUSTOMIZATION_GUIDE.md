# Hero Section Photo Frames - Customization Guide

## Overview
Your hero section now features a beautiful gallery wall background with 3 photo frames of varying heights displaying your artwork. The frames are positioned in the background with the original hero content (title, tagline, and buttons) overlaid in the foreground for maximum impact.

---

## How to Change Photo Frame Images

### Method 1: Using Your Own Images
1. Place your artwork images in a folder (e.g., `images/hero/`)
2. Open `index.html` and find the Photo Frames Gallery section (around line 82)
3. Replace the `src` attribute in each frame with your image path:

```html
<!-- Example: Before -->
<img src="https://picsum.photos/300/500?random=101" alt="Gallery Artwork 1">

<!-- Example: After -->
<img src="images/hero/my-artwork-1.jpg" alt="My Beautiful Painting">
```

### Method 2: Using External URLs
Simply replace the URL with your hosted image URL:
```html
<img src="https://your-image-host.com/artwork.jpg" alt="Artwork Description">
```

---

## Frame Positions and Sizes

Each frame has a specific position and size creating a gallery wall effect. You can customize these in `css/styles.css` (starting around line 216):

### Current Frame Setup (Gallery Wall Style):
- **Frame 1** (Left - Tallest): 220px × 350px, rotated -2 degrees
- **Frame 2** (Center - Medium): 240px × 300px, rotated 1 degree
- **Frame 3** (Right - Short): 200px × 280px, rotated 3 degrees

### Visual Layout:
```
┌──────────────────────────────────┐
│                                   │
│    [1]      [2]      [3]         │
│   Tall    Medium    Short        │
│                                   │
│     [Hero Title & Content]       │
│                                   │
└──────────────────────────────────┘
```

### To Adjust Frame Position:
```css
.frame-1 {
    top: 15%;     /* Distance from top */
    left: 10%;    /* Distance from left */
    width: 220px; /* Frame width */
    height: 350px; /* Frame height */
    transform: rotate(-2deg); /* Rotation angle */
}
```

---

## Adding More Frames

### Step 1: Add HTML (in index.html)
```html
<!-- Frame 4 - Your Position -->
<div class="photo-frame frame-4">
    <img src="your-image.jpg" alt="Your Artwork">
</div>
```

### Step 2: Add CSS (in styles.css)
```css
.frame-4 {
    top: 40%;
    left: 35%;
    width: 180px;
    height: 280px;
    transform: rotate(-1deg);
}
```

---

## Customizing the Wall Background

To change the wall texture/color (in `css/styles.css`, around line 145):

```css
.hero-wall-background {
    /* Change these gradient colors for different wall tones */
    background: linear-gradient(135deg, #e8e4dc 0%, #d4cfc4 100%);
    
    /* Options for different wall colors:
       - Warm beige: #f5f0e8 to #e8dcc8
       - Cool gray: #e5e5e5 to #d0d0d0
       - White: #ffffff to #f8f8f8
       - Dark: #3a3a3a to #2a2a2a
    */
}
```

---

## Adjusting Frame Visibility

The frames have reduced opacity so they don't overpower the hero content. To adjust (in `css/styles.css`, around line 157):

```css
.photo-frames-container {
    opacity: 0.25; /* Current value - increase to 0.4 or 0.5 for more visible frames */
}
```

---

## Customizing the Dark Overlay

The dark overlay helps text readability. To adjust (in `css/styles.css`, around line 240):

```css
.hero-overlay {
    background: rgba(0, 0, 0, 0.6); /* Change 0.6 to adjust darkness (0 = transparent, 1 = solid black) */
}
```

---

## Tips for Best Results

1. **Image Aspect Ratios**: Use portrait-oriented images for best results (taller than wide)
2. **Image Quality**: Use high-resolution images (at least 500px on the longest side)
3. **File Formats**: JPG, PNG, and WebP all work well
4. **Frame Varying Heights**: The different heights create visual interest - frame 1 is tallest, frame 3 is shortest
5. **Frame Colors**: To change frame color from white:
   ```css
   .photo-frame {
       background: var(--color-white); /* Change to #f5e6d3 for cream, #d4c5b0 for tan */
   }
   ```

---

## Quick Image Path Examples

### Using local images:
```html
<img src="images/artwork1.jpg" alt="Artwork 1">
<img src="assets/photos/painting.png" alt="My Painting">
<img src="./hero-images/art-piece.jpg" alt="Art Piece">
```

### Using external URLs:
```html
<img src="https://unsplash.com/photos/xyz/download?force=true" alt="Stock Photo">
<img src="https://your-website.com/images/art.jpg" alt="Hosted Artwork">
```

---

## Design Philosophy

This design creates an elegant art gallery wall effect where:
- The **background** features 3 framed artworks with subtle opacity
- The **wall** has a textured beige finish mimicking a real gallery
- The **foreground** contains your main hero content with a dark overlay for text contrast
- The **frames** have varying heights creating visual rhythm and interest

The result is a sophisticated presentation that showcases your artwork while maintaining focus on your main message.

---

## Need Help?

- All frame styles are in: `css/styles.css` (lines 130-270)
- All frame HTML is in: `index.html` (lines 82-98)
- The frames automatically adjust for mobile devices!

---

**Happy Customizing! 🎨**

