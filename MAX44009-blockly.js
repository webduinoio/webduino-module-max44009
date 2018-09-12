+(function (window, webduino) {

  'use strict';

  window.getMAX44009 = function (board, sda, scl) {
    return new webduino.module.MAX44009(board, sda, scl);
  };

}(window, window.webduino));
