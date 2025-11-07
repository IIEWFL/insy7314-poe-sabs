# 🎯 QUICK START: CircleCI & SonarCloud (15 min)

**BEFORE YOU START:** Open these links in separate tabs:
1. https://circleci.com/
2. https://sonarcloud.io/

---

## ⚡ PART 1: CircleCI (5 min)

### 1️⃣ Sign Up (1 min)
```
1. Go to: https://circleci.com/
2. Click "Sign Up" → "Sign Up with GitHub"
3. Click "Authorize CircleCI"
4. Enter GitHub password/2FA if prompted
```

### 2️⃣ Add Project (2 min)
```
1. Click "Projects" in left sidebar
2. Find "insy7314-poe-sabs"
3. Click "Set Up Project"
4. Click "Use Existing Config" or "Start Building"
5. Pipeline will start automatically
```

### 3️⃣ Keep Tab Open (1 min)
```
✅ Done! Keep CircleCI tab open
❌ SonarQube scan will FAIL (expected - needs token)
✅ Other jobs should PASS

We'll add SONAR_TOKEN after SonarCloud setup
```

---

## ⚡ PART 2: SonarCloud (5 min)

### 1️⃣ Sign Up (1 min)
```
1. Go to: https://sonarcloud.io/
2. Click "Log in" → "Log in with GitHub"
3. Click "Authorize SonarCloud"
4. Enter GitHub password/2FA if prompted
```

### 2️⃣ Import Organization (2 min)
```
1. Click "Import an organization from GitHub"
2. Select "IIEWFL"
3. Select "Only select repositories"
4. Check ☑️ "insy7314-poe-sabs"
5. Click "Install & Authorize"
```

### 3️⃣ Create Project & Get Token (2 min)
```
1. Click "Analyze new project"
2. Check ☑️ "insy7314-poe-sabs"
3. Click "Set Up"
4. Select "With CircleCI" (or "Other CI")
5. Click "Generate a token"
6. Token name: "insy7314-poe-sabs-token"
7. Click "Generate"

⚠️ IMPORTANT: COPY THE TOKEN NOW!
Format: sqp_a1b2c3d4e5f6g7h8i9j0...
You can't see it again!
```

### 4️⃣ Copy Keys (30 sec)
```
Copy these 3 values to a text file:

1. Organization Key: [shown on screen - e.g., "iiewfl"]
2. Project Key: [shown on screen - e.g., "IIEWFL_insy7314-poe-sabs"]
3. Token: [the sqp_... token you just copied]
```

---

## ⚡ PART 3: Connect Them (5 min)

### 1️⃣ Add Token to CircleCI (2 min)
```
1. Go back to CircleCI tab
2. Click "Project Settings" (gear icon, top right)
3. Click "Environment Variables" (left sidebar)
4. Click "Add Environment Variable"
5. Name: SONAR_TOKEN
6. Value: [paste your sqp_... token]
7. Click "Add Environment Variable"
✅ You should see SONAR_TOKEN in the list
```

### 2️⃣ Update Configuration File (2 min)

**Open:** `sonar-project.properties` in VS Code

**Change line 2 FROM:**
```properties
sonar.organization=your-organization-key
```

**Change line 2 TO:**
```properties
sonar.organization=iiewfl
```
*(Replace "iiewfl" with YOUR organization key from SonarCloud)*

**Change line 3 FROM:**
```properties
sonar.projectKey=international-payment-portal
```

**Change line 3 TO:**
```properties
sonar.projectKey=IIEWFL_insy7314-poe-sabs
```
*(Replace with YOUR project key from SonarCloud)*

**Save the file!** (Ctrl+S)

### 3️⃣ Push Changes (1 min)

**In VS Code Terminal:**
```bash
git add sonar-project.properties
git commit -m "Configure SonarCloud organization and project key"
git push origin main
```

### 4️⃣ Watch Pipeline Run (2 min)
```
1. Go back to CircleCI tab
2. Click "Dashboard" or "Pipelines"
3. New pipeline should start automatically
4. Wait 3-5 minutes for it to complete
5. All jobs should now PASS! ✅
```

---

## ✅ SUCCESS CHECKLIST

### You're done when you see:

**In CircleCI:**
- [ ] 3 green checkmarks (all jobs passed)
  - ✅ build-and-test
  - ✅ sonarqube-scan
  - ✅ security-scan

**In SonarCloud:**
- [ ] Project "insy7314-poe-sabs" appears
- [ ] Shows metrics (bugs, coverage, code smells)
- [ ] Quality Gate: Passed ✅

---

## 🆘 HELP - Something Went Wrong?

### SonarQube scan still fails?
```
1. Check SONAR_TOKEN is added in CircleCI
2. Token should start with "sqp_"
3. No spaces before/after the token
4. Try re-generating token in SonarCloud
```

### Can't find organization in CircleCI?
```
1. Make sure you're logged into GitHub
2. Refresh the page
3. Try clicking "Add Projects" again
4. Search for "insy7314-poe-sabs"
```

### SonarCloud shows "Project not found"?
```
1. Check sonar.projectKey matches SonarCloud
2. Check sonar.organization matches SonarCloud
3. Make sure you saved and pushed the file
4. Re-run pipeline manually
```

---

## 📋 WHAT TO COPY/SAVE

**From SonarCloud, you need:**
1. **Organization Key** (example: `iiewfl`)
2. **Project Key** (example: `IIEWFL_insy7314-poe-sabs`)
3. **Token** (example: `sqp_a1b2c3d4...`)

**Save them like this:**
```
SonarCloud Credentials
======================
Organization: iiewfl
Project: IIEWFL_insy7314-poe-sabs
Token: sqp_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
```

---

## 🎬 After Setup is Complete

**You're now ready for:**
- ✅ Video demonstration (20 min)
- ✅ Final submission

**See:**
- `TASK_3_QUICK_CHECKLIST.md` - Video script
- `TASK_3_VERIFICATION_REPORT.md` - Full details

---

## ⏱️ TIME TRACKING

| Step | Time | Status |
|------|------|--------|
| CircleCI Setup | 5 min | ⏳ |
| SonarCloud Setup | 5 min | ⏳ |
| Integration | 5 min | ⏳ |
| **Total** | **15 min** | ⏳ |

---

**Need detailed instructions?**  
See: `CIRCLECI_SONARCLOUD_SETUP_GUIDE.md`

**Ready? Let's go! 🚀**
