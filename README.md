Yii2 Alert Message
==================
Yii2 Alert Message

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist stronglab/yii2-alert "*"
```

or add

```
"stronglab/yii2-alert": "*"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, simply use it in your code by  :

```php
<?= \stronglab\alert\FlashMessage::widget(); ?>```