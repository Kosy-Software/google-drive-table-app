const googleDriveRegex = new RegExp("https://drive.google.com|https://docs.google.com")

export function isValidGoogleDriveUrl (url: string) {
    return url && googleDriveRegex.test(url)
}