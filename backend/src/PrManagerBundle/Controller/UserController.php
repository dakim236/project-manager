<?php

namespace PrManagerBundle\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use PrManagerBundle\Entity\eb_user;
use PrManagerBundle\Entity\eb_role;

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

        $eb_user = $em->getRepository('PrManagerBundle:eb_user')->find($userInfo->id);
        $eb_user->setNom($userInfo->nom);
        $eb_user->setPrenom($userInfo->prenom);
        $eb_user->setTel($userInfo->tel);
        $eb_user->setmail($userInfo->mail);
        $eb_user->setdomaine($userInfo->domaine);
        $em->flush();
        return $this->returnJsonResponse($eb_user);        
    }

    public function editAction($id){
        $repository = $this->getDoctrine()->getRepository(eb_user::class);
        $editUser = $repository->find($id);
        return $this->returnJsonResponse($editUser);
    }

    public function listeAction(Request $request)
    {
        $repository = $this->getDoctrine()->getRepository(eb_user::class);  
        $listUsers = $repository->findAll();
        return $this->returnJsonResponse($listUsers);
    }

    public function showRoleAction(Request $request)
    {
        $repository = $this->getDoctrine()->getRepository(eb_role::class);  
        $listRoles = $repository->findAll();
        return $this->returnJsonResponse($listRoles);
    }

    public function removeAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $eb_user = $em->getRepository('PrManagerBundle:eb_user')->find($request->request->get('id'));
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
