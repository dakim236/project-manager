<?php

namespace adias\PrManagerBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('adiasPrManagerBundle:Default:index.html.twig');
    }
}
