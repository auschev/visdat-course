---
title: Development Tools & Workflow
---

# Development Tools & Workflow

## Overview

Modern software development relies on a robust set of tools that enable collaboration, version control, and reproducible workflows. This course emphasizes industry-standard practices that you'll encounter in professional engineering environments.

## Git & Version Control

### What is Git?

Git is a distributed version control system that tracks changes in files and coordinates work between multiple developers. It's essential for:

- **Tracking Changes:** Every modification to your code is recorded
- **Collaboration:** Multiple people can work on the same project simultaneously
- **Backup:** Your code history is preserved and can be recovered
- **Branching:** Work on features in isolation before merging

### Basic Git Concepts

```bash
# Clone a repository
git clone https://github.com/username/repository.git

# Check status of your changes
git status

# Add files to staging area
git add filename.py
git add .  # Add all changes

# Commit changes with a message
git commit -m "Add data processing function"

# Push changes to remote repository
git push origin main
```

### Branching Strategy

```bash
# Create and switch to a new branch
git checkout -b feature/data-analysis

# Work on your changes...
# Commit your changes...

# Switch back to main branch
git checkout main

# Merge your feature branch
git merge feature/data-analysis
```

## GitHub Workflow

### Repository Structure

Our course follows this repository pattern:

```
visdat-course/
├── docs/           # Course documentation (Docusaurus)
├── slides/         # Lecture slides (Marp)
├── assignments/    # Student assignments
├── examples/       # Code examples
├── data/          # Sample datasets
└── README.md      # Project overview
```

### Pull Request Process

1. **Fork** the main repository to your GitHub account
2. **Clone** your fork to your local machine
3. **Create a branch** for your work
4. **Make changes** and commit them
5. **Push** your branch to your fork
6. **Create a Pull Request** back to the main repository
7. **Review** and iterate based on feedback
8. **Merge** once approved

### Pull Request Best Practices

- **Clear Title:** Describe what the PR accomplishes
- **Detailed Description:** Explain the changes and why they were made
- **Small, Focused Changes:** Easier to review and less likely to have conflicts
- **Test Your Code:** Ensure everything works before submitting

## Markdown

### Why Markdown?

Markdown is a lightweight markup language that's:

- **Easy to Learn:** Simple syntax for formatting text
- **Version Control Friendly:** Plain text that Git can track effectively
- **Universal:** Supported by GitHub, VS Code, Jupyter, and many other tools
- **Flexible:** Can be converted to HTML, PDF, slides, and more

### Essential Markdown Syntax

```markdown
# Main Heading
## Sub Heading
### Sub-sub Heading

**Bold text**
*Italic text*
`Code inline`

- Bullet point 1
- Bullet point 2
  - Nested bullet

1. Numbered list
2. Second item

[Link text](https://example.com)

![Image alt text](image.png)

```python
# Code block with syntax highlighting
def process_data(data):
    return data.clean().transform()
```

> Blockquote for important notes

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Documentation as Code

In this course, we treat documentation like code:

- **Version Controlled:** All docs are in Git repositories
- **Collaborative:** Multiple contributors through Pull Requests
- **Automated:** Documentation builds automatically from Markdown
- **Living Documents:** Updated alongside code changes

## Development Environment Setup

### Required Software

1. **Git:** Download from [git-scm.com](https://git-scm.com/)
2. **VS Code:** Download from [code.visualstudio.com](https://code.visualstudio.com/)
3. **Python:** Download from [python.org](https://python.org/) (version 3.8+)
4. **Node.js:** Download from [nodejs.org](https://nodejs.org/) (for documentation tools)

### VS Code Extensions

Install these extensions for the best development experience:

```bash
# Git and version control
- GitLens
- GitHub Pull Requests and Issues

# Markdown and documentation
- Markdown All in One
- Marp for VS Code

# Python development
- Python
- Pylint
- Black Formatter

# C++ development (if needed)
- C/C++
- CMake Tools
```

### SSH Key Setup

For secure Git operations:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to SSH agent
ssh-add ~/.ssh/id_ed25519

# Copy public key to clipboard (Windows)
type ~/.ssh/id_ed25519.pub | clip

# Add to GitHub: Settings > SSH and GPG keys > New SSH key
```

## Project Workflow Example

### Starting a New Assignment

```bash
# 1. Fork the course repository on GitHub
# 2. Clone your fork
git clone git@github.com:yourusername/visdat-course.git

# 3. Navigate to project
cd visdat-course

# 4. Create feature branch
git checkout -b assignment/week1-data-processing

# 5. Work on your assignment
# Edit files, create new ones, etc.

# 6. Commit your work
git add .
git commit -m "Complete week 1 data processing assignment"

# 7. Push to your fork
git push origin assignment/week1-data-processing

# 8. Create Pull Request on GitHub
```

### Continuous Integration

Our repositories use automated checks:

- **Code Quality:** Linting and formatting checks
- **Tests:** Automated testing of code examples
- **Documentation:** Ensure documentation builds correctly
- **Security:** Scan for potential security issues

## Best Practices

### Commit Messages

Write clear, descriptive commit messages:

```bash
# Good examples
git commit -m "Add data validation function for CSV imports"
git commit -m "Fix memory leak in image processing pipeline"
git commit -m "Update documentation for new API endpoints"

# Poor examples
git commit -m "fix stuff"
git commit -m "update"
git commit -m "changes"
```

### File Organization

- **Consistent Naming:** Use clear, descriptive file names
- **Logical Structure:** Group related files in folders
- **Documentation:** Include README.md files in each major directory
- **Ignore Files:** Use .gitignore to exclude temporary and build files

### Collaboration Etiquette

- **Review Others' Code:** Provide constructive feedback on Pull Requests
- **Ask Questions:** Use GitHub Issues for questions and discussions
- **Share Knowledge:** Document solutions to common problems
- **Be Patient:** Remember that everyone is learning

## Troubleshooting Common Issues

### Git Problems

```bash
# Forgot to commit before pulling? Stash your changes
git stash
git pull
git stash pop

# Want to undo the last commit?
git reset --soft HEAD~1

# Accidentally committed to wrong branch?
git checkout correct-branch
git cherry-pick commit-hash
```

### Merge Conflicts

When Git can't automatically merge changes:

1. **Open the conflicted file** in VS Code
2. **Review the conflict markers** (`<<<<<<<`, `=======`, `>>>>>>>`)
3. **Choose which changes to keep** or combine them
4. **Remove the conflict markers**
5. **Commit the resolved file**

## Next Steps

Now that you understand the tools and workflow, you're ready to:

- Set up your development environment
- Fork the course repository
- Complete your first assignment
- Create your first Pull Request

The combination of Git, Markdown, and collaborative workflows will serve you well throughout this course and in your professional career!