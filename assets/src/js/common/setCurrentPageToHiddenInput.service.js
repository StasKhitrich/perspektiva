export const setCurrentPageToHiddenInputService = (inputEl) => {
    if (typeof inputEl === "undefined" || !(inputEl instanceof HTMLInputElement))
        throw new Error('setCurrentPageToHiddenInput: wrong argument inputEl');

    inputEl.value = window.location.href;
};