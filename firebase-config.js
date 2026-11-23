/* ==========================================================================
   Firebase Realtime Database Configuration (100% Free Spark Plan)
   --------------------------------------------------------------------------
   HOW TO ENABLE CLOUD REAL-TIME SYNC ACROSS DEVICES:
   1. Go to https://console.firebase.google.com and click "Add project".
   2. In the left menu, click Build -> Realtime Database -> Create Database.
   3. Choose "Start in test mode" so read/write works during your demo.
   4. Copy your Database URL (looks like:
      "https://tcet-erp-group6-default-rtdb.asia-southeast1.firebasedatabase.app")
      and paste it into databaseURL below!

   NOTE: If databaseURL is left empty (""), the portal automatically uses
   Local Real-Time Sync (localStorage + BroadcastChannel), so opening Teacher
   in one browser tab and Student in another tab STILL updates live!
   ========================================================================== */

window.TCET_FIREBASE_CONFIG = {
  databaseURL: "https://console.firebase.google.com/project/tcet-erp-portal/database/tcet-erp-portal-default-rtdb/data/~2F"
};
