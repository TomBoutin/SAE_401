<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;


class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
{
  // un champ de type email pour la propriété email
  $email = EmailField::new('email');
  // un champ de type choice(select) pour la propriété roles
  $roles = ChoiceField::new('roles');
  // définition des choix possibles pour le champ roles
  $roles->setChoices(['ROLE_USER'=>'ROLE_USER', 'ROLE_ADMIN'=>'ROLE_ADMIN']);
  // autoriser le choix multiple
  $roles->allowMultipleChoices();

    // un champ de type text pour la propriété pseudo
  $pseudo = TextField::new('pseudo');

//   $watchlists = AssociationField::new('watchlist');

  // retourner les champs
  return [
     $email,
     $roles,
     $pseudo
  ];
}


    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
