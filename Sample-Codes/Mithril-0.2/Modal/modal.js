var Modal;
(function (Modal) {
    var ModalDialog = (function () {
        function ModalDialog() {
            this.controller = function () {
                return null;
            };
            this.view = function (ctrl, contents, closeCallBack) {
                var modelEl;
                var buttons = [];
                contents.buttons.forEach(function (value) {
                    var style = "button.mmd-btn";
                    if (value === "No")
                        style = "button.mmd-btn-red";
                    else if (value === "Cancel")
                        style = "button.mmd-btn-gray";
                    buttons.push(m(style, {
                        onclick: function () {
                            modelEl.classList.add("mmd-fadeout");
                            setTimeout(function () {
                                closeCallBack(value);
                                m.redraw();
                            }, 500);
                        }
                    }, value));
                });
                return m(".mmd-modal", {
                    config: function (el, inited) {
                        if (inited) {
                            return;
                        }
                        modelEl = el;
                    },
                }, [
                    m(".mmd-modal-dialog", [
                        m(".mmd-modal-header", [
                            m("h2", contents.title),
                        ]),
                        m(".mmd-modal-body", contents.body),
                        m(".mmd-modal-footer", buttons),
                    ]),
                ]);
            };
        }
        return ModalDialog;
    }());
    Modal.ModalDialog = ModalDialog;
})(Modal || (Modal = {}));
//# sourceMappingURL=modal.js.map