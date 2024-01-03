const STORAGE_KEYNAME = "beta-store";

export function getItem() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYNAME) || "[]");
}

export function setItem(value) {
    localStorage.setItem(STORAGE_KEYNAME, JSON.stringify(value));
}
