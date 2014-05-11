# UusiGalleria #

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

## Asennus ##
1.	Asenna nodejs ja MySQL
2.	git clone https://github.com/leonarven/UusiGalleria.git && cd UusiGalleria/
3.	Luo uusi tietokanta ja sille käyttäjä, importtaa kantaan db.sql tiedosto
4.	cp config-sample.js config.js
5.	Muokkaa tietokannan tiedot config.js tiedostoon
6.	nodejs index.js
7.	???
8.	Profit.
