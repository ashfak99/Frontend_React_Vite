
---

# 9. Local folder banane ke commands

Windows PowerShell me:

```powershell
cd C:\Users\Dell
mkdir contribpilot-sandbox-test
cd contribpilot-sandbox-test

mkdir app
mkdir tests

New-Item app\__init__.py
New-Item app\todos.py
New-Item tests\__init__.py
New-Item tests\test_todos.py
New-Item requirements.txt
New-Item README.md
New-Item .gitignore