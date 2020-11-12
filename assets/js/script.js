$(function() {
    // Base de données articles
    var piece1 = {
        'categorie': 'piece',
        'nom': 'Triens or du VIIème siècle',
        'prix': '1680',
        'description': 'Mérovingens BAVDOMERE OR 1.26grs,Avers: + CABILO - NO FIT., Revers: + BAVDOMERES MONETARIVS. ,TTB+ ',
        'img': 'P01'
    };
    var piece2 = {
        'categorie': 'piece',
        'nom': 'Double Henri d\'or 1er type',
        'prix': '5000',
        'description': 'Monnaie, France, François II (1559-1560), Double Henri d\'or, 1560, Poitiers, TTB, Or Buste à cuirasse damasquinée de Henri II à droite Croix formée de 4 H couronnés, au centre la lettre d\'atelier, croissants en 1 et 3 et fleurs de lis en 2 et 4. HENRICVS.II.D.G.FRANC.REX Pièce de monnaie fabriquée au nom de Henri II',
        'img': 'P02'
    };
    var piece3 = {
        'categorie': 'piece',
        'nom': '30 Sols au génie 1791',
        'prix': '112',
        'description': 'argent 10grs',
        'img': 'P03'
    };
    var piece4 = {
        'categorie': 'piece',
        'nom': '1 francs 1908',
        'prix': '6',
        'description': 'Date de 1908',
        'img': 'P04'
    };
    var timbre1 = {
        'categorie': 'timbre',
        'nom': 'TIMBRE NAPOLEON N°18',
        'prix': '560',
        'description': 'TIMBRE NAPOLEON N°18  - 1 Fr. neuf* réimpression 1862  signé Calvès   défaut avec clair.  voir photos  Côte 2200€',
        'img': 'T01'
    };
    var timbre2 = {
        'categorie': 'timbre',
        'nom': '10F orange Arc de Triomphe',
        'prix': '8',
        'description': 'Neuf sans trace de charnière. Très beau.',
        'img': 'T02'
    };
    var timbre3 = {
        'categorie': 'timbre',
        'nom': 'Timbre poste 0,30',
        'prix': '0.31',
        'description': 'TIMBRE POSTE N° 1509 OBLITERE',
        'img': 'T03'
    };
    var timbre4 = {
        'categorie': 'timbre',
        'nom': 'FRANCE Sage 35c',
        'prix': '200',
        'description': 'FRANCE Sage n°93* 35c centrage courant frais signé Calves',
        'img': 'T04'
    };
    var oeuvre1 = {
        'categorie': 'oeuvre',
        'nom': 'Tableau thème marine signé Mabille',
        'prix': '100',
        'description': 'Bon état général. Dimensions 61 x 38 cm',
        'img': 'O01'
    };
    var oeuvre2 = {
        'categorie': 'oeuvre',
        'nom': 'Les 3 roses',
        'prix': '25',
        'description': 'Huile sur Toile de Bernard Le Béguec Format F3 27cm sur 22cm',
        'img': 'O02'
    };
    var oeuvre3 = {
        'categorie': 'oeuvre',
        'nom': 'Margueritte Deval – La devinette des Maturins',
        'prix': '10',
        'description': ' Lithographie originale, signée  par l\'artiste, en haut à droite Tirée de la revue  "  LE  RIRE "   n° 274   du 3 fev.1900 , Feuille  seule  -  Publicités au dos .   Dimensions : 23 x 31 cm  Excellent état',
        'img': 'O03'
    };
    var oeuvre4 = {
        'categorie': 'oeuvre',
        'nom': 'Litho CHARENTON les CARRIERES',
        'prix': '15',
        'description': 'RARE )  GUERRE  FRANCO  ALLEMANDE  1870 - 1871 SIEGE  DE  PARIS   1870         Militaria - CHARENTON LES CARRIERES  :  RETOUR A PARIS , 28 JANVIER 1871 . - Bérod, Editeur. (Paris) -- Date d´édition :…',
        'img': 'O04'
    };
    var meuble1 = {
        'categorie': 'meuble',
        'nom': 'Cabinet italien ',
        'prix': '3600',
        'description': 'Epoque : 18ème siècle Etat : En l\'état  Matière : Placage Longueur : 78,5 Hauteur : 62 Profondeur : 35,5',
        'img': 'M01'
    };
    var meuble2 = {
        'categorie': 'meuble',
        'nom': 'Petit Argentier De Style Louis XVI ',
        'prix': '1150',
        'description': 'poque : 19ème siècle Etat : Bon état  Matière : Noyer Largeur : 124 Hauteur : 210 Profondeur : 58',
        'img': 'M02'
    };
    var meuble3 = {
        'categorie': 'meuble',
        'nom': 'Cave à Liqueurs Fin 19ème ',
        'prix': '320',
        'description': 'Epoque : 19ème siècle Etat : Très bon état  Matière : Cristal et carton Longueur : 27cm Hauteur : 23cm Profondeur : 21cm',
        'img': 'M03'
    };
    var meuble4 = {
        'categorie': 'meuble',
        'nom': 'Étagère Japonisante',
        'prix': '1850',
        'description': 'De Gabriel Viardot D’époque Napoléon III, Artiste : Gabriel Viardot Epoque : 19ème siècle Etat : Bon état  Matière : Bois sculpté Largeur : 79 cm Hauteur : 75 cm Profondeur : 26 cm',
        'img': 'M04'
    };
    var voiture1 = {
        'categorie': 'voiture',
        'nom': 'Renault 4CV 1960',
        'prix': '19950',
        'description': 'Points forts: -Magnifiquement restauré -Belle couleur bleu azur -Pare-chocs chromés -Tableau de bord blanc - Volant à deux branches - Sièges tissus gris/rouge',
        'img': 'V01'
    };
    var voiture2 = {
        'categorie': 'voiture',
        'nom': 'Triumph TR4A IRS 1966 ',
        'prix': '36950',
        'description': ' Triumph TR4A IRS 1966 Overdrive  Points forts: - Belle couleur rouge - Jantes à rayons chromés - Overdrive - Feux antibrouillard - Capote Mohair - Sellerie luxe avec appuie-tête',
        'img': 'V02'
    };
    var voiture3 = {
        'categorie': 'voiture',
        'nom': 'Austin Healey Sprite MK1 1960',
        'prix': '24950',
        'description': 'Points forts: - Version "Frogeye" MK1 - Moteur 1275cc avec carburateur Weber - Très bon état - Volant en bois Moto-Lita - Belle couleur noire',
        'img': 'V03'
    };
    var voiture4 = {
        'categorie': 'voiture',
        'nom': 'Mercedes-Benz 190SL 1956',
        'prix': '99000',
        'description': 'Points forts • Moteur restauré • Bien entretenue • Peinture rouge',
        'img': 'V04'
    };

    // Initialisation des arrays & variables
    var arrayPiece = [piece1, piece2, piece3, piece4];
    var arrayTimbre = [timbre1, timbre2, timbre3, timbre4];
    var arrayOeuvre = [oeuvre1, oeuvre2, oeuvre3, oeuvre4];
    var arrayMeuble = [meuble1, meuble2, meuble3, meuble4];
    var arrayVoiture = [voiture1, voiture2, voiture3, voiture4];
    var arrayContent = [arrayPiece, arrayTimbre, arrayOeuvre, arrayMeuble, arrayVoiture];
    var arrayBag = [];
    var inShoppingBag = 0;

    // Fonction créant les blocs articles
    // Double boucle permettant de parcourir chaque objets de chaque catégories
    $(arrayContent).each(function(x) {
        $(arrayContent[x]).each(function(y) {
            // Créé les bloc article dans #content grace aux données des objets
            $('#content').append(`
        <div id="${arrayContent[x][y]["img"]}" class="col-lg-3 col-md-5 col-sm-5 article ${arrayContent[x][y]["categorie"]}">
          <img class="smallImg img-fluid" src="assets/img/${arrayContent[x][y]["img"]}.jpg" alt="">
          <div>
            <h4 class="text-center">${arrayContent[x][y]["nom"]}</h4>
            <p class="text-center">Prix : ${arrayContent[x][y]["prix"]} €</p>
            </div>
            <div class="d-flex justify-content-around">

              <button class="btn-article toggleDescription" type="button" name="button" data-toggle="modal" data-target="#modalDescription">
                Détails
              </button>
              <button type="button" class="btn-article addShoppingBag">
                Ajouter au panier
              </button>
            </div>
				  </div>
        </div>
        `);
        });
    });

    // Fonction remplissant la modale description
    $('.toggleDescription').click(function(){
      // permet de recup l'id du bloc sur lequel on a cliqué pour avoir sa référence
      let ref = $(this).parents('div').parents('div').attr('id');
      // Double boucle : on parcourt toute la base de données pour trouver les indices de tableau où se trouve l'objet possédant la ref récupérée au dessus
      $(arrayContent).each(function(x) {
          $(arrayContent[x]).each(function(y) {
            // Si trouve la ref dans la base de donnée, alors :
            if (arrayContent[x][y]['img'] == ref) {
              // Remplis la modal description avec le nom, la description et le prix de la ref
              $('#modalDescription .modal-title').html(`${arrayContent[x][y]['nom']}`);
              $('#modalDescription .modal-body').html(`${arrayContent[x][y]['description']}`);
              $('#modalDescription .modal-footer>span').html(`Prix : ${arrayContent[x][y]['prix']} €`);
            }
          });
      });
    })

    // Fonction ajoutant +1 au nombre d'element du panier sur le front et déclenchant l'ajout dans le panier
    $('.addShoppingBag').click(function() {
        // Ajoute +1 à la variable qui sauvegarde le nb d'élements présents dans le panier
        ++inShoppingBag;
        // Change la couleur du nombre à coté du panier en vert
        $('#shopping-number').css('color', 'green');
        // Affiche la nouvelle valeur de inShoppingBag
        $('#shopping-number').html(`${inShoppingBag}`);
        // Récupère la ref de l'élement cliqué grace à l'ID de son parent puis apelle la fonction writeShoppingBag avec cette ref en argument
        let elementClicked = $(this).parents('div').parents('div').attr('id');
        writeShoppingBag(elementClicked);
    })

    // Fonction ajoutant élements dans la modale du panier
    // variable corrigeant un bug de bouton, obligatoire
    var initBagButtons = false;
    function writeShoppingBag(id) {
        let isFound = false;
        // double boucle : on cherche la ref récupérée dans l'argument dans notre arrayContent
        $(arrayContent).each(function(x) {
            $(arrayContent[x]).each(function(y) {
                // Quand il trouve la ref alors :
                if (arrayContent[x][y]['img'] == id) {
                    // On boucle dans arrayBag (qui stocke les élements ajoutés au panier et leur quantité) pour vérifier si l'élement ajouté n'existe pas deja dans ce tableau
                    $(arrayBag).each(function(i) {
                        // Si on trouve la ref dans arrayBag alors :
                        if (arrayBag[i] == id) {
                            // +1 à la quantité de cette reference (la tableau est construit de cette façon, exemple : [P01 (la ref), 2 (sa quantité), T04, 5] etc, c'est pour ça qu'on ajoute +1 à l'indice i+1))
                            ++arrayBag[i + 1]
                            // isFound = true == on a trouvé l'élément dans arrayBag
                            isFound = true;
                        }
                    })
                    // Si on a pas trouvé l'élément dans arrayBag alors :
                    if (!isFound) {
                        // On ajoute a arrayBag cette ref, et une quantité egale à 1 pour celle-ci
                        arrayBag.push(id);
                        arrayBag.push(1);
                    }
                    // On efface le contenu précédament présent dans la modale panier pour réécrire les nouvelles données
                    $('#modalBag .modal-body').html('');
                    $('#modalBag .modal-footer>span').html('');
                    // Triple boucle : pour chaque ref présent dans arrayBag, on cherche les index de arrayContent menant à cette ref, pour ensuite utiliser ces index pour ajoute chaque élement dans la modale
                    $(arrayBag).each(function(i) {
                        $(arrayContent).each(function(x) {
                            $(arrayContent[x]).each(function(y) {
                                if (arrayBag[i] == arrayContent[x][y]['img']) {
                                    $('#modalBag .modal-body').append(`
                                      <div class="${arrayContent[x][y]['img']} d-flex justify-content-between align-items-center mt-2">
                                        <div class="d-flex">
                                          <img class="img-panier img-fluid" src="assets/img/${arrayContent[x][y]["img"]}.jpg" alt="">
                                          <div class="d-flex flex-column ml-3">
                                            <span class="font-weight-bold">${arrayContent[x][y]['nom']}</span>
                                            <span>Prix unitaire : ${arrayContent[x][y]['prix']}€</span>
                                          </div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                          <span>${arrayBag[i+1]}</span>
                                          <button type="button" class="btn-panier ml-2 addShoppingBagOne">
                                            <i class="fas fa-plus"></i>
                                          </button>
                                          <button type="button" class="btn-panier ml-2 removeShoppingBagOne">
                                            <i class="fas fa-minus"></i>
                                          </button>
                                          <button type="button" class="btn-panier ml-2 removeShoppingBag">
                                            <i class="fas fa-trash-alt"></i>
                                          </button>
                                        </div>
                                      </div>
                                    `)
                                }
                            })
                        })
                    })
                }
            })
        })
        // Si cest la première fois qu'on ajoute un element au panier alors :
        if (!initBagButtons) {
            // ajoute le declenchement des différentes fonction aux boutons dans la modale panier
            $(document).on('click', 'button.removeShoppingBag', deleteShoppingBag);
            $(document).on('click', 'button.removeShoppingBagOne', oneDeleteShoppingBag);
            $(document).on('click', 'button.addShoppingBagOne', oneAddShoppingBag);
            // change la valeur de initBagButtons pour ne plus rentrer dans la condition, sinon cela fait completement disfonctionner les boutons et ils déclenchent plusieurs fois d'affilé leurs fonctions
            initBagButtons = true;
        }
        // Appel la fonction calculant le prix final de tous les articles du panier
        calcTotalPrice();
    }

    // Fonction permettant de supprimer un élement du panier
    function deleteShoppingBag() {
        // recup les classe d'un div parent qui possède la ref dans ses classes
        let id = $(this).parents('div').parents('div').attr('class');
        // On retire tout à la string sauf les 3 premiers caractère qui sont la ref
        id = id.substr(0, 3);
        $(arrayBag).each(function(i) {
            // Boucle dans arrayBag, si index == ref cliquée
            if (arrayBag[i] == id) {
                // récupère la quantité de la ref
                let quantite = arrayBag[i + 1];
                // supprime de arrayBag la ref et sa quantité
                arrayBag.splice(i, 2);
                // supprime la div contenant la ref dans la modale panier
                $(`.${id}`).remove();
                // retire à inShoppingBag la quantité de la ref qu'on viens de supprimer
                inShoppingBag = inShoppingBag - quantite;
                // si inShoppingBag == 0, on change sa couleur en rouge
                if (inShoppingBag == 0) {
                    $('#shopping-number').css('color', 'red');
                }
                // on affiche la nouvelle valeur de inShoppingBag
                $('#shopping-number').html(`${inShoppingBag}`);
                // Si inShoppingBag == 0, alors le panier est vide donc on affiche un message
                if (inShoppingBag == 0) {
                    $('#modalBag .modal-body').append(`
                      <p>Votre panier est vide !</p>
                      `)
                }
                // calcule le nouveau prix total du panier
                console.log(arrayBag);
                calcTotalPrice();
            }
        })
    }

    // Fonction -1 modale panier
    function oneDeleteShoppingBag() {
        // on recup la ref comme sur la fonction au dessus
        let ref = $(this).parents('div').parents('div').attr('class');
        ref = ref.substr(0, 3);
        $(arrayBag).each(function(i) {
            if (arrayBag[i] == ref) {
                // on fait -1 à la quantié de la ref dans arrayBag
                arrayBag[i + 1] = --arrayBag[i + 1]
                // -1 sur inShoppingBag
                --inShoppingBag;
                if (inShoppingBag == 0) {
                    $('#shopping-number').css('color', 'red');
                }
                $('#shopping-number').html(`${inShoppingBag}`);
                if (inShoppingBag == 0) {
                    $('#modalBag .modal-body').append(`
                <p>Votre panier est vide !</p>
                `)
                }
                // la quantité d'une ref tombe à 0 alors on efface sa div de la modale panier
                if (arrayBag[i + 1] == 0) {
                    $(`.${ref}`).remove();
                    // et on supprime sa présence et sa quantité dans arrayBag
                    arrayBag.splice(i, 2);
                }
                // affiche sa nouvelle quantité dans modal panier
                $(`.${ref}>div:nth-child(2)>span`).html(`${arrayBag[i+1]}`);
            }
        })
        console.log(arrayBag);
        calcTotalPrice();
    }

    // Fonction +1 panier
    // fonctionne comme la fonction au dessus mais avec quelques étapes en moins
    function oneAddShoppingBag() {
        let ref = $(this).parents('div').parents('div').attr('class');
        ref = ref.substr(0, 3);
        $(arrayBag).each(function(i) {
            if (arrayBag[i] == ref) {
                arrayBag[i + 1] = ++arrayBag[i + 1]
                    ++inShoppingBag;
                $('#shopping-number').html(`${inShoppingBag}`);
                $(`.${ref}>div:nth-child(2)>span`).html(`${arrayBag[i+1]}`);
            }
        })
        console.log(arrayBag);
        calcTotalPrice();
    }

    // Fonction calculant le prix total des élements du panier
    function calcTotalPrice() {
        let totalPrice = 0;
        // on boucle dans arrayBag
        $(arrayBag).each(function(i) {
            // Si l'élément contenu dans arrayBag[i] est un entier, alors :
            if (!isNaN(arrayBag[i])) {
                // On boucle dans arrayContent
                $(arrayContent).each(function(x) {
                    $(arrayContent[x]).each(function(y) {
                        // Si on trouve la ref ([i-1] est l'index d'une ref car nous bouclons dans arrayBag uniquement aux index contenant un entier (donc une quantité) donc pour recup le ref de cette quantité on fait i-1)
                        if (arrayBag[i - 1] == arrayContent[x][y]['img']) {
                            // calcul du prix final
                            totalPrice = totalPrice + (arrayBag[i] * parseFloat(arrayContent[x][y]['prix']));
                        }
                    })
                })
            }
        })
        // affichage du nouuveau prix dans modal bag
        $('#modalBag .modal-footer>span').html(`Prix total à payer : ${totalPrice} €`);
    }

    // Fonction recherche
    // A chaque fois qu'on ajoute un caractère dans le champ, une recherche est effectuée (keyup)
    $('#input-search').keyup(function() {
        // cache tout le contenu
        $('#content>div').css('display', 'none')
        // recup la valeur du input rechercher
        let input = $(this).val();
        // initialise une regexp en fonction de la valeur du input
        let regexp = new RegExp(`${input}`, 'i');
        // boucle dans arrayContent
        $(arrayContent).each(function(x) {
            $(arrayContent[x]).each(function(y) {
                // si la regexp renvoie vraie en étant testé dans 'nom', 'categorie' ou 'description', l'élement en question est affiché
                if ((regexp.test(arrayContent[x][y]['nom'])) || (regexp.test(arrayContent[x][y]['categorie'])) || (regexp.test(arrayContent[x][y]['description']))) {
                    $(`#${arrayContent[x][y]['img']}`).css('display', 'block');
                }
            })
        })
    })

    // Fonction permettant d'afficher la catégorie voulue
    $('#home, #piece, #timbre, #oeuvre, #meuble, #voiture').click(function() {
        let button = this.id;
        $('.piece, .timbre, .oeuvre, .meuble, .voiture').css('display', 'block');
        if (button == 'piece') {
            $('.timbre, .oeuvre, .meuble, .voiture').css('display', 'none');
        } else if (button == 'timbre') {
            $('.piece, .oeuvre, .meuble, .voiture').css('display', 'none');
        } else if (button == 'oeuvre') {
            $('.timbre, .piece, .meuble, .voiture').css('display', 'none');
        } else if (button == 'meuble') {
            $('.timbre, .oeuvre, .piece, .voiture').css('display', 'none');
        } else if (button == 'voiture') {
            $('.timbre, .oeuvre, .meuble, .piece').css('display', 'none');
        }
    });

    // Affiche une alerte quand on clique sur le bouton acheter de la modale, et réinitialise toutes les variables et l'interface
    $('#buy').click(function() {
        if (inShoppingBag > 0) {
            alert('Merci pour votre achat !');
            $('#modalBag .modal-body').html('');
            arrayBag = [];
            inShoppingBag = 0;
            $('#modalBag .modal-body').append(`<p>Votre panier est vide !</p>`);
            $('#shopping-number').html(`${inShoppingBag}`);
            $('#shopping-number').css('color', 'red');
            calcTotalPrice();
            return;
        }
        alert('Votre panier est vide !');
    })

    // Fonction de test et de debug
    $('button').click(function() {
        console.log(arrayBag);
    })
});
