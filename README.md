# React Real-time Chat App

Ứng dụng chat **thời gian thực** được xây dựng bằng **React.js** và **Firebase**.  
Dự án mô phỏng một nền tảng chat trực tuyến hiện đại với giao diện đẹp mắt, có tính năng đăng nhập, nhắn tin, quản lý người dùng, và hỗ trợ đa phương tiện.

---

## Demo
👉 [Video demo](https://drive.google.com/file/d/1y7jNqRQtl3HtEvYT3eBUzDnGsRhSm0GP/view?usp=drive_link) 
👉 [GitHub Repo](https://github.com/<username>/realtime-chat-app)

---

## Tính năng nổi bật
- 🔐 **Xác thực người dùng** với Firebase Authentication (Email/Password)
- 👥 **Chat 1-1** giữa các người dùng
- 📂 **Quản lý danh sách chat** & **tìm kiếm người dùng**
- ⚡ **Nhắn tin real-time** với Firestore Database
- 😀 **Emoji picker** khi nhắn tin
- 📸 **Gửi ảnh** trong tin nhắn
- 📢 **Thông báo (Toast)** khi có sự kiện (React Toastify)
- 🚫 **Block/Unblock user**
- 🕒 **Auto-scroll** khi có tin nhắn mới
- 📱 **Responsive UI** (hỗ trợ desktop và mobile)

---

## Công nghệ sử dụng
- **Frontend**: React.js + Vite, Zustand (state management), Tailwind CSS  
- **Backend/Database**: Firebase Authentication, Firebase Firestore, Firebase Storage  
- **Thư viện hỗ trợ**: React Toastify, Emoji Picker, Zustand  

---

## Cách cài đặt & chạy

### 1. Clone repo
```bash
git clone https://github.com/<username>/realtime-chat-app.git
cd realtime-chat-app
```

### 2. Cài dependencies
```bash
npm install
```

### 3. Tạo file ```.env``` và cấu hình Firebase
```bash
VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx
VITE_FIREBASE_PROJECT_ID=xxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxx
VITE_FIREBASE_APP_ID=xxxx
```

### 4. Chạy ứng dụng
```bash
npm run dev
```
