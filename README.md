
# Aashish Bande - Portfolio

A modern, cybersecurity-themed portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live portfolio at: [https://aashishsec.github.io/](https://aashishsec.github.io/)

## 📋 Features

- **Modern Design**: Cybersecurity/hacker-themed UI with matrix-style animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Vite for fast loading times
- **SEO Friendly**: Optimized meta tags and structured data
- **Contact Form**: Integrated contact form with Formspree
- **GitHub Pages Ready**: Optimized for GitHub Pages deployment

## 🛠️ Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- React Hook Form
- Shadcn/ui Components
- Lucide React Icons

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured with GitHub Actions for automatic deployment:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/aashishsec.github.io/`

### Manual Deployment

If you prefer to deploy manually:

1. Make the deploy script executable:
   ```bash
   chmod +x deploy.sh
   ```

2. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/aashishsec/aashishsec.github.io.git
   cd aashishsec.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📧 Contact Form Setup

To enable the contact form:

1. Create a free account at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Replace `YOUR_FORM_ID` in `src/components/Contact.tsx` with your actual form ID

## 🎨 Customization

- **Colors**: Modify the color scheme in `src/index.css`
- **Content**: Update personal information in the respective components
- **Styling**: Customize the design using Tailwind CSS classes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ by Aashish Bande**
