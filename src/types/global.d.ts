// interface Window {
//   CMP_GDPR?: {
//     acceptAll: () => void;
//     acceptEssential: () => void;
//     showPreferences: () => void;
//   };
// }

// // src/globals.d.ts
// declare namespace aclib {
//   function runAutoTag(config: { zoneId: string[] }): void;
// }

// // If the script adds properties to window
// interface Window {
//   aclib?: typeof aclib;
// }

// src/globals.d.ts

declare namespace aclib {
  function runAutoTag(config: { zoneId: string[] }): void;
}

interface Window {
  CMP_GDPR?: {
    acceptAll: () => void;
    acceptEssential: () => void;
    showPreferences: () => void;
  };

  aclib?: typeof aclib;

  __tcfapi?: (
    command: string,
    version: number,
    callback: (returnValue: any, success: boolean) => void,
    parameter?: any
  ) => void;
}
