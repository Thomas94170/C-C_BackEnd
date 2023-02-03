# C-C_BackEnd

Module npm à installer

express.js

Express est un cadre d'application Web Node.js minimal et flexible qui fournit un ensemble robuste de fonctionnalités pour les applications Web et mobiles.

cors

package node.js pour fournir un middleware pour le partage de ressources inter-origines

pour configurer cors

    var express = require('express')
    var cors = require('cors')
    var app = express()
    app.use(cors())

nodemon

un utilitaire qui surveillera tout changement dans votre source et redémarrera automatiquement votre serveur. Parfait pour le développement
