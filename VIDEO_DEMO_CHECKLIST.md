# 🎥 Video Demo Quick Checklist

## Before Recording

- [ ] **Make a small change** to trigger pipeline (e.g., update README or add comment)
- [ ] **Open browser tabs**:
  - [ ] GitHub repository (main branch)
  - [ ] CircleCI dashboard (logged in)
  - [ ] SonarCloud dashboard (logged in)
- [ ] **Test OBS Studio**:
  - [ ] Audio levels good
  - [ ] Screen capture working
  - [ ] Recording quality set (1080p)

## During Recording

### 1. Introduction (30s)
- [ ] Show GitHub repository
- [ ] Mention three pipeline jobs
- [ ] Show CircleCI config file

### 2. Trigger Pipeline (1min)
- [ ] Make commit
- [ ] Push to GitHub
- [ ] Show commit in GitHub
- [ ] Show "checks running" status

### 3. CircleCI Jobs (2-3min)
- [ ] **build-and-test job**:
  - [ ] Show tests running
  - [ ] Highlight security tests
  - [ ] Show test results
  - [ ] Show coverage
- [ ] **security-scan job**:
  - [ ] Show npm audit (frontend)
  - [ ] Show npm audit (backend)
  - [ ] Show linting results
  - [ ] Show security summary
- [ ] **sonarcloud-scan job**:
  - [ ] Show scan running
  - [ ] Show coverage preparation

### 4. GitHub Status (30s)
- [ ] Show green checkmark
- [ ] Click to see detailed status
- [ ] List all passed checks

### 5. CircleCI Results (1min)
- [ ] Show completed pipeline
- [ ] Show test artifacts
- [ ] Show security artifacts
- [ ] Highlight key metrics

### 6. SonarCloud Analysis (1-2min)
- [ ] Show project overview
- [ ] Show security hotspots
- [ ] Show code smells/issues
- [ ] Show code coverage
- [ ] Explain security features detected

### 7. Security Features (1min)
- [ ] Show password security code
- [ ] Show security middleware
- [ ] Show security tests

### 8. Summary (30s)
- [ ] Recap all components
- [ ] Mention rubric points
- [ ] Close with pipeline benefits

## After Recording

- [ ] **Edit video**:
  - [ ] Remove dead time
  - [ ] Add text overlays
  - [ ] Add transitions
  - [ ] Speed up waiting periods
- [ ] **Check audio**:
  - [ ] Clear narration
  - [ ] No background noise
  - [ ] Consistent volume
- [ ] **Export**:
  - [ ] 1080p resolution
  - [ ] Clear quality
  - [ ] Reasonable file size
- [ ] **Upload**:
  - [ ] Upload to YouTube
  - [ ] Set as unlisted
  - [ ] Add description with timestamps
  - [ ] Test playback

## Key Points to Emphasize

✅ Pipeline triggers automatically on push  
✅ Static application testing (SonarCloud)  
✅ Software composition analysis (npm audit)  
✅ API testing (security endpoints)  
✅ Additional research (Helmet, CSRF, rate limiting)  
✅ Comprehensive security features  
✅ Code coverage reporting  

## Rubric Alignment

| Requirement | How to Show |
|------------|-------------|
| Basic DevSecOps Pipeline | Show CircleCI config + trigger on push |
| Static Application Testing | Show SonarCloud security hotspots |
| Software Composition Analysis | Show npm audit results |
| API Testing | Show Jest/Vitest security tests |
| Additional Research | Show security middleware implementation |

---

**Total Video Length Target: 5-7 minutes**

