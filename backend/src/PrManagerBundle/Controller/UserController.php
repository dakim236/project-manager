<?php

namespace PrManagerBundle\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use PrManagerBundle\Entity\eb_user;

class UserController extends Controller
{
    
    public function indexAction()
    {
        $response = new Response();
        $page =  $this->render('pages/index.html.twig');
        $response->setContent($page);
        $response->headers->set('Content-Type', 'text/html');
        return $response;   
    }

    public function createAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $userInfo = json_decode( $request->request->get("user") );
        $eb_user = new eb_user();

        $eb_user->setNom($userInfo->nom);
        $eb_user->setPrenom($userInfo->prenom);
        $eb_user->setTel($userInfo->tel);
        $eb_user->setmail($userInfo->mail);
        $eb_user->setdomaine($userInfo->domaine);
        //role
        $role = $em->getRepository('PrManagerBundle:eb_role')->find($userInfo->x_eb_role);
        $eb_user->setXEbRole( $role );
        $em->persist($eb_user);
        $em->flush();        
        return $this->returnJsonResponse($eb_user);
    }

    public function updateAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $userInfo = json_decode( $request->request->get("user") );
        $updateUser = $em->getRepository('PrManagerBundle:eb_user')->find($id);
        $eb_user->setNom($userInfo->nom);
        $eb_user->setPrenom($userInfo->prenom);
        $eb_user->setTel($userInfo->tel);
        $eb_user->setmail($userInfo->mail);
        $eb_user->setdomaine($userInfo->domaine);
        $em->flush();
        return $this->returnJsonResponse($updateUser);        
    }

    public function listeAction(Request $request)
    {
        $repository = $this->getDoctrine()->getRepository(eb_user::class);
        $em = $this->getDoctrine()->getManager(); 
        $listUsers = $repository->findAll();
        return $this->returnJsonResponse($listUsers);
    }

    public function listeRoleAction()
    {
        
    }

    public function removeAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $eb_user = $em->getRepository('PrManagerBundle:eb_user')->find( $request->request->get('id') );
        $em->remove($eb_user);
        $em->flush(); 
        $em->clear();   
        return $this->returnJsonResponse($eb_user);
    }

    public function returnJsonResponse($object){
        $response = new Response(); 
        $objectExist = ($object)?true:false;
        $objectInfos = array('exist' => $objectExist, 'data' =>$object);
        $serializer = $this->get('jms_serializer');
        $objectJSON = $serializer->serialize($objectInfos,'json');
        $response->setContent($objectJSON);
        return $response;
    }
}
