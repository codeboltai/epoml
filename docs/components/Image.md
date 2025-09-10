# Image Component

The Image component displays images with support for captions, positioning, and multiple output formats. It can handle both file paths and base64-encoded image data.

## Usage

```jsx
<!-- From file path -->
<Image src="./assets/screenshot.png" alt="Application Screenshot" />

<!-- With base64 data -->
<Image 
  base64="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIwAAAABJRU5ErkJggg==" 
  alt="Red pixel"
/>

<!-- With caption and sizing -->
<Image 
  src="./diagram.png" 
  alt="System Architecture" 
  caption="Figure 1: Overall system architecture"
  width="600"
  height="400"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Path to the image file |
| `base64` | `string` | - | Base64-encoded image data |
| `alt` | `string` | - | Alternative text for accessibility |
| `type` | `string` | - | MIME type (auto-detected from file extension) |
| `position` | `'top' \| 'bottom' \| 'here'` | `'here'` | Image positioning |
| `width` | `string \| number` | - | Image width |
| `height` | `string \| number` | - | Image height |
| `caption` | `string` | - | Image caption |
| `syntax` | `Syntax` | `'multimedia'` | Output format |
| `className` | `string` | - | CSS class for styling |
| `speaker` | `Speaker` | - | Content attribution |

## Supported Image Formats

| Extension | MIME Type | Description |
|-----------|-----------|-------------|
| `.png` | `image/png` | PNG images |
| `.jpg`, `.jpeg` | `image/jpeg` | JPEG images |
| `.gif` | `image/gif` | GIF images |
| `.svg` | `image/svg+xml` | SVG vector images |
| `.webp` | `image/webp` | WebP images |
| `.bmp` | `image/bmp` | Bitmap images |

## Output Formats

### Markdown
```jsx
<Image 
  syntax="markdown"
  src="./chart.png" 
  alt="Sales Chart" 
  caption="Q4 Sales Performance"
  width="500"
/>
```

**Output:**
```markdown
![Sales Chart](./chart.png){ width=500 }

*Q4 Sales Performance*
```

### HTML
```jsx
<Image 
  syntax="html"
  src="./logo.png" 
  alt="Company Logo" 
  width="200" 
  height="100"
  caption="Our Brand"
/>
```

**Output:**
```html
<figure>
  <img src="./logo.png" alt="Company Logo" width="200" height="100" />
  <figcaption>Our Brand</figcaption>
</figure>
```

### Multimedia (Default)
```jsx
<Image src="./photo.jpg" alt="Team Photo" />
```

**Output:**
```text
[Image: Team Photo]
```

### JSON
```jsx
<Image 
  syntax="json"
  src="./graph.png" 
  alt="Performance Graph"
  width="400"
  height="300"
  caption="System Performance Over Time"
/>
```

**Output:**
```json
{
  "src": "./graph.png",
  "alt": "Performance Graph",
  "width": "400",
  "height": "300",
  "caption": "System Performance Over Time"
}
```

## Examples

### Documentation Images
```jsx
<div>
  <Header level={2}>User Interface</Header>
  
  <Image 
    src="./screenshots/login.png"
    alt="Login screen showing username and password fields"
    caption="Figure 1: Login interface"
    width="400"
  />
  
  <p>The login screen provides a simple interface for user authentication.</p>
  
  <Image 
    src="./screenshots/dashboard.png"
    alt="Main dashboard with navigation menu and content area"
    caption="Figure 2: Main dashboard after successful login"
    width="600"
  />
</div>
```

### Technical Diagrams
```jsx
<div>
  <Header level={2}>System Architecture</Header>
  
  <Image 
    src="./diagrams/architecture.svg"
    alt="System architecture diagram showing client, API, and database layers"
    caption="Figure 3: High-level system architecture"
    width="800"
  />
  
  <p>The system follows a three-tier architecture pattern:</p>
  <ul>
    <li>Client Layer: React frontend application</li>
    <li>API Layer: Node.js REST API</li>
    <li>Data Layer: PostgreSQL database</li>
  </ul>
</div>
```

### Product Gallery
```jsx
<div>
  <Header level={2}>Product Images</Header>
  
  {products.map((product, index) => (
    <Image 
      key={product.id}
      src={product.imageUrl}
      alt={`${product.name} - ${product.description}`}
      caption={`${product.name} - $${product.price}`}
      width="300"
      height="300"
    />
  ))}
</div>
```

### Base64 Embedded Images
```jsx
<div>
  <Header level={3}>Icons</Header>
  
  <Image 
    base64="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    alt="Success icon"
    width="16"
    height="16"
  />
  
  <Image 
    base64="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
    alt="Warning icon"
    width="16"
    height="16"
  />
</div>
```

### Before/After Comparisons
```jsx
<div>
  <Header level={2}>UI Improvements</Header>
  
  <div style="display: flex; gap: 20px;">
    <div>
      <Header level={4}>Before</Header>
      <Image 
        src="./before.png"
        alt="Old user interface design"
        caption="Previous design with cluttered layout"
        width="400"
      />
    </div>
    
    <div>
      <Header level={4}>After</Header>
      <Image 
        src="./after.png"
        alt="New user interface design"
        caption="Improved design with better spacing"
        width="400"
      />
    </div>
  </div>
</div>
```

### Chart and Graph Integration
```jsx
<div>
  <Header level={2}>Performance Analytics</Header>
  
  <Image 
    src="./charts/response-time.png"
    alt="Line chart showing API response times over the last 30 days"
    caption="API Response Time Trends (30 days)"
    width="600"
    height="400"
  />
  
  <Image 
    src="./charts/user-growth.png"
    alt="Bar chart showing monthly user growth"
    caption="Monthly Active Users Growth"
    width="600"
    height="400"
  />
</div>
```

### Tutorial Screenshots
```jsx
<div>
  <Header level={2}>Getting Started Tutorial</Header>
  
  <CaptionedParagraph caption="Step 1: Create Account" captionStyle="header">
    <Image 
      src="./tutorial/step1.png"
      alt="Screenshot of account creation form"
      caption="Fill in your details to create a new account"
      width="500"
    />
  </CaptionedParagraph>
  
  <CaptionedParagraph caption="Step 2: Verify Email" captionStyle="header">
    <Image 
      src="./tutorial/step2.png"
      alt="Screenshot of email verification page"
      caption="Check your email and click the verification link"
      width="500"
    />
  </CaptionedParagraph>
</div>
```

### Dynamic Image Loading
```jsx
const imageTemplate = `
  <div>
    <Header level={2}>{gallery.title}</Header>
    
    {gallery.images.map((img, index) => \`
      <Image 
        src={img.src}
        alt={img.alt}
        caption={\`Figure \${index + 1}: \${img.caption}\`}
        width={img.width || '400'}
      />
    \`).join('')}
  </div>
`;

const galleryData = {
  title: "Project Screenshots",
  images: [
    {
      src: "./screen1.png",
      alt: "Main interface",
      caption: "Application main interface",
      width: "600"
    },
    {
      src: "./screen2.png", 
      alt: "Settings panel",
      caption: "Configuration settings",
      width: "400"
    }
  ]
};
```

## Best Practices

1. **Alt Text**: Always provide descriptive alternative text for accessibility
2. **File Optimization**: Use appropriate image formats and optimize file sizes
3. **Responsive Sizing**: Consider different screen sizes when setting dimensions
4. **Captions**: Use meaningful captions that add context to images
5. **File Paths**: Use relative paths that work across different environments
6. **Loading Performance**: Consider lazy loading for large images

## Error Handling

### Missing Images
```jsx
<!-- Graceful fallback with alt text -->
<Image 
  src="./missing-image.png" 
  alt="Product demo video screenshot (image not available)"
/>
```

### Invalid Base64
```jsx
<!-- Validation in template variables -->
{imageData.isValidBase64 ? (
  <Image base64={imageData.content} alt={imageData.description} />
) : (
  <p>Image data is invalid or corrupted</p>
)}
```

## Advanced Usage

### Conditional Image Display
```jsx
{showImages && (
  <Image 
    src={imagePath}
    alt={imageDescription}
    caption={showCaptions ? imageCaption : undefined}
  />
)}
```

### Image with Fallback Content
```jsx
<Image src="./chart.png" alt="Performance Chart">
  <p>Chart showing 15% performance improvement over Q4.</p>
  <p>Key metrics: Response time decreased from 120ms to 102ms.</p>
</Image>
```

### Multi-format Image Generation
```jsx
const formats = ['html', 'markdown', 'text'];
formats.forEach(format => {
  const result = epomlparse(`
    <Image 
      syntax="${format}"
      src="./demo.png"
      alt="Demo image"
      caption="Demonstration"
    />
  `);
  console.log(`${format}:`, result);
});
```

## Common Patterns

### Image Galleries
```jsx
<div className="image-gallery">
  {images.map((image, index) => (
    <Image 
      key={index}
      src={image.url}
      alt={image.description}
      caption={`${index + 1}. ${image.title}`}
      width="250"
      height="200"
    />
  ))}
</div>
```

### Documentation Figures
```jsx
let figureNumber = 1;
const createFigure = (src, alt, caption) => (
  <Image 
    src={src}
    alt={alt}
    caption={`Figure ${figureNumber++}: ${caption}`}
    width="500"
  />
);
```

## Related Components

- **[Document](./Document.md)** - For including images in full documents
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For image descriptions and context
- **[Header](./Header.md)** - For image section titles
- **[Audio](./Audio.md)** - For other multimedia content