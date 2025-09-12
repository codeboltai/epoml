# CaptionedParagraph Component

## × should render captioned paragraph with different syntax (2 ms)
**Input:**
```jsx
<CaptionedParagraph caption="Test Caption" syntax="html">This is the content</CaptionedParagraph>
```

**Expected:**
```
<h3>Test Caption</h3>
```

**Actual:**
```
Test CaptionThis is the content
```

## √ should render captioned paragraph with default settings (9 ms)
## √ should render captioned paragraph with header style (1 ms)
## √ should render captioned paragraph with bold style
