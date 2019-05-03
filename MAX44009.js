+(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';

    var Module = scope.Module,
        BoardEvent = scope.BoardEvent,
        proto;

    var MAX44009_MESSAGE = [0x04, 0x42];

    var MAX44009Event = {
        MESSAGE: 'message'
    };

    function MAX44009(board, sda, scl) {
        Module.call(this);
        this.board = board;
        this.init = false;
        this.lux = 0;
        this._sda = sda;
        this._scl = scl;
        this.callback = function() {};
        this.messageHandler = onMessage.bind(this);
        this.board.send([0xf0, 0x04, 0x42, 0x00, this._sda, this._scl,0xf7]);
    }

    function onMessage(event) {
        var msg = event.message;
        if (msg[0] == MAX44009_MESSAGE[0] && msg[1] == MAX44009_MESSAGE[1]) {
            this.emit(MAX44009Event.MESSAGE, msg.slice(2));
        }
    }

    MAX44009.prototype = proto = Object.create(Module.prototype, {
        // constructor: {
        //     value: MAX44009
        // },
        // state: {
        //     get: function() {
        //         return this.state;
        //     },
        //     set: function(val) {
        //         this.state = val;
        //     }
        // }
    });

    proto.on = function(callback) {
        this.board.send([0xf0, 0x04, 0x42, 0x01, 0xf7]);
        if (typeof callback !== 'function') {
            callback = function() {};
        }
        this.callback = function(rawData) {   // rawData為array
            var val = '';
            // console.log(rawData);
            for (var i = 0; i < rawData.length; i++) {
                val += String.fromCharCode(rawData[i]);
            }
            var StrAra = '[' + val + ']';
            var info = eval(StrAra);
            this.lux = info[0];
            callback(this.lux);
        };
        this.state = 'on';
        this.board.on(BoardEvent.SYSEX_MESSAGE, this.messageHandler);
        this.addListener(MAX44009Event.MESSAGE, this.callback);
    };

    proto.off = function() {
        this.state = 'off';
        this.board.send([0xf0, 0x04, 0x42, 0x02, 0xf7]);
        this.board.removeListener(BoardEvent.SYSEX_MESSAGE, this.messageHandler);
        this.removeListener(MAX44009Event.MESSAGE, this.callback);
        this.callback = null;
    };

    scope.module.MAX44009 = MAX44009;
}));