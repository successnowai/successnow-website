import { redirect } from "next/navigation"
import AdminDashboard from "./AdminDashboard"

// Simple auth check - replace with proper authentication
function checkAdminAuth() {
  // In production, implement proper authentication
  // For now, check for admin environment variable or session
  const isAdmin = process.env.ADMIN_ACCESS === "true"
  return isAdmin
}

export default function AdminPage() {
  // Redirect if not admin
  if (!checkAdminAuth()) {
    redirect("/")
  }

  return <AdminDashboard />
}
