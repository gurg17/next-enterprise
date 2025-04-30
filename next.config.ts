import BundleAnalyzer from "@next/bundle-analyzer"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
}

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

export default withBundleAnalyzer(nextConfig)
