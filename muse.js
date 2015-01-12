$(function(window, $, undefined){

	

	window.Muse = window.Muse || {
			on : {
				alpha: function(obj) {
					Muse.on.brainwave('alpha', obj)
				},
				beta: function(obj) {
					Muse.on.brainwave('beta', obj)
				},
				delta: function(obj) {
					Muse.on.brainwave('delta', obj)
				},
				gamma: function(obj) {
					Muse.on.brainwave('gamma', obj)
				},
				theta: function(obj) {
					Muse.on.brainwave('theta', obj)
				},
                'brainwave' : function( band, obj) {
                },
                'blink' : function( obj ){
                }

			},
			connect: function(){

			   var socket = io.connect('http://127.0.0.1', { port: 8081, rememberTransport: false, reconnect: true});

			   socket.on('connect', function() {
			        // sends to socket.io server the host/port of oscServer
			        // and oscClient
			        socket.emit('config',
			            {
			                server: {
			                    port: 3333,
			                    host: '127.0.0.1'
			                },
			                client: {
			                    port: 3334,
			                    host: '127.0.0.1'
			                }
			            }
			        );
			    });

			    socket.on('message', function(obj) {
			        if (Muse._handle[obj[0]]) { Muse._handle[obj[0]](obj) ; }
			        //console.log(obj);
			    });

			},
            _handle: {
                '/muse/elements/alpha_relative' : function(obj){
                    Muse.on.alpha(obj);
                },
                '/muse/elements/beta_relative' : function(obj){
                    Muse.on.beta(obj);
                },
                '/muse/elements/delta_relative' : function(obj){
                    Muse.on.delta(obj);
                },
                '/muse/elements/gamma_relative' : function(obj){
                    Muse.on.gamma(obj);
                },
                '/muse/elements/theta_relative' : function(obj){
                    Muse.on.theta(obj);
                },
                '/muse/elements/blink' : function(obj){
                	Muse.on.blink(obj);
                }
            }

	}

}(window, jQuery))