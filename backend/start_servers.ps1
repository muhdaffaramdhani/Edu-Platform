$ports = @(8000,5173)
foreach ($p in $ports) {
    $lines = netstat -ano | findstr ":$p" | Select-String "LISTENING"
    if ($lines) {
        foreach ($l in $lines) {
            $parts = ($l -split '\s+')
            $targetPid = $parts[-1]
            Write-Output "Killing PID $targetPid listening on port $p"
            taskkill /PID $targetPid /F | Out-Null
        }
    } else {
        Write-Output "No process listening on port $p"
    }
}

Start-Process powershell -ArgumentList '-NoExit','-Command','cd "D:\UNJ - Computer Science\Semester 3\PPW - Perancangan dan Pemrograman Web\EduPlatform\backend"; .\\venv\\Scripts\\python.exe manage.py runserver 127.0.0.1:8000'
Start-Process powershell -ArgumentList '-NoExit','-Command','cd "D:\UNJ - Computer Science\Semester 3\PPW - Perancangan dan Pemrograman Web\EduPlatform"; npm run dev'
Write-Output "Started server windows (check their consoles for logs)."
