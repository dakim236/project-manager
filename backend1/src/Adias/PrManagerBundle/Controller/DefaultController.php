<?php

namespace Adias\PrManagerBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AdiasPrManagerBundle:Default:index.html.twig');
    }
}
