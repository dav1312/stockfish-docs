---
title: "Download"
description: "Download Stockfish for Windows, Android, MacOS, iOS, or Linux."
---

<h1>Download {{ releasesInfo.name || 'Stockfish' }}</h1>

<div v-for="(files, os) in sortedReleases" :key="os">
    <h2 :id="os" :class="{ 'current-os': isCurrentOs(os) }">{{ os }}</h2>
    <ul v-if="files && files.length > 0">
        <li v-for="file in sortedBinaries(files)" :key="file.name">
            <a :href="file.url" target="_blank" rel="noopener noreferrer">{{ file.name }}</a>
        </li>
    </ul>
</div>

<script setup>
import { ref, onMounted } from 'vue';

const sortedReleases = ref({});
const releasesInfo = ref({});

onMounted(async() => {
    try {
        const response = await fetch('https://api.github.com/repos/official-stockfish/stockfish/releases/latest');
        const data = await response.json();
        if (data.assets && data.assets.length > 0) {
            const groupedReleases = {};
            data.assets.forEach(asset => {
                let os = getOSFromFileName(asset.name);
                os = formatOsName(os);
                if (!groupedReleases[os]) {
                    groupedReleases[os] = [];
                }
                groupedReleases[os].push({
                    name: asset.name,
                    url: asset.browser_download_url,
                });
            });
            sortedReleases.value = sortReleasesByUserOS(groupedReleases, getUserOS());
            releasesInfo.value = data;
        }
    } catch (error) {
        console.error('Error fetching releases:', error);
    }
});

function getUserOS() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) return "Windows";
    if (userAgent.includes("android") || userAgent.includes("raspberry")) return "ARM";
    if (userAgent.includes("linux")) return "Linux";
    if (userAgent.includes("mac")) return "MacOS";
    return "";
}

function isCurrentOs(os) {
    const userOs = getUserOS().toLowerCase();
    return os.toLowerCase() === userOs;
}

function getOSFromFileName(fileName) {
    const parts = fileName.split('-');
    return parts[1];
}

function formatOsName(os) {
    switch (os.toLowerCase()) {
        case 'ubuntu':
            return 'Linux';
        case 'macos':
            return 'MacOS';
        case 'android':
            return 'ARM';
        default:
            return os.charAt(0).toUpperCase() + os.slice(1);
    }
}

function sortReleasesByUserOS(releases, userOs) {
    if (!(userOs in releases)) return releases;

    const sorted = { [userOs]: releases[userOs] };
    for (const os in releases) {
        if (os.toLowerCase() !== userOs.toLowerCase()) {
            sorted[os] = releases[os];
        }
    }
    return sorted;
}

function sortedBinaries(files) {
  return files.sort((a, b) => customSortKey(a) - customSortKey(b));
}

function customSortKey(obj) {
    const order = [
        "apple-silicon",
        "armv8-dotprod",
        "armv8",
        "armv7-neon",
        "armv7",
        "x86-64-vnni512",
        "x86-64-vnni256",
        "x86-64-avx512",
        "x86-64-avxvnni",
        "x86-64-bmi2",
        "x86-64-avx2",
        "x86-64-sse41-popcnt",
        "x86-64-ssse3",
        "x86-64-sse3-popcnt",
        "x86-64",
        "x86-32-sse41-popcnt",
        "x86-32-sse2",
        "x86-32",
        "general-64",
        "general-32",
    ];

    for (let i = 0; i < order.length; i++) {
        if (obj.name.includes(order[i])) {
            return i;
        }
    }
    return order.length;
}
</script>

<style scoped>
.current-os {
    color: var(--vp-c-brand);
}
</style>
