'use client'
import { ethers } from "ethers";
import ABI from "@/lib/contract/abi.json";
import { ContractAddress, PublicRpc } from "@/utils/env";
import useProvider from "./useProvider";

export default function useContract() {
    const { provider } = useProvider();
    // 1. PUBLIC PROVIDER FOR READS
    const readProvider = new ethers.providers.JsonRpcProvider(PublicRpc);
    const readContract = new ethers.Contract(ContractAddress, ABI, readProvider);

    const getWriteContract = async () => {
        if (!provider) return null;
        const signer = provider.getSigner();

        return new ethers.Contract(ContractAddress, ABI, signer);
    };
    return { readContract, getWriteContract };
}