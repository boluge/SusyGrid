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
&lt;!-- Taille d'une colonne sur smartphone -->
&lt;div class="col-6">...&lt;/div>

&lt;!-- Taille d'une colonne sur phablette -->
&lt;div class="col-xs-6">...&lt;/div>

&lt;!-- Taille d'une colonne sur tablette -->
&lt;div class="grid-sm-6">...&lt;/div>

&lt;!-- Taille d'une colonne sur laptop -->
&lt;div class="grid-md-6">...&lt;/div>

&lt;!-- Taille d'une colonne sur desktop -->
&lt;div class="grid-lg-6">...&lt;/div>

&lt;!-- Clearfix -->
&lt;div class="clearfix">...&lt;/div>
```

**Class Visible**
```html
&lt;!-- Class Visible -->
&lt;div class="visible-xx">...&lt;/div>
&lt;div class="visible-xx-block">...&lt;/div>
&lt;div class="visible-xx-flex">...&lt;/div>
&lt;div class="visible-xx-inherit">...&lt;/div>
&lt;div class="visible-xx-inline">...&lt;/div>
&lt;div class="visible-xx-inline-block">...&lt;/div>
&lt;div class="visible-xx-table">...&lt;/div>
```

**Class Hidden**
```html
&lt;!-- Class Hidden -->
&lt;div class="hidden-xxs">&lt;/div>
&lt;div class="hidden-xs">&lt;/div>
&lt;div class="hidden-sm">&lt;/div>
&lt;div class="hidden-md">&lt;/div>
&lt;div class="hidden-lg">&lt;/div>
```