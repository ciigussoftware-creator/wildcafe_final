# 🚀 Quick Start Guide - GitHub Desktop

## Before You Start Work (EVERY TIME!)

```
┌─────────────────────────────────────────┐
│  1. Open GitHub Desktop                 │
│  2. Click "Fetch origin"                │
│  3. Click "Pull origin" (if available)  │
└─────────────────────────────────────────┘
```

---

## Daily Workflow

### 1️⃣ CREATE A BRANCH
```
Current Branch dropdown → New Branch
Name: feature/your-task-name
Click "Create Branch"
```

### 2️⃣ MAKE YOUR CHANGES
- Edit files in your code editor
- Save files
- GitHub Desktop auto-detects changes

### 3️⃣ COMMIT YOUR CHANGES
```
Left panel shows changed files
Write commit message (bottom left)
Example: "Add chocolate cake to desserts menu"
Click "Commit to feature/your-task-name"
```

### 4️⃣ PUSH TO GITHUB
```
Top bar: Click "Push origin"
(Upload your changes to GitHub)
```

### 5️⃣ CREATE PULL REQUEST
```
Blue button: "Create Pull Request"
Fill in description
Click "Create Pull Request" on GitHub
```

---

## ⚠️ CRITICAL RULES

### ❌ NEVER DO THIS:
- ❌ Work directly on `main` branch
- ❌ Skip pulling before starting
- ❌ Make changes without a branch
- ❌ Commit without testing

### ✅ ALWAYS DO THIS:
- ✅ Pull before starting work
- ✅ Create a new branch for each task
- ✅ Test your changes locally
- ✅ Write clear commit messages
- ✅ Pull again before pushing

---

## 📱 Communication Protocol

### Before Editing Shared Files

**Shared Files (Tell team first!):**
- `pages/menu.html`
- `css/style.css`
- `js/script.js`
- `index.html`

**Post in Team Chat:**
```
Working on: menu.html (Breakfast section)
Branch: feature/add-pancakes
ETA: 1 hour
```

---

## 🆘 Common Issues & Fixes

### "Cannot push - updates were rejected"
```
Solution:
1. Click "Fetch origin"
2. Click "Pull origin"
3. Resolve any conflicts
4. Click "Push origin" again
```

### "Merge conflict in [file]"
```
Solution:
1. Click on the conflicted file
2. Click "Open in [Editor]"
3. Find markers: <<<<<<< ======= >>>>>>>
4. Choose which version to keep
5. Delete the markers
6. Save file
7. Click "Mark as resolved"
8. Commit the merge
```

### "I committed to the wrong branch"
```
Solution:
1. Create correct branch: Branch → New Branch
2. Your commit will come with you
3. Go to History tab
4. Right-click commit → "Cherry-pick commit"
```

---

## 🎯 Branch Naming

```
feature/     → New features
fix/         → Bug fixes
update/      → Content updates
style/       → Design changes

Examples:
feature/add-dessert-menu
fix/broken-modal
update/menu-prices
style/mobile-header
```

---

## ⏱️ Timeline for Tasks

```
Small Task (< 1 hour):
Pull → Branch → Edit → Commit → Push → PR
All in one session!

Medium Task (1-3 hours):
Pull → Branch → Edit → Commit 1 → Edit → Commit 2 → Push → PR

Large Task (> 3 hours):
Pull → Branch
Hour 1: Edit → Commit → Push
Hour 2: Pull → Edit → Commit → Push
Hour 3: Pull → Edit → Commit → Push → PR
```

---

## 🔄 Keep Branch Updated

**If your branch lives > 1 day:**

```
Morning routine:
1. Switch to "main" branch
2. Pull latest changes
3. Switch back to your branch
4. Branch menu → Merge into current branch
5. Select "main"
6. Resolve conflicts (if any)
7. Continue working
```

---

## ✅ Pre-Push Checklist

Before clicking "Push origin":

- [ ] Pulled latest changes
- [ ] Tested changes locally
- [ ] Files look correct in left panel
- [ ] Commit message is clear
- [ ] No sensitive data included
- [ ] No unnecessary files (node_modules, etc.)

---

## 👥 Who Owns What?

**Menu Content:**
- Person A: Breakfast items
- Person B: Lunch items
- Person C: Dinner items
- Person D: Desserts/Beverages

**Pages:**
- Person E: Gallery
- Person F: About/Contact

**Code:**
- Person X: CSS changes
- Person Y: JavaScript changes

---

## 📞 When to Ask for Help

Ask team lead if:
- ❓ Merge conflict you can't resolve
- ❓ Accidentally deleted something important
- ❓ Branch is very outdated (> 1 week)
- ❓ Made changes on `main` by mistake
- ❓ Need to undo multiple commits

---

## 🎓 Learn More

Full guide: See `GIT_WORKFLOW_GUIDE.md`

Quick video: [GitHub Desktop Tutorial](https://www.youtube.com/watch?v=8Dd7KRpKeaE)

---

## 💡 Pro Tips

1. **Commit often** - Every 30-60 minutes
2. **Small changes** - Easier to review
3. **Test first** - Don't push broken code
4. **Clear names** - Branch and commit messages
5. **Delete old branches** - Keep repo clean

---

## 🚨 Emergency Contacts

**Merge Conflicts:** @repository-manager
**Lost Work:** @team-lead
**Technical Issues:** @tech-support

---

**Remember: Pull → Branch → Edit → Commit → Pull → Push → PR** 🎯
