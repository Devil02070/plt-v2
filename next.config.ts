import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [
    'pino',
    'thread-stream',
    '@walletconnect/logger',
  ],
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    PUBLIC_RPC: process.env.PUBLIC_RPC,
    BACKEND_URL: process.env.BACKEND_URL,
    SOCKET_SERVER: process.env.SOCKET_SERVER,
  }
};

export default nextConfig;
