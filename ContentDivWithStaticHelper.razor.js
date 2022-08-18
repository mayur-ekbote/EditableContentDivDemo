class ContentDivWithStaticHelper {

    static dotNetHelper;
    static dotNetHelperContainer = new Map();

    static setDotNetHelper(value, id) {
        ContentDivWithStaticHelper.dotNetHelper = value;
    }

    static async processKeyDown(keyEvent) {
        keyEvent = keyEvent || window.event;
        var caller = keyEvent.target || keyEvent.srcElement;
        if (ContentDivWithStaticHelper.IsEnterType(keyEvent.key)) {
            keyEvent.preventDefault();
            await ContentDivWithStaticHelper.dotNetHelper.invokeMethodAsync('SaveContentRequested', caller.innerText);
            caller.blur();
        } else if (ContentDivWithStaticHelper.IsEscapeType(keyEvent.key)) {
            await ContentDivWithStaticHelper.dotNetHelper.invokeMethodAsync('DiscardContentRequested');
            caller.blur();
        }
    }

    static async processBlur(event) {
        await ContentDivWithStaticHelper.dotNetHelper.invokeMethodAsync('DiscardContentRequested');
    }

    static setPreviousContent(elem, content) {
        elem.innerText = content;
    }

    static IsListNavigationType(key) {
        return key === "ArrowDown" || key === "ArrowUp";
    }
    static IsEnterType(key) {
        return key === "Enter";
    }
    static IsEscapeType(key) {
        return key === "Escape";
    }


}
window.ContentDivWithStaticHelper = ContentDivWithStaticHelper;