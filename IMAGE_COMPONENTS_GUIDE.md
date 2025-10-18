# Image Display Components Documentation

Complete guide for using the HillSide image display components: ImageSlider, ImageCarousel, ImageGallery, and Lightbox.

## Table of Contents
1. [Installation](#installation)
2. [ImageSlider](#imageslider)
3. [ImageCarousel](#imagecarousel)
4. [ImageGallery](#imagegallery)
5. [Lightbox](#lightbox)
6. [Best Practices](#best-practices)
7. [Examples](#examples)

---

## Installation

All image components are located in `src/components/image-display/` and can be imported individually or together:

```jsx
// Individual imports
import ImageSlider from './components/image-display/ImageSlider';
import ImageCarousel from './components/image-display/ImageCarousel';
import ImageGallery from './components/image-display/ImageGallery';

// Or use the index file
import { ImageSlider, ImageCarousel, ImageGallery } from './components/image-display';
```

---

## ImageSlider

Full-width image slider with autoplay, navigation, and touch support.

### Features
- ✅ Auto-play with customizable interval
- ✅ Navigation arrows
- ✅ Dot indicators
- ✅ Touch/swipe support
- ✅ Keyboard navigation (← → Space)
- ✅ Play/Pause control
- ✅ Image captions
- ✅ Slide counter
- ✅ Smooth transitions
- ✅ Responsive design

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | Array | **Required** | Array of image objects |
| `autoPlay` | Boolean | `true` | Enable auto-play |
| `interval` | Number | `5000` | Auto-play interval (ms) |
| `showDots` | Boolean | `true` | Show dot indicators |
| `showArrows` | Boolean | `true` | Show navigation arrows |
| `className` | String | `''` | Additional CSS class |

### Image Object Structure

```jsx
{
  src: 'path/to/image.jpg',      // Required: Image URL
  alt: 'Image description',       // Recommended: Alt text
  title: 'Image Title',          // Optional: Title overlay
  caption: 'Image caption text'   // Optional: Caption overlay
}
```

### Basic Usage

```jsx
import { ImageSlider } from './components/image-display';

const MyComponent = () => {
  const images = [
    {
      src: '/images/slider/hero-1.jpg',
      alt: 'Luxury villa exterior',
      title: 'Premium Villas',
      caption: 'Experience luxury living at its finest'
    },
    {
      src: '/images/slider/hero-2.jpg',
      alt: 'Wedding venue',
      title: 'Dream Weddings',
      caption: 'Your perfect day awaits'
    },
    {
      src: '/images/slider/hero-3.jpg',
      alt: 'Fun city attractions',
      title: 'Family Entertainment',
      caption: 'Endless fun for everyone'
    }
  ];

  return (
    <ImageSlider 
      images={images}
      autoPlay={true}
      interval={5000}
      showDots={true}
      showArrows={true}
    />
  );
};
```

### Advanced Usage

```jsx
// Custom styling and no auto-play
<ImageSlider 
  images={images}
  autoPlay={false}
  showDots={false}
  className="custom-slider-class"
  interval={3000}
/>
```

---

## ImageCarousel

Multi-item carousel with horizontal scrolling.

### Features
- ✅ Multiple items visible
- ✅ Responsive item count
- ✅ Auto-scroll option
- ✅ Navigation arrows
- ✅ Pagination dots
- ✅ Hover effects
- ✅ Smooth scrolling
- ✅ Infinite loop
- ✅ Customizable gap

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | Array | **Required** | Array of image objects |
| `itemsToShow` | Number | `3` | Items visible at once |
| `autoScroll` | Boolean | `false` | Enable auto-scroll |
| `scrollInterval` | Number | `3000` | Auto-scroll interval (ms) |
| `showArrows` | Boolean | `true` | Show navigation arrows |
| `gap` | Number | `20` | Gap between items (px) |
| `className` | String | `''` | Additional CSS class |

### Image Object Structure

```jsx
{
  src: 'path/to/image.jpg',        // Required: Image URL
  alt: 'Image description',         // Recommended: Alt text
  title: 'Item Title',             // Optional: Overlay title
  description: 'Item description',  // Optional: Overlay description
  overlay: true                     // Optional: Show overlay on hover
}
```

### Basic Usage

```jsx
import { ImageCarousel } from './components/image-display';

const MyComponent = () => {
  const images = [
    {
      src: '/images/carousel/service-1.jpg',
      alt: 'Oil change service',
      title: 'Express Oil Change',
      description: 'Quick 15-minute service',
      overlay: true
    },
    {
      src: '/images/carousel/service-2.jpg',
      alt: 'Vehicle maintenance',
      title: 'Full Maintenance',
      description: 'Complete vehicle care',
      overlay: true
    },
    // Add more items...
  ];

  return (
    <ImageCarousel 
      images={images}
      itemsToShow={3}
      autoScroll={true}
      scrollInterval={4000}
      gap={20}
    />
  );
};
```

### Responsive Behavior

The carousel automatically adjusts items shown:
- **Desktop (>1024px)**: Shows `itemsToShow` items
- **Tablet (768-1024px)**: Shows min(2, `itemsToShow`) items
- **Mobile (<768px)**: Shows 1 item

---

## ImageGallery

Grid-based image gallery with lightbox.

### Features
- ✅ Responsive grid layout
- ✅ Hover effects
- ✅ Lightbox integration
- ✅ Customizable columns
- ✅ Image captions
- ✅ Lazy loading
- ✅ Keyboard navigation
- ✅ Touch-friendly

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | Array | **Required** | Array of image objects |
| `columns` | Number | `3` | Number of columns |
| `gap` | Number | `20` | Gap between items (px) |
| `showCaptions` | Boolean | `true` | Show captions on hover |
| `className` | String | `''` | Additional CSS class |

### Image Object Structure

```jsx
{
  src: 'path/to/image.jpg',         // Required: Full-size image
  thumbnail: 'path/to/thumb.jpg',   // Optional: Thumbnail (uses src if not provided)
  alt: 'Image description',          // Recommended: Alt text
  title: 'Image Title',             // Optional: Gallery title
  caption: 'Image caption'           // Optional: Gallery caption
}
```

### Basic Usage

```jsx
import { ImageGallery } from './components/image-display';

const MyComponent = () => {
  const images = [
    {
      src: '/images/gallery/villa-1-full.jpg',
      thumbnail: '/images/gallery/villa-1-thumb.jpg',
      alt: 'Villa living room',
      title: 'Spacious Living Area',
      caption: 'Modern design with natural light'
    },
    {
      src: '/images/gallery/villa-2-full.jpg',
      thumbnail: '/images/gallery/villa-2-thumb.jpg',
      alt: 'Villa kitchen',
      title: 'Gourmet Kitchen',
      caption: 'Fully equipped with premium appliances'
    },
    // Add more images...
  ];

  return (
    <ImageGallery 
      images={images}
      columns={3}
      gap={20}
      showCaptions={true}
    />
  );
};
```

### Responsive Behavior

The gallery automatically adjusts columns:
- **Desktop (>1024px)**: Shows specified `columns`
- **Tablet (640-1024px)**: Shows 2 columns
- **Mobile (<640px)**: Shows 1 column

---

## Lightbox

Full-screen image viewer (integrated with ImageGallery).

### Features
- ✅ Full-screen view
- ✅ Navigation arrows
- ✅ Thumbnail strip
- ✅ Zoom in/out
- ✅ Download option
- ✅ Keyboard shortcuts
- ✅ Touch gestures
- ✅ Image counter
- ✅ Captions

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Esc` | Close lightbox |
| `←` | Previous image |
| `→` | Next image |
| `+` / `=` | Zoom in |
| `-` / `_` | Zoom out |

### Standalone Usage

```jsx
import { Lightbox } from './components/image-display';

const [isOpen, setIsOpen] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);

<Lightbox
  images={images}
  currentIndex={currentIndex}
  onClose={() => setIsOpen(false)}
  onIndexChange={setCurrentIndex}
/>
```

---

## Best Practices

### Image Optimization

1. **Compress images** before adding to project
2. **Use appropriate formats**:
   - JPEG for photos
   - PNG for transparency
   - WebP for modern browsers
3. **Provide thumbnails** for galleries
4. **Use lazy loading** for better performance

### Accessibility

1. **Always add alt text** to images
2. **Use descriptive titles** and captions
3. **Ensure keyboard navigation** works
4. **Test with screen readers**

### Performance

1. **Limit slider interval** to reasonable times (3-7 seconds)
2. **Don't show too many carousel items** on mobile
3. **Use thumbnails** in galleries
4. **Optimize image sizes** for web

### User Experience

1. **Provide clear navigation** controls
2. **Show image counter** in sliders
3. **Enable touch gestures** on mobile
4. **Add loading states** for images

---

## Examples

### Hero Section with Slider

```jsx
import { ImageSlider } from './components/image-display';

const HeroSection = () => {
  const heroImages = [
    {
      src: '/images/hero-1.jpg',
      alt: 'Mountain resort view',
      title: 'Welcome to HillSide',
      caption: 'Your premier destination for luxury living'
    },
    {
      src: '/images/hero-2.jpg',
      alt: 'Resort amenities',
      title: 'World-Class Amenities',
      caption: 'Experience comfort like never before'
    }
  ];

  return (
    <section className="hero">
      <ImageSlider 
        images={heroImages}
        autoPlay={true}
        interval={6000}
        showDots={true}
      />
    </section>
  );
};
```

### Services Carousel

```jsx
import { ImageCarousel } from './components/image-display';

const ServicesSection = () => {
  const serviceImages = [
    {
      src: '/images/services/service-1.jpg',
      alt: 'Service 1',
      title: 'Oil Change',
      overlay: true
    },
    // More services...
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <ImageCarousel 
        images={serviceImages}
        itemsToShow={4}
        autoScroll={true}
        gap={30}
      />
    </section>
  );
};
```

### Villa Gallery

```jsx
import { ImageGallery } from './components/image-display';

const VillaGallery = () => {
  const villaImages = [
    {
      src: '/images/villas/full/villa-1.jpg',
      thumbnail: '/images/villas/thumbs/villa-1.jpg',
      alt: 'Luxury villa exterior',
      title: 'Executive Villa',
      caption: 'Stunning mountain views'
    },
    // More villas...
  ];

  return (
    <section className="villa-gallery">
      <h2>Our Villas</h2>
      <ImageGallery 
        images={villaImages}
        columns={3}
        showCaptions={true}
      />
    </section>
  );
};
```

---

## Component File Structure

```
src/components/image-display/
├── ImageSlider.jsx
├── ImageSlider.css
├── ImageCarousel.jsx
├── ImageCarousel.css
├── ImageGallery.jsx
├── ImageGallery.css
├── Lightbox.jsx
├── Lightbox.css
└── index.js
```

## Troubleshooting

### Images not loading
- Check file paths are correct
- Ensure images are in public folder or properly imported
- Verify image formats are supported

### Slider not auto-playing
- Check `autoPlay` prop is true
- Ensure `interval` is a number
- Verify there's more than one image

### Gallery lightbox not opening
- Ensure images array has correct structure
- Check for console errors
- Verify Lightbox component is imported

### Carousel items not responsive
- Check browser width
- Verify `itemsToShow` prop
- Test on actual devices

---

## Support

For issues or questions:
1. Check component props and image structure
2. Review console for errors
3. Test with sample images
4. Refer to examples above

**Created:** October 19, 2025  
**Version:** 1.0.0  
**Components:** ImageSlider, ImageCarousel, ImageGallery, Lightbox
