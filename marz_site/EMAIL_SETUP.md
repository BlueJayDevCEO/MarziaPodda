# Enquiry email flow

The contact form opens the visitor's default email app using a mailto link addressed to poddapsychotherapy@gmail.com, with a fixed subject and the visitor's name, email, session preference and message in the body. All query values are URL encoded.

The visitor reviews the draft and presses Send in their email app. The website cannot select a signed-in account, detect whether an email app opened, or confirm delivery. Devices need a configured mailto handler; signing into webmail alone may not configure one. The page retains the form details and displays Marzia's email address as a fallback.

No SMTP server, API, Gmail App Password, environment variables or deployment secrets are required. Any previously prepared local email environment file is unused and can be removed by the owner. No production settings have been changed.

Verify with npm test, npm run typecheck and npm run build. To manually check the device integration, complete the form, select Open Email App, and confirm the recipient and draft details in the configured mail app. Opening a draft does not send it.

Visitors without a configured default email app can select **Open in Gmail** or **Open in Outlook** to open a browser compose window. Both choices include the same recipient, subject and enquiry body and require the visitor to review and send the draft. If the provider asks for sign-in, sign in and retry from the retained form if necessary. No message is sent automatically.
