# MuseJS

This is the alpha version of a basic js library for interacting with osc data sent from muse-io.

#Requirements
-MuseIO running on port 3333 sending UDP (muse-io --osc osc.udp://localhost:3333 --dsp) (Instructions here: https://sites.google.com/a/interaxon.ca/muse-developer-site/sdk-setup)<br/>
-osc-web (Instructions here: https://github.com/automata/osc-web)<br/>
-jQuery

#How to use
-On the command line, navigate to the location of MuseIO and run it with "muse-io --osc osc.udp://localhost:3333 --dsp".
-On the command line, navigate to the location of web-osc and run it with "node bridge.js".
-Include jQuery and Muse.js on your web page. This will create a global object called Muse.
-In your javascript, connect to osc-web with "Muse.connect()". This will create a connection to the node server through websockets and begin receiving data.

Current available events:<br/>
-<b>Muse.on.brainwave(band, obj)</b> - runs on any relative_[brainwave] event. First parameter is the band name in lowercase, second parameter is the full object sent by MuseIO. This function is best used when you want to run the same code for each band.<br/>
-<b>Muse.on.alpha(obj)</b><br/>
-<b>Muse.on.beta(obj)</b><br/>
-<b>Muse.on.delta(obj)</b><br/>
-<b>Muse.on.gamma(obj)</b><br/>
-<b>Muse.on.theta(obj)</b> - the above 5 run on the specific brainwave band noted. When not defined, they will default to Muse.on.brainwave.<br/>
-<b>Muse.on.blink(obj)</b> - blink event<br/>

#Example

The example provided shows a real-time line graph of all 5 brainwaves as well as a blink event. Videos below show similar examples, but not the exact one in this repo.

https://www.youtube.com/watch?v=cYULvalaUdI<br/>
https://www.youtube.com/watch?v=EK4kR-YLFgk
