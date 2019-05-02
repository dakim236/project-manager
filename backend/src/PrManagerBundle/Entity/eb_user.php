<?php

namespace PrManagerBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * eb_user
 *
 * @ORM\Table(name="eb_user")
 * @ORM\Entity(repositoryClass="PrManagerBundle\Repository\eb_userRepository")
 */
class eb_user
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="prenom", type="string", length=255)
     */
    private $prenom;

    /**
     * @var int
     *
     * @ORM\Column(name="tel", type="string", nullable = true)
     */
    private $tel;

    /**
     * @var string
     *
     * @ORM\Column(name="mail", type="string", length=255, nullable = true)
     */
    private $mail;

    /**
     * @var string
     *
     * @ORM\Column(name="domaine", type="string", length=255, nullable = true)
     */
    private $domaine;

    /**
     * @ORM\ManyToOne(targetEntity="PrManagerBundle\Entity\eb_role", inversedBy="eb_user")
     */
    private $x_eb_role;

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nom
     *
     * @param string $nom
     *
     * @return eb_user
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set prenom
     *
     * @param string $prenom
     *
     * @return eb_user
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;

        return $this;
    }

    /**
     * Get prenom
     *
     * @return string
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * Set tel
     *
     * @param integer $tel
     *
     * @return eb_user
     */
    public function setTel($tel)
    {
        $this->tel = $tel;

        return $this;
    }

    /**
     * Get tel
     *
     * @return int
     */
    public function getTel()
    {
        return $this->tel;
    }

    /**
     * Set mail
     *
     * @param string $mail
     *
     * @return eb_user
     */
    public function setMail($mail)
    {
        $this->mail = $mail;

        return $this;
    }

    /**
     * Get mail
     *
     * @return string
     */
    public function getMail()
    {
        return $this->mail;
    }

    /**
     * Set domaine
     *
     * @param string $domaine
     *
     * @return eb_user
     */
    public function setDomaine($domaine)
    {
        $this->domaine = $domaine;

        return $this;
    }

    /**
     * Get domaine
     *
     * @return string
     */
    public function getDomaine()
    {
        return $this->domaine;
    }

    

    /**
     * Set xEbRole
     *
     * @param \PrManagerBundle\Entity\eb_role $xEbRole
     *
     * @return eb_user
     */
    public function setXEbRole(\PrManagerBundle\Entity\eb_role $xEbRole = null)
    {
        $this->x_eb_role = $xEbRole;

        return $this;
    }

    /**
     * Get xEbRole
     *
     * @return \PrManagerBundle\Entity\eb_role
     */
    public function getXEbRole()
    {
        return $this->x_eb_role;
    }
}
