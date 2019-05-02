<?php

namespace PrManagerBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * eb_projet
 *
 * @ORM\Table(name="eb_projet")
 * @ORM\Entity(repositoryClass="PrManagerBundle\Repository\eb_projetRepository")
 */
class eb_projet
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
     * @ORM\Column(name="title", type="string", length=255)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255)
     */
    private $description;

    /**
     * @var int
     *
     * @ORM\Column(name="x_eb_role", type="integer")
     */
    private $xEbRole;


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
     * Set title
     *
     * @param string $title
     *
     * @return eb_projet
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return eb_projet
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set xEbRole
     *
     * @param integer $xEbRole
     *
     * @return eb_projet
     */
    public function setXEbRole($xEbRole)
    {
        $this->xEbRole = $xEbRole;

        return $this;
    }

    /**
     * Get xEbRole
     *
     * @return int
     */
    public function getXEbRole()
    {
        return $this->xEbRole;
    }
}

