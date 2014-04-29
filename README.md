UusiGalleria
============

Kuvagalleria Uusikanava-yhteisön ekshibitionisteille


Expressjs, mysql, consolidate, swig

Tarvitaanko muuta?

Database struktuuri :

Users table
-id
-nick
-name (null)
-email
-password

Images table
-id
-name
-desc
-user_id
-url

comments table
-id
-user_id
-image_id
-comment
