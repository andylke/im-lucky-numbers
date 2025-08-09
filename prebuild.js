const fs = require("fs");

// Update android.versionCode
const appJsonPath = "./app.json";
const appJson = JSON.parse(fs.readFileSync(appJsonPath, "utf-8"));
let [major, minor, patch] = appJson.expo.version.split(".").map(Number);
appJson.expo.android.versionCode = (major * 10000) + (minor * 100) + patch;
fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));
