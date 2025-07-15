diff --git a/README.md b/README.md
--- a/README.md
+++ b/README.md
@@ -1,103 +1,280 @@
-## 📸 Project Preview
-
-![EcoHeaven Screenshot](https://raw.githubusercontent.com/yogesh-123231/EcoHeaven-Realty/main/public/Image/screenshot.png)
-
-
-EcoHeaven Realty is a modern, eco-friendly real estate website built using **React**, **Vite**, and **Tailwind CSS**. It features beautiful animations, a responsive design, and a functional contact form — all deployed seamlessly on Netlify.
-
----
-
-
-## 🚀 Live Demo
-
-👉 [Click here to view the live site](https://ecoheaven-reality.netlify.app)
-
----
-
-
-## 🛠️ Tech Stack
-
-- ⚛️ **React** – Component-based UI
-- ⚡ **Vite** – Fast build tool for modern web apps
-- 🎨 **Tailwind CSS** – Utility-first CSS framework
-- 🎬 **Framer Motion** – Smooth animations and transitions
-- 📬 **Web3Forms** – Contact form handling without backend
-- 🌐 **Netlify** – Hosting and deployment
-
----
-
-## ✨ Features
-
-- ✅ Responsive design for mobile, tablet, and desktop
-- ✅ Beautiful scroll and hover animations with Framer Motion
-- ✅ Eco-themed UI with clean layout
-- ✅ Functional contact form powered by Web3Forms
-- ✅ Optimized for performance using Vite
-
----
-
-## 📂 Folder Structure
-
-```
-
-EcoHeaven-Realty/
-├── public/             # Static assets
-├── src/
-│   ├── assets/         # Images and media
-│   ├── components/     # Reusable React components
-│   ├── App.jsx         # Main app component
-│   └── main.jsx        # Entry point
-├── index.html
-├── package.json
-├── README.md
-└── vite.config.js
-
-````
-
----
-
-## 🧑‍💻 Getting Started
-
-Follow these steps to run the project locally:
-
-```bash
-# Clone the repository
-git clone https://github.com/yogesh-123231/EcoHeaven-Realty.git
-cd EcoHeaven-Realty
-
-# Install dependencies
-npm install
-
-# Run development server
-npm run dev
-````
-
-Open [http://localhost:5173](http://localhost:5173) in your browser to see it live.
-
----
-
-
-## 📬 Contact Form Setup (Web3Forms)
-
-* The contact form is handled via [Web3Forms](https://web3forms.com/)
-* Replace the access key in the form with your own to enable form submissions.
-
----
-
-
-## 📄 License
-
-This project is open-source and available under the **MIT License**.
-
----
-
-
-## 👤 Author
-
-* 📧 Email: [yogeshdumane987@gmail.com](mailto:yogeshdumane987@gmail.com)
-* 💼 LinkedIn: [in/yogeshdumane](https://www.linkedin.com/in/yogeshdumane)
-
----
-
-
-> 🌍 *EcoHeaven Realty brings together nature and technology to create a clean, fast, and functional real estate experience.*
+<div align="center">
+
+# 🌿 EcoHeaven Realty 
+### *Where Sustainability Meets Modern Living*
+
+[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-00D2FF?style=for-the-badge&logo=netlify&logoColor=white)](https://ecoheaven-reality.netlify.app)
+[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
+[![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
+[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
+[![Node.js](https://img.shields.io/badge/Node.js-20.x-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
+
+![EcoHeaven Screenshot](https://raw.githubusercontent.com/yogesh-123231/EcoHeaven-Realty/main/public/Image/screenshot.png)
+
+</div>
+
+---
+
+## 🚀 Overview
+
+**EcoHeaven Realty** is a cutting-edge, eco-conscious real estate platform built with modern web technologies. Combining stunning visual design with environmental sustainability, this application offers an immersive experience for users seeking eco-friendly properties and sustainable living solutions.
+
+### ✨ Why EcoHeaven?
+
+- 🌱 **Eco-Focused**: Promoting sustainable real estate solutions
+- ⚡ **Lightning Fast**: Built with Vite for optimal performance
+- 📱 **Responsive Design**: Perfect experience across all devices
+- 🎨 **Modern UI/UX**: Clean, intuitive interface with smooth animations
+- 🔧 **Production Ready**: Optimized and deployed with best practices
+
+---
+
+## 🛠️ Tech Stack
+
+<div align="center">
+
+| Frontend | Styling | Build Tools | Libraries | Deployment |
+|----------|---------|-------------|-----------|------------|
+| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) | ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) | ![Netlify](https://img.shields.io/badge/-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white) |
+| React 19.1.0 | TailwindCSS 4.1.11 | Vite 7.0.0 | Motion 12.20.2 | Netlify Hosting |
+| | | ESLint 9.29.0 | Lucide React | Web3Forms |
+
+</div>
+
+---
+
+## 🎯 Features
+
+<table>
+<tr>
+<td width="50%">
+
+### 🏡 **Core Features**
+- ✅ **Property Listings** - Curated eco-friendly properties
+- ✅ **Interactive Gallery** - High-quality property images
+- ✅ **Contact System** - Web3Forms integration
+- ✅ **FAQ Section** - Comprehensive information
+- ✅ **Testimonials** - Customer reviews and feedback
+
+</td>
+<td width="50%">
+
+### 🎨 **Technical Features**
+- ✅ **Responsive Design** - Mobile-first approach
+- ✅ **Smooth Animations** - Framer Motion integration
+- ✅ **Modern Icons** - Lucide React & React Icons
+- ✅ **Fast Loading** - Vite optimization
+- ✅ **Clean Code** - ESLint configuration
+
+</td>
+</tr>
+</table>
+
+---
+
+## 🚦 Quick Start
+
+### Prerequisites
+
+```bash
+node --version  # Should be 20.x or higher
+npm --version   # Should be 9.x or higher
+```
+
+### Installation
+
+```bash
+# 📥 Clone the repository
+git clone https://github.com/yogesh-123231/EcoHeaven-Realty.git
+cd EcoHeaven-Realty
+
+# 📦 Install dependencies
+npm install
+
+# 🚀 Start development server
+npm run dev
+```
+
+### Available Scripts
+
+```bash
+npm run dev      # 🔥 Start development server
+npm run build    # 📦 Build for production
+npm run preview  # 👀 Preview production build
+npm run lint     # 🔍 Run ESLint
+```
+
+---
+
+## 📁 Project Structure
+
+```
+EcoHeaven-Realty/
+├── 📁 public/                 # Static assets
+│   └── 🖼️ Image/             # Project images
+├── 📁 src/
+│   ├── 📁 assets/             # Media files
+│   ├── 📁 components/         # React components
+│   │   ├── 📄 About.jsx       # About section
+│   │   ├── 📄 Benefits.jsx    # Benefits showcase
+│   │   ├── 📄 Contact.jsx     # Contact form
+│   │   ├── 📄 EcoBanner.jsx   # Eco banner
+│   │   ├── 📄 FAQ.jsx         # FAQ section
+│   │   ├── 📄 Footer.jsx      # Site footer
+│   │   ├── 📄 Header.jsx      # Site header
+│   │   ├── 📄 Navbar.jsx      # Navigation
+│   │   ├── 📄 Projects.jsx    # Project gallery
+│   │   └── 📄 Testimonails.jsx # Customer reviews
+│   ├── 📄 App.jsx             # Main component
+│   ├── 📄 main.jsx            # Entry point
+│   ├── 📄 index.css           # Global styles
+│   └── ⚙️ tailwind.config.js   # Tailwind config
+├── 📄 index.html              # HTML template
+├── 📄 vite.config.js          # Vite configuration
+├── 📄 eslint.config.js        # ESLint rules
+├── 📄 package.json            # Dependencies
+└── 📄 README.md               # Documentation
+```
+
+---
+
+## 🎨 Design Philosophy
+
+<div align="center">
+
+### 🌿 **Sustainability First**
+Every design decision reflects our commitment to environmental consciousness
+
+### ⚡ **Performance Optimized**
+Lightning-fast loading times with modern build tools and optimization
+
+### 📱 **Mobile-First Responsive**
+Seamless experience across all devices and screen sizes
+
+### 🎭 **Smooth Animations**
+Delightful micro-interactions powered by Framer Motion
+
+</div>
+
+---
+
+## 🔧 Configuration
+
+### Contact Form Setup
+
+1. Visit [Web3Forms](https://web3forms.com/) to get your access key
+2. Replace the access key in `src/components/Contact.jsx`:
+
+```jsx
+// Replace YOUR_ACCESS_KEY with your Web3Forms key
+const accessKey = "YOUR_ACCESS_KEY";
+```
+
+### Environment Variables
+
+Create a `.env` file in the root directory:
+
+```bash
+VITE_WEB3FORMS_KEY=your_web3forms_access_key
+VITE_APP_TITLE=EcoHeaven Realty
+```
+
+---
+
+## 🚀 Deployment
+
+### Netlify (Recommended)
+
+1. Connect your repository to Netlify
+2. Build settings:
+   - **Build command**: `npm run build`
+   - **Publish directory**: `dist`
+3. Deploy! 🎉
+
+### Manual Deployment
+
+```bash
+# Build the project
+npm run build
+
+# The dist/ folder contains your production build
+# Upload the contents to your hosting provider
+```
+
+---
+
+## 🤝 Contributing
+
+<div align="center">
+
+We welcome contributions! Here's how you can help:
+
+[![Open Issues](https://img.shields.io/badge/🐛_Report_Bug-Open_Issue-red?style=for-the-badge)](https://github.com/yogesh-123231/EcoHeaven-Realty/issues)
+[![Feature Request](https://img.shields.io/badge/💡_Request_Feature-Open_Issue-blue?style=for-the-badge)](https://github.com/yogesh-123231/EcoHeaven-Realty/issues)
+[![Pull Request](https://img.shields.io/badge/🔧_Submit_PR-Contribute-green?style=for-the-badge)](https://github.com/yogesh-123231/EcoHeaven-Realty/pulls)
+
+</div>
+
+### Development Workflow
+
+1. **Fork** the repository
+2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
+3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
+4. **Push** to the branch (`git push origin feature/AmazingFeature`)
+5. **Open** a Pull Request
+
+---
+
+## 📝 License
+
+<div align="center">
+
+This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
+
+[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
+
+</div>
+
+---
+
+## 👨‍💻 Author
+
+<div align="center">
+
+### **Yogesh Dumane**
+
+[![Email](https://img.shields.io/badge/📧_Email-yogeshdumane987@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yogeshdumane987@gmail.com)
+[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yogeshdumane)
+[![GitHub](https://img.shields.io/badge/👨‍💻_GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yogesh-123231)
+
+</div>
+
+---
+
+## 📊 Project Stats
+
+<div align="center">
+
+![GitHub repo size](https://img.shields.io/github/repo-size/yogesh-123231/EcoHeaven-Realty?style=for-the-badge&logo=github)
+![GitHub last commit](https://img.shields.io/github/last-commit/yogesh-123231/EcoHeaven-Realty?style=for-the-badge&logo=git)
+![GitHub stars](https://img.shields.io/github/stars/yogesh-123231/EcoHeaven-Realty?style=for-the-badge&logo=github)
+![GitHub forks](https://img.shields.io/github/forks/yogesh-123231/EcoHeaven-Realty?style=for-the-badge&logo=github)
+
+</div>
+
+---
+
+<div align="center">
+
+### 🌍 *Building a Sustainable Future, One Property at a Time*
+
+**Made with ❤️ and ☘️ by Yogesh Dumane**
+
+[⬆ Back to Top](#-ecoheaven-realty)
+
+</div>
+
+
+
+
+
