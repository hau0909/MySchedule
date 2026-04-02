````md
# 🚀 My Schedule – Planning Document

## 1. Problem Statement

Users currently face:

- Difficulty managing multiple tasks, events, and meetings
- Confusion when converting “what to do” into “when to do it”
- Existing tools are too complex and overwhelming for new users

Goal:
Build a simple, intuitive task management app focused on timeline, scheduling, and drag-and-drop interaction.

---

## 2. Target Users

- Students / individuals
- Developers / solo workers
- Users who need simple task management without complex systems

---

## 3. Core Concept

### User

```ts
Item {
  _id
  name,
  email,
  pasword,
  createdAt
}
```
````

### Unified Item Model

```ts
Item {
  _id
  title
  description
  type: "task" | "event" | "meeting"
  startTime
  endTime
  status: "pending" | "done" | "archived" | "expired"
  priority
  userId
}
```

````

### Timeline (Planning Layer)

```ts
Timeline {
  _id
  title
  goal
  userId
}
```

### TimelineItem (N-N Relation)

```ts
TimelineItem {
  timelineId
  itemId
}
```

### Schedule (UI Layer)

- No separate database collection required
- Based on Item.startTime and Item.endTime

---

## 4. User Flow

```
User Login
→ Create Item
→ (Optional) Add Item to Timeline (Goal)
→ Drag Item into Calendar (Schedule)
→ Track Progress
→ Complete / Expire / Reschedule
```

---

## 5. Core Features (MVP)

### 5.1 Item Management

- CRUD Item
- Set time (start / end)
- Status: pending / done / expired
- Automatic expired detection

### 5.2 Timeline (Goal Management)

- Create goals
- Add / remove items
- Track progress (% completion)

### 5.3 Schedule (Calendar View)

- Day / Week / Month views
- Drag & Drop to update time

Overlap Handling:

- Display +N tasks in the same slot
- Click to view full list

### 5.4 Notification (Basic)

- Expired tasks triggered by server (cron job)
- In-app notification suggesting reschedule or repeat

---

## 6. AI Feature (Phase 2)

Scope:

- Chat with AI to create tasks

Flow:
User input:
"Study React at 8 PM tomorrow"

AI response:

```json
{
  "title": "Study React",
  "startTime": "...",
  "type": "task"
}
```

Backend validates and creates item.

---

## 7. UI / Screens

- Landing Page
- Dashboard
- Task List
- Calendar (Main Feature)
- Timeline View
- AI Chat (Phase 2)

---

## 8. UI Layout

- Sidebar navigation
- Main content area
- Calendar as central focus

---

## 9. Tech Stack

Frontend:

- NextJS (App Router)
- TailwindCSS + Shadcn UI
- Zustand (state management)
- @dnd-kit/core (drag & drop)

Backend:

- ExpressJS
- REST API

Database:

- MongoDB
- Relationship via IDs (no embedding for N-N)

---

## 10. API Design

Item:

```
GET    /items
POST   /items
PUT    /items/:id
DELETE /items/:id
```

Timeline:

```
GET    /timelines
POST   /timelines
PUT    /timelines/:id
DELETE /timelines/:id
```

TimelineItem:

```
POST   /timeline-items
DELETE /timeline-items
```

---

## 11. State & Data Flow

Client:

- Zustand for UI state
- React Query (optional) for server state

Drag & Drop Flow:

```
User drags item
→ Update UI (optimistic)
→ Call API to update time
→ If API fails → rollback UI
```

---

## 12. Edge Cases

- Task overlap → group as +N
- Disable interaction with past dates
- Network failure → rollback UI
- Automatic expired updates
- Basic timezone handling

---

## 13. MVP Scope (2 Weeks)

Week 1:

- Basic authentication
- CRUD Item
- Timeline (basic)

Week 2:

- Calendar UI
- Drag & Drop
- Overlap handling

Not included in MVP:

- AI features
- Complex realtime sync
- Multi-user / sharing

---

## 14. Future Scope

- AI smart scheduling
- Task priority suggestions
- Multi-device synchronization
- Team collaboration

---

## Final Note

This plan is sufficient to:

- Start development immediately
- Maintain a clear structure
- Scale the system without major refactoring

```

```

# Structure

src/
├── app/ # CHỈ chứa routing & layout
│ ├── (auth)/ # Route group cho đăng nhập/đăng ký
│ │ ├── login/
│ │ │ └── page.tsx # Import component từ features/auth
│ └── dashboard/
│ └── page.tsx # Import component từ features/dashboard
├── features/ # NƠI CHỨA LOGIC CHÍNH
│ ├── auth/ # Một feature cụ thể
│ │ ├── components/ # Các UI components riêng cho Auth (LoginForm, SocialButtons)
│ │ ├── hooks/ # Custom hooks (useAuth, useSession)
│ │ ├── services/ # API calls (login, register)
│ │ ├── types/ # TypeScript interfaces cho feature này
│ │ └── index.ts # Public API (chỉ export những gì cần thiết ra ngoài)
│ └── products/
├── components/ # Các component dùng chung cho TOÀN bộ app (Button, Input, Modal)
└── lib/ # Cấu hình thư viện dùng chung (axios, prisma, utils)
````
