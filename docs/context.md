To make this **Apple-meets-Liquid-Death** vision a reality, we’re going to strip away the "enterprise" bulk and focus on a **High-Performance Creative Stack**. We need speed for those "Liquid Glass" animations and a rock-solid foundation for the "Bloem Hunt" gamification.

This Markdown file is structured as a **System Prompt/Architectural Guide** that you can feed directly into **Windsurf** or any high-end IDE to begin the build.

---

# 🚀 PROJECT ZURI: THE DIGITAL FRONTIER

**Mission:** Build a 10-out-of-10 cultural artifact. If it feels like a standard Shopify template, delete it.

## 🛠 THE TECH STACK (Optimized for Speed & Soul)

### **The Core Engine**

* **Framework:** `Next.js 15` (App Router) – For blazing-fast server-side rendering and SEO.
* **Language:** `TypeScript` – Total type safety for our "Soul Contract" and Hunt logic.
* **Styling:** `Tailwind CSS` – Specifically using **Custom Config** for the Zuri Palette (#DE2C00, Deep Purples, Teals).
* **Animations:** `Framer Motion` + `GSAP` – Framer for UI transitions; GSAP for high-performance scroll-triggered "Liquid Glass" rotations.

### **The Interactive Layer**

* **3D Engine:** `Three.js` + `React Three Fiber` – This is non-negotiable for the floating, rotating coffee bag in the Hero section.
* **State Management:** `Zustand` – Lightweight state for the "Bloem Hunt" progress and the shopping cart.
* **Forms/Validation:** `React Hook Form` + `Zod` – For the "Soul Contract" signups.

### **The Backend & Storage**

* **Database:** `Supabase (PostgreSQL)` – Instant APIs for the scavenger hunt locations and user accounts.
* **Auth:** `Supabase Auth` – Secure, "Steve Jobs-simple" login.
* **CMS:** `Sanity.io` – To manage the "Artifact Gallery" and "History Napkin" content without touching code.

---

## 📐 ARCHITECTURAL BLUEPRINT (Windsurf Instructions)

### **1. The Theme Configuration (`tailwind.config.ts`)**

```typescript
{
  theme: {
    extend: {
      colors: {
        zuri: {
          orange: '#DE2C00',
          purple: '#2D0A31',
          teal: '#008080',
          black: '#050505', // Deep "OLED" Black
        }
      },
      fontFamily: {
        apple: ['San Francisco', 'Inter', 'sans-serif'],
        brush: ['Zuri-Brush', 'cursive'], // For aggressive headlines
      }
    }
  }
}

```

### **2. Component Hierarchy**

* **`components/hero/FloatingBag.tsx`**: A Canvas element using `@react-three/drei` to render the `.glb` model of the 250g bag.
* **`components/interactive/SoulContract.tsx`**: A high-contrast modal with a "Hacker" aesthetic and custom "I sell my soul" checkbox.
* **`components/maps/HuntMap.tsx`**: A stylized Mapbox integration using a custom "Dark Mode" skin with Orange pins.
* **`components/shop/LookbookItem.tsx`**: A merchandise card that uses a 10-out-of-10 "soft-touch" hover effect.

---

## 💎 THE "INSANE EXPERIENCE" CHECKLIST (For the Build)

### **The "Liquid Glass" Scroll**

As the user scrolls, the page shouldn't just move up.

* **Requirement:** Use GSAP `ScrollTrigger`. When the user enters the "Origin" section, the background shifts from OLED Black to a deep Tanzanian sunset purple, and the coffee bag "pours" virtual beans that bounce off the UI elements.

### **The "Steve Jobs" Minimalist Header**

* **Requirement:** A glassmorphism blur effect (`backdrop-blur-md`). The logo is the only thing visible initially; navigation only appears when the user intent is detected (hover/scroll).

### **The "Liquid Death" Footer**

* **Requirement:** Bold, loud typography.
* `Join the Cult` instead of `Newsletter`.
* `Legal Crap` instead of `Terms of Service`.
* Include a "Death Clock" counting down to the next "Zuri-Con" event.



---

## 🚦 WINDSURF START COMMAND

> "Windsurf: Initialize a Next.js 15 project with TypeScript and Tailwind. Set up a folder structure for `/components/3d`, `/components/ui`, and `/lib/hooks`. Configure the Zuri color palette in `tailwind.config.ts`. Create a Hero component with a placeholder 3D canvas and a 'Wake Up. Be Bold.' headline using an aggressive sans-serif font."

---

**This is the foundation.** We aren't building a website; we are building a **Portal.** Ready to initiate the build?