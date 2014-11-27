SusyGrid
========

just a good ***responsive Grid*** create with Susy 2

**Media Query**
```sass
@media screen and (max-width: $screen-xs-min)
@media screen and (min-width: $screen-sm-min) and (max-width: $screen-sm-max)
@media screen and (min-width: $screen-md-min) and (max-width: $screen-md-max)
@media screen and (min-width: $screen-lg-min)
```

**Diferent size screen**
```html
<!-- .container & .container-fluid -->
<div class="container"></div>
<div class="container-fluid"></div>

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

**Class Visible**
```html
<!-- Class Visible -->
<div class="visible-xx">...</div>
<div class="visible-xx-block">...</div>
<div class="visible-xx-flex">...</div>
<div class="visible-xx-inherit">...</div>
<div class="visible-xx-inline">...</div>
<div class="visible-xx-inline-block">...</div>
<div class="visible-xx-table">...</div>
```

**Class Hidden**
```html
<!-- Class Hidden -->
<div class="hidden-xxs"></div>
<div class="hidden-xs"></div>
<div class="hidden-sm"></div>
<div class="hidden-md"></div>
<div class="hidden-lg"></div>
```