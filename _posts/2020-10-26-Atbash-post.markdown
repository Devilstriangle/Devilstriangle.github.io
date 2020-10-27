---
layout: post
title:  "Atbash Cipher"
date:   2020-10-25 18:32:41 +0530
categories: jekyll update
---
This is an encryption cipher that works by utilising the alphabetical positioning of a letter and finds its mirror letter i.e if we take the letter "c" , its position in the alphabetical order is 3, therefore its mirror would be the 3 letter from the reverse order(zyxw...) which is "x".

Lets take the sentence"Cryptography is a broad concept", for encrypting it using an atbash cipher, we take one letter at a time and disregard spaces between words:
{% highlight ruby %}
C R Y P T O G R A P H Y I S A B R O A D C O N C E P T
becomes
X I B K G L T I Z K S B R H Z Y I L Z W X L M X V K G
{% endhighlights ruby %}

