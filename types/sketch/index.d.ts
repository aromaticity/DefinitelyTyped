// Type definitions for aromaticity sketch 1.0.0
// Project: https://github.com/aromaticity/sketch
// Definitions by: aromaticity developers <https://github.com/aromaticity>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'sketch' {

    /**
     * Namespace for dealing with the current window of the editor. That is visible
     * and active editors, as well as, UI elements to show messages, selections, and
     * asking for user input.
     */
    export namespace window {

        /**
         * A position of the application
         */
        export enum position {
            HEADER_LEFT = 'header_left',
            HEADER_RIGHT = 'header_right',
        }

        /**
         * Properties to be specified in order to create a button
         */
        interface IButton {
            minimal?: boolean;
            large?: boolean;
            icon?: string;
            text?: string;
            onClick?: () => void;
            position: position;
        }

        /**
         * Add a button in the position specified by `options.position`.
         *
         * @param options Button properties.
         */
        export function addButton(options: IButton): void;

        /**
         * Show an error message to the user.
         *
         * @param message The message to show.
         */
        export function showErrorMessage(message: string): void;

        /**
         * Show an information to the user.
         *
         * @param message The message to show.
         */
        export function showInformationMessage(message: string): void;

        /**
         * Show a success message to the user.
         *
         * @param message The message to show.
         */
        export function showSuccessMessage(message: string): void;

        /**
         * Show a warning message to the user.
         *
         * @param message The message to show.
         */
        export function showWarningMessage(message: string): void;
    }
}
