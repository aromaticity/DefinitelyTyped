import * as sketch from 'sketch';

sketch.window.addButton({
    minimal: true,
    large: false,
    position: sketch.window.position.HEADER_LEFT,
    onClick() {
        return;
    },
});

sketch.window.showErrorMessage('Hello World!');
sketch.window.showInformationMessage('Hello World!');
sketch.window.showSuccessMessage('Hello World!');
sketch.window.showWarningMessage('Hello World!');
