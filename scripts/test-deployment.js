#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

console.log("🚀 Testing Deployment Configuration...\n")

// Test 1: Validate essential configuration files
console.log("📋 Testing Configuration Files...")
const configFiles = ["package.json", "next.config.mjs", "vercel.json"]

let configValid = true
configFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`)
    try {
      if (file.endsWith(".json")) {
        JSON.parse(fs.readFileSync(file, "utf8"))
        console.log(`✅ ${file} is valid JSON`)
      }
    } catch (error) {
      console.log(`❌ ${file} has invalid JSON: ${error.message}`)
      configValid = false
    }
  } else {
    console.log(`❌ ${file} missing`)
    configValid = false
  }
})

// Test 2: Validate build scripts
console.log("\n🔧 Testing Build Scripts...")
const scriptFiles = ["scripts/postbuild.js", "scripts/verify-deployment.js", "scripts/generate-sitemap.js"]

let scriptsValid = true
scriptFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`)
  } else {
    console.log(`❌ ${file} missing`)
    scriptsValid = false
  }
})

// Test 3: Validate SEO files
console.log("\n🔍 Testing SEO Files...")
const seoFiles = ["public/robots.txt", "public/llms.txt", "public/sitemap.xml", "public/sitemap-index.xml"]

let seoValid = true
seoFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, "utf8")
    console.log(`✅ ${file} exists (${content.length} chars)`)

    // Basic content validation
    if (file.includes("robots.txt") && !content.includes("User-agent:")) {
      console.log(`❌ ${file} missing User-agent directive`)
      seoValid = false
    }
    if (file.includes("sitemap") && !content.includes("<?xml")) {
      console.log(`❌ ${file} missing XML declaration`)
      seoValid = false
    }
  } else {
    console.log(`❌ ${file} missing`)
    seoValid = false
  }
})

// Test 4: Validate package.json scripts
console.log("\n📦 Testing Package.json Scripts...")
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
  const requiredScripts = ["build", "postbuild", "verify-seo", "generate-sitemap"]

  let scriptsConfigValid = true
  requiredScripts.forEach((script) => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(`✅ Script "${script}" configured`)
    } else {
      console.log(`❌ Script "${script}" missing`)
      scriptsConfigValid = false
    }
  })

  if (!scriptsConfigValid) {
    seoValid = false
  }
} catch (error) {
  console.log(`❌ Error reading package.json: ${error.message}`)
  configValid = false
}

// Test 5: Validate Vercel configuration
console.log("\n⚡ Testing Vercel Configuration...")
try {
  const vercelConfig = JSON.parse(fs.readFileSync("vercel.json", "utf8"))

  if (vercelConfig.buildCommand) {
    console.log(`✅ Build command configured: ${vercelConfig.buildCommand}`)
  } else {
    console.log(`❌ Build command missing`)
    configValid = false
  }

  if (vercelConfig.headers && vercelConfig.headers.length > 0) {
    console.log(`✅ Headers configured (${vercelConfig.headers.length} rules)`)
  } else {
    console.log(`❌ Headers configuration missing`)
    configValid = false
  }

  if (vercelConfig.env) {
    console.log(`✅ Environment variables configured`)
  } else {
    console.log(`⚠️  No environment variables in vercel.json`)
  }
} catch (error) {
  console.log(`❌ Error reading vercel.json: ${error.message}`)
  configValid = false
}

// Final Results
console.log("\n📊 Deployment Test Results:")
console.log("================================")
console.log(`Configuration Files: ${configValid ? "✅ PASS" : "❌ FAIL"}`)
console.log(`Build Scripts: ${scriptsValid ? "✅ PASS" : "❌ FAIL"}`)
console.log(`SEO Files: ${seoValid ? "✅ PASS" : "❌ FAIL"}`)

const allTestsPassed = configValid && scriptsValid && seoValid
console.log(`\nOverall Status: ${allTestsPassed ? "✅ READY FOR DEPLOYMENT" : "❌ DEPLOYMENT BLOCKED"}`)

if (allTestsPassed) {
  console.log("\n🎉 All tests passed! Your site is ready to deploy.")
  console.log("\nNext steps:")
  console.log("1. Push changes to your repository")
  console.log("2. Vercel will automatically deploy with the new configuration")
  console.log("3. Add environment variables in Vercel dashboard if needed:")
  console.log("   - GOOGLE_ANALYTICS_ID=G-J66B4KR8N4")
  console.log("   - GOOGLE_SITE_VERIFICATION=your_verification_code")
  console.log("4. Test the live site after deployment")
} else {
  console.log("\n⚠️  Some tests failed. Please fix the issues above before deploying.")
  process.exit(1)
}
