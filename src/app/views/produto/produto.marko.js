// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode$1.0.0/src/app/views/produto/produto.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Carrinho</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><script src=\"https://kit.fontawesome.com/a076d05399.js\"></script></head> <body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-lg navbar-light\"><a class=\"navbar-brand\" href=\"/\"><img src=\"/caminho/imagens/logi.png\" width=\"120\" height=\"110\" class=\"d-inline-block align-top\" alt=\"\" style=\" margin-top:-43px;\" target=\"_blank\"></a><form action=\"/pesquisaProduto\" method=\"post\" class=\"form-inline col-md-5 nav justify-content-center\"><input id=\"nome\" NAME=\"nome\" class=\"form-control  form-control-lg col-sm-10 mr-sm-2\" type=\"search\" placeholder=\"O que você procura hoje?\" aria-label=\"Search\"><button class=\"btn fas fa-search\" style=\"color:20b2aa; font-size:21px; \" type=\"submit\"></button></form><ul class=\"nav justify-content-end\"><li class=\"nav-item \"><a href=\"/login\" class=\"font-weight-bold\" style=\"color:20b2aa; font-size: 16px;letter-spacing: 0.3px;\">Login</a></li><li class=\"nav-item\"><a href=\"/carrinho\" class=\"font-weight-bold\" style=\"color:20b2aa; font-size: 16px;letter-spacing: 0.3px;\">Carrinho de compras</a></li><li class=\"nav-item dropdown\"><a class=\"font-weight-bold\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color:20b2aa; font-size: 16px;letter-spacing: 0.3px;\">Categoria</a><div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"><a class=\"dropdown-item\" href=\"/flores\" style=\"color:20b2aa; font-weight:bold; letter-spacing: 0.3px;\">Flores</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"/utilitarios\" style=\"color:20b2aa; font-weight:bold; letter-spacing: 0.3px;\">Utilitarios</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"/sementes\" style=\"color:20b2aa; font-weight:bold; letter-spacing: 0.3px;\">Sementes</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"/decoracao\" style=\"color:20b2aa; font-weight:bold; letter-spacing: 0.3px;\">Decoração</a></div></li></ul> </nav><hr style=\"margin-top:-20px; mx-auto\">");

  var $for$0 = 0;

  marko_forEach(data.produtos, function(produto) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=\"container\"><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><h1 class=\"page-header\">" +
      marko_escapeXml(produto.nome) +
      "</h1></div></div><div class=\"row\"><div class=\"col-md-6 col-sm-12\"><div class=\"col-sm-12\"><img" +
      marko_attr("src", "" + produto.foto) +
      " style=\"witdh:50px;height:50rem;\"></div></div><div class=\"col-md-6 col-sm-12\"><div class=\"col-sm-12\"><form class=\"form-horizontal\" action=\"/adicionaItemAoCarrinho\" method=\"post\" name=\"buy\"><div class=\"row\"><div class=\"form-group\"><label class=\"col-sm-3 col-md-3 control-label\" id=\"preco\">Preço:</label><div class=\"col-sm-8 col-md-9\">" +
      marko_escapeXml(produto.preco) +
      ".00 <br></div></div><br><div class=\"form-group\"><label for=\"Quantity\" class=\"col-sm-3 col-md-3 control-label\">Quantidade:</label><div class=\"col-sm-8 col-md-9\"><input type=\"number\" class=\"form-control\" id=\"quantidade\" name=\"qtd\" maxlength=\"5\" value=\"1\"></div></div><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12\"><h1 class=\"page-header\" id=\"cod\">" +
      marko_escapeXml(produto.codProduto) +
      "</h1></div></div><div class=\"form-group product-stock\"><div class=\"col-sm-8 col-sm-offset-3 col-md-9 col-md-offset-3\"><input type=\"submit\" class=\"btn\" style=\"background-color:20b2aa;\" value=\"Adicionar ao carrinho\"><a href=\"/\" class=\"btn btn-link\" style=\"color:20b2aa;\">← Continuar Comprando</a></div></div><div class=\"form-group\"><label class=\"col-sm-3 col-md-3 control-label\">Descrição:</label><div class=\"col-sm-8 col-md-9 description\"><p>" +
      marko_escapeXml(produto.descricao) +
      "</p></div></div></div></form></div></div></div></div>");
  });

  out.w("<footer id=\"footer\"><div class=\"container-fluid text-center\"><div class=\"footer-box-wrap\"><hr style=\"color:66cdaa;\"><div class=\"col-md-3 footer-box four-cell company-details\"><div class=\"icon-top\"><i class=\"fas fa-map-marker-alt\" style=\"color:20b2aa; font-size:30px;\"></i></div><br>R. Jorge de Figueiredo Corrêa, 735 - Taquaral - CEP 13087-261 - Campinas (SP) | <a href=\"https://www.google.com/maps/dir//cotuca/@-22.8685347,-47.0526917,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94c8c8b01e362b09:0xd1c56cd0aa31fb38!2m2!1d-47.0495527!2d-22.8641073\"><b>Mapa</b></a></div></div><div class=\"col-md-3 footer-box four-cell company-details\"><div class=\"icon-top\"> <i class=\"fas fa-phone\" style=\"color:20b2aa; font-size:30px;\"></i></div><br><a href=\"tel:1935219903\">19 1234-5678</a></div> <div class=\"col-md-3 footer-box four-cell company-details\"> <div class=\"icon-top\"> <a target=\"_blank\" href=\"https://twitter.com/\"><i class=\"fab fa-twitter\" style=\"color:20b2aa; font-size:30px;\"></i></a> <div class=\"col-md-4 footer-box four-cell company-details\"> <div class=\"icon-top\"> <a target=\"_blank\" href=\"http://facebook.com\"><i class=\"fab fa-facebook\" style=\"color:20b2aa; font-size:30px;\"></i></a></div></div><div class=\"col-md-3 footer-box four-cell company-details\"> <div class=\"icon-top\"> <a target=\"_blank\" href=\"http://instagram.com\"><i class=\"fab fa-instagram\" style=\"color:20b2aa; font-size:30px;\"></i></a></div></div></div></div></div> <hr><div class=\"footer-copyright text-center text-top\" style=\"height:18px;\">© 2019 Copyright</div></footer><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "90");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnode$1.0.0/src/app/views/produto/produto.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
