<?php

namespace App\Entity;

use App\Repository\MovieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MovieRepository::class)]
#[Groups(['json_movie'])]
class Movie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['json_category', 'json_watchlist'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['json_category', 'json_watchlist'])]
    private ?string $name = null;

    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'movies')]
    private Collection $category;

    #[ORM\Column(length: 255)]
    #[Groups(['json_category', 'json_watchlist'])]
    private ?string $realisateur = null;

    #[ORM\Column]
    #[Groups(['json_category', 'json_watchlist'])]
    private ?int $annee_sortie = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['json_category', 'json_watchlist'])]
    private ?string $affiche_verticale = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['json_category', 'json_watchlist'])]
    private ?string $affiche_horizontale = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['json_category', 'json_watchlist'])]
    private ?string $trailer = null;

    #[ORM\Column(length: 20)]
    #[Groups(['json_category', 'json_watchlist'])]
    private ?string $duree = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['json_category', 'json_watchlist'])]
    private ?string $synopsis = null;

    #[ORM\Column]
    #[Groups(['json_category', 'json_watchlist'])]
    private ?bool $mis_en_avant = null;

    #[ORM\ManyToMany(targetEntity: Watchlist::class, mappedBy: 'movies')]
    private Collection $watchlist;

    public function __construct()
    {
        $this->category = new ArrayCollection();
        // $this->watchlists = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->category->contains($category)) {
            $this->category->add($category);
        }

        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->category->removeElement($category);

        return $this;
    }

    public function getRealisateur(): ?string
    {
        return $this->realisateur;
    }

    public function setRealisateur(string $realisateur): static
    {
        $this->realisateur = $realisateur;

        return $this;
    }

    public function getAnneeSortie(): ?int
    {
        return $this->annee_sortie;
    }

    public function setAnneeSortie(int $annee_sortie): static
    {
        $this->annee_sortie = $annee_sortie;

        return $this;
    }

    public function getAfficheVerticale(): ?string
    {
        return $this->affiche_verticale;
    }

    public function setAfficheVerticale(string $affiche_verticale): static
    {
        $this->affiche_verticale = $affiche_verticale;

        return $this;
    }

    public function getAfficheHorizontale(): ?string
    {
        return $this->affiche_horizontale;
    }

    public function setAfficheHorizontale(string $affiche_horizontale): static
    {
        $this->affiche_horizontale = $affiche_horizontale;

        return $this;
    }

    public function getTrailer(): ?string
    {
        return $this->trailer;
    }

    public function setTrailer(string $trailer): static
    {
        $this->trailer = $trailer;

        return $this;
    }

    public function getDuree(): ?string
    {
        return $this->duree;
    }

    public function setDuree(string $duree): static
    {
        $this->duree = $duree;

        return $this;
    }

    public function getSynopsis(): ?string
    {
        return $this->synopsis;
    }

    public function setSynopsis(string $synopsis): static
    {
        $this->synopsis = $synopsis;

        return $this;
    }

    public function isMisEnAvant(): ?bool
    {
        return $this->mis_en_avant;
    }

    public function setMisEnAvant(bool $mis_en_avant): static
    {
        $this->mis_en_avant = $mis_en_avant;

        return $this;
    }


    public function __toString(): string
    {
        return $this->name;
    }

    /**
 * @return Collection<int, Watchlist>
 */
public function getWatchlist(): Collection
{
    return $this->watchlist;
}
    

}
