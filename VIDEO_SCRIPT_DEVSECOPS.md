# DevSecOps Pipeline Video Demonstration Script

## 🎬 Video Overview
**Duration:** 5-7 minutes  
**Purpose:** Demonstrate complete DevSecOps pipeline with all required components  
**Target Audience:** Lecturer evaluating Task 3 (30 marks)

---

## 📋 Pre-Recording Checklist

### Before You Start Recording:
- [ ] **Clean Git Status**: Make sure you have a small change ready to push (e.g., update README or add a comment)
- [ ] **Browser Tabs Ready**: 
  - GitHub repository page (main branch)
  - CircleCI dashboard (logged in)
  - SonarCloud dashboard (logged in)
- [ ] **Test Pipeline**: Run one test push to ensure everything works
- [ ] **Clear Browser Cache**: Ensure fresh views
- [ ] **Close Unnecessary Tabs**: Keep only what you need

---

## 🎥 VIDEO SCRIPT

### **SECTION 1: Introduction & Setup (30 seconds)**

**[Screen: GitHub Repository]**
> "Hello, I'm demonstrating the DevSecOps pipeline for Task 3. This pipeline automatically runs security checks, tests, and code quality analysis whenever code is pushed to the repository."

**[Screen: CircleCI Configuration File]**
> "The pipeline is configured using CircleCI and includes three main jobs: build-and-test, security-scan, and SonarCloud analysis."

**Key Points to Show:**
- Quick overview of `.circleci/config.yml`
- Mention the three pipeline jobs

---

### **SECTION 2: Triggering the Pipeline (1 minute)**

**[Screen: VS Code / Terminal]**
> "Now I'll make a small change and push it to trigger the pipeline."

**Actions:**
1. Make a small change (e.g., update a comment in `server/src/index.ts` or add a note to README)
2. Stage the change: `git add .`
3. Commit: `git commit -m "Demo: Trigger DevSecOps pipeline"`
4. Push: `git push origin main`

**[Screen: GitHub - Watch the Push]**
> "The code has been pushed. Let me navigate to GitHub to see the commit and the pipeline status."

**Show:**
- Recent commit in GitHub
- Status indicator showing "checks running" or yellow circle

---

### **SECTION 3: CircleCI Pipeline Execution (2-3 minutes)**

**[Screen: CircleCI Dashboard - Main Pipeline View]**
> "Now I'll show you the CircleCI pipeline in action. You can see three jobs running in parallel."

#### **Job 1: build-and-test**
**[Click into build-and-test job]**
> "The first job is build-and-test. This runs our API tests and security tests."

**Show:**
- ✅ **Install Dependencies**: Show npm ci commands
- ✅ **Build Application**: Frontend and backend builds
- ✅ **Run Frontend Tests with Coverage**: Vitest running
- ✅ **Run Backend Tests with Coverage**: Jest running security tests
  - **Highlight**: `auth.test.ts` - authentication security tests
  - **Highlight**: `security.test.ts` - security middleware tests
  - **Highlight**: Test output showing security features tested:
    - Password hashing with bcrypt
    - CSRF protection
    - Rate limiting
    - Input validation
    - XSS protection
    - SQL injection prevention
- ✅ **Test Results**: Show passing tests
- ✅ **Coverage Reports**: Show coverage artifacts

**[Navigate back to pipeline view]**

#### **Job 2: security-scan**
**[Click into security-scan job]**
> "The second job performs software composition analysis and static code analysis."

**Show:**
- ✅ **Frontend Dependency Security Audit**: 
  - `npm audit --audit-level=moderate`
  - Show vulnerability scan results
  - Highlight any vulnerabilities found (or "0 vulnerabilities")
- ✅ **Backend Dependency Security Audit**:
  - Same for server dependencies
  - Show security audit output
- ✅ **Static Code Analysis - Frontend**:
  - ESLint security rules
  - Show linting results
- ✅ **Static Code Analysis - Backend**:
  - TypeScript type checking
  - Show compilation results
- ✅ **Security Summary Report**: 
  - Show the summary output
  - Highlight all security checks completed

**[Navigate back to pipeline view]**

#### **Job 3: sonarcloud-scan**
**[Click into sonarcloud-scan job]**
> "The third job runs static application security testing using SonarCloud."

**Show:**
- ✅ **Install Dependencies**: Setup phase
- ✅ **Run Tests with Coverage**: Coverage collection
- ✅ **Prepare Coverage Reports**: Merging coverage files
- ✅ **SonarCloud Scan**: 
  - Show "Running SonarCloud scan..."
  - Show scan progress
  - Note: This will show "in progress" initially

**[Navigate back to pipeline view - Wait for all jobs to complete]**

> "All three jobs are running. Let me wait for them to complete, then I'll show you the results."

**[Wait 30-60 seconds while jobs complete, or speed up video]**

---

### **SECTION 4: GitHub Status Check (30 seconds)**

**[Screen: GitHub - Repository Page]**
> "Once the pipeline completes, GitHub will show a green checkmark indicating all checks passed."

**Show:**
- ✅ Green checkmark next to the commit
- Click on the checkmark to see detailed status
- Show: "All checks have passed"
- List of completed checks:
  - ✅ build-and-test
  - ✅ security-scan
  - ✅ sonarcloud-scan

---

### **SECTION 5: CircleCI Results (1 minute)**

**[Screen: CircleCI - Completed Pipeline]**
> "Let me show you the detailed results from CircleCI."

**Show:**
- ✅ All three jobs with green checkmarks
- Click on **build-and-test** → Show test artifacts
- Click on **security-scan** → Show security audit artifacts
- Click on **sonarcloud-scan** → Show scan completion

**Key Metrics to Highlight:**
- Test coverage percentage
- Number of tests passed
- Security vulnerabilities found (if any)
- Build status

---

### **SECTION 6: SonarCloud Analysis (1-2 minutes)**

**[Screen: SonarCloud Dashboard]**
> "Now let me show you the SonarCloud analysis results. SonarCloud performs static application security testing to detect security hotspots and code smells."

**Show:**
- ✅ **Project Overview**:
  - Security rating
  - Reliability rating
  - Maintainability rating
  - Code coverage percentage
- ✅ **Security Hotspots Tab**:
  - Show list of security hotspots detected
  - Click on one to show details
  - Explain what the hotspot means
- ✅ **Issues Tab**:
  - Show code smells and bugs
  - Filter by severity
  - Show how to resolve issues
- ✅ **Code Coverage Tab**:
  - Show coverage by file
  - Highlight test coverage for security-critical files
- ✅ **Measures Tab**:
  - Show code metrics
  - Show technical debt
  - Show duplication percentage

**Key Points to Highlight:**
- "SonarCloud detects security vulnerabilities in the code using static analysis"
- "It identifies code smells that could lead to security issues"
- "The coverage reports show how well our security tests cover the codebase"

---

### **SECTION 7: Security Features Showcase (1 minute)**

**[Screen: Code Files]**
> "Let me quickly show you some of the security features that are being tested."

**Show:**
- **Password Security** (`server/src/utils/passwordSecurity.ts`):
  - Password hashing with bcrypt
  - Password strength validation
  - Password history checking
  
- **Security Middleware** (`server/src/index.ts`):
  - Helmet.js headers
  - CSRF protection
  - Rate limiting
  - Input validation

- **Security Tests** (`server/src/__tests__/security.test.ts`):
  - Show test cases for security features
  - Highlight comprehensive security testing

---

### **SECTION 8: Pipeline Summary (30 seconds)**

**[Screen: CircleCI Pipeline Overview]**
> "To summarize, our DevSecOps pipeline includes:"

**Checklist to Show:**
- ✅ **Basic DevSecOps Pipeline**: Configured and triggered on push
- ✅ **Static Application Testing**: SonarCloud security hotspot detection
- ✅ **Software Composition Analysis**: npm audit for dependency vulnerabilities
- ✅ **API Testing**: Comprehensive security tests (Jest/Vitest)
  - Authentication security
  - Input validation
  - Rate limiting
  - CSRF protection
  - XSS/SQL injection prevention
- ✅ **Additional Research**: 
  - Helmet.js security headers
  - Express-brute for brute force protection
  - Comprehensive input validation with RegEx
  - SSL/TLS enforcement

> "The pipeline runs automatically on every push, ensuring code quality and security before deployment."

---

## 🎯 KEY POINTS TO EMPHASIZE

### For the Rubric (30 Marks):

1. **Basic DevSecOps Pipeline (✓)**
   - ✅ Configured in CircleCI
   - ✅ Triggers on code push
   - ✅ Runs automatically

2. **Static Application Testing (✓)**
   - ✅ SonarCloud security hotspots
   - ✅ Code smell detection
   - ✅ Security vulnerability scanning

3. **Software Composition Analysis (✓)**
   - ✅ npm audit for dependencies
   - ✅ Frontend and backend scanning
   - ✅ Vulnerability reporting

4. **API Testing (✓)**
   - ✅ Security endpoint testing
   - ✅ Express-brute testing
   - ✅ Authentication testing
   - ✅ Input validation testing
   - ✅ Rate limiting testing

5. **Additional Research (✓)**
   - ✅ Helmet.js implementation
   - ✅ CSRF protection
   - ✅ Password security (hashing, salting, pepper)
   - ✅ Comprehensive input validation
   - ✅ SSL/TLS enforcement

---

## 📝 POST-RECORDING CHECKLIST

- [ ] **Edit Video**: 
  - Remove any dead time/waiting
  - Add text overlays for key points
  - Add transitions between sections
  - Speed up waiting periods (if possible)
- [ ] **Add Annotations**: 
  - Highlight important sections
  - Add arrows pointing to key features
  - Add text labels for clarity
- [ ] **Audio Check**: 
  - Clear narration
  - No background noise
  - Consistent volume
- [ ] **Export Settings**:
  - 1080p resolution
  - Clear audio
  - Reasonable file size
- [ ] **Upload to YouTube**: 
  - Set as unlisted
  - Add description with key points
  - Add timestamps in description

---

## 🎬 RECORDING TIPS

1. **Use OBS Studio** for recording:
   - Record full screen or specific windows
   - Use keyboard shortcuts to switch between windows
   - Record system audio and microphone

2. **Window Management**:
   - Use multiple monitors if available
   - Or use Alt+Tab to switch between windows
   - Keep browser tabs organized

3. **Speaking Tips**:
   - Speak clearly and at moderate pace
   - Explain what you're doing as you do it
   - Use technical terms correctly
   - Pause briefly between sections

4. **Visual Tips**:
   - Zoom in on important sections (browser zoom or OBS zoom)
   - Highlight with mouse cursor
   - Use browser developer tools to inspect elements if needed

5. **Timing**:
   - Don't rush, but don't linger too long
   - 5-7 minutes is a good target
   - Cut out unnecessary waiting time in post-production

---

## 📊 EXPECTED DEMONSTRATION OUTCOMES

After watching this video, the lecturer should see:

1. ✅ **Pipeline triggers automatically** when code is pushed
2. ✅ **Three parallel jobs** running (build-and-test, security-scan, sonarcloud-scan)
3. ✅ **Comprehensive API testing** with security focus
4. ✅ **Dependency vulnerability scanning** (npm audit)
5. ✅ **Static code analysis** (SonarCloud)
6. ✅ **Security hotspot detection** in SonarCloud
7. ✅ **Code coverage reporting** integrated with SonarCloud
8. ✅ **All checks passing** in GitHub
9. ✅ **Detailed security features** implemented and tested
10. ✅ **Additional research** evident in implementation

---

## 🚀 QUICK START GUIDE

1. **Prepare**:
   - Make a small change to trigger pipeline
   - Open all required browser tabs
   - Test OBS Studio setup

2. **Record**:
   - Follow the script section by section
   - Don't worry about perfection - you can edit later
   - Speak naturally and explain what you're showing

3. **Edit**:
   - Remove dead time
   - Add annotations/overlays
   - Improve audio if needed

4. **Upload**:
   - Upload to YouTube as unlisted
   - Add description with key points
   - Share link with lecturer

---

**Good luck with your video! 🎥**

