'use client'
import { useAppKitAccount } from "@reown/appkit/react";
import useProvider from "./useProvider";
export const useWalletAuth = () => {
    const { address } = useAppKitAccount();
    const { provider } = useProvider()
    const handleSignMsg = async () => {
        if (!address || !provider) {
            console.log('Wallet not connected');
            return { success: false, error: 'Wallet not connected' };
        }

        try {
            const signer = provider.getSigner();
            // Sign the message
            const signature = await signer.signMessage('Welcome to Plutonium');
            console.log("Signature:", signature, address);

            return { success: true, data: signature };
        } catch (error) {
            console.error("Error signing message:", error);
            return { success: false, error };
        }
    };

    return {
        handleSignMsg,
    };
};

// 'use client'
// import { BackendUrl, CookieToken } from "@/utils/env";
// import Cookies from 'js-cookie';
// import { useAppKitAccount} from "@reown/appkit/react";
// import backendApi from "@/utils/backendApi";
// import useProvider from "./useProvider";

// export const useWalletAuth = () => {
//     const { address } = useAppKitAccount();
//     const { provider } = useProvider()
//     const handleSignMsg = async () => {
//         if (!address || !provider) {
//             console.log('Wallet not connected');
//             return { success: false, error: 'Wallet not connected' };
//         }

//         const existingToken = Cookies.get('authToken');
//         if (existingToken) {
//             console.log('Already authenticated');
//             return { success: true, message: 'Already authenticated' };
//         }

//         try {
//             const signer = provider.getSigner();
//             // Get nonce from backend
//             const res = await backendApi.getNonce()
//             const { nonce } = res.data.data;
//             const message = `Welcome to Plutonium ${nonce}`;

//             // Sign the message
//             const signature = await signer.signMessage(message);
//             console.log("Signature:", signature, message, address);

//             // Send signature to backend
//             const output = await fetch(`${BackendUrl}/api/v1/auth/sign-in`, {
//                 method: 'POST',
//                 credentials: "include",
//                 headers: new Headers({
//                     'Content-Type': 'application/json',
//                 }),
//                 body: JSON.stringify({
//                     message,
//                     address,
//                     signature,
//                 })
//             });

//             const result = await output.json();
//             console.log('Sign-in result:', result);

//             // Store auth token in cookie
//             if (result.data) {
//                 Cookies.set('authToken', JSON.stringify(result.data), {
//                     expires: 7,
//                     secure: CookieToken === 'production',
//                     sameSite: 'strict'
//                 });
//             }

//             return { success: true, data: result };
//         } catch (error) {
//             console.error("Error signing message:", error);
//             return { success: false, error };
//         }
//     };

//     const clearAuthToken = () => {
//         Cookies.remove('authToken');
//         console.log('Auth token cleared');
//     };

//     return {
//         handleSignMsg,
//         clearAuthToken,
//     };
// };
