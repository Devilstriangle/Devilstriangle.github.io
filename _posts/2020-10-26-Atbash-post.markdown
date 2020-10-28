---
layout: post
title:  "Atbash Cipher"
date:   2020-10-26 18:32:41 +0530
categories: jekyll update
---
This is an encryption cipher that works by utilising the alphabetical positioning of a letter and finds its mirror letter i.e if we take the letter "c" , its position in the alphabetical order is 3, therefore its mirror would be the 3 letter from the reverse order(zyxw...) which is "x".
Lets take the sentence"Cryptography is a broad concept", for encrypting it using an atbash cipher, we take one letter at a time and disregard spaces between words:
{% highlight ruby %}
C R Y P T O G R A P H Y I S A B R O A D C O N C E P T
becomes
X I B K G L T I Z K S B R H Z Y I L Z W X L M X V K G
{% endhighlight ruby %}



<div>
<label for="Input">Enter your text:</label>
  <input type="text" id="Input" name="Input"/></div>







The encryption code of Atbash for python is given below:

{% highlight ruby %}
def encrypt(self,text):
        encrypted = ""
        for c in text:
            l = c.lower()
            i = ord(l) - 97
            e = (25 - i) % 26
            encrypted = encrypted + chr(e + 97)
        return encrypted
{% endhighlight ruby %}

The decryption code of Atbash for Python is given below:

{% highlight ruby %}
def decrypt(self,text):
        decrypted = ""
        for c in text:
            l = c.lower()
            i = ord(l)- 97
            d = (25 - i) % 26
            decrypted = decrypted + chr(d + 97)
        return decrypted
{% endhighlight ruby %}


