@echo off
echo ========================================
echo Chaudhary Kirana Store - Setup
echo ========================================
echo.
echo Starting local development server...
echo.
echo This will start a simple HTTP server to avoid Firebase errors.
echo Both the main store and admin panel will be available at: http://localhost:8000
echo.
echo Files available:
echo - index.html (Main Store)
echo - admin.html (Admin Panel)
echo.
echo Press Ctrl+C to stop the server when done.
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python HTTP server...
    echo.
    python -m http.server 8000
) else (
    REM Check if Node.js is available
    node --version >nul 2>&1
    if %errorlevel% == 0 (
        echo Using Node.js HTTP server...
        echo.
        npx serve . -p 8000
    ) else (
        echo Neither Python nor Node.js found.
        echo.
        echo Please install one of the following:
        echo 1. Python: https://python.org/downloads/
        echo 2. Node.js: https://nodejs.org/download/
        echo.
        echo Or use VS Code Live Server extension instead.
        echo.
        pause
    )
)
