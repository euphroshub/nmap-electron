# Nmap Scanner Electron App

A simple and user-friendly Electron application for running Nmap port scans on Linux systems.

## Requirements

- Linux distribution with Nmap installed
- Node.js and npm
- Electron

## Installation

### 1. Install Nmap (if not already installed)

```bash
# For Debian/Ubuntu
sudo apt-get update
sudo apt-get install nmap

# For Fedora
sudo dnf install nmap

# For Arch Linux
sudo pacman -S nmap
```

### 2. Install the Electron App

#### Option 1: Using npm (Development)

```bash
# Clone the repository
git clone https://github.com/euphroshub/nmap-electron

# Navigate to the project directory
cd nmap-electron

# Install dependencies
npm install

# Start the application
npm start
```

#### Option 2: Using Linux Packages

##### For Debian/Ubuntu (.deb)
```bash
# Build the .deb package
npm run build:deb

# Install the package
sudo dpkg -i dist/nmap-electron_1.0.0_amd64.deb

# Install any missing dependencies
sudo apt-get install -f
```

##### For Fedora (.rpm)
```bash
# Build the .rpm package
npm run build:rpm

# Install the package
sudo rpm -i dist/nmap-electron-1.0.0.x86_64.rpm
```

##### For Other Distributions (AppImage)
```bash
# Build the AppImage
npm run build:appimage

# Make the AppImage executable
chmod +x dist/nmap-electron-1.0.0.AppImage

# Run the AppImage
./dist/nmap-electron-1.0.0.AppImage
```

## Usage

1. Launch the application
2. Enter a target IP address or hostname
3. Click "Start Scan" to begin the port scan
4. View the results in the formatted display

## Development

To run the app in development mode with DevTools:
```bash
npm run dev
```

## Building Packages

To build all Linux packages:
```bash
npm run build
```

Or build specific package types:
```bash
# For Debian/Ubuntu
npm run build:deb

# For Fedora
npm run build:rpm

# For AppImage (portable)
npm run build:appimage
```

This will create packages in the `dist` directory:
- `.deb` package for Debian/Ubuntu
- `.rpm` package for Fedora
- `.AppImage` for portable use on any Linux distribution

## License

This application uses Nmap, which is licensed under the Nmap License. A copy of the Nmap License is included in the `nmap` folder of this repository.

For more information about Nmap, visit the official repository: [https://github.com/nmap/nmap](https://github.com/nmap/nmap)

## Security Note

This application requires Nmap to be installed on your system. Nmap is a powerful network scanning tool that should be used responsibly and only on networks you have permission to scan.