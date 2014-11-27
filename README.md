SusyGrid
========

***SusyGrid*** est un grille RWD en ***sass***. Cette grille est mobile first. Elle est par defaut découpé en 12 colonnes, il est possible de choisir sa largeur, le nombre de colonnes, mais aussi la largeur des goutières. 


##Media Query
``` sass
@media screen and (max-width: $screen-xs-min)
@media screen and (min-width: $screen-sm-min) and (max-width: $screen-sm-max)
@media screen and (min-width: $screen-md-min) and (max-width: $screen-md-max)
@media screen and (min-width: $screen-lg-min)
```

##Diferent size screen

``` html
<!-- .container & .container-fluid -->
<div class="container">...</div>
<div class="container-fluid">...</div>

<!-- Taille d'une colonne sur smartphone -->
<div class="col-6">...</div>

<!-- Taille d'une colonne sur phablette -->
<div class="col-xs-6">...</div>

<!-- Taille d'une colonne sur tablette -->
<div class="grid-sm-6">...</div>

<!-- Taille d'une colonne sur laptop -->
<div class="grid-md-6">...</div>

<!-- Taille d'une colonne sur desktop -->
<div class="grid-lg-6">...</div>

<!-- Clearfix -->
<div class="clearfix">...</div>
```

##Class Visible
Il existe plusieurs class ***visible*** en fonction de la valeur de la propriété ***display*** souhaité.
Vous trouverez toutes les information sur le site [w3schools.com](http://www.w3schools.com).
``` html
<!-- Class Visible -->
<div class="visible-xx">...</div>
<div class="visible-xx-block">...</div>
<div class="visible-xx-flex">...</div>
<div class="visible-xx-inherit">...</div>
<div class="visible-xx-inline">...</div>
<div class="visible-xx-inline-block">...</div>
<div class="visible-xx-table">...</div>
```

##Class Hidden
Ces class permettent de masquer des élément en fonction de la taille de l'écran.
Cette class est cumulable, un élément peut être masquer sur plusieur tailles d'écran.
``` html
<!-- Class Hidden -->
<div class="hidden-xxs"></div>
<div class="hidden-xs"></div>
<div class="hidden-sm"></div>
<div class="hidden-md"></div>
<div class="hidden-lg"></div>
```
##Configuration SusyGrid
Vous pouvez personnaliser la grille en définissant les valeurs que vous souhaitez auxles variables ci contre, avant d'importer ***_susy.sass***.
``` sass
$screen-xs: 480px
$screen-sm: 768px
$screen-md: 992px
$screen-lg: 1200px
		
$columns:  12

$susy: (
  columns: 12,
  gutters: 1/4,
  math: fluid,
  output: float,
  gutter-position: inside,
  global-box-sizing: border-box,
  use-custom: (rem: true)
)
```