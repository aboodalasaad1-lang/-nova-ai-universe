# Nova AI Universe 🚀

> **Your Personal AI Companion for the Future**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.171-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.2-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io/)

## ✨ Features

- 🤖 **AI Companion System** - Choose between Nova (Male) or Luna (Female)
- 🎮 **Evolution System** - Your companion grows from Level 1 to 100
- 🧠 **Long-Term Memory** - AI remembers everything about you
- 💬 **Advanced Chat** - GPT-powered conversations with voice support
- 🔮 **Future Self** - Visualize your future with AI-generated content
- 🎨 **Image Generator** - Create stunning visuals from text
- 🎬 **Video Generator** - Generate videos for TikTok, Reels, Shorts
- 👨‍⚕️ **AI Experts** - Consult with specialized AI professionals
- 🏆 **Gamification** - XP, streaks, achievements, and missions
- 💎 **Premium Design** - Glassmorphism, dark mode, smooth animations
- 💳 **Payment System** - Stripe, PayPal, Apple Pay, Google Pay
- 🔐 **Security** - JWT, OAuth, 2FA, End-to-End Encryption

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- OpenAI API key
- Stripe account (for payments)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/nova-ai-universe.git
cd nova-ai-universe

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# 4. Set up database
npx prisma generate
npx prisma db push

# 5. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
nova-ai-universe/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth routes (login, register)
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── 3d/               # Three.js components
│   ├── animations/       # Animation components
│   ├── layout/           # Layout components
│   └── providers/        # Context providers
├── lib/                   # Utilities & configs
│   ├── auth.ts           # NextAuth config
│   ├── prisma.ts         # Prisma client
│   ├── store.ts          # Zustand store
│   └── utils.ts          # Helper functions
├── types/                 # TypeScript types
├── prisma/               # Database schema
└── public/               # Static assets
```

## 🎨 Design System

- **Colors**: Nova Blue (#00D4FF), Nova Pink (#FF6B9D), Nova Purple (#8B5CF6)
- **Style**: Glassmorphism, Dark Mode, Premium Gradients
- **Animations**: Framer Motion, Three.js, CSS Animations
- **Typography**: Inter font family

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15, React 19 |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS 3.4 |
| 3D | Three.js, React Three Fiber |
| Animation | Framer Motion |
| Database | PostgreSQL, Prisma |
| Auth | NextAuth v5 |
| State | Zustand |
| Payments | Stripe |
| Icons | Lucide React |

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ by Nova AI Universe Team**
