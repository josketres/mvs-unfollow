# mvs-unfollow

Aplicación web sencilla para sugerir al usuario una lista de cuentas de twitter a las que hay que dejar de seguir como protesta por el despido de la periodista Carmen Aristegui y varios miembros de su equipo de trabajo.

Como utilizar (desarrollo)
-----
Una vez instalados los prerequisitos, se puede correr la aplicación de la siguiente manera:

    git clone https://github.com/josketres/mvs-unfollow.git
    cd mvs-unfollow/
    npm install
    bower install
    grunt serve

Publicar en GitHub Pages
-----

    grunt build:dist
    grunt buildcontrol:pages

Prerequisitos
-----

* Node.js (http://nodejs.org)
* Yeoman `npm install -g yo`
* Ruby (See https://forwardhq.com/support/installing-ruby-windows for windows install)
* Compass `gem install compass`

Scaffolding (inicializacion)
-----
Para inicializar el proyecto se utilizo yeoman y el generador de angular. 

No es necesario inicializar el proyecto de nuevo.
   
    npm install -g generator-angular
    yo angular

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
