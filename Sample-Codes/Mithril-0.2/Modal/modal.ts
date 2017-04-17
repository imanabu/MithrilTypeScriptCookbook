
namespace Modal {
  /**
   * Modal Dialog.
   */
  export interface IModalContents {
    buttons: string[];
    title: string;
    body: Mithril.VirtualElement[];
  }

  export class ModalDialog implements Mithril.Component<{}> {
    controller = () => {
      return null;
    }

    view = (ctrl: any, contents: IModalContents,
      closeCallBack: (tag: string) => void) => {
      let modelEl: Element;

      let buttons: Mithril.VirtualElement[] = [];

      contents.buttons.forEach((value:string) => {
        let style = "button.mmd-btn";
        if (value === "No") style = "button.mmd-btn-red";
        else if (value === "Cancel") style = "button.mmd-btn-gray";
        buttons.push(
          m(style, {
                onclick: () => {
                  modelEl.classList.add("mmd-fadeout");
                  setTimeout((): void => {
                    closeCallBack(value);
                    m.redraw();
                  }, 500);
                }
              }, value),
        );
      });

      return m(".mmd-modal", {
        config: function (el: Element, inited: boolean) {
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
            m(".mmd-modal-footer", buttons,
            ),
          ]),
        ]);
    }
  }
}
