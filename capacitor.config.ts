import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.murilomartins.estoqueapp',
  appName: 'estoqueApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
