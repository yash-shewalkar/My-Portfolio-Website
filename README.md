# Portfolio Project Summary

## Project Overview
This project is a personal portfolio website built using **Next.js**, showcasing various aspects of the developer's work and skills. The website is deployed on **Vercel** and optimized for **performance and responsiveness**.

---

## API Structure

### **Bookmarks API**
- **POST**: Adds a new bookmark by fetching metadata using the **LinkPreview API** and saving it with **Prisma**.
- **GET**: Retrieves all bookmarks, ordered by creation date.
- **DELETE**: Deletes a specific bookmark by ID.

### **Auth API**
- **GET and POST** handlers for user authentication using **NextAuth** and **Google OAuth**.

### **SendMail API**
- **POST**: Sends email via a contact form using **Nodemailer**.

---

## Pages and Content

### **Home Page**
- **Hero section** introducing the developer.
- Sections for **about, projects, and contact information**.

### **Bookmarks Page**
- Displays a **list of bookmarks** with options to **add** and **delete** bookmarks.
- Includes a **form for adding bookmarks** and handling errors.

### **Admin Bookmarks Page**
- Similar to the bookmarks page, but includes **additional admin functionalities**.

### **Contact Page**
- **Contact form** allowing users to send messages with an **optional file attachment**.

---

## External APIs Used
- **LinkPreview API**: Used to fetch metadata for bookmarks.
- **Google OAuth**: Used for user authentication.

---

## Tech Stack Used

### **Frontend**
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

### **Backend**
- **Node.js**
- **Prisma ORM**

### **Database**
- **Not specified** (assumed to be compatible with Prisma)

### **Deployment**
- **Vercel**

### **Authentication**
- **NextAuth with Google OAuth**

### **Email Service**
- **Nodemailer**

---

## Libraries Used
- `@prisma/client`: ORM for database interactions.
- `next-auth`: Authentication library.
- `nodemailer`: For sending emails.
- `react-icons`: For icon components.
- `framer-motion`: For animations.
- `tailwindcss`: For styling.
- `@react-three/fiber`: For 3D graphics.
- `cookies-next`: For handling cookies.
- **Vercel Analytics**: For tracking analytics.

---

## Key Features
- **Responsive Design**: Optimized for various screen sizes using **Tailwind CSS**.
- **Bookmark Management**: Allows users to **add, view, and delete bookmarks**.
- **Authentication**: Secure login with **Google OAuth**.
- **Contact Form**: Users can send messages with **file attachments** via email.
- **Admin Middleware**: Protects **admin routes** and redirects unauthorized users.











# Live Demo
https://shewalkar.tech/

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# My-Portfolio-Webisite" 
