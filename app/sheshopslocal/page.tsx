import type { Metadata } from "next"
import SheShopsLocalClientPage from "./SheShopsLocalClientPage"

export const metadata: Metadata = {
  title: "SheShopsLocal Partnership - SuccessNOW AI",
  description: "Exclusive offer for SheShopsLocal community - 15% off setup fees for female-owned businesses",
}

export default function SheShopsLocalPage() {
  return <SheShopsLocalClientPage />
}
