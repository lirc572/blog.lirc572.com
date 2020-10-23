---
title: Move WSL File System
date: 2020-10-23
tags:
  - WSL
  - Windows Subsystem for Linux
---
WSL has been very useful as a Linux environment running on Windows 10. One problem for WSL is, however, that it is installed to the C drive by default. It would easily take up over 10 GB of space after installing some programming tool chains on it. Recently, my C drive was once again filled by software that can only be installed on C drive. As I browse for files to remove, I found out that my WSL installation was taking 15 GB of storage! After some online search, I managed to move my WSL file system out of C drive. Here is [a link to the solution](https://stackoverflow.com/questions/38779801/move-wsl-bash-on-windows-root-filesystem-to-another-hard-drive#answer-51767786) I referred to. I will also briefly talk about it here.

## Move WSL File System

::: tip
Note that all commands below should be run in **PowerShell**
:::

First, list your WSL distros (`wsl -l`):

```PowerShell
PS C:/> wsl -l
Windows Subsystem for Linux Distributions:
Ubuntu20.04 (Default)
Ubuntu-20.04
```

Take note of the name of the distro you want to move (E.g. Ubuntu-20.04)

Export the distro to a tar file (`wsl --export <distro-name> <path-of-tar-file>`). E.g.:

```PowerShell
PS C:\> wsl --export Ubuntu-20.04 E:\ubuntu-wsl.tar
```

After the export finishes, import the tar file to your desired location (`wsl --import <distro-name> <path-of-desired-location> <path-of-tar-file>`). E.g.:

```PowerShell
PS C:\> wsl --import Ubuntu20.04 E:\WSL\Ubuntu20.04 E:\ubuntu-wsl.tar
```

After this is done, test the new distro with `wsl -u <username> -d <distro-name>`. E.g.:

```PowerShell
PS C:\> wsl -u rochor -d Ubuntu20.04
```

If it works as intended, you can then safely remove the original distro (`wsl --unregister <distro-name>`). E.g.:

```PowerShell
PS C:\> wsl --unregister Ubuntu-20.04
PS C:\> wsl -l # make sure the distro was successfully unregistered
```

Then, change the default user of your newly created distro. You may refer to [this issue comment](https://github.com/microsoft/WSL/issues/3974#issuecomment-522921145). E.g.:

```PowerShell
Function WSL-SetDefaultUser ($distro="<DistroName>", $user="<UserName>") { Get-ItemProperty Registry::HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Lxss\*\ DistributionName | Where-Object -Property DistributionName -eq $distro | Set-ItemProperty -Name DefaultUid -Value ((wsl -d $distro -u $user -e id -u) | Out-String); }; WSL-SetDefaultUser Ubuntu20.04 rochor; Remove-Item Function:WSL-SetDefaultUser;
```

Now you have a working WSL distro that is not in C drive!

## Alternative Method

If you do not want to type the export and import commands yourself, you can use this [move-wsl script](https://github.com/pxlrbt/move-wsl) to automatically move your WSL distro.

## References:

- [Move WSL (Bash on Windows) root filesystem to another hard drive?
 -- Stack Overflow](https://stackoverflow.com/questions/38779801/move-wsl-bash-on-windows-root-filesystem-to-another-hard-drive#answer-51767786)
- [move-wsl -- GitHub](https://github.com/pxlrbt/move-wsl)
- [Impossible to set default user of distribution installed via wsl --import on 1903 -- GitHub](https://github.com/microsoft/WSL/issues/3974#issuecomment-522921145)