const chokidar = require("chokidar");
const { execFileSync } = require("child_process");

let timer = null;
let isPushing = false;

const watcher = chokidar.watch(
  [
    "src",
    "public",
    "index.html",
    "package.json",
    "package-lock.json",
    "vite.config.js",
  ],
  {
    ignored: /(^|[\/\\])(\.git|node_modules|dist)([\/\\]|$)/,
    ignoreInitial: true,
    awaitWriteFinish: {
      stabilityThreshold: 1000,
      pollInterval: 200,
    },
  },
);

function runGit(args) {
  return execFileSync("git", args, {
    cwd: process.cwd(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function pushChanges() {
  if (isPushing) return;

  isPushing = true;

  try {
    console.log("\nChecking changes...");

    runGit(["add", "-A"]);

    try {
      runGit(["diff", "--cached", "--quiet"]);
      console.log("No changes to push.");
      return;
    } catch (error) {
      // Exit code 1 means staged changes exist.
      if (error.status !== 1) throw error;
    }

    runGit(["commit", "-m", "Auto update website"]);
    runGit(["push", "origin", "HEAD"]);

    console.log("Successfully pushed changes to GitHub!");
    console.log("GitHub Actions will now deploy your website.");
  } catch (error) {
    console.error(
      "Auto-push failed:",
      error.stderr?.toString() || error.message,
    );
  } finally {
    isPushing = false;
  }
}

function schedulePush(path) {
  console.log("File changed:", path);

  clearTimeout(timer);
  timer = setTimeout(pushChanges, 5000);
}

watcher.on("add", schedulePush);
watcher.on("change", schedulePush);
watcher.on("unlink", schedulePush);

console.log("Travel99 Auto-Push is running...");
console.log("Save a file to automatically push changes to GitHub.");
