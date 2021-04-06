//Opens a pop-up
export function openPopup (url: string, options: { width: number, height: number }) {
    const top = window.outerWidth / 2 + window.screenX - (options.width / 2);
    const left = window.outerHeight / 2 + window.screenY - (options.height / 2);
    window.open(url, "_blank", `fullscreen=0,menubar=0,location=0,directories=0,toolbar=0,titlebar=0,width=${options.width},height=${options.height},top=${left},left=${top}`);
}