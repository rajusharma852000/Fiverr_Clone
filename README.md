﻿# Fiverr_Clone
A feature-rich Fiverr clone that simulates the freelancing marketplace experience with advanced functionalities for both freelancers and clients.

## Overview
This project is a full-stack web application inspired by Fiverr, aiming to replicate key features of the popular freelancing platform. It allows freelancers to create profiles, post gigs, and manage orders, while clients can browse services, place orders, and communicate with freelancers.

## Key Features
- **User Authentication**: Secure login and registration for both freelancers and clients.
- **Gig Creation**: Freelancers can create detailed service listings with pricing options.
- **Order Management**: Clients can order services, and freelancers can manage their orders.
- **Payment Integration**: Mock payment system to simulate real transactions.
- **Real-time Chat**: Built-in messaging system for seamless communication between users.
- **Responsive Design**: Fully responsive design ensuring a great user experience on all devices.

## Tech Stack
- **Frontend**: Next.js, Context API, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Prisma ORM, PrismaClient
- **Payment**: Stripe API for payment simulation
- **Hosting**: Deployed on Render

## Installation and Setup
1. Clone the repository: `git clone https://github.com/rajusharma852000/Fiverr_Clone.git`
2. Navigate to the project directory: `cd Fiverr_Clone`
3. Set up the client: `cd client`
4. Install dependencies: `npm install`
5. Start the client development server: `npm run dev`
6. Set up the server: `cd ../server`
7. Install dependencies: `npm install`
8. Push the schema to the database: `npx prisma db push`
9. (Optional) Seed the database with initial data (if you have a seed script): `npx prisma db seed`
10. Start the server development server: `npm run dev`

## Future Enhancements
- Enhance the search and filtering functionality for gigs by upgrading the existing implementation.
- Integrate a real payment gateway to enable live transactions.

## Contact
For any questions, feel free to reach out to me at rajusharma852000@gmail.com / raju.sharma@iitg.ac.in

### Notes:
- **Database Synchronization**: `npx prisma db push` ensures that your database schema matches your Prisma schema file. This is crucial for the application to work correctly.
- **Seeding**: If you have a seeding script (`prisma/seed.ts` or similar), including the `npx prisma db seed` command will help set up initial data.
