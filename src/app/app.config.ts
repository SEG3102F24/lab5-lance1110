import { getAuth, provideAuth } from "@angular/fire/auth";

export const appConfig: ApplicationConfig = {
  providers: [
    // other providers
    provideAuth(() => getAuth())
  ]
};

