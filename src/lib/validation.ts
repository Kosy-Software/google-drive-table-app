const googleDriveRegex = new RegExp("^(https://[a-zA-Z]+.google.com")

export function isValidGoogleDriveUrl (url: string) {
    return url && googleDriveRegex.test(url)
}