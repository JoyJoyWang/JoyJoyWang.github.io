# Ella Wang - AI Safety Research Blog

Minimal, content-focused technical blog for AI Safety research notes. Inspired by academic research blogs like Lilian Weng's blog.

## Design Philosophy

- **Minimal and clean**: No business marketing language, no flashy colors
- **Content first**: Focus on technical substance over visual design
- **Academic style**: Clean typography, simple layout, GitHub-inspired colors
- **Podcast-ready**: Every post can have an audio version with continuous playlist playback

## Site Structure

```
├── index.html          # Home page with recent posts
├── posts.html          # All posts listing
├── resources.html      # AI Safety curated resources
├── about.html          # Academic CV/bio
├── styles.css          # Minimal styling (GitHub-inspired)
├── posts/
│   ├── audio/          # Audio files for podcast versions
│   └── post-template.html  # Template for new posts
└── README.md
```

## Color Scheme

Neutral, GitHub-inspired:
- Background: Clean white (#ffffff)
- Text: Dark gray (#24292e)
- Accent: Blue (#0366d6)
- Borders: Light gray (#e1e4e8)
- Code blocks: Light gray background (#f6f8fa)

No purple, no gradients, no business styling.

## Creating New Blog Posts

### 1. Create the HTML file

```bash
cp posts/post-template.html posts/your-new-post.html
```

### 2. Edit the post

- Update `<title>` and meta description
- Change the article title and date
- Write your content
- Add your post to the playlist array (see below)

### 3. Add audio (optional)

Place your audio file in `posts/audio/`:
```bash
# Example
posts/audio/your-new-post.mp3
```

### 4. Update the playlist

Edit the JavaScript in your post file to add it to the playlist:

```javascript
const playlistData = [
  {
    title: "Your New Post Title",
    file: "audio/your-new-post.mp3",
    url: "your-new-post.html",
    duration: "15:30"
  },
  // ... other posts
];
```

### 5. Add to posts.html

Add a new `<li class="post-item">` to `posts.html` and `index.html`:

```html
<li class="post-item">
  <div class="post-meta">January 15, 2025</div>
  <h3 class="post-title">
    <a href="posts/your-new-post.html">Your Post Title</a>
  </h3>
  <p class="post-excerpt">
    Brief description of your post...
  </p>
  <div class="post-tags">
    <a href="#" class="tag">alignment</a>
    <a href="#" class="tag">rlhf</a>
  </div>
</li>
```

## Audio Playlist Feature

The blog includes automatic audio playlist functionality:

1. **Each post has an audio player** that can play a podcast version
2. **Continuous playback**: When one audio finishes, it auto-advances to the next post
3. **Playlist view**: See all available posts with audio in a clickable playlist
4. **One-click navigation**: Click any playlist item to jump to that post

### Adding Audio to Posts

1. Record your audio (MP3 format recommended)
2. Place it in `posts/audio/`
3. Update the `<audio>` source in your post:
   ```html
   <audio id="mainAudio" controls>
     <source src="audio/your-post.mp3" type="audio/mpeg">
   </audio>
   ```
4. Add to the playlist array (see template)

## Local Development

```bash
# Option 1: Python
python3 -m http.server 8080

# Option 2: npx
npx http-server -p 8080

# Then visit http://localhost:8080
```

## Writing Style

- **Technical and direct**: No marketing fluff
- **Substance over style**: Content matters more than presentation
- **Clear structure**: Use headings, code blocks, and lists
- **Citations**: Reference papers with simple inline citations
- **Code**: Include runnable examples when relevant

### Good Example
```markdown
## RLHF Training Process

The training consists of three stages (Christiano et al., 2017):

1. Supervised fine-tuning on demonstration data
2. Reward model training from human comparisons
3. RL optimization using PPO

Key implementation detail: the reward model is trained on pairs of completions...
```

### Avoid
- Marketing language ("revolutionary", "game-changing")
- Excessive formatting or colors
- Business jargon
- Vague descriptions

## Updating Resources

Edit `resources.html` to add new papers:

```html
<li class="resource-item">
  <div class="resource-title">
    <a href="https://arxiv.org/abs/..." target="_blank">Paper Title</a>
  </div>
  <div class="resource-authors">Authors, Year</div>
  <p class="resource-description">
    Brief, technical description of the paper's contribution.
  </p>
</li>
```

## Deployment

### GitHub Pages

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update blog"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Settings → Pages
   - Source: main branch
   - Save

Site will be live at: `https://yourusername.github.io`

## File Organization

```
posts/
├── audio/
│   ├── understanding-rlhf.mp3
│   ├── mechanistic-interpretability.mp3
│   └── red-teaming-llms.mp3
├── understanding-rlhf.html
├── mechanistic-interpretability.html
├── red-teaming-llms.html
└── post-template.html
```

## Key Features

- ✅ Minimal, academic design
- ✅ Audio podcast support with automatic playlists
- ✅ Responsive (mobile-friendly)
- ✅ Fast and lightweight
- ✅ Easy to maintain
- ✅ Print-friendly
- ✅ No JavaScript dependencies
- ✅ Clean, semantic HTML

## Typography

- **Sans-serif**: System fonts (-apple-system, SF, Segoe UI, Helvetica)
- **Monospace**: SF Mono, Monaco, Consolas for code
- **Line height**: 1.7 for readability
- **Max width**: 800px for optimal reading

## Maintenance

To add a new post:
1. Write the HTML using the template
2. Add audio file (optional)
3. Update posts.html
4. Update index.html (if recent)
5. Commit and push

That's it! No build process, no complex tooling.

---

Built for clarity and substance. Inspired by research blogs that prioritize content over design.
