# Image Assets Directory Structure

This directory contains all images used throughout the HillSide website, organized by category for easy management.

## Directory Structure

```
images/
├── sliders/          # Images for the main hero sliders
├── gallery/          # Images for photo galleries
├── carousel/         # Images for carousel components
├── testimonials/     # Customer testimonial photos
├── backgrounds/      # Background images for sections
└── products/         # Product/service images
```

## Adding Images

### 1. Choose the Right Directory
Place your images in the appropriate folder based on their usage:
- **sliders/**: Large, high-quality hero images (recommended: 1920x1080px)
- **gallery/**: Medium-sized gallery images (recommended: 1200x800px)
- **carousel/**: Smaller carousel items (recommended: 800x600px)
- **testimonials/**: Customer photos (recommended: 400x400px square)
- **backgrounds/**: Full-width background images (recommended: 1920x1080px)
- **products/**: Product/service images (recommended: 800x800px)

### 2. Image Naming Convention
Use descriptive, kebab-case names:
- ✅ `luxury-villa-exterior-01.jpg`
- ✅ `wedding-ceremony-setup.jpg`
- ✅ `funcity-roller-coaster.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `photo 1.jpg`

### 3. Image Optimization
Before adding images:
- Compress images to reduce file size (use tools like TinyPNG, ImageOptim)
- Use appropriate formats:
  - **JPEG**: Photos and complex images
  - **PNG**: Images with transparency
  - **WebP**: Modern format with better compression (recommended)
- Keep file sizes under:
  - Slider images: < 500KB
  - Gallery images: < 300KB
  - Carousel images: < 200KB
  - Thumbnails: < 50KB

### 4. Required Image Sizes

For optimal display across devices, provide images in these sizes:

#### Sliders
- Desktop: 1920x1080px
- Tablet: 1024x768px
- Mobile: 640x480px

#### Gallery
- Full size: 1200x800px
- Thumbnail: 400x300px

#### Carousel
- Standard: 800x600px

#### Testimonials
- Profile: 400x400px (square)

### 5. Responsive Images
Consider providing multiple resolutions:
```
image-name-large.jpg   (1920px wide)
image-name-medium.jpg  (1024px wide)
image-name-small.jpg   (640px wide)
```

## Usage in Components

### Image Slider
```jsx
import { ImageSlider } from '../components/image-display';
import slider1 from '../assets/images/sliders/hero-1.jpg';
import slider2 from '../assets/images/sliders/hero-2.jpg';

const images = [
  { src: slider1, alt: 'Description', title: 'Title', caption: 'Caption' },
  { src: slider2, alt: 'Description', title: 'Title', caption: 'Caption' }
];

<ImageSlider images={images} autoPlay interval={5000} />
```

### Image Gallery
```jsx
import { ImageGallery } from '../components/image-display';
import gallery1 from '../assets/images/gallery/photo-1.jpg';
import gallery1Thumb from '../assets/images/gallery/photo-1-thumb.jpg';

const images = [
  { 
    src: gallery1, 
    thumbnail: gallery1Thumb,
    alt: 'Description',
    title: 'Title',
    caption: 'Caption'
  }
];

<ImageGallery images={images} columns={3} />
```

### Image Carousel
```jsx
import { ImageCarousel } from '../components/image-display';
import carousel1 from '../assets/images/carousel/item-1.jpg';

const images = [
  { 
    src: carousel1, 
    alt: 'Description',
    title: 'Title',
    overlay: true
  }
];

<ImageCarousel images={images} itemsToShow={3} autoScroll />
```

## Placeholder Images

For development, you can use placeholder services:
- https://via.placeholder.com/1920x1080
- https://picsum.photos/1920/1080
- https://unsplash.it/1920/1080

## Image Attribution

If using stock photos, add attribution:
1. Create `ATTRIBUTIONS.md` file
2. List image source and license
3. Include photographer/source name

## Best Practices

1. **Always add alt text** for accessibility
2. **Use lazy loading** for images below the fold
3. **Optimize before upload** to reduce bandwidth
4. **Use WebP format** when possible for better compression
5. **Provide retina versions** (@2x) for high-DPI displays
6. **Test on multiple devices** to ensure proper display
7. **Use consistent aspect ratios** within each category
8. **Keep backup copies** of original, uncompressed images

## Image Guidelines

### Do's ✅
- Use high-quality, professional images
- Maintain consistent visual style
- Optimize for web performance
- Use descriptive file names
- Include alt text for accessibility

### Don'ts ❌
- Upload unoptimized, large files
- Use low-resolution or pixelated images
- Mix different visual styles
- Use generic stock photos excessively
- Forget to add alt text

## Need Help?

For questions about image management:
1. Check component documentation in `src/components/image-display/`
2. Review example implementations in page files
3. Consult the main README.md for project overview
