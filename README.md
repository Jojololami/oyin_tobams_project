# Tobams Frontend Intern Assessment

This project is a pixel-perfect implementation of the provided Figma design using Next.js (App Router) and Tailwind CSS.

It focuses on responsive layout, semantic structure, and clean component architecture.

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- next/image for image optimization

To run locally:

1. Clone the repository
2. cd into the repository
3. Install dependencies with: npm install
4. Run the development server: npm run dev
5. Open in browser: http://localhost:3000

Figma link:
https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=wTmwlcwVFmzlVW0v-0

Public Github link:
https://github.com/Jojololami/oyin_tobams_project

My live link:
https://oyintobamsproject.vercel.app/

Design decision:

- For the hero section with a man and woman staring at the camera, I had to place the Learn More button outside the card containing the text for the mobile view because it was difficult to keep the button inside for mobile view and outiside for the desktop view, so I stuck with one.

- Some spacing, colours and font sizes were approximated.

- Tailwind utility classes were used exclusively (no custom CSS) to meet requirements.

- Flexbox and Grid were combined for responsive layouts depending on complexity.

- Certain text wrapping behaviors (e.g., footer legal links) were handled using responsive utilities like `whitespace-nowrap` and `md:w-auto`.

- Image proportions were maintained using `object-cover` to preserve visual consistency.

AI DISCLOSURE:
I used ChatGPT to aid my debugging process.
