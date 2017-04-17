var Modal;
(function (Modal) {
    var AppCtrl = (function () {
        function AppCtrl() {
            this.modalContents = {};
            this.modalTag = "Nothing";
            this.showModal = false;
        }
        return AppCtrl;
    }());
    var MyApp = (function () {
        function MyApp() {
            this.controller = function () {
                return new AppCtrl();
            };
            this.view = function (ctrl) {
                return m("div", m("button", {
                    onclick: function (e) {
                        ctrl.showModal = true;
                        ctrl.modalContents = {
                            // You can add many buttons. No will have a reddish color
                            // Cancel will have a gray color others will be blue
                            buttons: ["May Be", "Yes", "No", "Cancel"],
                            title: "Its Time to Decide!",
                            body: [
                                m("p", "Are you sure you want to do this?")
                            ]
                        };
                        return false;
                    },
                    class: "mmd-btn mmd-btn-big"
                }, "Go Modal!"), ctrl.showModal ? m.component(new Modal.ModalDialog(), ctrl.modalContents, function (tag) {
                    ctrl.modalTag = tag;
                    ctrl.showModal = false;
                }) : null, m("h1", "\"" + ctrl.modalTag + "\" clicked."));
            };
        }
        return MyApp;
    }());
    m.mount(document.body, new MyApp());
})(Modal || (Modal = {}));
//# sourceMappingURL=app.js.map