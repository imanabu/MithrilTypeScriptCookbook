* Modal.ts

This is the TypeScript 2.x with Mithril 0.2.x based implementation of a
modal dialog component. 

It is based on [Arthur Clemens example|http://jsbin.com/besicu/1/edit?html,js,output]. 
Converted to TypeScript 2.x with Mithril 0.2.  Mithril 1.x is also coming soon.

** Pre-Requisite

You will need ypeScript 2.x or later compiler. 
You would also want Less with "npm install -g less" to install the less compiler.

** Installation

    npm install
    npm run build

I have included the "last good" version of modal.js and modal.css so that you can get started.

You should now abe able to run the example by double-clicking on index.html. No web server should
be required.

Mithril should load from the CDN.

** Usage

Please follow and model yours after the simple test app. The key points you should implement are;

# modalContents must be set with buttons, title and body part configured.
# In your "main" view, install the m.component() including the new modal dialog, the contents and also the callback functions when one of the button was clicked. The callback is called with the button label string clicked.
# If the modal dialog need not be shown, use the null in place






