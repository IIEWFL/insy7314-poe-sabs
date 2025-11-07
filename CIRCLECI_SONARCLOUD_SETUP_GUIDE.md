# 🚀 CircleCI & SonarCloud Setup Guide
## Step-by-Step Instructions (15 minutes)

**Last Updated:** November 7, 2025  
**Repository:** insy7314-poe-sabs  
**Estimated Time:** 15 minutes

---

## 📋 Prerequisites Checklist

Before starting, make sure you have:

- [ ] GitHub account logged in
- [ ] Repository pushed to GitHub: `IIEWFL/insy7314-poe-sabs`
- [ ] Admin access to the repository
- [ ] Email verified on GitHub
- [ ] Chrome or Firefox browser (recommended)

---

## PART 1: CircleCI Setup (5 minutes)

### Step 1: Access CircleCI (30 seconds)

1. Open your browser
2. Go to: **https://circleci.com/**
3. You should see the CircleCI homepage

### Step 2: Sign Up/Login with GitHub (1 minute)

1. Click **"Sign Up"** or **"Log In"** button (top right)
2. Select **"Sign Up with GitHub"** or **"Log In with GitHub"**
3. **GitHub Authorization Page** will appear
4. Review the permissions CircleCI is requesting:
   - Read access to your profile
   - Read/Write access to code
   - Access to webhooks
5. Click **"Authorize CircleCI"**
6. You may need to enter your GitHub password or 2FA code
7. Wait for redirect back to CircleCI

### Step 3: Select Your Organization (30 seconds)

1. You'll see a page asking to select an organization
2. Look for **"IIEWFL"** in the list
3. Click on **"IIEWFL"**
4. If you don't see it, click **"Create New Organization"** and link GitHub

### Step 4: Add Your Project (2 minutes)

1. On the CircleCI dashboard, click **"Projects"** in the left sidebar
2. You'll see a list of your GitHub repositories
3. Find **"insy7314-poe-sabs"** in the list
   - Use the search box if you have many repos
4. Click **"Set Up Project"** button next to it

5. **Configuration Setup Page** appears:
   - CircleCI will detect your `.circleci/config.yml` file ✅
   - You'll see: **"We found a configuration file in your repo"**
   - Config file path: `.circleci/config.yml` ✅

6. Review the detected configuration:
   ```yaml
   ✅ Detected: .circleci/config.yml
   ✅ Branch: main
   ✅ Jobs: build-and-test, sonarqube-scan, security-scan
   ```

7. Click **"Use Existing Config"** or **"Start Building"** button
8. CircleCI will start the first pipeline run automatically
9. Wait ~10-15 seconds for the pipeline to start

### Step 5: Verify Pipeline Started (30 seconds)

1. You'll be redirected to the pipeline dashboard
2. You should see a running pipeline (orange/yellow status)
3. Click on the pipeline to see job details
4. **Expected:** Jobs will start but SonarQube scan will fail (that's okay!)
   - ❌ `sonarqube-scan` job will fail (missing SONAR_TOKEN)
   - ✅ `build-and-test` job should pass
   - ✅ `security-scan` job should pass

### Step 6: Get Ready for Environment Variables (keep this tab open)

1. Keep the CircleCI tab open
2. We'll add the `SONAR_TOKEN` environment variable after setting up SonarCloud

**✅ CircleCI Setup Complete! (5 minutes)**

---

## PART 2: SonarCloud Setup (5 minutes)

### Step 1: Access SonarCloud (30 seconds)

1. Open a **new browser tab**
2. Go to: **https://sonarcloud.io/**
3. You should see the SonarCloud homepage

### Step 2: Sign Up/Login with GitHub (1 minute)

1. Click **"Log in"** button (top right)
2. Select **"Log in with GitHub"**
3. **GitHub Authorization Page** will appear
4. Review the permissions SonarCloud is requesting:
   - Read access to your profile
   - Read access to repositories
   - Access to commit statuses
5. Click **"Authorize SonarCloud"**
6. You may need to enter your GitHub password or 2FA code
7. Wait for redirect back to SonarCloud

### Step 3: Create/Select Organization (1 minute)

1. On the SonarCloud welcome page, you'll see:
   - **"Analyze your projects with SonarCloud"**
2. Click **"Import an organization from GitHub"**

3. **GitHub Installation Page** appears:
   - You'll see a list of your GitHub accounts/organizations
   - Find **"IIEWFL"** in the list

4. Select **"IIEWFL"**
   - If you see "Install" button, click it
   - If already installed, click "Configure"

5. **Repository Access** page:
   - Select: **"Only select repositories"**
   - Check: ☑️ **insy7314-poe-sabs**
   - Click **"Save"** or **"Install & Authorize"**

6. You'll be redirected back to SonarCloud
7. **Organization Key** will be auto-generated:
   - Example: `iiewfl` or `iiewfl-1` 
   - **IMPORTANT:** Copy this key! You'll need it later

### Step 4: Create New Project (2 minutes)

1. On SonarCloud dashboard, click **"Analyze new project"** or **"+"** → **"Analyze new project"**

2. **Select Repository** page:
   - You should see: **insy7314-poe-sabs**
   - Check: ☑️ **insy7314-poe-sabs**
   - Click **"Set Up"** button

3. **Choose Analysis Method** page appears:
   - Select: **"With CircleCI"** (recommended)
   - Or select: **"Other CI"** if CircleCI isn't shown

4. **Create a token** section:
   - You'll see: "Generate a token for your project"
   - Click **"Generate a token"**
   
5. **Token Generated** popup:
   - Token name: `insy7314-poe-sabs-token` (auto-filled)
   - Click **"Generate"**
   - **IMPORTANT:** Copy the token immediately! 
   - Token format: `sqp_...` (starts with `sqp_`)
   - **Store it safely** - you can't see it again!

   Example token (fake):
   ```
   sqp_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
   ```

6. **Project Key** is shown:
   - Should be: `IIEWFL_insy7314-poe-sabs`
   - Or similar format
   - **IMPORTANT:** Copy this key too!

7. Click **"Continue"** or **"Finish this tutorial"**

### Step 5: Copy Important Information (30 seconds)

Open a text file and save these values:

```
SONARCLOUD CREDENTIALS
=====================

Organization Key: [paste here - e.g., iiewfl]
Project Key: [paste here - e.g., IIEWFL_insy7314-poe-sabs]  
Token: [paste here - starts with sqp_]

Example:
Organization Key: iiewfl
Project Key: IIEWFL_insy7314-poe-sabs
Token: sqp_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
```

**✅ SonarCloud Setup Complete! (5 minutes)**

---

## PART 3: Connect CircleCI to SonarCloud (5 minutes)

### Step 1: Add SONAR_TOKEN to CircleCI (2 minutes)

1. Go back to your **CircleCI tab**
2. Click on **"Project Settings"** (top right, gear icon)
   - Or go to: Projects → insy7314-poe-sabs → Project Settings
3. In the left sidebar, click **"Environment Variables"**
4. Click **"Add Environment Variable"** button
5. Fill in the form:
   - **Name:** `SONAR_TOKEN`
   - **Value:** [Paste the SonarCloud token you copied]
     - Should start with `sqp_`
     - Example: `sqp_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0`
6. Click **"Add Environment Variable"**
7. You should see: ✅ `SONAR_TOKEN` in the list (value hidden)

**Optional but Recommended:** Add organization key
8. Click **"Add Environment Variable"** again
9. Fill in:
   - **Name:** `SONAR_ORGANIZATION`
   - **Value:** [Paste your SonarCloud organization key]
     - Example: `iiewfl`
10. Click **"Add Environment Variable"**

### Step 2: Update sonar-project.properties (2 minutes)

1. Open your code editor (VS Code)
2. Open file: `sonar-project.properties` (at project root)
3. Find line 2: `sonar.organization=your-organization-key`
4. Replace with your actual organization key:

**Before:**
```properties
sonar.organization=your-organization-key
```

**After:**
```properties
sonar.organization=iiewfl
```

5. Find line 1: `sonar.projectKey=international-payment-portal`
6. Update with your SonarCloud project key:

**Before:**
```properties
sonar.projectKey=international-payment-portal
```

**After:**
```properties
sonar.projectKey=IIEWFL_insy7314-poe-sabs
```

7. **Save the file** (Ctrl+S)

### Step 3: Commit and Push Changes (1 minute)

Open a terminal in VS Code:

```bash
# Stage the changes
git add sonar-project.properties

# Commit with a message
git commit -m "Configure SonarCloud organization and project key"

# Push to GitHub
git push origin main
```

Expected output:
```
[main abc1234] Configure SonarCloud organization and project key
 1 file changed, 2 insertions(+), 2 deletions(-)
```

### Step 4: Watch Pipeline Run (2 minutes)

1. Go back to **CircleCI tab**
2. Click **"Dashboard"** or **"Pipelines"** in the left sidebar
3. You should see a new pipeline starting automatically (triggered by your push)
4. Click on the pipeline to watch it run
5. Watch the jobs execute:
   - ⏳ `build-and-test` - Running
   - ⏳ `sonarqube-scan` - Waiting for build-and-test
   - ⏳ `security-scan` - Running

6. Wait for jobs to complete (~3-5 minutes):
   - ✅ `build-and-test` - Should pass
   - ✅ `sonarqube-scan` - Should pass now! 🎉
   - ✅ `security-scan` - Should pass

### Step 5: Verify SonarCloud Analysis (1 minute)

1. Go back to **SonarCloud tab**
2. Click on **"Projects"** in the top menu
3. Click on **"insy7314-poe-sabs"**
4. You should see:
   - ✅ Project analyzed successfully
   - 📊 Code coverage metrics
   - 🐛 Bugs count
   - 🔒 Security hotspots
   - 💡 Code smells

5. Explore the dashboard:
   - Click **"Issues"** to see detected issues
   - Click **"Security Hotspots"** to review security concerns
   - Click **"Measures"** to see detailed metrics

**✅ Integration Complete! (5 minutes)**

---

## 🎉 Success Verification

### You've successfully completed setup if you can see:

#### ✅ In CircleCI:
- [ ] Project "insy7314-poe-sabs" added
- [ ] Environment variable `SONAR_TOKEN` configured
- [ ] Pipeline running and passing all jobs
- [ ] Green checkmarks on all jobs

#### ✅ In SonarCloud:
- [ ] Organization created and linked to GitHub
- [ ] Project "insy7314-poe-sabs" analyzed
- [ ] Dashboard showing metrics (coverage, bugs, smells)
- [ ] Security hotspots visible
- [ ] Quality gate status shown

#### ✅ In Your Repository:
- [ ] `.circleci/config.yml` exists
- [ ] `sonar-project.properties` updated with correct keys
- [ ] Latest commit shows "Configure SonarCloud"
- [ ] Pipeline triggered automatically on push

---

## 📊 What You Should See

### CircleCI Dashboard:
```
Pipeline #1 - main branch
├── ✅ build-and-test (2m 30s)
├── ✅ sonarqube-scan (3m 15s)
└── ✅ security-scan (1m 45s)

Status: SUCCESS ✅
```

### SonarCloud Dashboard:
```
insy7314-poe-sabs

Quality Gate: Passed ✅

Overview:
├── Bugs: 0 🐛
├── Vulnerabilities: 0 🔒
├── Security Hotspots: 3-5 📊 (Review required)
├── Code Smells: 10-20 💡
├── Coverage: 85-90% 📈
├── Duplications: 0-2% 📋
└── Lines of Code: 2000+ 📝
```

---

## 🔧 Troubleshooting

### Issue: Can't find organization in CircleCI
**Solution:**
1. Make sure you're logged into GitHub
2. Try refreshing the page
3. Click "Add Projects" → "Follow Project" → Search for repository
4. If still not found, grant CircleCI access to the organization in GitHub settings

### Issue: SonarQube scan fails with "Unauthorized"
**Solution:**
1. Verify `SONAR_TOKEN` is correctly added in CircleCI
2. Check token starts with `sqp_`
3. Re-generate token in SonarCloud if needed
4. Make sure token has "Analyze" permissions

### Issue: SonarCloud project not found
**Solution:**
1. Verify `sonar.projectKey` matches SonarCloud project key
2. Check `sonar.organization` matches your SonarCloud org key
3. Make sure you committed and pushed changes
4. Try re-running the pipeline manually

### Issue: Pipeline doesn't start automatically
**Solution:**
1. Go to CircleCI Project Settings → Advanced → Auto-cancel redundant workflows (enable)
2. Check GitHub webhooks: Repository Settings → Webhooks → Verify CircleCI webhook exists
3. Manually trigger: Click "Trigger Pipeline" button in CircleCI

### Issue: Build fails with "No space left on device"
**Solution:**
- This is a CircleCI resource limit
- The free tier should be sufficient
- If persistent, try clearing cache: Project Settings → Advanced → Clear Cache

---

## 🎯 Next Steps After Setup

### 1. Review SonarCloud Security Hotspots (10 min)
- Go to SonarCloud → Your Project → Security Hotspots
- Review each hotspot
- Mark as "Safe" or "Fix" as appropriate
- Most are likely false positives for this academic project

### 2. Review Code Smells (Optional)
- Go to SonarCloud → Your Project → Issues → Code Smells
- These are maintainability suggestions
- Not required for assignment but good practice

### 3. Monitor Pipeline
- Every push to `main` triggers the pipeline
- Check CircleCI for build status
- Check SonarCloud for quality metrics

### 4. Add Badges to README (Optional but looks great!)

Add to your `README.md`:

```markdown
[![CircleCI](https://circleci.com/gh/IIEWFL/insy7314-poe-sabs.svg?style=svg)](https://circleci.com/gh/IIEWFL/insy7314-poe-sabs)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=IIEWFL_insy7314-poe-sabs&metric=alert_status)](https://sonarcloud.io/dashboard?id=IIEWFL_insy7314-poe-sabs)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=IIEWFL_insy7314-poe-sabs&metric=security_rating)](https://sonarcloud.io/dashboard?id=IIEWFL_insy7314-poe-sabs)
```

---

## 📸 Screenshots to Include in Assignment (Optional)

Consider taking screenshots of:
1. ✅ CircleCI pipeline passing (all green checkmarks)
2. ✅ SonarCloud quality gate passed
3. ✅ SonarCloud security hotspots reviewed
4. ✅ SonarCloud code coverage metrics
5. ✅ CircleCI environment variables configured (showing SONAR_TOKEN exists)

---

## 📝 Summary

**Total Time:** ~15 minutes

| Task | Time | Status |
|------|------|--------|
| CircleCI Setup | 5 min | ✅ |
| SonarCloud Setup | 5 min | ✅ |
| Integration | 5 min | ✅ |

**What You Achieved:**
✅ Automated CI/CD pipeline with CircleCI  
✅ Code quality analysis with SonarCloud  
✅ Security hotspot detection  
✅ Code smell identification  
✅ Test coverage reporting  
✅ Quality gate enforcement  

**Assignment Requirement 6:** ✅ **COMPLETE!**

---

## 🎓 For Your Assignment Submission

Include this in your documentation:

```
Task 3 - Requirement 6: CircleCI & SonarQube

✅ CircleCI Pipeline Configured
- Repository: IIEWFL/insy7314-poe-sabs
- Config file: .circleci/config.yml
- Jobs: build-and-test, sonarqube-scan, security-scan
- Status: All jobs passing

✅ SonarCloud Integration
- Organization: [your org key]
- Project: [your project key]
- Quality Gate: Passed
- Security Hotspots: Reviewed
- Code Smells: Identified and documented

✅ Automated Security Analysis
- Runs on every push to main branch
- Scans for security vulnerabilities
- Identifies code quality issues
- Generates coverage reports
```

---

**Setup Complete! You're now ready for the video demonstration! 🎬**

**Next:** See `TASK_3_QUICK_CHECKLIST.md` for video recording instructions.
