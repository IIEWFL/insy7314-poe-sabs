# 📝 SonarCloud Configuration Template

## After you get your values from SonarCloud, update this file:

**File to edit:** `sonar-project.properties`  
**Location:** Project root folder

---

## 🔄 CHANGES NEEDED

### Change #1: Organization Key (Line 3)

**Current:**
```properties
sonar.organization=your-organization-key
```

**Update to:**
```properties
sonar.organization=YOUR_ACTUAL_ORG_KEY_HERE
```

**Example:**
```properties
sonar.organization=iiewfl
```

---

### Change #2: Project Key (Line 2)

**Current:**
```properties
sonar.projectKey=international-payment-portal
```

**Update to:**
```properties
sonar.projectKey=YOUR_ACTUAL_PROJECT_KEY_HERE
```

**Example:**
```properties
sonar.projectKey=IIEWFL_insy7314-poe-sabs
```

---

## ✅ AFTER CHANGES

Your `sonar-project.properties` should look like this:

```properties
# SonarQube Configuration for International Payment Portal
sonar.projectKey=IIEWFL_insy7314-poe-sabs
sonar.organization=iiewfl
sonar.projectName=International Payment Portal
sonar.projectVersion=1.0.0

# Source code
sonar.sources=src,server/src
sonar.tests=src/__tests__,server/src/__tests__
# ... rest of file stays the same
```

---

## 🔑 WHERE TO FIND THESE VALUES

### Organization Key
```
1. Go to SonarCloud
2. Look at the URL after setup
3. Example URL: https://sonarcloud.io/organizations/iiewfl
4. Organization key = "iiewfl" (from URL)
```

### Project Key
```
1. Go to SonarCloud dashboard
2. Click on your project
3. Look at the URL or project settings
4. Example: IIEWFL_insy7314-poe-sabs
5. Or shown during project creation
```

### Token (for CircleCI)
```
1. Generated during SonarCloud project setup
2. Starts with "sqp_"
3. Example: sqp_a1b2c3d4e5f6g7h8i9j0...
4. Add to CircleCI as SONAR_TOKEN environment variable
```

---

## 💾 HOW TO UPDATE

### Method 1: VS Code (Recommended)
```
1. Open sonar-project.properties in VS Code
2. Find lines 2 and 3
3. Replace with your values
4. Save (Ctrl+S)
5. Commit and push:
   git add sonar-project.properties
   git commit -m "Configure SonarCloud"
   git push origin main
```

### Method 2: Direct Edit
```
1. Open file in any text editor
2. Update lines 2 and 3
3. Save
4. Commit and push to GitHub
```

---

## ✨ VERIFICATION

After pushing, check:

1. **CircleCI** - Pipeline should run automatically
2. **SonarCloud** - Project should show analysis results
3. **GitHub** - Commit should appear in repository

---

## 📸 What It Looks Like

**Before (incorrect):**
```properties
sonar.projectKey=international-payment-portal
sonar.organization=your-organization-key
```

**After (correct):**
```properties
sonar.projectKey=IIEWFL_insy7314-poe-sabs
sonar.organization=iiewfl
```

---

## 🆘 Common Mistakes

❌ **Mistake:** Leaving quotes around the values
```properties
sonar.organization="iiewfl"  # WRONG!
```

✅ **Correct:** No quotes
```properties
sonar.organization=iiewfl  # CORRECT!
```

---

❌ **Mistake:** Adding spaces
```properties
sonar.organization= iiewfl   # WRONG!
```

✅ **Correct:** No spaces
```properties
sonar.organization=iiewfl  # CORRECT!
```

---

❌ **Mistake:** Using GitHub username instead of org key
```properties
sonar.organization=IIEWFL  # WRONG!
```

✅ **Correct:** Use the organization key from SonarCloud
```properties
sonar.organization=iiewfl  # CORRECT!
```

---

## 🎯 QUICK CHECKLIST

- [ ] Got organization key from SonarCloud
- [ ] Got project key from SonarCloud
- [ ] Got token from SonarCloud
- [ ] Added SONAR_TOKEN to CircleCI
- [ ] Updated line 2 (projectKey) in sonar-project.properties
- [ ] Updated line 3 (organization) in sonar-project.properties
- [ ] Saved the file
- [ ] Committed changes
- [ ] Pushed to GitHub
- [ ] Pipeline running in CircleCI
- [ ] All jobs passing ✅

---

**Done? Check:** `SETUP_QUICK_START.md` for next steps!
