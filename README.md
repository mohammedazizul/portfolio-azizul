# Azizul's Portfolio

A modern, responsive portfolio website built with React, Vite, and modern web technologies. Showcasing professional web development projects and skills.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, React Router v6
- **Responsive Design**: Mobile-first approach with Bootstrap
- **Interactive Elements**: Particle animations, typewriter effects
- **Performance Optimized**: Code splitting, lazy loading, optimized builds
- **SEO Friendly**: Meta tags, Open Graph, Twitter Cards
- **Analytics**: Google Analytics integration
- **Accessibility**: ARIA labels, semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0, React Router DOM 6.22.0
- **Build Tool**: Vite 3.2.7
- **Styling**: Bootstrap 5.3.2, React Bootstrap 2.10.1
- **Animations**: React TSParticles 2.9.3, React Simple Typewriter 5.0.1
- **Icons**: FontAwesome 6.5.1
- **Analytics**: React GA 3.3.1
- **Email**: EmailJS 3.2.0

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohammedazizul/portfolio-azizul.git
   cd portfolio-azizul
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
portfolio-azizul/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Blogs/         # Blog components
│   │   ├── Contact/       # Contact form
│   │   ├── Footer/        # Footer component
│   │   ├── Header/        # Hero section
│   │   ├── Home/          # Home page
│   │   ├── NavBar/        # Navigation
│   │   └── Projects/      # Project showcase
│   ├── data/              # Data files
│   ├── images/            # Image assets
│   ├── pages/             # Page components
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🌟 Key Features

### Performance Optimizations
- **Code Splitting**: Automatic chunk splitting for better loading
- **Asset Optimization**: Compressed images and optimized builds
- **Lazy Loading**: Components loaded on demand
- **Bundle Analysis**: Optimized bundle sizes

### SEO & Accessibility
- **Meta Tags**: Comprehensive SEO meta tags
- **Open Graph**: Social media sharing optimization
- **ARIA Labels**: Screen reader accessibility
- **Semantic HTML**: Proper HTML structure

### Modern Development
- **Hot Reload**: Fast development experience
- **TypeScript Ready**: Easy migration path
- **ESLint**: Code quality enforcement
- **Prettier**: Consistent code formatting

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to package.json:
   ```json
   {
     "homepage": "https://username.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Configuration

### Environment Variables
Create a `.env` file for sensitive data:
```env
VITE_GA_TRACKING_ID=G-PB2B26E0D0
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

### Customization
- Update `src/data/projectData.jsx` for projects
- Modify `src/components/Header/Header.jsx` for personal info
- Edit `index.html` for meta tags and title
- Update `vite.config.js` for build optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohammed Azizul Hoque Sheikh**
- Email: mohammedazizulhoquesheikh@gmail.com
- LinkedIn: [Azizul Sheikh](https://linkedin.com/in/azizul-sheikh)
- GitHub: [@mohammedazizul](https://github.com/mohammedazizul)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Bootstrap team for the responsive framework
- All contributors and supporters

---

⭐ Star this repository if you found it helpful!
