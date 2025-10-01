# React Real-time Chat App

Dự án **Real-time Chat App** được phát triển trong khuôn khổ môn học *IE103 – Quản lý Thông tin* tại Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM. 

Mục tiêu chính của project là xây dựng một ứng dụng chat trực tuyến thời gian thực, lấy cảm hứng từ mô hình **Facebook Messenger**, nhằm đáp ứng nhu cầu giao tiếp nhanh chóng, tiện lợi và bảo mật trong thời đại công nghệ 4.0.

---

## Demo
👉 [Video demo](https://drive.google.com/file/d/1y7jNqRQtl3HtEvYT3eBUzDnGsRhSm0GP/view?usp=drive_link) 
👉 [GitHub Repo](https://github.com/<username>/realtime-chat-app)

---

## Tính năng nổi bật
- **Xác thực người dùng** với Firebase Authentication (Email/Password)
- **Chat 1-1** giữa các người dùng
- **Quản lý danh sách chat** & **tìm kiếm người dùng**
- **Nhắn tin real-time** với Firestore Database
- **Emoji picker** khi nhắn tin
- **Gửi ảnh** trong tin nhắn
- **Thông báo (Toast)** khi có sự kiện (React Toastify)
- **Block/Unblock user**
- **Auto-scroll** khi có tin nhắn mới
- **Responsive UI** (hỗ trợ desktop và mobile)

---

## Công nghệ sử dụng
- **Frontend**: React.js + Vite, Zustand (state management), Tailwind CSS  
- **Backend/Database**: Firebase Authentication, Firebase Firestore, Firebase Storage  
- **Thư viện hỗ trợ**: React Toastify, Emoji Picker, Zustand  

---

## Database Structure (Firestore)

Ứng dụng sử dụng **Cloud Firestore (NoSQL)** để lưu trữ dữ liệu. Các collection chính:

### 1. `users`
Lưu thông tin tài khoản người dùng.  
Ví dụ document:
```json
{
  "id": "u310",
  "username": "Huong Giang",
  "email": "hzang310@example.com",
  "avatar": "https://storage.firebase.com/avatars/u123.png",
  "blocked": ["u456", "u789"] 
}
```
### 2. `chats`
Lưu thông tin các cuộc trò chuyện.
Ví dụ document:
```json
{
  "id": "chat_001",
  "createdAt": "2024-04-01T10:00:00Z",
  "messages": [
    {
      "senderID": "u123",
      "text": "Hello!",
      "createdAt": "2024-04-01T10:00:00Z"
    },
    {
      "senderID": "u456",
      "text": "Hi there!",
      "createdAt": "2024-04-01T10:01:00Z"
    }
  ]
}
```
### 3. `userchats`
Liên kết giữa user và các cuộc trò chuyện của họ (dùng để load danh sách chat nhanh hơn).
Ví dụ document:
```json
{
  "id": "u123",
  "chat": [
    {
      "chatID": "chat_001",
      "receiverID": "u456",
      "lastMessage": "Hi there!",
      "updatedAt": "2024-04-01T10:01:00Z",
      "isSeen": true
    }
  ]
}
```
Với cấu trúc trên, hệ thống có thể dễ dàng mở rộng, đồng bộ dữ liệu theo thời gian thực, đồng thời đảm bảo quản lý thông tin người dùng, tin nhắn và cuộc trò chuyện một cách hiệu quả.

---


## Cấu trúc thư mục
```
chat-app/
├── public/ # Static assets (favicon, images, etc.)
├── src/ # Source code chính
│ ├── components/ # React components
│ │ ├── chat/ # Chat box
│ │ │ ├── Chat.jsx
│ │ │ └── chat.css
│ │ ├── detail/ # Chi tiết cuộc trò chuyện
│ │ │ ├── Detail.jsx
│ │ │ └── detail.css
│ │ ├── list/ # Danh sách user/chat
│ │ │ ├── List.jsx
│ │ │ └── list.css
│ │ ├── login/ # Đăng nhập
│ │ │ ├── Login.jsx
│ │ │ └── login.css
│ │ ├── message_search/ # Tìm kiếm tin nhắn
│ │ │ ├── search.jsx
│ │ │ └── search.css
│ │ ├── notification/ # Thông báo
│ │ │ └── Notification.jsx
│ ├── lib/ # Helper & store
│ │ ├── chatStore.js
│ │ ├── firebase.js # Firebase config
│ │ ├── upload.js # Upload file/image
│ │ └── userStore.js
│ ├── App.jsx # Root component
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
├── .eslintrc.cjs # ESLint config
├── .gitignore
├── index.html # HTML template
├── package.json
├── vite.config.js # Vite config
└── README.md
```


