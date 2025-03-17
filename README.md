# LMS-Course - Modern Learning Management System

## 🚀 Overview

LMS-Course is a comprehensive Learning Management System (LMS) designed to create an engaging educational experience for both instructors and students. Built with modern web technologies, this platform enables seamless course creation, management, and learning interactions.

Whether you're an educator looking to digitize your teaching materials or a student seeking quality online learning, LMS-Course provides an intuitive and feature-rich environment to meet your needs.

## ✨ Key Features

- **Comprehensive Course Management** - Create, organize, and manage courses with ease
- **Interactive Learning Experience** - Engage with video content, quizzes, and course materials
- **Drag-and-Drop Chapter Organization** - Easily reorder and organize course content
- **Secure Payment Processing** - Monetize courses with integrated Stripe payments
- **Real-time Progress Tracking** - Monitor student engagement and completion rates
- **Responsive Design** - Seamless experience across all devices
- **Custom Dashboard** - Personalized views for both teachers and students
- **Advanced Search Functionality** - Quickly find relevant courses and content
- **Rich Media Support** - Upload and stream videos, documents, and other learning materials

## 🛠️ Tech Stack

LMS-Course is built using modern, robust technologies:

- **Frontend Framework**: [Next.js](https://nextjs.org/) for server-side rendering and routing
- **UI Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive design
- **Component Library**: [Shadcn UI](https://ui.shadcn.com/) for consistent UI elements
- **Database**: [MySQL](https://www.mysql.com/) with [TiDB Cloud](https://www.pingcap.com/tidb-cloud/) for scalable data storage
- **ORM**: [Prisma](https://www.prisma.io/) for type-safe database queries
- **HTTP Client**: [Axios](https://axios-http.com/) for API interactions
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) for simplified state management
- **File Uploads**: [UploadThing](https://uploadthing.com/) for efficient file storage
- **Video Streaming**: [MUX](https://mux.com/) for optimized video delivery
- **Drag and Drop**: [hello-pangea/dnd](https://github.com/hello-pangea/dnd) for intuitive content reordering
- **Form Validation**: [Zod](https://zod.dev/) for robust schema validation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/LMS-Course.git
   cd LMS-Course
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   
   # Database
   DATABASE_URL=
   
   # File Upload
   UPLOADTHING_TOKEN=
   UPLOADTHING_SECRET=
   
   # Video Streaming
   MUX_TOKEN_ID=
   MUX_TOKEN_SECRET=
   
   # Payments
   STRIPE_API_KEY=
   STRIPE_WEBHOOK_SECRET=
   
   # User IDs
   NEXT_PUBLIC_TEACHER_ID=
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 📬 Contact

Have questions? Feel free to reach out!

- Email: mesuehchristian12@gmail.com