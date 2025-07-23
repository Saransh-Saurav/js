 /*
 meaning of /[^\w\s']/g

 ChatGPT said:
 The regular expression /[^\w\s']/g can be broken down like this:

     /         Start of regex
 [^\w\s']  Match any character that is NOT:
    \w     → a word character (a-z, A-Z, 0-9, _)
    \s     → a whitespace (space, tab, newline)
    '      → an apostrophe (literal single quote)
 ]         End of character class
 g         Global flag (match **all** such characters in the string)

 🧠 In simple terms:
 This regex matches all characters that are NOT:

 Letters (a-z, A-Z)

 Numbers (0-9)

 Underscore _

 Spaces, tabs, or newlines

 Apostrophes '
*/




//////////////////////////////////////////////////////////////////////////////////////////////////////////**********************************************************************************************************

//WHEN WE DO CTRL+SPACE  WE CAN SEE MANY OPTION FOR SUGGESTION FOR A FUNCTION