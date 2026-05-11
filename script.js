/* ==========================================================================
   data_viewer.js – Simulated Backend Diagnostic & Content Engine
   Provides hardware info, manuscript excerpts, and file listings.
   ========================================================================== */

// Simulated kernel diagnostic data (as if from kernel.c)
const kernelDiag = {
  physicalRAM: 4, // GB
  zRAMSize: 5.5, // GB
  kernelVersion: "5.15.0-91-generic-lx",
  architecture: "x86_64",
  cpu: "Intel Core i3-6100U @ 2.30GHz",
  uptimeSeconds: 0, // dynamic, will be set
};

// Manuscript excerpt from "THE VOID" – deep philosophical content
const voidExcerpt = `
FRAGMENT 47-B: THE VOID

The void is not empty. It is a mirror without reflection,
a silence that screams the truths we bury beneath logic.
I have walked through the hollow architectures of consciousness,
where memory bleeds into data, and identity dissolves
in the static between heartbeats.

- Rezon Haque, "THE VOID"
`;

// PHP backend simulation for RHX Enterprises (api.php style)
const rhxApiResponse = {
  orders: 1283,
  revenue: "$47,290",
  message: "RHX Enterprises: Scalable digital commerce for the modern creator.",
};

// Simulated Python engine snippet for zRAM optimization (engine.py)
const zramPythonSnippet = `
# engine.py – Adaptive zRAM compression daemon
import subprocess, time

def adjust_zram(total_ram_gb):
    target = int(total_ram_gb * 1.375)  # 5.5 GB for 4 GB physical
    subprocess.run(['zramctl', '-f', '-s', f'{target}G'])
    # Algorithms: lz4, zstd
    print(f"zRAM resized to {target}GB with lz4 compression")

while True:
    adjust_zram(4)
    time.sleep(3600)
`;

// File system simulation for file explorer
const fileSystem = {
  "/": {
    type: "dir",
    children: {
      "kernel.c": { type: "file", content: `// kernel.c – Lightweight hardware diagnostic module
#include <linux/kernel.h>
#include <linux/mm.h>

void check_memory(void) {
    struct sysinfo si;
    si_meminfo(&si);
    printk(KERN_INFO "Physical RAM: %lu MB\\n", (si.totalram * 4) / 1024);
    printk(KERN_INFO "zRAM active: 5.5 GB virtual swap\\n");
}
` },
      "api.php": { type: "file", content: `<?php
// api.php – RHX Enterprises Order Endpoint
header('Content-Type: application/json');
$data = [
    'orders' => 1283,
    'revenue' => '$47,290',
    'status' => 'active'
];
echo json_encode($data);
?>` },
      "engine.py": { type: "file", content: zramPythonSnippet },
      "the_void.txt": { type: "file", content: voidExcerpt },
    }
  }
};

// Helper functions to retrieve data
function getKernelDiagnostics() {
  // Update uptime dynamically
  const now = new Date();
  const bootTime = window.bootTimestamp || now;
  kernelDiag.uptimeSeconds = Math.floor((now - bootTime) / 1000);
  return kernelDiag;
}

function getVoidExcerpt() {
  return voidExcerpt;
}

function getFileSystem() {
  return fileSystem;
}

function getRHXData() {
  return rhxApiResponse;
}
