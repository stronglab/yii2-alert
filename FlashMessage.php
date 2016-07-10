<?php

namespace stronglab\alert;

use yii\helpers\Html;

class FlashMessage extends \yii\base\Widget
{
    public $fade = true;

    public function init()
    {
        $call = [];
        $view = $this->getView();
        AlertAsset::register($view);
        foreach (\Yii::$app->session->getAllFlashes() as $key => $message) {
            $call[] = 'showMessage("' . Html::encode($message) . '", "flash-alert-' . $key . '", ' . (int)$this->fade . ');';
        }
        $view->registerJs(implode("\n", $call));
    }
}
