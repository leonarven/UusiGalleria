UusiGalleria
============

Kuvagalleria Uusikanava-yhteisön ekshibitionisteille


Expressjs, mysql, consolidate, swig

Tarvitaanko muuta?

password-hash = md5(salt1+pw+salt2)? HELL YEAH!

Database struktuuri :

Users table
-id
-nick
-name (null)
-email
-password(hash)

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
