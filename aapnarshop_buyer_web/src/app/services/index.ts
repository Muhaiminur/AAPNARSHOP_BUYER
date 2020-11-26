import { APP_INITIALIZER } from '@angular/core';
import { LanguageService } from './shared/language/language.service';

const initializerConfigFn = (languageService: LanguageService) => {
        return () => languageService.loadLanguageConfig(); 
};

export const ServiceProviders = [ 
    { provide: APP_INITIALIZER, useFactory: initializerConfigFn, multi: true, deps: [LanguageService] }
]