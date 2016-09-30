# Installing LAYG

Authored by *Rufus Mbugua* [<mbuguarufus@gmail.com>]

If you’d like to set LAYG up on your computer you’ll need to do the following:

## 1. Fork the project
The main iteration of the system can be found [here](https://github.com/RufusMbugua/laravel-angular)

## 2. Clone the project
Copy the source code to your *WORKING DIRECTORY*

## 3. MySQL
Ensure that MySQL is installed in your machine.

Go over your specific OS installation instructions [here](https://dev.mysql.com/doc/refman/5.5/en/installing.html)

If you’re using AIO distributions like [XAMPP](https://www.apachefriends.org/index.html) then you’re already sorted on this front.

## 4. Dependencies
Update your composer dependencies by running the following command:

```
composer install && update
```

Update your bower dependencies by running the following command:

```
bower install && update
```


## 5. Configuration

An important step is connecting your instance of the application to MySQl.
This will involve editing the `database.php` file found here (starred):

```
.
├── .DS_Store
├──*.env
├── .env.example
…
```

and changing these values:

```
DB_DATABASE= _
DB_USERNAME= _
DB_PASSWORD= _
```

***

With this, you should be setup just fine. Incase of anything, open an issue and we’ll address it. 🙂
