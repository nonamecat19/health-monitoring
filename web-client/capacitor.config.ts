import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.healthmonitoring.app',
  appName: 'health-monitoring',
  webDir: 'dist',
  server: {
    url: "http://192.168.31.226:5173",
    cleartext: true,
    androidScheme: 'https'
  },
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      "providers": ["google.com"]
    }
  }
};

export default config;
