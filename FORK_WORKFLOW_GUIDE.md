# Fork Workflow Guide

## ✅ Repository Configuration Updated

Your repository remote has been successfully updated:

- **Origin (your fork)**: `https://github.com/ST10382828/insy7314-poe-sabs.git`
- **Upstream (original)**: `https://github.com/IIEWFL/insy7314-poe-sabs.git`

## 🔄 Working with Your Fork

### Setting Up CircleCI

1. **Connect Your Fork to CircleCI**
   - Go to [CircleCI](https://circleci.com/)
   - Click "Add Projects"
   - Find and select `ST10382828/insy7314-poe-sabs`
   - Click "Set Up Project"
   - CircleCI will detect the `.circleci/config.yml` file

2. **Configure Environment Variables**
   - In CircleCI project settings, go to "Environment Variables"
   - Add the following:
     - `SONAR_TOKEN`: Your SonarCloud token
     - `SONAR_ORGANIZATION`: Your SonarCloud org (optional)
     - `SONAR_HOST_URL`: https://sonarcloud.io (optional)

### Pushing Your Changes

```bash
# 1. Stage all your changes
git add .

# 2. Commit your changes
git commit -m "Complete Task 3: Employee portal with CircleCI and SonarQube integration"

# 3. Push to your fork
git push origin main
```

This will trigger the CircleCI pipeline on your fork!

### Syncing with Upstream (Original Repository)

When you're ready to push back to the original repository:

```bash
# 1. Fetch latest changes from upstream
git fetch upstream

# 2. Merge upstream changes (if any)
git merge upstream/main

# 3. Push to upstream (if you have write access)
git push upstream main

# OR create a Pull Request:
# - Go to https://github.com/IIEWFL/insy7314-poe-sabs
# - Click "Pull Requests" → "New Pull Request"
# - Select your fork as the source
# - Create and submit the PR
```

### Testing CircleCI Locally

You can test the CircleCI configuration locally using CircleCI CLI:

```bash
# Install CircleCI CLI (if not installed)
# Windows: choco install circleci-cli
# Or download from: https://circleci.com/docs/2.0/local-cli/

# Validate the config
circleci config validate .circleci/config.yml

# Test the pipeline locally (requires Docker)
circleci local execute
```

## 📋 Current Changes Ready to Push

You have the following modified files:
- `.circleci/config.yml` - CircleCI pipeline configuration
- `README.md` - Updated documentation
- `sonar-project.properties` - SonarQube configuration
- Server configuration files
- Test files
- Documentation files

## 🚀 Next Steps

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Complete Task 3 implementation"
   git push origin main
   ```

2. **Set up CircleCI:**
   - Connect your fork on CircleCI
   - Add environment variables
   - Verify pipeline runs on push

3. **Set up SonarCloud:**
   - Create SonarCloud account
   - Create project for your fork
   - Update `sonar-project.properties` with your project key
   - Add `SONAR_TOKEN` to CircleCI

4. **Verify everything works:**
   - Check CircleCI dashboard for pipeline status
   - Check SonarCloud for analysis results
   - Review security hotspots and code smells

5. **Push back to upstream (when ready):**
   - Create a Pull Request to the original repository
   - Or push directly if you have access

## 💡 Tips

- Always fetch from upstream before pushing to keep your fork updated
- Use descriptive commit messages
- Test locally before pushing
- Check CircleCI logs if pipeline fails
- Keep your `SONAR_TOKEN` secure (never commit it)

## 📝 Git Commands Reference

```bash
# Check current remotes
git remote -v

# Push to your fork
git push origin main

# Pull from your fork
git pull origin main

# Fetch from upstream
git fetch upstream

# Merge upstream changes
git merge upstream/main

# Push to upstream (if you have access)
git push upstream main
```

## 🔗 Useful Links

- **Your Fork**: https://github.com/ST10382828/insy7314-poe-sabs
- **Original Repo**: https://github.com/IIEWFL/insy7314-poe-sabs
- **CircleCI**: https://circleci.com/
- **SonarCloud**: https://sonarcloud.io/

