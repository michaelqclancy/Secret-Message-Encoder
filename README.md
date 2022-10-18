# Secret Message Encoder
 With the Secret Message Encoder, users can code and decode messages instantly to keep messages between friends private.

 Originally, this was a Unity3D project titled Not-So-Secret Key, written in C#.
 https://michaelqclancy.itch.io/not-so-secret-key

 However, the code for this project uses JavaScript, HTML, and CSS.

## Goals

 I decided to see if I could rewrite most of the code in JavaScript, and I was successful! The idea was for users to share hidden messages between friends that need to be deciphered. With testing, I found users were able to share inside jokes publically with one another, or generate secure passwords from meaningful words. With the visuals, I decided to give the simple UI a vintage, mid-century style and color scheme.
 
## Lessons Learned

 I learned that while principles of code are the same, different languages require different levels of care and mindfulness to ensure the code operates as intended - even if some parts of code may look the same. Some parts may also need to be written entirely due to a lack of support for language features.

## Setup

 The project can be download and run easily by opening the app_secret.html file. It will open in your default browser.

## Instructions

 Type text into the first text box. Selecting "Encode Message" will create encoded text from the text. Inversely, users may input encoded text in the bottom field, and select "Decode Text", which will reveal the hidden message.