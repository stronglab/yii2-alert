<?php

namespace stronglab\alert;

class FlashMessage extends \yii\base\Widget
{
    public function init()
    {
        $view = $this->getView();
        AlertAsset::register($view);
        if (Yii::$app->session->getAllFlashes()) {
            $this->registerJs('showMessage("' . implode('<br/>', Yii::$app->session->getAllFlashes()) . '")');
        }
    }
}
