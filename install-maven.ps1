# Maven Installation Script
$MavenUrl = "https://archive.apache.org/dist/maven/maven-3/3.9.5/binaries/apache-maven-3.9.5-bin.zip"
$DownloadPath = Join-Path $env:TEMP "maven.zip"
$InstallPath = "C:\apache-maven"

Write-Host "Downloading Maven..." -ForegroundColor Green
try {
    Invoke-WebRequest -Uri $MavenUrl -OutFile "$DownloadPath"
    Write-Host "Download complete" -ForegroundColor Green
}
catch {
    Write-Host "Download failed: $_" -ForegroundColor Red
    exit 1
}

Write-Host "Extracting Maven..." -ForegroundColor Green
try {
    Expand-Archive -Path "$DownloadPath" -DestinationPath "C:\" -Force
    if (Test-Path "C:\apache-maven-3.9.5") {
        Rename-Item -Path "C:\apache-maven-3.9.5" -NewName "apache-maven" -Force
    }
    Write-Host "Extraction complete" -ForegroundColor Green
}
catch {
    Write-Host "Extraction failed: $_" -ForegroundColor Red
    exit 1
}

Write-Host "Setting environment variables..." -ForegroundColor Green
try {
    [Environment]::SetEnvironmentVariable("MAVEN_HOME", "$InstallPath", "Machine")
    $currentPath = [Environment]::GetEnvironmentVariable("PATH", "Machine")
    $mvnBinPath = "$InstallPath\bin"
    if ($currentPath -notlike "*apache-maven*") {
        [Environment]::SetEnvironmentVariable("PATH", "$currentPath;$mvnBinPath", "Machine")
    }
    Write-Host "Maven installed successfully at $InstallPath" -ForegroundColor Green
    Write-Host "Please restart PowerShell to use maven command" -ForegroundColor Yellow
}
catch {
    Write-Host "Failed to set environment variables: $_" -ForegroundColor Red
    exit 1
}
