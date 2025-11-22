# Start both Django backend and Vite frontend in separate PowerShell windows.
# Usage: Right-click and "Run with PowerShell" or run from PowerShell as Administrator.

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$backend = Join-Path $root 'backend'

Write-Host "Project root: $root"
Write-Host "Backend path: $backend"

# Create virtualenv and install backend requirements if needed
if (-not (Test-Path (Join-Path $backend '.venv'))) {
    Write-Host "Creating Python virtual environment..."
    python -m venv (Join-Path $backend '.venv')
    & (Join-Path $backend '.venv\Scripts\pip.exe') install --upgrade pip
    & (Join-Path $backend '.venv\Scripts\pip.exe') install -r (Join-Path $backend 'requirements.txt')
}

Write-Host "Running Django migrations..."
& (Join-Path $backend '.venv\Scripts\python.exe') (Join-Path $backend 'manage.py') migrate

Write-Host "Starting Django dev server in new window..."
Start-Process powershell -ArgumentList '-NoExit', "-Command cd '$backend'; & '.\.venv\Scripts\python.exe' manage.py runserver"

Write-Host "Starting frontend (npm) in new window..."
Start-Process powershell -ArgumentList '-NoExit', "-Command cd '$root'; npm install; npm run dev"

Write-Host "Started backend and frontend (check the new windows)."
