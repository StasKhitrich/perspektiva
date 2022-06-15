export const ajaxRequestService = (
    data,
    successCallback = response => console.log(response),
    failedCallback = error => console.error('ajaxRequest', error)
) => {
    if (!GlobalData || !GlobalData.ajax_url) throw new Error('ajaxRequest: ajax_url not found');
    (($) => {
        $.ajax({
            data,
            url: GlobalData.ajax_url,
            type: 'POST',
            success: successCallback,
            failed: failedCallback
        })
    })(jQuery);
};