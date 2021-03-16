import * as fs from 'fs';
import * as path from 'path';

const fn = `${__dirname}/config.json`;

export interface IConfig {
    brandname: string;
    brandicon: string;
    mainmenu: {
        name: string;
        routes: {
            name: string;
            route: string;
        }[];
    }[];
    buttons: { [k: string]: string };
    modals: {
        [P in 'register' | 'login' | 'verifyEmail' | 'forgotPassword']: {
            form: {
                onsubmit: string;
                fieldset: {
                    [key: string]: {
                        type: string;
                        tag: string;
                        placeholder?: string;
                    };
                };
                buttons: string[];
            };
        };
    };
}

const configData = fs.readFileSync(fn);
export const configObject: IConfig = JSON.parse(configData.toString());

console.log(JSON.stringify(configObject, null, '\t'));