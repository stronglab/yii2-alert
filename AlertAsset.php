<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace stronglab\alert;

use yii\web\AssetBundle;

class AlertAsset extends AssetBundle
{
    public $sourcePath = '@stronglab/alert/web';
    public $css = [
        'alert.css',
    ];
    public $js = [
        'alert.js',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
    ];
}
