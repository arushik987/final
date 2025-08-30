#!/bin/bash

echo "========================================"
echo "Chaudhary Kirana Store - Setup"
echo "========================================"
echo
echo "Starting local development server..."
echo
echo "This will start a simple HTTP server to avoid Firebase errors."
echo "Both the main store and admin panel will be available at: http://localhost:8000"
echo
echo "Files available:"
echo "- index.html (Main Store)"
echo "- admin.html (Admin Panel)"
echo
echo "Press Ctrl+C to stop the server when done."
echo

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "Using Python 3 HTTP server..."
    echo
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Using Python HTTP server..."
    echo
    python -m http.server 8000
# Check if Node.js is available
elif command -v node &> /dev/null; then
    echo "Using Node.js HTTP server..."
    echo
    npx serve . -p 8000
# Check if PHP is available
elif command -v php &> /dev/null; then
    echo "Using PHP HTTP server..."
    echo
    php -S localhost:8000
else
    echo "No suitable HTTP server found."
    echo
    echo "Please install one of the following:"
    echo "1. Python: https://python.org/downloads/"
    echo "2. Node.js: https://nodejs.org/download/"
    echo "3. PHP: https://php.net/downloads/"
    echo
    echo "Or use VS Code Live Server extension instead."
    echo
    read -p "Press Enter to continue..."
fi
