@echo off
cd server
START chrome.exe http://localhost:3000/
call npm start
pause
