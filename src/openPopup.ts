//Opens a pop-up
export function openPopup (url: string, options: { onclose?: Function, width: number, height: number }) {
    const top = window.outerWidth / 2 + window.screenX - (options.width / 2);
    const left = window.outerHeight / 2 + window.screenY - (options.height / 2);
    let picker = window.open(url, "_blank", `fullscreen=0,menubar=0,location=0,directories=0,toolbar=0,titlebar=0,width=${options.width},height=${options.height},top=${left},left=${top}`);
    //If onclose is defined, start an interval to see if the window has been closed or not
    //Once closed -> call the onClose functionality
    if (options.onclose) {
        var timer = setInterval(() => {
            if (picker.closed) {
                clearInterval(timer);
                options.onclose();
            }
        }, 1000);   
    } 
}