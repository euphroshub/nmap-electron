const { ipcMain } = require('electron');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// Handle scan requests from renderer
ipcMain.handle('scan', async (event, target) => {
    try {
        // Basic port scan with service detection
        const { stdout } = await execAsync(`nmap -sV ${target}`);
        return {
            success: true,
            output: stdout
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
});
