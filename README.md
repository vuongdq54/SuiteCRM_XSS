## Reflect XSS vulnerability that exists on SuiteCRM

## Vendor:
    SuiteCRM 

## Affected version:
The issue exists to version 7.11.13 and 7.10.25 (LTS) 

## Description:   
The vulnerability exists due to insufficient sanitization of user-supplied data passed to "index.php?entryPoint=retrieve_dash_page&page_id=1" URL. A remote attacker can permanently inject and execute arbitrary HTML and script code in user's browser in context of vulnerable website.
Successful exploitation of this vulnerability may allow a remote attacker to create admin account, steal potentially sensitive information, change appearance of the web page, perform phishing and drive-by-download attacks

The vulnerability exists with page_id param, response page_id is in javascript tag.

<p align="center">
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image1.jpg" />
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image2.jpg" />
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image3.jpg" />
</p>
Response implemented escapeHTML with page_id
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image4.jpg" />
However, page_id is in javascript tag so we can insert javascript to execute immediately
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image5.jpg" />

## Proof of Concept:

<p align="center">
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image6.jpg" />
</p>

## Steal potentially sensitive information

<p align="center">
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image7.jpg" />
</p>

## Redirect to site other

<p align="center">
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image8.jpg" />
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image9.jpg" />
</p>

## Create admin account

<p align="center">
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image10.jpg" />
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image11.jpg" />
</p>

## Payload
<p align="center">
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image12.jpg" />
<img src="https://github.com/vuongdq54/SuiteCRM_XSS/blob/master/image13.jpg" />
</p>
