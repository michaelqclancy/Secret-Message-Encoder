document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("encode").addEventListener("click", encode);
    document.getElementById("decode").addEventListener("click", decode);
});

function encode ()
{
    const message = document.getElementById("normal").value;

    var text = "";

    for(var i = 0; i < message.length; i++)
    {
        newChar = message.charCodeAt(i);
        
        if (message[i] >= 'a' && message[i] <= 'z')
        {
            newChar += 10;
            if (String.fromCharCode(newChar) > 'z')
            {
                newChar -= 26;
            }
        }
        else if (message[i] >= 'A' && message[i] <= 'Z')
        {
            newChar += 10;
            if (String.fromCharCode(newChar) > 'Z')
            {
                newChar -= 26;
            }
        }
        else if (message[i] >= '0' && message[i] <= '9')
        {
            newChar += 5;
            if (String.fromCharCode(newChar) > '9')
            {
                newChar -= 10;
            }
        }
        
        text += String.fromCharCode(newChar);
    }

    document.getElementById("secret").value = text;
}

function decode ()
{
    const message = document.getElementById("secret").value;

    var text = "";

    for(var i = 0; i < message.length; i++)
    {
        newChar = message.charCodeAt(i);
        
        if (message[i] >= 'a' && message[i] <= 'z')
        {
            newChar -= 10;
            if (String.fromCharCode(newChar) < 'a')
            {
                newChar += 26;
            }
        }
        else if (message[i] >= 'A' && message[i] <= 'Z')
        {
            newChar -= 10;
            if (String.fromCharCode(newChar) < 'A')
            {
                newChar += 26;
            }
        }
        else if (message[i] >= '0' && message[i] <= '9')
        {
            newChar -= 5;
            if (String.fromCharCode(newChar) < '0')
            {
                newChar += 10;
            }
        }
        
        text += String.fromCharCode(newChar);
    }

    document.getElementById("normal").value = text;
}