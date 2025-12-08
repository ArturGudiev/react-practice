# Fixing Kaspersky Blocking GitHub Push

## Quick Fix Steps

### 1. Add Git to Kaspersky Exclusions

**For File Exclusions:**
1. Open Kaspersky → Settings → Additional → Threats and Exclusions
2. Click "Exclusions" → "Add"
3. Add these paths:
   - `C:\Program Files\Git\bin\git.exe`
   - `C:\Program Files (x86)\Git\bin\git.exe` (if exists)
   - `C:\Users\YourUsername\.ssh\*` (if using SSH)
   - Your project folder: `C:\Programming\React\mem-tickets\*`

**For Network Exclusions:**
1. Settings → Protection → Firewall → Settings
2. Add trusted applications:
   - `git.exe`
   - `ssh.exe` (if using SSH)
3. In Network settings, allow:
   - `github.com`
   - `*.github.com`
   - Port 443 (HTTPS) or Port 22 (SSH)

### 2. Temporarily Disable to Test

1. Right-click Kaspersky icon in system tray
2. Select "Pause Protection" → Choose duration
3. Try pushing: `git push origin main`
4. If it works, re-enable and add the exceptions above

### 3. Check Your Git Remote Configuration

```powershell
# Check if remote is configured
git remote -v

# If not configured, add your GitHub repo:
git remote add origin https://github.com/yourusername/yourrepo.git

# Or if using SSH:
git remote add origin git@github.com:yourusername/yourrepo.git
```

### 4. Test Connection

**For HTTPS:**
```powershell
git ls-remote origin
```

**For SSH:**
```powershell
ssh -T git@github.com
```

### 5. Alternative Solutions

- **Use GitHub Desktop**: GUI app that might bypass some firewall issues
- **Use GitHub CLI**: `gh auth login` then `gh repo sync`
- **Switch to SSH**: Often more reliable with firewalls
- **Use VPN**: Temporarily route through VPN if corporate firewall

### 6. Kaspersky Specific Settings

1. **Disable "Scan encrypted connections"** for GitHub:
   - Settings → Network → Do not scan encrypted connections
   - Add `github.com` to the list

2. **Add to Trusted Zone**:
   - Settings → Additional → Threats and Exclusions → Trusted Zone
   - Add `github.com` and `*.github.com`

## Common Error Messages

- **"Connection timed out"** → Firewall blocking
- **"Permission denied"** → Authentication issue
- **"Could not resolve host"** → DNS/Network blocking

## Still Not Working?

1. Check Windows Firewall (even if Kaspersky is managing it)
2. Try pushing from a different network (mobile hotspot)
3. Check if your ISP blocks GitHub
4. Contact Kaspersky support with specific error message
