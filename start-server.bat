@echo off
title One More Thing Local Web Server
echo Starting One More Thing Web Server...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
