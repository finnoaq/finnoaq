# AI Chat Agent UI Design (Pattern Extracted from Reference Image)

This document provides a clean, structured design breakdown based on the UI pattern shown in the reference image, adapted for an **AI Chat Agent interface**. It focuses on layout, alignment, spacing, typography, and visual hierarchy so you can recreate or redesign the interface consistently.

---

## **1. Canvas Structure / Overall Layout**

* **Background:**

  * Full-screen blurred interface screenshot or gradient.
  * Soft blur (approx. 20–30px) to keep focus on foreground elements.

* **Foreground Zones:**

  * **Left:** Conversation preview or story card.
  * **Center:** Chat message bubbles.
  * **Right:** Side label + profile info.
  * **Bottom:** "Direct Message" footer element.

---

## **2. Header Section**

* **Top Left:**

  * Blurred Instagram-like header (profile icon, name, status).
  * Should appear faded into the background.

* **Top Right:**

  * Speech bubble icon.
  * Title text: **"Diskusi Minggu ini"** (or replace with agent-related heading).
  * Clean, modern typography.

* **Right Vertical Tag:**

  * Vertical label aligned to right margin.
  * Example: `#MADEWITHSTORIES`
  * For AI agent version: e.g. `#MADEWITHAI` or `#AICHATINTERFACE`.

---

## **3. Story Preview / Card Element**

* **Placement:** Slightly left of center.
* **Shape:** Rounded rectangle.
* **Content:** Screenshot or image preview.
* **Shadow:** Very soft, wide spread.
* **Role:** Visual anchor for the conversation.

---

## **4. Chat Bubble Layout (Core AI Agent Interaction)**

### **Incoming Message (User → AI)**

* White bubble.
* Soft rounded corners (14–20px radius).
* Light shadow for depth.
* Text alignment: left.
* Example structure:

  * "Hi! What app do you use?"

### **Outgoing Message (AI → User)**

* Slightly darker shade bubble (light grey #F2F2F2 or brand color).
* Rounded corners.
* Should appear stacked under user message.
* Example:

  * "Hi too, I use phonto and unfold applications."

### **Spacing Rules:**

* 16–20px vertical spacing between bubbles.
* 24–32px horizontal side padding (left vs right alignment).
* Across the full UI, maintain consistent padding.

---

## **5. Informational Section (Google / Translation Block)**

* **Placement:** Lower center-left.
* **Heading:** "Google" styled in Google Sans–like font.
* **Body text:** Soft grey, small text.
* **Purpose:** Additional context or auto-generated AI notes.
* For AI chat version: Can show *“AI Summary”, “Model Explanation”, “Translated by AI”*, etc.

---

## **6. Profile Badge (Right Side)**

* Round profile picture.
* Username below it.
* Subtext: "THANK YOU FOR THE POSITIVE RESPONSE" (uppercase, spaced).
* Align toward bottom-right quadrant.

---

## **7. Footer Element**

* Centered at the bottom.
* Icon: Paper airplane (Telegram/DM style).
* Label under icon: **DIRECT MESSAGE**.
* Light opacity (60–70%).

---

## **8. Typography Guide**

* **Primary Font:** Clean Sans (SF Pro, Inter, Poppins).
* **Bubble Text:** 14–15px medium.
* **Headings:** 18–22px semibold.
* **Side Labels:** Uppercase, tracking +10–30.
* **Footer:** 12px, semi-transparent.

---

## **9. Color Palette**

* **Background Blur:** Based on underlying image.
* **Bubble White:** #FFFFFF
* **Bubble Grey:** #F2F2F2 / #EDEDED
* **Shadow:** rgba(0,0,0,0.05–0.15)
* **Labels:** #FFFFFF with 80–90% opacity.

---

## **10. Layout Grid (Suggested)**

* **Margin:** 32–48px around edges.
* **Column Split:**

  * Left 40% (story + chat)
  * Right 20% (side label + profile)
  * Center content remains flexible.

---

## **11. Final Structure Overview (Text Map)**

```
 --------------------------------------------------------
|   [BLURRED HEADER]                 [ICON] Diskusi...   |
|                                                        |
|   [Story Card]   [Chat Bubble 1]                       |
|                   [Chat Bubble 2]                      |
|                                                        |
|     Google                                            |
|     small text block                                   |
|                                                        |
|                                   [Profile Image]      |
|                                   @username            |
|                                   THANK YOU...         |
|                                                        |
|                     (DM Icon)                          |
|                   DIRECT MESSAGE                        |
 --------------------------------------------------------
```

---

If you want, I can turn this into **Figma-ready instructions**, **Tailwind UI code**, or a **.json design spec** similar to design systems. Let me know!
