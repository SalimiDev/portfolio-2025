# Portfolio 2025 - Optimization & Best Practices Checklist

## 🔴 HIGH PRIORITY (Critical Performance & Security)

### Performance Optimizations

- [ ] **Remove `unoptimized: true` from next.config.js**
    - File: [next.config.js:13](next.config.js#L13)
    - Impact: Reduces bundle size, improves load times
    - Action: Reconfigure for static export with proper image optimization

- [ ] **Memoize Grid Card Components**
    - Files: All components in `src/app/_components/grid-cards/`
    - Impact: Prevents unnecessary re-renders on layout changes
    - Action: Wrap with `React.memo()` and use `useCallback` for handlers

- [ ] **Optimize Moving Bar Component**
    - File: [moving-bar-card.tsx:4,13](src/app/_components/grid-cards/moving-bar/moving-bar-card.tsx#L4)
    - Impact: Reduces DOM nodes from 50 to ~10
    - Action: Reduce `repeatCount` or use CSS-only marquee

---

## 🟡 MEDIUM PRIORITY (Code Quality & Maintainability)

### Code Quality

- [ ] **Re-enable TypeScript ESLint Rules**
    - File: [eslint.config.mjs:39-51](eslint.config.mjs#L39)
    - Issues:
        - `@typescript-eslint/no-unused-vars`: currently OFF
        - `react-hooks/exhaustive-deps`: currently OFF
    - Action: Enable these rules to catch bugs early

- [ ] **Fix Missing Type Exports**
    - File: [navigation-menu-item.ts](src/types/navigation-menu-item.ts)
    - Impact: Improves type safety across navigation components
    - Action: Export types from index or add to `.d.ts` file

- [ ] **Fix Navigation State/Routing Sync**
    - File: [top-navigation.tsx:8-12](src/app/_components/header/top-navigation.tsx#L8)
    - Issue: Buttons don't navigate, only update state
    - Action: Either add actual navigation or remove `href` props

- [ ] **Replace Placeholder Strings in Config**
    - File: [grid-card-configs.ts:239,420,454,487,523](<src/app/(grid-container-layout)/grid-card-configs.ts#L239>)
    - Issues: `location: 'string'`, `projectDescription: 'string'`
    - Action: Add actual content or mark as TODO

### Performance

- [ ] **Remove or Implement Empty Canvas**
    - File: [GradientBackdrop.tsx:34](src/app/_components/gradient-backdrop/GradientBackdrop.tsx#L34)
    - Issue: Canvas exists but is never painted/used
    - Action: Either remove it or implement actual gradient rendering

- [ ] **Optimize Framer Motion Animations**
    - Files:
        - [work-experiences.tsx:16-19](src/app/_components/grid-cards/work-experiences/work-experiences.tsx#L16)
        - [social-card.tsx:22-25](src/app/_components/grid-cards/social/social-card.tsx#L22)
        - [tech-card.tsx:15-18](src/app/_components/grid-cards/technology/tech-card.tsx#L15)
    - Issue: Animations trigger on every re-render
    - Action: Memoize animation configs or use conditional rendering

---

## 🟢 LOW PRIORITY (Polish & Technical Debt)

### Code Cleanup

- [ ] **Remove Console Logs from Production**
    - File: [grid-container-layout.tsx:77](<src/app/(grid-container-layout)/_components/grid-container-layout.tsx#L77>)
    - Line: `onBreakpointChange={(newBreakpoint) => console.log('Current Breakpoint:', newBreakpoint)}`
    - Action: Remove or add debug flag

- [ ] **Clean Up Commented Code**
    - File: [grid-card-configs.ts:549-616](<src/app/(grid-container-layout)/grid-card-configs.ts#L549>)
    - Issue: Large block of commented project configurations
    - Action: Delete or restore

- [ ] **Fix Component Interface Naming**
    - File: [project-card.tsx:9-10](src/app/_components/grid-cards/project/project-card.tsx#L9)
    - Issue: Component is `ProjectCard` but props are `ResumeCardProps`
    - Action: Rename interface to `ProjectCardProps`

- [ ] **Improve Dynamic Import Loading States**
    - File: [grid-card.tsx:15-17,50-52](<src/app/(grid-container-layout)/_components/grid-card.tsx#L15>)
    - Issue: Generic "Loading...." fallback
    - Action: Create proper skeleton loaders for each card type

### Dependencies

- [ ] **Remove Unused Jest Dependency**
    - File: [package.json:51](package.json#L51)
    - Issue: No tests in codebase
    - Action: Remove if not planning to add tests, or add test suite

- [ ] **Consider Moving Gulp to Optional devDeps**
    - Files: [package.json:46-50](package.json#L46)
    - Dependencies: gulp, gulp-rename, gulp-replace, gulp-svgmin, gulp-wrap
    - Action: Only needed if regenerating SVG icons

### CSS/Styling

- [ ] **Convert Inline Styles to Tailwind**
    - Files with inline styles:
        - [GradientBackdrop.tsx:7-29](src/app/_components/gradient-backdrop/GradientBackdrop.tsx#L7)
        - [top-navigation.tsx:21-23](src/app/_components/header/top-navigation.tsx#L21)
        - [work-experiences.tsx:42](src/app/_components/grid-cards/work-experiences/work-experiences.tsx#L42)
    - Action: Use CSS variables or Tailwind utilities

- [ ] **Fix Duplicate Keyword in Metadata**
    - File: [layout.tsx:70](src/app/layout.tsx#L70)
    - Issue: "Web Development" appears twice in keywords
    - Action: Remove duplicate

### Accessibility

- [ ] **Add Missing ARIA Labels**
    - File: [top-navigation.tsx:31](src/app/_components/header/top-navigation.tsx#L31)
    - Issue: Navigation buttons lack accessible text
    - Action: Add aria-label to all interactive elements

- [ ] **Use Semantic HTML**
    - Files: Multiple card components
    - Issue: Overuse of `<div>` instead of `<section>` or `<article>`
    - Action: Replace with semantic elements where appropriate

- [ ] **Add Canvas Alternative Text**
    - File: [GradientBackdrop.tsx:34](src/app/_components/gradient-backdrop/GradientBackdrop.tsx#L34)
    - Issue: No ARIA description
    - Action: Add aria-label or role="presentation"

---

## 📊 METRICS TO TRACK

### Before Optimization

- [ ] Run Lighthouse audit (Performance, Accessibility, Best Practices, SEO)
- [ ] Measure bundle size: `npm run build` and check `.next/` output
- [ ] Check image sizes in `public/` folder
- [ ] Run PageSpeed Insights on live site

### After Optimization

- [ ] Re-run Lighthouse (target: 90+ in all categories)
- [ ] Verify bundle size reduction
- [ ] Test mobile performance on actual devices
- [ ] Check Time to First Byte (TTFB)
- [ ] Verify First Contentful Paint (FCP) < 1.8s
- [ ] Verify Largest Contentful Paint (LCP) < 2.5s

---

## 🎯 RECOMMENDED ORDER OF EXECUTION

### Phase 1: Quick Wins (1-2 hours)

1. Remove `console.log` statements
2. Clean up commented code
3. Remove/reduce moving bar DOM nodes
4. Fix duplicate metadata keyword

### Phase 2: Performance (3-4 hours)

1. Re-enable image optimization
2. Add React.memo to grid card components
3. Remove or implement canvas gradient
4. Optimize Framer Motion animations

### Phase 3: Code Quality (2-3 hours)

1. Re-enable ESLint rules
2. Fix type exports
3. Fix navigation routing/state sync
4. Replace placeholder strings

### Phase 4: Polish (2-3 hours)

1. Remove unused dependencies
2. Convert inline styles to Tailwind
3. Add ARIA labels
4. Use semantic HTML
5. Improve loading states

---

## 📝 NOTES

### Good Practices Already in Place ✅

- Using App Router correctly
- Proper font optimization with `next/font`
- Comprehensive metadata and SEO setup
- TypeScript strict mode enabled
- Good state management pattern with Zustand
- Proper external link handling (noopener noreferrer)
- SWC minification enabled

### Architecture Decisions to Review

- **Static Export**: Currently using `output: 'export'` which is appropriate for a portfolio but limits some Next.js features
- **Framer Motion**: 272KB library for simple animations - consider whether this is necessary
- **Grid Layout**: Using react-grid-layout (good choice for your use case)

---

## 🔗 USEFUL RESOURCES

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [React Memoization Guide](https://react.dev/reference/react/memo)
- [Web Vitals](https://web.dev/vitals/)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated**: 2026-02-13
**Total Items**: 29
**Estimated Total Effort**: 10-12 hours
