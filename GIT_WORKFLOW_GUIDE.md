# Git Workflow Guide for Wild Cafe Website Team

## 🎯 Purpose
This guide ensures smooth collaboration and prevents merge conflicts when multiple team members work on the Wild Cafe website.

---

## 📋 Table of Contents
1. [Initial Setup](#initial-setup)
2. [Daily Workflow](#daily-workflow)
3. [File Organization](#file-organization)
4. [Branching Strategy](#branching-strategy)
5. [Merge Conflict Prevention](#merge-conflict-prevention)
6. [Common Scenarios](#common-scenarios)
7. [GitHub Desktop Guide](#github-desktop-guide)
8. [Best Practices](#best-practices)

---

## 🚀 Initial Setup

### Step 1: Clone the Repository
**Using GitHub Desktop:**
1. Open GitHub Desktop
2. Click `File` → `Clone Repository`
3. Select `wildcafe-website` (or your repo name)
4. Choose a local folder location
5. Click `Clone`

**Using Command Line:**
```bash
git clone https://github.com/your-username/wildcafe-website.git
cd wildcafe-website
```

### Step 2: Configure Git
```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

---

## 📅 Daily Workflow

### ALWAYS Follow This Order:

```
1. PULL FIRST (Get latest changes)
   ↓
2. CREATE A BRANCH (Never work on main directly)
   ↓
3. MAKE YOUR CHANGES
   ↓
4. COMMIT FREQUENTLY (Small, focused commits)
   ↓
5. PULL AGAIN (Before pushing)
   ↓
6. PUSH YOUR BRANCH
   ↓
7. CREATE PULL REQUEST
   ↓
8. GET REVIEW & MERGE
```

---

## 📂 File Organization & Ownership

### Core Files (High Conflict Risk)
These files are edited by multiple people - **EXTRA CARE NEEDED**:

```
⚠️ HIGH RISK FILES:
├── pages/menu.html          (Menu content - most edited)
├── css/style.css            (Global styles)
├── js/script.js             (Global JavaScript)
└── index.html               (Homepage)
```

### Safe Files (Low Conflict Risk)
```
✅ SAFER FILES:
├── pages/about.html
├── pages/contact.html
├── pages/gallery.html
└── images/*
```

---

## 🌿 Branching Strategy

### Branch Naming Convention

```
feature/description     → For new features
fix/description        → For bug fixes
update/description     → For content updates
style/description      → For styling changes

Examples:
feature/add-new-menu-item
fix/modal-close-button
update/menu-prices
style/mobile-responsive
```

### How to Create a Branch

**GitHub Desktop:**
1. Click `Current Branch` dropdown
2. Click `New Branch`
3. Name it (e.g., `feature/add-dessert-section`)
4. Click `Create Branch`

**Command Line:**
```bash
# Create and switch to new branch
git checkout -b feature/add-dessert-section

# Verify you're on the new branch
git branch
```

---

## 🛡️ Merge Conflict Prevention Rules

### Rule 1: ALWAYS Pull Before Starting Work

**GitHub Desktop:**
1. Click `Fetch origin`
2. If updates available, click `Pull origin`

**Command Line:**
```bash
git pull origin main
```

### Rule 2: Work on Different Sections

**Assign Clear Responsibilities:**
```
Team Member A → Menu Items (Breakfast section)
Team Member B → Menu Items (Lunch section)
Team Member C → Gallery page
Team Member D → About page
```

### Rule 3: Communicate Before Editing Shared Files

**Use a Communication Log:**
```
📢 BEFORE editing menu.html, css/style.css, or js/script.js:
1. Post in team chat: "Working on menu.html - Breakfast section"
2. Create your branch
3. Make changes
4. Commit & push within 1-2 hours
5. Post: "Done with menu.html"
```

### Rule 4: Make Small, Frequent Commits

**BAD (One Big Commit):**
```bash
# After 4 hours of work...
git commit -m "Updated everything"
```

**GOOD (Multiple Small Commits):**
```bash
git commit -m "Add chocolate lava cake to desserts"
git commit -m "Update dessert images"
git commit -m "Fix dessert section spacing"
```

### Rule 5: Pull Before Every Push

```bash
# ALWAYS do this sequence:
git pull origin main    # Get latest changes
git push origin your-branch-name    # Push your changes
```

---

## 🎬 Common Scenarios

### Scenario 1: Adding a New Menu Item

**Steps:**
1. **Pull latest changes**
   ```bash
   git pull origin main
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/add-egg-hopper
   ```

3. **Make your changes** (Edit `menu.html`)

4. **Commit**
   ```bash
   git add pages/menu.html
   git commit -m "Add Egg Hopper to breakfast menu"
   ```

5. **Pull again** (Someone might have pushed while you worked)
   ```bash
   git pull origin main
   ```

6. **Push your branch**
   ```bash
   git push origin feature/add-egg-hopper
   ```

7. **Create Pull Request** on GitHub

8. **Get it reviewed and merged**

### Scenario 2: Updating Styles (CSS)

**CRITICAL: CSS is shared by everyone!**

1. **Communicate first!**
   ```
   Team Chat: "Working on modal styles in style.css - Lines 1820-1900"
   ```

2. **Pull & Branch**
   ```bash
   git pull origin main
   git checkout -b style/update-modal-colors
   ```

3. **Make targeted changes** (Only the specific section)

4. **Commit quickly** (Don't hold CSS changes for hours)
   ```bash
   git add css/style.css
   git commit -m "Update modal title color to cyan"
   git push origin style/update-modal-colors
   ```

5. **Create PR immediately**

### Scenario 3: Two People Edit Same File

**Prevention:**
```
BEFORE starting:
Person A: "I'll work on Breakfast section (lines 60-200)"
Person B: "I'll work on Lunch section (lines 400-600)"
```

**If conflict happens anyway:**
```bash
# You'll see this when pulling:
CONFLICT (content): Merge conflict in pages/menu.html

# GitHub Desktop will show:
⚠️ Resolve conflicts before merging
```

**Resolution in GitHub Desktop:**
1. Click on conflicted file
2. Click `Open in Visual Studio Code` (or your editor)
3. Look for conflict markers:
   ```html
   <<<<<<< HEAD
   Your changes
   =======
   Their changes
   >>>>>>> main
   ```
4. Decide which to keep (or combine both)
5. Remove conflict markers
6. Save file
7. Click `Mark as Resolved`
8. Commit the merge

---

## 💻 GitHub Desktop Step-by-Step Guide

### Starting Your Day

1. **Open GitHub Desktop**
2. **Fetch & Pull**
   - Click `Fetch origin`
   - If updates exist, click `Pull origin`
3. **Create Your Branch**
   - Click `Current Branch` → `New Branch`
   - Name: `feature/your-task`
   - Click `Create Branch`

### Making Changes

1. **Edit Files** in your code editor
2. **GitHub Desktop auto-detects changes**
3. **Review changes** in the left panel
4. **Commit**
   - Write descriptive message
   - Click `Commit to feature/your-task`

### Finishing Your Work

1. **Pull Latest** (Click `Fetch` then `Pull`)
2. **Push** (Click `Push origin`)
3. **Create Pull Request**
   - Click `Create Pull Request` button
   - Fill in details
   - Click `Create Pull Request` on GitHub

### Keeping Your Branch Updated

**Do this daily if your branch lives > 1 day:**
```
1. Switch to main branch
2. Pull latest changes
3. Switch back to your branch
4. Click Branch → Merge into Current Branch
5. Select 'main'
6. Resolve any conflicts
```

---

## ✅ Best Practices

### DO ✅

1. **Pull before starting work EVERY TIME**
2. **Create a new branch for each task**
3. **Commit frequently (every 30-60 minutes)**
4. **Write clear commit messages**
   ```
   Good: "Add modal popup for menu items"
   Bad: "Update stuff"
   ```
5. **Keep branches short-lived (1-2 days max)**
6. **Delete branches after merging**
7. **Review your changes before committing**
8. **Test your changes locally first**

### DON'T ❌

1. **Never work directly on `main` branch**
2. **Don't commit without pulling first**
3. **Don't make huge commits (split them up)**
4. **Don't commit broken code**
5. **Don't leave branches unmerged for weeks**
6. **Don't commit sensitive data** (passwords, API keys)
7. **Don't commit large binary files** (use Git LFS)
8. **Don't force push** (`git push -f`) unless you know what you're doing

---

## 🗓️ Workflow Example: Full Day

### Morning (9 AM)
```bash
# Start fresh
git pull origin main
git checkout -b feature/add-beverages

# Work on changes
# Edit pages/menu.html
```

### Mid-Morning (11 AM)
```bash
# First commit
git add pages/menu.html
git commit -m "Add coffee beverages section"
git push origin feature/add-beverages
```

### After Lunch (2 PM)
```bash
# Pull latest changes from team
git pull origin main

# Continue work
# Edit css/style.css for beverage styles
```

### Afternoon (4 PM)
```bash
# Second commit
git add css/style.css
git commit -m "Style beverage section"
git push origin feature/add-beverages
```

### End of Day (5 PM)
```bash
# Final pull and push
git pull origin main
git push origin feature/add-beverages

# Create Pull Request on GitHub
# Request review from team lead
```

---

## 🆘 Emergency Commands

### I Made Changes on Main Branch by Mistake!
```bash
# Save your changes to a new branch
git checkout -b feature/my-changes

# Reset main to remote version
git checkout main
git reset --hard origin/main
```

### I Need to Discard All My Changes
```bash
# WARNING: This deletes your uncommitted changes!
git reset --hard HEAD
git clean -fd
```

### I Committed to Wrong Branch
```bash
# Save the commit
git log  # Copy the commit hash

# Go to correct branch
git checkout correct-branch
git cherry-pick <commit-hash>

# Remove from wrong branch
git checkout wrong-branch
git reset --hard HEAD~1
```

---

## 📞 Team Communication Template

**Before Starting Work:**
```
🔧 Working on: Adding dessert section
📄 Files: pages/menu.html (lines 1100-1170)
⏰ ETA: 2 hours
🌿 Branch: feature/add-desserts
```

**When Finished:**
```
✅ Done: Added dessert section
🔗 PR: https://github.com/your-repo/pull/123
👀 Please review: @teammate
```

**If Blocked:**
```
⚠️ Blocked: Need dessert images
🤝 Need help from: @designer
📝 Details: Waiting for chocolate-cake.jpg
```

---

## 🎓 Quick Reference

### Essential Commands
```bash
# Get latest changes
git pull origin main

# Create new branch
git checkout -b feature/name

# Check what changed
git status
git diff

# Commit changes
git add .
git commit -m "Description"

# Push changes
git push origin branch-name

# Switch branches
git checkout branch-name

# See all branches
git branch -a

# Delete local branch
git branch -d branch-name
```

### GitHub Desktop Shortcuts
- `Cmd/Ctrl + Shift + F` - Fetch
- `Cmd/Ctrl + Shift + P` - Push
- `Cmd/Ctrl + T` - New branch
- `Cmd/Ctrl + Shift + B` - Switch branch

---

## 📚 Additional Resources

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Desktop Documentation](https://docs.github.com/en/desktop)
- [Resolve Merge Conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)

---

## 👥 Team Roles

Assign these roles to prevent conflicts:

**Repository Manager** (1 person)
- Reviews and merges all Pull Requests
- Resolves complex merge conflicts
- Maintains main branch

**Section Owners**
- Breakfast Menu: Person A
- Lunch Menu: Person B
- Dinner Menu: Person C
- Desserts/Beverages: Person D
- Gallery: Person E
- About/Contact: Person F

**CSS/JS Owners**
- CSS Lead: Person X (approves style changes)
- JS Lead: Person Y (approves script changes)

---

## 🎯 Summary: The Golden Rules

1. **PULL → BRANCH → CHANGE → COMMIT → PULL → PUSH → PR**
2. **Never work on main**
3. **Communicate before editing shared files**
4. **Commit small and often**
5. **Test before pushing**
6. **Review PRs promptly**
7. **Delete merged branches**

---

**Remember: When in doubt, communicate with your team! 🗣️**

Good luck and happy collaborating! 🌿
