namespace Modal {

  class AppCtrl implements Mithril.Controller {
    modalContents: IModalContents = {} as IModalContents;
    modalTag: string = "Nothing";
    showModal: boolean = false;
  }

  class MyApp implements Mithril.Component<AppCtrl> {

    controller = () => {
      return new AppCtrl();
    }

    view = (ctrl: AppCtrl): Mithril.VirtualElement => {
      return m("div",
        m("button", {
          onclick: function (e: Event): boolean {
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
        }, "Go Modal!"),

        ctrl.showModal ? m.component(new ModalDialog(), ctrl.modalContents,
          (tag:string) => {
            ctrl.modalTag = tag;
            ctrl.showModal = false;
          }) : null,
          m("h1", `"${ctrl.modalTag}" clicked.`)
      );
    }
  }

  m.mount(document.body, new MyApp());
}