# Personal Resume Webpage

A clean, professional, and responsive personal résumé webpage built with **HTML**, **CSS**, and **JavaScript**. The page includes a Chinese self-introduction with voice reading, a complete information form, an optional personal photo, and is published online via **Gitee Pages**.

---

## 📖 Project Overview

This project was created as part of a **Software Engineering** assignment. The goal is to build a personal résumé-style webpage using only basic web technologies and publish it online through **Gitee Pages**.

The webpage fulfills the following objectives:

- Displays a Chinese self-introduction with a **voice reading** feature.
- Provides a **structured information form** with validation.
- Shows an **optional personal photo** without breaking the layout if missing.
- Uses a **professional, responsive design** suitable for both desktop and mobile.
- Is **publicly accessible** via a Gitee Pages link.

---

## ✨ Features

### 1. Introduction Section
- Two Chinese sentences:
  - “你好，我是林樱。”
  - “我是24计算机的学生。”
- A **sound icon (🔊)** that reads the sentences aloud in Chinese using the **Web Speech API**.
- Optional circular photo (`photo.jpg`) with an orange border.

### 2. Information Form
- Clear labels for each field.
- Fields included:
  - Name *(required)*
  - Class *(required)*
  - Student ID *(required)*
  - School / Department
  - Country / Region
  - Languages
  - Hobbies
  - About Me (short sentence)
- **Client-side validation** for required fields.
- Success message on submission.

### 3. Optional Photo
- If `photo.jpg` exists in the project folder, it is displayed.
- If the file is missing, the `onerror` handler hides the image, keeping the layout clean.

### 4. Professional Design
- Résumé-style layout with a centered container.
- Consistent color scheme:
  - **Main color:** `#2c3e50` (dark blue)
  - **Accent color:** `#e67e22` (orange)
  - **Background:** `#f4f6f8` (light gray)
  - **Text:** `#333333` (dark gray)
- Moderate width (`max-width: 800px`) for readability.
- Responsive design with a media query for mobile screens (`max-width: 600px`).

### 5. Online Publishing
- Hosted on **Gitee Pages** with a public URL.
- Deployment from the `master` branch.
