var app = {};
app.modal = null;

var modal = {};
modal.view = function(ctrl, opts) {
  var modelEl;
  return m(".mmd-modal", {
    config: function(el, inited) {
      if (inited) {
        return;
      }
      modelEl = el;
    }
  }, [
		m(".mmd-modal-dialog", [
			m(".mmd-modal-header", [
				m("h2", opts.title)
			]),
			m(".mmd-modal-body", opts.body),
			m(".mmd-modal-footer", [
				m("a.mmd-btn[href='#mmd-close']", {
                  onclick: function (e) {                    
                    modelEl.classList.add('mmd-fadeout');
                    setTimeout(function() {
                      app.modal = null;
                      m.redraw();
                    }, 500);
                 }
                }, "Close")
			])
		])
	]);
};

app.view = function(ctrl, opts) {
  return [
    m('a', {
     href: '#modal-one',
     onclick: function (e) {
      app.modal = {
        title: 'Hey',
        body: [
		  m("p", "This is the modal body")
		]
      };
      return false;
    },
    class: 'mmd-btn mmd-btn-big'
  }, 'Modal'),
    app.modal ? m.component(modal, app.modal) : null
    ];
};

m.mount(document.body, app);
