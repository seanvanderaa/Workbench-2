# Gigafact AI Fact-Checking Platform

This is a Flask-based web application for collaborative fact-checking projects. This is simply the UI skeleton for the app, which will be built out over the coming weeks. Users can submit claims, select atomic claims, view fact-check results, and provide feedback on AI-generated outputs. This was designed and coded by me for Gigafact.

## Features

- Start new fact-check projects
- Select claims to check (max 5 per project)
- View verdicts, summaries, and verified facts
- Rate and report problems with AI outputs
- User authentication (login/create account)

## Project Structure

```
app.py
static/
  css/
    base.css
    claims.css
    login.css
    start.css
    styles.css
    view_claim.css
  js/
    base.js
    claims.js
    start.js
    view_claim.js
templates/
  base.html
  create_account.html
  login.html
  partials/
    _select_claims.html
    _start.html
    _view_claim.html
```

## Getting Started

1. Install dependencies:
   ```sh
   pip install flask
   ```
2. Run the app:
   ```sh
   python app.py
   ```
3. Visit [http://localhost:5000](http://localhost:5000) in your browser.