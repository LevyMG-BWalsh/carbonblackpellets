<?php
    $date = date("Ymd");
    $rand = rand(0,9999999999999);
    $height = "80";
    $width  = "240";
    $img    = "$date$rand-$height-$width.jpgx";
?>
<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Noir de carbone - Obtenez le plus de noir de carbone dans le monde</title>
    <link rel="stylesheet" href="assets/css/foundation.css" />
    <link rel="stylesheet" href="assets/css/theme.css" />
    <link rel="stylesheet" href="assets/css/mobilenav.css" />
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
    <script src="assets/js/vendor/modernizr.js"></script>
  </head>
<body<?php if(isset($flag)){ echo " onLoad=submit();"; } ?>>
<div id="page-content">
    <!-- Mobile nav implementation -->
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="navbar-brand" href="#">Manu</a>
          <a class="mobile-backtotop">Retour au sommet<img src="assets/img/up.png"></a>
        </div>
        <div id="slidemenu">
          <ul class="nav navbar-nav">
            <li><a class="nav-clickable" data-section="wrapper" href="#wrapper">Accueil</a></li>
            <li><a class="nav-clickable" data-section="about" href="#about">À propos</a></li>
            <li><a class="nav-clickable" data-section="whypelletize" href="#whypelletize">Pourquoi les boulettes?</a></li>
            <li><a class="nav-clickable" data-section="equipment" href="#equipment">Équipements</a></li>
            <li><a class="nav-clickable" data-section="applications" href="#applications">Applications</a></li>
            <li><a class="nav-clickable" data-section="lab-test" href="#lab-test">Essais de laboratoire</a></li>
            <li><a class="nav-clickable" data-section="links" href="#links">Liens</a></li>
            <li><a class="nav-clickable" data-section="contact" href="#contact">Contactez-nous</a></li>
            <li><a href="index_es.php" style="background: #961a37 !important;"><strong>Español</strong> <img src="assets/img/espanol.png" class="responsive-img" style="margin-left:12px !important;" /><span class="clearfix"></span></a></li>
            <li><a href="index.php" style="background: #961a37 !important;"><strong>U.S.</strong> <img src="assets/img/usflag.png" class="responsive-img" style="margin-left:12px !important;" /><span class="clearfix"></span></a></li>
            <li><a href="index_de.php" style="background: #961a37 !important;"><strong>Deustch</strong> <img src="assets/img/deutsch.png" class="responsive-img" style="margin-left:12px !important;" /><span class="clearfix"></span></a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>


    <div class="row" id="navigation">
    <div class="contain-to-grid fixed">
    <nav class="top-bar">
        <ul class="title-area">
            <li class="name">
                <img src="assets/img/logo-fr.png" alt="Pelletized Limestone - Mars Mineral" class="responsive-img"/>
            </li>
        </ul>
        <div class="large-10 medium-10 margin-top columns right sizehide">
            <ul class="inline-list collapse hide-for-small-down">
                         <li><a class="clickable white collapse-menu" style="font-size:14px;" data-section="wrapper" href="#wrapper">Accueil</a></li>
                        <li><a class="clickable white collapse-menu" style="font-size:14px;" data-section="about" href="#about">À propos</a></li>
                        <li><a class="clickable white collapse-menu" style="font-size:14px;" data-section="whypelletize" href="#whypelletize">Pourquoi les boulettes?</a></li>
                        <li><a class="clickable white collapse-menu" style="font-size:14px;" data-section="equipment" href="#equipment">Équipements</a></li>
                        <li><a class="clickable white collapse-menu" style="font-size:14px;" data-section="applications" href="#applications">Applications</a></li>
                        <li><a class="clickable white collapse-menu" style="font-size:14px;" data-section="lab-test" href="#lab-test">Essais de laboratoire</a></li>
                        <li><a class="clickable white collapse-menu" style="font-size:14px;" data-section="links" href="#links">Liens</a></li>
                        <li><a class="clickable white collapse-menu" style="font-size:14px;" data-section="contact" href="#contact">Contactez-nous</a></li>
         </ul>
        </div>
        <div class="large-12 medium-12 columns">
            <div style="margin-top:1px;">
                <a class="margin-top-sm button right" href="index_es.php" style="background: #961a37 !important;"><strong>Español</strong> <img src="assets/img/espanol.png" class="responsive-img" style="margin-left:12px !important;" /><span class="clearfix"></span></a>
                <a class="margin-top-sm button right" href="index.php" style="background: #961a37 !important;"><strong>U.S.</strong> <img src="assets/img/usflag.png" class="responsive-img" style="margin-left:12px !important;" /><span class="clearfix"></span></a>
                <a class="margin-top-sm button right" href="index_de.php" style="background: #961a37 !important;"><strong>Deustch</strong> <img src="assets/img/deutsch.png" class="responsive-img" style="margin-left:12px !important;" /><span class="clearfix"></span></a>
            </div>
            </div>
        </div>
        <div class="clearfix"></div>
        </section>
     </nav>
</div>
<div id="wrapper">
      <div class="row">
        <div class="large-10 columns" style="margin-top:60px;">
            <h1>Boulettes de noir de carbone et <span><em>PROFIT</em></span></h1>
            <p>
               Mars Mineral est un pionnier dans la conception et la fabrication de équipement et systèmes de bouletage par agitation qui transforment en boulettes le noir de carbone vierge ou de haute qualité récupéré de pneus recyclés.
               Des clients du monde entier utilisent nos systèmes de bouletage pour convertir de la poudre de noir de carbone en boulettes. Nous pouvons produire des boulettes de noir de carbone de dimensions comprises entre
               0,3 et 2 mm de diamètre à des débits de production allant de 0,3 à 62,3 m<sup>3</sup>/h.

            </p>
        </div>
         <div class="large-12 columns text-center">
                <img src="assets/img/pin-mixer.png" alt="Pelletizing Pin Mixer" class="responsive-img" />
         </div>
          <div class="large-12 columns text-center">
              <img src="assets/img/white-bar.png" alt="Pelletizing Pin Mixer" class="responsive-img" style="margin-bottom:35px;" />
          </div>
    </div>
    <div class="red">
        <div class="row text-center">
            <p><a class="white clickable" data-section="about" href="#about"><i class="fa fa-chevron-circle-down fa-4x"></i></a></p>
         </div>
    </div>
</div>
<div id="about">
    <div class="row collapsible text-center">
        <div class="large-12 columns">
            <h1>À propos</h1>
            <h2>Transformation de la poudre de noir de carbone en un produit de valeur</h2>
        </div>
        <div class="large-6 columns text-left">
            <p>
                Les systèmes de bouletage Mars Mineral sont utilisés en Amérique du Nord et en Europe occidentale pour transformer la poudre de noir de carbone récupérée des déchets de pneus en un produit de valeur utilisé dans les additifs pour asphalte, les tuyaux et courroies automobiles, les boîtiers de téléphones portables et d’ordinateurs, les pneus verts, les peintures et les encres et toners d'impression.
            </p>
            <p>
                Nous aidons aussi des clients à transformer du noir de carbone de qualité ASTM en boulettes utilisées comme agent de teinte, additif de résistance ou produit protecteur contre les UV pour des applications aérospatiales, de produits ménagers, électroniques, de meubles, industrielles, marines et d'emballages.
            </p>
            <p>
                Outre le service aux clients du marché du noir de carbone, nous travaillons avec des sociétés dans les secteurs de l'acier, de la fonderie, de la chimie, de l'extraction minière, des ciments, de la chaux et des engrais, ainsi que de la fabrication de produits de consommation.
            </p>
            <p>
                Mars Mineral exploite un laboratoire complet d'essais équipé pour transformer en boulettes des échantillons de matériaux allant de quelques livres à plusieurs tonnes. Les équipements d'essais sont de dimensions allant des petites échelles aux échelles pré-industrielles.
            </p>
            <p>
              Mars Mineral fabrique ses propres équipements de bouletage et composants connexes dans son usine de 4 645 m<sup>2</sup>. Cela nous permet de conserver un contrôle complet de la qualité de nos équipements.

            </p>
            <p>
               Nous sommes basés à Mars en Pennsylvanie, à environ 35 km de Pittsburgh.
            </p>
            <div class="text-center">
                <img src="assets/img/marsmineral-logo.png" alt="Mars Minaerl - Carbon Black Production" class="responsive-img" style="margin-bottom:25px;" />
            </div>
        </div>
        <div class="large-6 columns">
            <img src="assets/img/about-us.png" alt="Mars Minaerl - Carbon Black Production" class="responsive-img"/>
        </div>
    </div>
    <div class="red">
        <div class="row text-center">
            <p><a class="white clickable" data-section="whypelletize" href="#whypelletize"><i class="fa fa-chevron-circle-down fa-4x"></i></a></p>
         </div>
    </div>
</div>
<div id="whypelletize">
    <div class="row collapsible text-center">
        <div class="large-12 columns">
            <h1>Pourquoi les boulettes?</h1>
            <h2>Un meilleur moyen de stimuler votre résultat d'entreprise</h2>
        </div>
         <div class="large-6 medium-6 columns text-left">
                <p>
                   Passez au vert et réduisez les coûts de production grâce au noir de carbone de haute qualité récupéré des déchets de pneus traités par dépolymérisation thermique.
                </p>
                <p>
                   Les systèmes de bouletage de Mars Mineral peuvent vous aider à former des boulettes de haute qualité à partir de poudre de noir de carbone de haute qualité pour la production d'additifs pour asphalte, de boîtiers pour ordinateurs et téléphones portables, de pneus verts, de peintures, d'encres et toners d'impression, et de tuyaux, courroies, tableaux de bord, panneaux de portes, capots, bas de caisses, ailerons et coffres automobiles.
                </p>
                <p>
                   En tant que pionnier dans la conception et la fabrication de systèmes de bouletage par agitation qui convertissent les poussières fines et poudres en boulettes,
                   nos systèmes de traitement du noir de carbone peuvent être adaptés pour produire des boulettes de dimensions comprises entre 0,3 et 2 mm de diamètre à des débits
                   de production allant de 0,3 à 62 m<sup>3</sup>/h.

                </p>
        </div>
        <div class="large-6 medium-6 columns text-left">
            <img src="assets/img/pin-mixer.png" alt="Pelletizing Pin Mixer by Mars Mineral" />
        </div>
    </div>
</div>
    <div class="red">
        <div class="row text-center">
            <p><a class="white clickable" data-section="equipment" href="#equipment"><i class="fa fa-chevron-circle-down fa-4x"></i></a></p>
         </div>
    </div>
<div id="equipment">
        <div class="row text-center">
            <div class="large-12 columns">
                <h1>Équipements</h1>
                <h2>De la poudre aux boulettes aux profits</h2>
                <p>
                    Un système de bouletage Mars Mineral vous permet de générer en cinq étapes faciles un nouveau revenu important à partir de matériaux de déchets.
                </p>
            </div>
        </div>
        <div class="row collapsible">
            <div class="large-8 columns bg-green">
                <h4 class="white">Fonctionnement d'une usine de bouletage typique</h4>
            </div>
        </div>
            <div class="row call-out">
                <div class="large-6 medium-6 columns text-center">
                    <div class="large-12 text-left overlaid">
                        <span class="circled">1</span>
                    </div>
                    <div class="large-6 medium-6 columns text-center">
                        <img src="assets/img/step1.png" class="responsive-img" alt="Drying pellets" />
                    </div>
                    <div class="large-6 medium-6 columns text-left">
                         <p>
                            Le malaxeur à broches reçoit la poudre de noir de carbone de la trémie et du dispositif d'alimentation et mélange le matériau avec un agent liant, généralement de l'eau, avant de l'envoyer au séchoir.
                        </p>
                    </div>
                </div>
                <div class="large-6 medium-6 columns text-center">
                    <div class="large-12 text-left overlaid">
                        <span class="circled">2</span>
                    </div>
                    <div class="large-6 medium-6 columns text-center">
                        <img src="assets/img/step3.png" class="responsive-img" alt="Drying pellets" />
                    </div>
                    <div class="large-6 medium-6 columns text-left">
                         <p>
                            Le séchoir sèche et refroidit les boulettes et les décharge sur un tapis roulant qui les transporte vers le tamis.
                         </p>
                    </div>
                </div>
            </div>
            <div class="row call-out">
                <div class="large-6 medium-6 columns text-center">
                    <div class="large-12 text-left overlaid">
                        <span class="circled">3</span>
                    </div>
                    <div class="large-6 medium-6 columns text-center">
                        <img src="assets/img/step4.png" class="responsive-img" alt="Drying pellets" />
                    </div>
                    <div class="large-6 medium-6 columns text-left">
                        <p>Le tamis élimine et recycle les boulettes de tailles excessives ou insuffisantes et envoie celles qui sont correctes dans une des cellules de stockage qui se trouvent à l'extérieur du bâtiment.
                        </p>
                    </div>
                </div>
                <div class="large-6 medium-6 columns text-center">
                    <div class="large-12 text-left overlaid">
                        <span class="circled">4</span>
                    </div>
                    <div class="large-6 medium-6 columns text-center">
                         <img src="assets/img/step5.png" class="responsive-img" alt="Bagging pellets in 40 pound bags" />
                    </div>
                    <div class="large-6 medium-6 columns text-left">
                        <p>L'ensacheuse extrait les boulettes de la cellule de stockage et remplit automatiquement un sac souple FIBC ou un autre emballage.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row call-out">
                <div class="large-6 medium-6 columns text-center">
                    <div class="large-12 text-left overlaid">
                        <span class="circled">5</span>
                    </div>
                    <div class="large-6 medium-6 columns text-center">
                        <img src="assets/img/step6.png" class="responsive-img" alt="Wrapping pellets" />
                    </div>
                    <div class="large-6 medium-6 columns text-left">
                        <p>La machine à palettiser et à emballer sous film étirable place les sacs pleins sur des palettes, les empile pour l'expédition et les enveloppe sur la palette avec un film étirable pour la stabilité pendant le transport.
                        </p>
                    </div>
                </div>
                <div class="large-6 medium-6 columns">
                    <div class="large-4 medium-4 small-4 columns">
                        <i class="fa fa-3x fa-recycle green"></i>
                    </div>
                    <div class="large-4 medium-4 small-4 columns">
                        <i class="fa fa-3x fa-refresh green"></i>
                    </div>
                    <div class="large-4 medium-4 small-4 columns">
                        <i class="fa fa-3x fa-tree green"></i>
                    </div>
                    <div class="clearfix"></div>
                   <p>
                        Avec un système de bouletage Mars Mineral, vous contribuez à la réduction des problèmes d'environnement et de santé publique, grâce à la réutilisation d'une partie du milliard de pneus qui sont mis au rebut chaque année dans le monde entier.
                   </p>
                </div>
            </div>
    <div class="red">
        <div class="row text-center">
            <p><a class="white clickable" data-section="applications" href="#applications"><i class="fa fa-chevron-circle-down fa-4x"></i></a></p>
         </div>
    </div>
</div>
<div id="applications">
    <div class="row collapsible text-center">
        <div class="large-12 columns">
            <h1>Applications</h1>
            <h2>Le noir de carbone récupéré constitue une matière première idéale pour les produits automobiles</h2>
        </div>
        <div class="large-6 columns text-left">
            <h3>Il ajoute de la valeur aux plastiques et caoutchoucs</h3>
            <p>
                Passez au vert et réduisez les coûts de production grâce au noir de carbone de haute qualité récupéré des déchets de pneus traités par dépolymérisation thermique.
            </p>
            <p>
                Nos systèmes de bouletage peuvent vous aider à former des boulettes de haute qualité à partir de poudre de noir de carbone de qualité ASTM pour la production de :
            </p>
            <div class="large-6 columns">
                <ul class="list">
                    <li>Courroies</li>
                    <li>Tableaux de bord</li>
                    <li>Panneaux de portes</li>
                    <li>Capots</li>
                </ul>
            </div>
            <div class="large-6 columns">
                <ul class="list">
                    <li>Tuyaux</li>
                    <li>Bas de caisses</li>
                    <li>Ailerons</li>
                    <li>Coffres</li>
                </ul>
            </div>
            <div class="clearfix"></div>
            <p>
                Le noir de carbone en boulettes est également pratique comme agent de teinte, additif de résistance ou produit protecteur contre les UV pour les produits des marchés suivants :
            </p>
            <div class="large-6 columns">
                <ul class="list">
                    <li>Aérospatiale</li>
                    <li>Équipements ménagers</li>
                    <li>Revêtements de bateaux et de bennes</li>
                    <li>Boîtiers d'ordinateurs</li>
                    <li>Électronique</li>
                </ul>
            </div>
            <div class="large-6 columns">
                <ul class="list">
                    <li>Mobilier</li>
                    <li>Industrie</li>
                    <li>Marine</li>
                    <li>Caoutchoucs non automobiles</li>
                    <li>Film d'emballage</li>
                    <li>Revêtements de conduites</li>
                </ul>
            </div>
            <div class="clearfix"></div>
            <p>Laissez-nous vous montrer comment nos solutions personnalisées peuvent créer de nouvelles occasions commerciales.</p>
        </div>
        <div class="large-6 columns">
            <img src="assets/img/equipment.png" alt="Mars Minaerl - Carbon Black Production" class="responsive-img" />
        </div>
    </div>
    <div class="red">
        <div class="row text-center">
            <p><a class="white clickable" data-section="lab-test" href="#lab-test"><i class="fa fa-chevron-circle-down fa-4x"></i></a></p>
         </div>
    </div>
</div>
<div id="lab-test">
    <div class="row collapsible text-center">
        <div class="large-12 columns">
            <h1>Essais de laboratoire</h1>
            <h2>Essais de noir de carbone facilités</h2>
        </div>
            <div class="large-12 columns">
                <div class="large-12 columns text-center">
                    <p>
                       Nous entretenons un laboratoire et des installations d'essais à l'échelle pré-industrielle, permettant de traiter les matériaux afin de déterminer leur possibilité de mise en boulettes.
                    </p>
                    <p>
                        Utilisez ce tableau pour déterminer le type d'essai nécessaire sur votre matériau particulier.
                    </p>
                </div>
                <div class="large-12 columns text-center">
                    <table>
                        <tr>
                          <th class="text-center">Description</th>
                          <th class="text-center">Étude de recherche</th>
                          <th class="text-center">Développement à l'échelle pré-industrielle</th>
                        </tr>
                        <tr>
                          <td>Résultats des essais</td>
                          <td>Réussite basée sur la production de boulettes définies par le client en fonction de l'analyse</td>
                          <td>Mise à l'échelle des données obtenues ou bouletage de quantité</td>
                        </tr>
                        <tr>
                          <td>Quantité d'échantillon requise</td>
                          <td>5-10 gallons;<br /> 15-25 gallons pour le bouletage en malaxeur à broches</td>
                          <td>225 – 1000 kg</td>
                        </tr>
                        <tr>
                          <td>Agents liants</td>
                          <td>Eau et 2 additifs liants; <br />frais supplémentaires pour des liants complémentaires</td>
                          <td>Agent liant prédéterminé</td>
                        </tr>
                        <tr>
                          <td>Équipements</td>
                          <td>Malaxeur à broches 8D32L</td>
                          <td>Malaxeur à broches 12D54L</td>
                        </tr>
                        <tr>
                          <td>Rendement de l'échantillon</td>
                          <td>Jusqu'à 225 kg</td>
                          <td>&ge; 200 kg de boulettes</td>
                        </tr>
                        <tr>
                          <td>Conditions spéciales</td>
                          <td>Aucune</td>
                          <td>Frais supplémentaire pour concassage, traitement préalable, mélange, alimentation spéciale, séchage, tamisage ou post-traitement </td>
                        </tr>
                        <tr>
                          <td>Prix</td>
                          <td>2000 $ par jour</td>
                          <td>2500 $ par jour (facturation minimum d'une journée)</td>
                        </tr>
                    </table>
                </div>
            </div>
                <div class="large-12 medium-12 large-centered columns">
                    <ul class="button-group even-3">
                        <li><a class="button" href="https://www.marsmineral.com/secure/agglomeration-questionnaire.php" target="_blank"><i class="fa fa-pencil fa-1x"></i> Demandez un devis<br />&nbsp;</a></li>
                        <li><a class="button" href="assets/pdf/Test-Package-2015.pdf#page=1" target="_blank"><i class="fa fa-download fa-1x"></i> Téléchargez le PDF des options d'essais</a></li>
                        <li><a class="button" href="assets/pdf/Test-Package-2015p2.pdf" target="_blank"><i class="fa fa-eye fa-1x"></i> Consulter les conditions générales</a></li>
                    </ul>
                    <p>Contactez Craig Vaughan au <a href="tel:724.538.3000">+1 724.538.3000</a> ou à <a href="mailto:cvaughan@marsmineral.com">cvaughan@marsmineral.com</a> au sujet de questions techniques, de projections de retour sur investissement ou de la tarification. </p>
                </div>
        </div>
    <div class="red">
            <div class="row text-center">
                <p><a class="white clickable" data-section="links" href="#links"><i class="fa fa-chevron-circle-down fa-4x"></i></a></p>
            </div>
    </div>
</div>


<div id="links">
    <div class="row collapsible text-center">
        <div class="large-12 medium-12 columns">
            <h1>Liens</h1>
        </div>
        <div class="large-12 medium-12 columns text-left">
            <p>Ci-dessous figurent des liens présentant des informations utiles sur notre société mère, Woodward Inc., et vers des microsites sur des machines de bouletage pour des applications spécifiques. Découvrez la Process Equipment Manufacturer’s Association et d'autres associations professionnelles importantes.</p>
                <p class="green">Microsites de machines de bouletage:</p>
                <ul>
                    <li><a href="http://www.manureintomoney.com/" target="_blank">www.manureintomoney.com</a> -- Mars Mineral met au point et fabrique des systèmes de bouletage pour convertir le fumier avicole en boulettes d'engrais bio et respectueuses de l'environnement.
</li>

                    <li><a href="http://www.pelletizedlimestone.com/" target="_blank">www.pelletizedlimestone.com</a> -- Mars Mineral est le leader en conception, ingénierie et fabrication d'équipements et systèmes de bouletage de la pierre à chaux.</li>

                </ul>
                <p class="green">Associations professionnelles:</p>

                <ul>
                    <li><a href="http://www.pemanet.org/" target="_blank">www.pemanet.org</a> -- La Process Equipment Manufacturers' Association (PEMA) regroupe des sociétés qui fournissent des équipements et systèmes aux industries de transformation.</li>
                </ul>
            </p>
        </div>
    </div>
    <div class="row">
        <div class="large-12 medium-12 small-12 columns">&nbsp;</div>
    </div>
</div>

<div class="red">
    <div class="row text-center">
        <p><a class="white clickable" data-section="contact" href="#contact"><i class="fa fa-chevron-circle-down fa-4x"></i></a></p>
     </div>
</div>


<div id="contact">
    <div class="row collapsible text-center">
        <div class="large-12 columns">
            <h1>Contactez-nous</h1>
            <p>Nous aimerions en savoir davantage sur vos besoins en bouletage de noir de carbone.</p>
        </div>
            <div class="large-6 columns" id="success">
               <form method="POST" action="" id="contactForm">
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label" class="right inline">Nom *</label>
                      </div>
                      <div class="small-9 columns">
                        <input type="text" name="name" class="formName" id="right-label" placeholder="Nom">
                        <small class="error-message error-name"></small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label" class="right inline">Courriel *</label>
                      </div>
                      <div class="small-9 columns">
                        <input type="text" name="email" class="formEmail" id="right-label" placeholder="Courriel">
                        <small class="error-message error-email"></small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label" class="right inline">Société *</label>
                      </div>
                      <div class="small-9 columns">
                        <input type="text" name="company" class="formCompany" id="right-label" placeholder="Société">
                         <small class="error-message error-company"></small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label" class="right inline">Fonction</label>
                      </div>
                      <div class="small-9 columns">
                        <input type="text" name="title" id="right-label" placeholder="Fonction">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label" class="right inline">Industrie</label>
                      </div>
                      <div class="small-9 columns">
                        <input type="text" name="industry" id="right-label" placeholder="Industrie">
                      </div>
                    </div>
                  </div>
                </div>
                   <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label" class="right inline">Téléphone</label>
                      </div>
                      <div class="small-9 columns">
                        <input type="text" name="phone" id="right-label" placeholder="Téléphone">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label" class="right inline">Adresse</label>
                      </div>
                      <div class="small-9 columns">
                        <input type="text" name="address" id="right-label" placeholder="Adresse">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label"  class="right inline">Ville</label>
                      </div>
                      <div class="small-9 columns">
                        <input type="text" name="city" id="right-label" placeholder="Ville">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label" class="right inline">Pays</label>
                      </div>
                      <div class="small-9 columns">
                          <select class="right inline" name="country">
                                <option value="" selected="selected">Sélectionnez un pays</option>
                                <option value="France">France</option>
                                <option>Canada</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albanie</option>
                                <option value="Algeria">Algérie</option>
                                <option value="American Samoa">Samoa américaines </option>
                                <option value="Andorra">Andorre</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antigua and Barbuda">Antigua-et-Barbuda</option>
                                <option value="Argentina">Argentine</option>
                                <option value="Armenia">Arménie</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australie</option>
                                <option value="Austria">Autriche</option>
                                <option value="Azerbaijan">Azerbaïdjan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahreïn</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Bénin</option>
                                <option value="Bermuda">Bermudes</option>
                                <option value="Bhutan">Bhoutan</option>
                                <option value="Bolivia">Bolivie</option>
                                <option value="Bosnia and Herzegovina">Bosnie-Herzégovine </option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Île Bouvet</option>
                                <option value="Brazil">Brésil</option>
                                <option value="British Indian Ocean Territory">Territoire britannique de l'océan Indien</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgarie</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodge</option>
                                <option value="Cameroon">Cameroun</option>
                                <option value="Cape Verde">Cap-Vert</option>
                                <option value="Cayman Islands">Îles Caïmans</option>
                                <option value="Central African Republic">République centrafricaine</option>
                                <option value="Chad">Tchad</option>
                                <option value="Chile">Chili</option>
                                <option value="China">Chine</option>
                                <option value="Christmas Island">Île Christmas</option>
                                <option value="Cocos (Keeling) Islands">Îles des Cocos (Keeling)</option>
                                <option value="Colombia">Colombie</option>
                                <option value="Comoros">Comores</option>
                                <option value="Congo">Congo</option>
                                <option value="Cook Islands">Îles Cook</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'ivoire">Côte d’Ivoire</option>
                                <option value="Croatia">Croatie</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Chypre</option>
                                <option value="Czech Republic">République tchèque</option>
                                <option value="Denmark">Danemark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominique</option>
                                <option value="Dominican Republic">République dominicaine</option>
                                <option value="Ecuador">Équateur</option>
                                <option value="Egypt">Égypte</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Guinée équatoriale</option>
                                <option value="Eritrea">Érythrée</option>
                                <option value="Estonia">Estonie</option>
                                <option value="Ethiopia">Éthiopie</option>
                                <option value="Falkland Islands (Malvinas)">Îles Malouines (Falkland)</option>
                                <option value="Faroe Islands">Îles Féroé</option>
                                <option value="Fiji">Fidji</option>
                                <option value="Finland">Finlande</option>
                                <option value="French Guiana">Guyane française</option>
                                <option value="French Polynesia">Polynésie française</option>
                                <option value="French Southern Territories">Terres australes françaises</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambie</option>
                                <option value="Georgia">Géorgie</option>
                                <option value="Germany">Allemagne</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Grèce</option>
                                <option value="Greenland">Groenland</option>
                                <option value="Grenada">Grenade</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guinea">Guinée</option>
                                <option value="Guinea-bissau">Guinée-Bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haïti</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hongrie</option>
                                <option value="Iceland">Islande</option>
                                <option value="India">Inde</option>
                                <option value="Indonesia">Indonésie</option>
                                <option value="Iran, Islamic Republic of">Iran, République islamique</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Irlande</option>
                                <option value="Israel">Israël</option>
                                <option value="Italy">Italie</option>
                                <option value="Jamaica">Jamaïque</option>
                                <option value="Japan">Japon</option>
                                <option value="Jordan">Jordanie</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Republic of">Corée, République </option>
                                <option value="Kuwait">Koweït</option>
                                <option value="Kyrgyzstan">République kirghize </option>
                                <option value="Lao People's Democratic Republic">République démocratique populaire du Laos </option>
                                <option value="Latvia">Lettonie</option>
                                <option value="Lebanon">Liban</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Libéria</option>
                                <option value="Libyan Arab Jamahiriya">Jamahiriya arabe libyenne</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lituanie</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaisie</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malte</option>
                                <option value="Marshall Islands">Îles Marshall</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritanie</option>
                                <option value="Mauritius">Maurice</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexique</option>
                                <option value="Micronesia, Federated States of">Micronésie, États fédérés</option>
                                <option value="Moldova, Republic of">Moldavie, République de</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolie</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Maroc</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibie</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Népal</option>
                                <option value="Netherlands">Pays-Bas</option>
                                <option value="Netherlands Antilles">Antilles néerlandaises</option>
                                <option value="New Caledonia">Nouvelle-Calédonie</option>
                                <option value="New Zealand">Nouvelle-Zélande</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigéria</option>
                                <option value="Niue">Nioué</option>
                                <option value="Norfolk Island">Île Norfolk</option>
                                <option value="Northern Mariana Islands">Îles Mariannes du Nord</option>
                                <option value="Norway">Norvège</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">Territoires palestiniens occupés</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papouasie-Nouvelle-Guinée</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Pérou</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Pologne</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Porto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Réunion</option>
                                <option value="Romania">Roumanie</option>
                                <option value="Russian Federation">Fédération de Russie</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">Sainte-Hélène</option>
                                <option value="Saint Kitts and Nevis">Saint-Kitts-et-Nevis</option>
                                <option value="Saint Lucia">Sainte-Lucie</option>
                                <option value="Saint Pierre and Miquelon">Saint-Pierre-et-Miquelon</option>
                                <option value="Saint Vincent and The Grenadines">Saint-Vincent-et-les-Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">Saint-Marin</option>
                                <option value="Sao Tome and Principe">Sao-Tomé-et-Principe</option>
                                <option value="Saudi Arabia">Arabie saoudite</option>
                                <option value="Senegal">Sénégal</option>
                                <option value="Serbia and Montenegro">Serbie et Monténégro </option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapour</option>
                                <option value="Slovakia">Slovaquie</option>
                                <option value="Slovenia">Slovénie</option>
                                <option value="Solomon Islands">Îles Salomon</option>
                                <option value="Somalia">Somalie</option>
                                <option value="South Africa">Afrique du Sud</option>
                                <option value="Spain">Espagne</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Soudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">Svalbard et Jan Mayen</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Suède</option>
                                <option value="Switzerland">Suisse</option>
                                <option value="Syrian Arab Republic">République arabe syrienne</option>
                                <option value="Taiwan, Province of China">Taïwan, Province de Chine</option>
                                <option value="Tajikistan">Tadjikistan</option>
                                <option value="Tanzania, United Republic of">Tanzanie, République-Unie de</option>
                                <option value="Thailand">Thaïlande</option>
                                <option value="Timor-leste">Timor-Leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinité-et-Tobago</option>
                                <option value="Tunisia">Tunisie</option>
                                <option value="Turkey">Turquie</option>
                                <option value="Turkmenistan">Turkménistan</option>
                                <option value="Turks and Caicos Islands">Îles Turques-et-Caïques</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Ouganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">Émirats arabes unis</option>
                                <option value="United Kingdom">Royaume- Uni</option>
                                <option value="United States">États-Unis</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Ouzbékistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">Îles Vierges britanniques</option>
                                <option value="Virgin Islands, U.S.">Îles Vierges américaines</option>
                                <option value="Wallis and Futuna">Wallis-et-Futuna</option>
                                <option value="Western Sahara">Sahara occidental</option>
                                <option value="Yemen">Yémen</option>
                                <option value="Zambia">Zambie</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label" class="right inline">Code postal</label>
                      </div>
                      <div class="small-9 columns">
                        <input type="text" name="zip" id="right-label" placeholder="Zip Code">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <div class="small-3 columns">
                        <label for="right-label" class="right inline">Commentaires *</label>
                      </div>
                      <div class="small-9 columns">
                          <textarea name="comments" class="formComments"></textarea>
                          <small class="error-message error-comments"></small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="small-8">
                    <div class="row">
                      <!--<div class="small-3 columns">
                        <label for="right-label" class="right inline">CAPTCHA</label>
                      </div>
                      <div class="small-9 columns">
                          <img src="http://www.opencaptcha.com/img/<?php echo $img; ?>" alt="responsive-img" />
                          <input name="code" class="captcha" type="text" id="right-label" placeholder="CAPTCHA">
                          <input type="hidden" name="image" value="<?php echo $img; ?>">
                        <small class="error-message error-captcha"></small>
                      </div>-->
                    </div>
                  </div>
                </div>
                <div class="row" id="submission">
                    <button class="button" id="submit-button">Soumettre</button>
                </div>
              </form>
        </div>
        <div class="large-6 medium-12 columns">
                    <div class="panel-header">
                        <h2>Mars Mineral</h2>
                    </div>
                    <div class="panel">
                        <p>
                            Craig Vaughan<br />
                            128 Myoma Road<br />
                            Mars, PA 16046 • Mars, PA • 16046<br />
                            Téléphone: 724-538-3000 • Fax 724-538-5078<br />
                            <a href="mailto:cvaughan@marsmineral.com">cvaughan@marsmineral.com</a>
                        </p>
                    </div>
                <div class="flex-video">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4944221156893!2d-80.031516!3d40.72914499999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883486f556acd295%3A0x5d1fe4a294433ad4!2s128+Myoma+Rd%2C+Mars%2C+PA+16046!5e0!3m2!1sen!2sus!4v1408652997751" frameborder="1" style="border:0"></iframe>
                </div>
        </div>
    </div>
</div>


<div class="red">
        <div class="row large-12 coulmns text-center">
            <p><a class="white clickable" data-section="wrapper" href="#wrapper"><i class="fa fa-chevron-circle-up fa-4x"></i></a></p>
         </div>
</div>

<div class="footer">
    <div class="row">
        <div class="large-12 medium-12 columns">
            <div class="large-4 medium-4 columns text-center">
                <img src="assets/img/logo.png" class="responsive-img" alt="Mars Mineral Pelletizing Limestone Pelletizing" />
                <p>2014 &copy; Copyright Mars Mineral • Noir de carbone</p>
            </div>
            <div class="large-3 medium-3 columns">
                <h6>Sites connexes</h6>
                <p>
                    <a href="http://www.marsmineral.com" target="_blank">Mars Mineral</a><br />
                    <a href="http://www.manureintomoney.com" target="_blank">Le fumier en argent</a><br />
                    <a href="http://www.woodwardinc.com" target="_blank">Woodward Inc.</a><br />
                    <a href="http://www.pelletizedlimestone.com" target="_blank">Pierre à chaux en boulettes</a>
                </p>
            </div>
            <div class="large-3 medium-3 columns">
                <h6>Ressources</h6>
                <p>
                    <a href="assets/pdf/Test-Package-2015.pdf#page=1" target="_blank">Options d'essais (PDF)</a><br />
                    <a href="assets/pdf/Test-Package-2015.pdf#page=2" target="_blank">Conditions générales (PDF)</a>
                </p>
            </div>
            <div class="large-2 medium-2 columns">
                <h6>
                    <i class="fa fa-phone"></i>  Téléphone: <a href="tel:724.537.3000" class="white">724&bull;538&bull;3000</a>
                    <br /><br />
                    <i class="fa fa-fax"></i> Télécopie : 724&bull;538&bull;5078
                </h6>
                <a href="http://www.linkedin.com/company/mars-mineral" target="_blank"><img src="http://marsmineral.com/images/linkedin.png" /></a>
            </div>
    </div>
</div>
</div>
    <script src="assets/js/vendor/jquery.js"></script>
    <script src="//code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    <script src="assets/js/vendor/jquery.ui.totop.js"></script>
    <script src="assets/js/foundation.min.js"></script>
    <script src="assets/js/foundation/foundation.topbar.js"></script>
    <script src="assets/js/main.js"></script>
    <script>
      $(document).foundation({
            reveal : {
              animation_speed: 500
            },
            tooltip : {
              disable_for_touch: true
            },
            topbar : {
              custom_back_text: false,
              is_hover: false,
              mobile_show_parent_link: true
            }
    });

    $(document).ready(function(){
       $(".clickable").click(function(){
        var section = $(this).data('section');

         $('html, body').animate({
                          scrollTop: $("#"+section).offset().top - 178
                      }, 700);
          return false;
      });

      $(".nav-clickable").click(function(){
        var section = $(this).data('section');
        $('html, body').animate({scrollTop: $("#"+section).offset().top - 265}, 700);
        $('.navbar-toggle').click();//click the nav closed
        return false;
      });


      $("#menu-toggle").click(function(){
         $(".navigatory").slideToggle();
         return false;
      });

      $(".collapse-menu").click(function(){
         $(".navigatory").slideToggle();
         return false;
      });

       $("#submit-button").click(function(){
          var name = $(".formName").val();
          var email = $(".formEmail").val();
          var company = $(".formCompany").val();
          var comments = $(".formComments").val();
          var error = 0;
          if(name === "")
          {
              $(".error-name").fadeIn().html("Please enter your name.");

              var error = 1;
              event.preventDefault();
          }
          else
          {
              $(".error-name").fadeOut();
              var error = 0;
          }
          if(email === "")
          {
              $(".error-email").fadeIn().html("Please enter your email address.");
              var error = 1;
              event.preventDefault();
          }
          else {
              if( !isValidEmailAddress( email ) )
              {
                  $(".error-email").fadeIn().html("Please enter a valid email address.");
                var error = 1;
                event.preventDefault();
              }
              else {
                var error = 0;
                $(".error-email").fadeOut();
            }
          }
          if(company === "")
          {
              $(".error-company").fadeIn().html("Please enter your company.");
              var error = 1;
              event.preventDefault();
          }
          else {
              $(".error-company").fadeOut();
              var error = 0;
          }
          if(comments === "")
          {
              $(".error-comments").fadeIn().html("Please enter your inquiry or comments.");
              var error = 1;
              event.preventDefault();
          }
          else {
              $(".error-comments").html("");
              var error = 0;
          }
          if(error === 0)
          {
              $("#submission").html("<img src='assets/img/ajax-loader.gif' />");

            var datastring = $("#contactForm").serialize();
            $.ajax({
                    type: "POST",
                    url: "ajax_services/ajax_services.php",
                    data: datastring,
                    dataType: "html",
                    success: function(data) {
                        $("#contactForm").fadeOut('slow');
                        $("#success").html("<h2>Thank you for your inquiry, we will contact you shortly.");
                    }
                });
           event.preventDefault();
          }
      });
    });
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };
    </script>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-1002053-91', 'auto');
        ga('send', 'pageview');

    </script>
  </body>
</html>
