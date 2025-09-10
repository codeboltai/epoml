# Audio Component

The Audio component handles audio file inclusion and transcription in templates, with support for multiple formats and rendering options.

## Usage

```jsx
<!-- From file path -->
<Audio src="./audio/greeting.mp3" />

<!-- From base64 data -->
<Audio base64="UklGRv4DAABXQVZFZm10..." type="audio/wav" />

<!-- With alt text -->
<Audio src="./music.mp3" alt="Background music" />

<!-- With positioning -->
<Audio src="./intro.wav" position="top" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Path to the audio file |
| `base64` | `string` | - | Base64-encoded audio data |
| `alt` | `string` | - | Alternative text when audio cannot be displayed |
| `type` | `string` | - | MIME type (auto-detected from file extension) |
| `position` | `AudioPosition` | `'here'` | Audio positioning (top, bottom, here) |
| `syntax` | `Syntax` | `'multimedia'` | Output format |

## Audio Position Options

- `'top'` - Align to top of container
- `'bottom'` - Align to bottom of container  
- `'here'` - Align to middle (default)

## Supported Audio Formats

| Extension | MIME Type | Description |
|-----------|-----------|-------------|
| `.mp3` | `audio/mpeg` | MP3 audio files |
| `.wav` | `audio/wav` | WAV audio files |
| `.ogg` | `audio/ogg` | Ogg Vorbis files |
| `.m4a` | `audio/mp4` | MP4 audio files |
| `.flac` | `audio/flac` | FLAC lossless audio |

## Output Formats

### Multimedia (Default)
```jsx
<Audio src="./greeting.mp3" />
```
**Output:**
```text
[Audio: audio/mpeg]
```

### HTML
```jsx
<Audio syntax="html" src="./greeting.mp3" />
```
**Output:**
```html
<audio src="data:audio/mpeg;base64,..." controls style="vertical-align: middle;"></audio>
```

### Markdown
```jsx
<Audio syntax="markdown" src="./greeting.mp3" />
```
**Output:**
```html
<audio src="data:audio/mpeg;base64,..." controls></audio>
```

### Other Formats (JSON, YAML, XML, Text)
For structured formats, shows descriptive text or alternative text:
```jsx
<Audio syntax="text" src="./greeting.mp3" alt="Welcome message" />
```
**Output:**
```text
Welcome message
```

## Examples

### Basic Audio Inclusion
```jsx
<div>
  <Header level={3}>Welcome Message</Header>
  <p>Listen to our welcome message:</p>
  <Audio src="./assets/welcome.mp3" alt="Welcome to our platform" />
</div>
```

### Multiple Audio Files
```jsx
<div>
  <Header level={3}>Audio Examples</Header>
  
  <p>Greeting:</p>
  <Audio src="./audio/greeting.wav" position="here" />
  
  <p>Background music:</p>
  <Audio src="./audio/background.mp3" position="top" />
  
  <p>Sound effect:</p>
  <Audio src="./audio/notification.ogg" position="bottom" />
</div>
```

### With Variables
```jsx
<div>
  <Header level={3}>{audioTitle}</Header>
  <Audio src={audioPath} alt={audioDescription} />
</div>
```

**Usage:**
```typescript
const template = `
  <div>
    <Header level={3}>{audioTitle}</Header>
    <Audio src={audioPath} alt={audioDescription} />
  </div>
`;

const result = await epomlparse(template, {
  audioTitle: "Podcast Episode 1",
  audioPath: "./podcasts/episode-001.mp3",
  audioDescription: "Introduction to EPOML"
});
```

### Base64 Audio Data
```jsx
<Audio 
  base64="UklGRv4DAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgA..."
  type="audio/wav"
  alt="Embedded audio clip"
  position="here"
/>
```

### HTML Output for Web
```jsx
<div>
  <Header level={2}>Interactive Audio</Header>
  <p>Click play to listen:</p>
  <Audio 
    syntax="html"
    src="./demo.mp3"
    position="here"
  />
</div>
```

### Error Handling with Alt Text
```jsx
<div>
  <Header level={3}>Audio Content</Header>
  <p>If audio doesn't load, you'll see descriptive text:</p>
  <Audio 
    src="./might-not-exist.mp3" 
    alt="Backup description of audio content"
  />
</div>
```

## Best Practices

1. **Always Provide Alt Text**: Use `alt` prop for accessibility and fallback
2. **File Size Awareness**: Large audio files will create large base64 strings
3. **Format Selection**: Choose appropriate audio format for use case
4. **Error Handling**: Handle file not found scenarios gracefully
5. **Performance**: Consider using `src` paths rather than embedding base64 for large files
6. **Accessibility**: Provide transcriptions or descriptions for important audio content

## Common Patterns

### Podcast Documentation
```jsx
<div>
  <Header level={2}>Episode {episodeNumber}: {episodeTitle}</Header>
  <p>Duration: {duration} | Released: {releaseDate}</p>
  
  <Audio 
    src={audioFile}
    alt={`Podcast episode: ${episodeTitle}`}
  />
  
  <Header level={3}>Episode Notes</Header>
  <p>{episodeDescription}</p>
</div>
```

### Tutorial with Audio
```jsx
<div>
  <Header level={3}>Step {stepNumber}: {stepTitle}</Header>
  <p>{stepDescription}</p>
  
  <Audio 
    src={`./tutorials/step-${stepNumber}.mp3`}
    alt={`Audio instructions for ${stepTitle}`}
  />
  
  <p>Follow along with the audio instructions above.</p>
</div>
```

### Audio Gallery
```jsx
<div>
  <Header level={2}>Sound Library</Header>
  
  {audioFiles.map(file => (
    <div>
      <Header level={4}>{file.title}</Header>
      <Audio 
        src={file.path}
        alt={file.description}
        position="here"
      />
      <p>{file.description}</p>
    </div>
  ))}
</div>
```

### Conditional Audio Display
```jsx
{includeAudio && (
  <div>
    <Header level={3}>Audio Version</Header>
    <Audio 
      src="./content-audio.mp3"
      alt="Audio version of this content"
    />
  </div>
)}
```

## Error Scenarios

The Audio component handles several error conditions:

### File Not Found
```jsx
<!-- If file doesn't exist and alt is provided -->
<Audio src="./missing.mp3" alt="Audio unavailable" />
<!-- Renders: "Audio unavailable" -->

<!-- If file doesn't exist and no alt -->
<Audio src="./missing.mp3" />
<!-- Throws error: "Failed to read audio file: ./missing.mp3" -->
```

### Invalid Props
```jsx
<!-- Error: Cannot have both src and base64 -->
<Audio src="./file.mp3" base64="data..." />

<!-- Error: Must have either src or base64 -->
<Audio alt="No audio source" />
```

## Integration Examples

### With Documentation
```jsx
<div>
  <Header level={2}>Voice Commands</Header>
  <p>Here are examples of voice commands you can use:</p>
  
  <Header level={4}>Command: "Start Recording"</Header>
  <Audio src="./commands/start-recording.wav" alt="Start recording command" />
  
  <Header level={4}>Command: "Stop Recording"</Header>
  <Audio src="./commands/stop-recording.wav" alt="Stop recording command" />
</div>
```

### In Training Materials
```jsx
<div>
  <Header level={3}>Pronunciation Guide</Header>
  <p>Listen to the correct pronunciation:</p>
  
  <ul>
    <li>
      <Bold>EPOML</Bold>: <Audio src="./pronunciation/epoml.mp3" alt="EE-pohm-el" />
    </li>
    <li>
      <Bold>Template</Bold>: <Audio src="./pronunciation/template.mp3" alt="TEM-playt" />
    </li>
  </ul>
</div>
```

### With Code Examples
```jsx
<div>
  <Header level={3}>Audio Processing Example</Header>
  <p>Here's how to process this audio file:</p>
  
  <Audio src="./sample.wav" alt="Sample audio for processing" />
  
  <Code inline={false} lang="javascript">
    const audio = new Audio('./sample.wav');
    audio.play();
  </Code>
</div>
```

## Technical Notes

1. **Base64 Encoding**: Files are automatically converted to base64 for embedding
2. **MIME Type Detection**: Automatically inferred from file extensions
3. **Data URLs**: HTML output uses data URLs for audio source
4. **File System Access**: Requires read permissions for source files
5. **Memory Usage**: Large audio files will increase memory usage when embedded

## Related Components

- **[Header](./Header.md)** - For audio section titles
- **[CaptionedParagraph](./CaptionedParagraph.md)** - For audio descriptions
- **[Code](./Code.md)** - For showing audio processing code examples