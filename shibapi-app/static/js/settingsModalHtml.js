export const settingsModalHtml = `
<div class="jss24">
    <div class="MuiBox-root jss124 jss21"><h6 class="MuiTypography-root jss20 MuiTypography-h6">Transaction Settings</h6></div>
    <div class="MuiBox-root jss125 jss21">
        <p class="MuiTypography-root jss22 MuiTypography-body1">Slippage Tolerance
        </p>
        <div class="MuiBox-root jss126 jss25">
            <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary" tabindex="0" type="button" my-value="0.1"><span class="MuiIconButton-label">0.1%</span><span class="MuiTouchRipple-root"></span></button>
            <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary" tabindex="0" type="button" my-value="0.5"><span class="MuiIconButton-label">0.5%</span><span class="MuiTouchRipple-root"></span></button>
            <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary" tabindex="0" type="button" my-value="1"><span class="MuiIconButton-label">1%</span><span class="MuiTouchRipple-root"></span></button>
            <div class="MuiFormControl-root MuiTextField-root jss127" style="width: 80px;">
                <div class="MuiInputBase-root MuiInput-root jss132 MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd"><input aria-invalid="false" placeholder="0.5" type="text"
                                                                                                                                                        class="MuiInputBase-input MuiInput-input jss130 jss1331 MuiInputBase-inputAdornedEnd" value="0.5">
                    <div class="MuiInputAdornment-root MuiInputAdornment-positionEnd"><h4 class="MuiTypography-root jss1281 MuiTypography-h4 MuiTypography-colorTextPrimary">%</h4></div>
                </div>
            </div>
        </div>
    </div>
    <div class="MuiBox-root jss134 jss21" style="display: none;">
        <p class="MuiTypography-root jss22 MuiTypography-body1">Transaction deadline
            <svg class="MuiSvgIcon-root jss72 MuiSvgIcon-colorSecondary" focusable="false" viewBox="0 0 24 24" aria-hidden="true" title="Your transaction will revert if it is pending for more than this long."
                 style="opacity: 0.5; vertical-align: middle; cursor: help; font-size: 1.4rem; margin-left: 0.2rem;">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
            </svg>
        </p>
        <div class="MuiBox-root jss135">
            <div class="MuiFormControl-root MuiTextField-root jss127" style="width: 80px;">
                <div class="MuiInputBase-root MuiInput-root jss129 jss136 MuiInputBase-formControl MuiInput-formControl"><input aria-invalid="false" placeholder="20" type="text" class="MuiInputBase-input MuiInput-input jss130 jss137" value="10080"></div>
            </div>
            <span class="jss23">minutes</span></div>
        <div class="MuiBox-root jss138 jss27"></div>
    </div>
</div>
`