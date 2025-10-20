# my-trade-kit

One-page MVP website for My Trade Kit - digital services for busy businesses.
## Contact form email setup

The contact form posts to `/api/contact` and sends an email using SMTP. In production you must provide SMTP credentials; locally, if nothing is configured, the server will use an Ethereal test account and log a preview link in the console.
1) Create your `.env.local` from the template

Copy `.env.local.example` to `.env.local` and fill in values:
```
CONTACT_TO=mytradekit@gmail.com
CONTACT_FROM=hello@mytradekit.com
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password_or_app_password
```
2) Provider quick-starts

- Gmail (requires 2FA + App Password):
	- SMTP_HOST=smtp.gmail.com
	- SMTP_PORT=465
	- SMTP_SECURE=true
	- SMTP_USER=yourgmail@gmail.com
	- SMTP_PASS=your_app_password

- Brevo/Sendinblue:
	- SMTP_HOST=smtp-relay.sendinblue.com
	- SMTP_PORT=587
	- SMTP_SECURE=false
	- SMTP_USER=your_account_login_or_api_key
	- SMTP_PASS=your_smtp_password

- Mailgun (EU example):
	- SMTP_HOST=smtp.eu.mailgun.org
	- SMTP_PORT=587
	- SMTP_SECURE=false
	- SMTP_USER=postmaster@YOUR_DOMAIN
	- SMTP_PASS=your_mailgun_smtp_password

3) Test locally

- Start the dev server and submit the form. If you didn’t set SMTP locally, check your terminal for an Ethereal “Preview URL” to view the email.
# My Trade Kit Website

A modern, responsive one-page website for My Trade Kit - providing digital marketing services for tradies.

## 🚀 Features

- **Modern Design**: Clean, professional layout with custom typography and brand colors
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js 13 for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Scroll-to-Top**: Enhanced navigation with smooth scroll-to-top functionality
- **Contact Form**: Interactive form for client inquiries

## 🎨 Brand Identity

- **Primary Purple**: #513d86
- **Orange Accent**: #f86406
- **Green Trust**: #17704d
- **Background**: #fffaf5

## 🛠️ Tech Stack

- **Next.js**: 13.5.11 (App Router)
- **React**: 18
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Custom Fonts**: Special Gothic Expanded One, Liter

## 📋 Sections

- **Header**: Logo, phone number, and contact CTA button (responsive - buttons hidden on mobile)
- **Hero**: Engaging introduction with brand gradient background
- **About**: Mission and values explanation
- **Services**: Overview of digital marketing services offered
- **Testimonials**: Client feedback to build trust
- **Contact**: Simple inquiry form
- **Footer**: Company information and links
- **Scroll to Top**: Smooth scroll-to-top button

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CaptainSplash/my-trade-kit.git
```

2. Navigate to the project directory:
```bash
cd my-trade-kit
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design Guidelines

### Brand Colors
- **Purple**: #513d86 (Primary headings, accents)
- **Orange**: #f86406 (CTA buttons, highlights)
- **Green**: #17704d (Backgrounds, trust elements)
- **Light Cream**: #fffaf5 (Page background)

### Typography
- **Headlines**: Special Gothic Expanded One
- **Body**: Liter Regular

### Layout
- Max width: 1100px
- Center content
- Generous vertical spacing (80–120px between sections)
- Gradient backgrounds for hero and CTA sections

## 📦 Project Structure

```
my-trade-kit/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollToTop.tsx
│   └── styles/
│       ├── globals.css
│       ├── components.css
│       └── variables.css
├── public/
│   ├── Logo white.png
│   ├── Brand gradients.png
│   ├── favicon.ico
│   └── fonts/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

## 🚀 Deployment

This project is configured to be deployed on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy from the `master` branch
4. The `vercel.json` file ensures proper routing

**Live Site**: [Add your Vercel URL here]

## 📝 License

This project is licensed under the MIT License.

## 📧 Contact

For inquiries, please reach out via the contact form on the website or email at: [your-email@example.com]