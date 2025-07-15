# 🍅 TOMATO - Food Delivery Website

A full-featured **Food Delivery Website** built with the **MERN Stack**. Tomato allows users to register, browse food items, place orders, and make payments. An **Admin Panel** enables managing food products and order tracking.

---

## 🚀 Live Demo

- 🌐 **Frontend (User)**: [Tomato Website](https://food-delivery-website-gamma.vercel.app/)
- 🔐 **Admin Panel**: [Tomato Admin](https://food-delivery-website-admin.vercel.app/)

---
## 📦 Features

### 👨‍🍳 User Panel
- 🔐 JWT Authentication with Bcrypt
- 🛒 Add to Cart, Remove from Cart
- 💳 Stripe Payment Integration
- 📦 Track Orders on `MyOrders` Page
- 🚪 Login / Signup / Logout
- 🔍 Filter/Search Food Products
- ⚠️ Beautiful Alerts for UX Feedback

### 🛠️ Admin Panel
- ➕ Add / ❌ Remove Food Items
- 📦 Manage Orders
- 🔒 Role-Based Access (Admin Only)
- 🧠 Authenticated REST APIs

---

## 💻 Tech Stack

- **Frontend**: React + Tailwind + Axios
- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + Bcrypt
- **Payments**: Stripe API

---
### 👤 User Panel

- First, the user signs in to their account  
- Users can browse and order food items  
- Quantity can be increased or decreased  
- Selected items appear in the **bag icon (cart)**  
- Users proceed to **payment via Stripe**  
- On successful payment → order is placed and shown on **My Orders** page  
- All past orders are also visible on **My Orders** page  
- If payment fails → user is redirected back to the **Home Page**

<img width="1470" height="831" alt="Screenshot 2025-07-15 at 6 55 25 AM" src="https://github.com/user-attachments/assets/09fd0002-4fe2-4baa-bd8e-2188c97aead5" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 6 55 34 AM" src="https://github.com/user-attachments/assets/7e71ce53-6d04-48aa-b6a1-34c42c1867d2" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 6 55 41 AM" src="https://github.com/user-attachments/assets/11410a40-abf7-4b7b-b33a-c41fe8577f22" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 6 55 58 AM" src="https://github.com/user-attachments/assets/ba1ee278-eb6b-40ac-a267-ad05be43eaeb" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 6 56 18 AM" src="https://github.com/user-attachments/assets/2d2e88e6-37d3-4c47-8fd2-450d24851a99" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 6 56 32 AM" src="https://github.com/user-attachments/assets/c21b265e-cf2c-401d-8e87-d84b9bc4e420" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 6 56 42 AM" src="https://github.com/user-attachments/assets/bc9681a0-db9b-4cbc-841d-bfb00c445561" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 6 56 53 AM" src="https://github.com/user-attachments/assets/f31ccc8d-0106-420b-9fae-720f8aadd82e" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 6 57 15 AM" src="https://github.com/user-attachments/assets/d6c6a681-1d34-49af-b5cb-93846805ef93" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 7 00 17 AM" src="https://github.com/user-attachments/assets/6853de98-7efa-4edd-a9b5-fef9faf87809" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 7 00 29 AM" src="https://github.com/user-attachments/assets/a7cc98bf-c93d-49c1-9567-cec790d38db3" />
### 🛠️ Admin Panel

- Admin can **add new food products**  
- Added food items are visible on the **List Page**  
- Admin can **delete any food item**  
- Admin can **view all customer orders**  
- Admin can **update the order status** (e.g., preparing, delivered, cancelled)  
- Once updated, the new status is reflected in the user's **My Orders** page

<img width="1470" height="831" alt="Screenshot 2025-07-15 at 7 00 41 AM" src="https://github.com/user-attachments/assets/70614890-7b68-4cc5-98c5-78fe18b4905c" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 7 00 49 AM" src="https://github.com/user-attachments/assets/e36bd310-582e-436e-8c69-4220998c4912" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 7 01 10 AM" src="https://github.com/user-attachments/assets/0ba40e9a-aad7-44fc-b554-613ecfef27a7" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 7 01 17 AM" src="https://github.com/user-attachments/assets/11a511f9-e9d0-43d7-95fa-42da9bb905ea" />








