const express = require('express');
const path = require('path');
const app = express();

// Add security headers and proper content types
app.use((req, res, next) => {
  // Security headers
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('Content-Security-Policy', "default-src 'self' https://openrouter.ai https://fonts.googleapis.com https://fonts.gstatic.com; img-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https://telegram.org;");
  
  // Cache control for static assets
  if (req.url.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg)$/)) {
    const maxAge = 60 * 60 * 24 * 30; // 30 days
    res.set('Cache-Control', `public, max-age=${maxAge}`);
  }
  
  next();
});

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build'), {
  etag: true, // Enable ETags
  lastModified: true,
  setHeaders: (res, path) => {
    // Set proper content type for PNG files
    if (path.endsWith('.png')) {
      res.set('Content-Type', 'image/png');
    }
  }
}));

// For any request that doesn't match one above, send back the index.html file
app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Remove x-powered-by header
app.disable('x-powered-by');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
