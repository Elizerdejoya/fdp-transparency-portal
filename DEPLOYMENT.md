# FDP Transparency Portal - Deployment Guide

## Quick Start Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `fdp-transparency-portal`
3. Make it **Public** (required for GitHub Pages free tier)
4. Do NOT initialize with README, .gitignore, or license

### Step 2: Initialize and Push Code

From the project root directory, run:

```powershell
# Initialize git (if not already done)
git config user.email "your.email@example.com"
git config user.name "Your Name"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: FDP Transparency Portal for Batangas LGUs"

# Set main branch
git branch -M main

# Add remote repository
git remote add origin https://github.com/yourusername/fdp-transparency-portal.git

# Push to GitHub
git push -u origin main
```

Replace `yourusername` with your GitHub username.

### Step 3: Automatic Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` will automatically:

1. **Trigger on push** to main branch
2. **Install dependencies** (npm install)
3. **Build the project** (npm run build)
4. **Export static files** (via next.config.ts configuration)
5. **Deploy to GitHub Pages** using peaceiris/actions-gh-pages

**Wait 2-3 minutes** for the deployment to complete.

### Step 4: Access Your Site

Your portal will be live at:

```
https://yourusername.github.io/fdp-transparency-portal/
```

**Example**: If your username is `john-doe`, your site is at:
```
https://john-doe.github.io/fdp-transparency-portal/
```

## Configuration Options

### Option A: Custom Domain

To use your own domain (e.g., `fdp-portal.com`):

1. **Update GitHub Actions workflow**:
   - Edit `.github/workflows/deploy.yml`
   - Change this line:
     ```yaml
     cname: fdp-portal.com
     ```
   - Replace with your domain

2. **Configure DNS**:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or follow [GitHub's custom domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

3. **Push changes**:
   ```powershell
   git add .
   git commit -m "Configure custom domain"
   git push
   ```

### Option B: GitHub Organization Pages

If deploying under an organization (instead of personal):

1. Create repository: `fdp-transparency-portal` under organization
2. Site URL: `https://orgname.github.io/fdp-transparency-portal/`

### Option C: Project Pages (Subdirectory)

If you need the site at a subdirectory, update:

**next.config.ts**:
```typescript
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fdp-transparency-portal",
  images: {
    unoptimized: true,
  },
};
```

Then rebuild and push:
```powershell
npm run build
git add .
git commit -m "Add basePath for subdirectory deployment"
git push
```

## Troubleshooting

### Issue: "GitHub Actions workflow not running"

**Solution**:
- Ensure `.github/workflows/deploy.yml` exists
- Check Settings → Actions → Workflow permissions
- Set to "Read and write permissions"

### Issue: "404 Not Found on all pages"

**Causes**:
- GitHub Pages not enabled
- Wrong repository name
- Deployment still in progress

**Solutions**:
1. Go to repository Settings → Pages
2. Verify "Source" is set to "Deploy from a branch"
3. Select branch: `gh-pages` (auto-created by workflow)
4. Wait 2-3 minutes for deployment

### Issue: "CSS/styling not working"

**Solution**: This usually means the basePath is incorrect. Verify:
- `next.config.ts` doesn't have `basePath` unless needed
- All links use relative paths
- Rebuild: `npm run build`

### Issue: "Images not loading"

**Solution**: Ensure images are unoptimized in `next.config.ts`:
```typescript
images: {
  unoptimized: true,
}
```

## Manual Deployment (Without GitHub Actions)

If you prefer to deploy manually:

1. **Build locally**:
   ```powershell
   npm run build
   ```

2. **Create gh-pages branch**:
   ```powershell
   git checkout --orphan gh-pages
   git rm -rf .
   xcopy out\* . /E /I
   git add .
   git commit -m "Deploy static site"
   git push origin gh-pages
   ```

3. **Switch back to main**:
   ```powershell
   git checkout main
   ```

4. **Configure GitHub Pages**:
   - Settings → Pages
   - Select branch: `gh-pages`
   - Click Save

## Updating the Site

After making changes:

```powershell
# Make your changes
# Edit files as needed

# Commit and push
git add .
git commit -m "Update: your changes description"
git push

# GitHub Actions will automatically rebuild and deploy
```

**Important**: Always work on the `main` branch. The workflow automatically updates `gh-pages` branch with built files.

## Performance & Optimization

### CDN Performance
- GitHub Pages uses GitHub's CDN (free)
- Content is cached globally
- Highly available and fast

### Build Optimization
- Static HTML export (no server needed)
- Optimized CSS with Tailwind
- No JavaScript runtime overhead
- Instant page loads

### Page Size
- Home page: ~25KB
- Content pages: ~15-20KB each
- Total site: <500KB

## Security Considerations

✅ **GitHub Pages Security**:
- Free HTTPS/SSL certificate (auto-renewed)
- DDoS protection included
- No server vulnerabilities
- Read-only static content

⚠️ **Things to Remember**:
- All content is public (don't include sensitive data)
- Feedback form requires backend (see below)
- User data not stored on GitHub Pages

## Feedback Form Backend

The feedback form currently shows success message (frontend only). To save feedback:

### Option 1: Formspree (Recommended - Free)

1. Go to [Formspree](https://formspree.io/)
2. Sign up with GitHub
3. Create new form endpoint
4. Update feedback form action:

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

### Option 2: Netlify Forms

Deploy to Netlify instead:
```powershell
npm install -D netlify-cli
netlify deploy --prod
```

### Option 3: Firebase

Use Firebase to capture form submissions (see Firebase docs).

## Monitoring & Analytics

Add Google Analytics (optional):

1. Create Google Analytics property
2. Add to `app/layout.tsx`:

```jsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## Support & Issues

For help:
- [Next.js Docs](https://nextjs.org/docs)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Status**: Ready for Deployment
